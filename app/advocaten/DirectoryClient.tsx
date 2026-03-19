'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';
import { extractCity, cleanWebsite, shortDomain, parseFields, getInitials, getAvatarStyle } from '@/lib/utils';

const supabase = createClient(
    'https://wxdwpnuxxcpsfgjfmxax.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4ZHdwbnV4eGNwc2ZnamZteGF4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MTY3NTUwNywiZXhwIjoyMDg3MjUxNTA3fQ.CumPpLi_-YGK6CzOXMELc6bA9LlG0flKHh_wLrdnHJw'
);

const TOP_FIELDS = [
    'Familierecht', 'Strafrecht', 'Arbeidsrecht', 'Ondernemingsrecht',
    'Huurrecht', 'Bestuursrecht', 'Vastgoed', 'Erfrecht',
    'Intellectueel eigendom', 'Immigratierecht',
];

type Lawyer = {
    id: string; slug: string; name: string; bezoekadres: string | null;
    rechtsgebieden: string | null; telefoon: string | null;
    email: string | null; website: string | null;
    arrondissement: string | null; profile_url: string | null;
    foto_url: string | null;
    _city?: string; _fields?: string[]; _website?: string | null;
    _validPhoto?: boolean;
};

// Filter out junk scraped images — only show real portrait photos
function isValidPhotoUrl(url: string | null): boolean {
    if (!url) return false;
    const lower = url.toLowerCase();
    // Reject data URIs, SVGs, GIFs, tiny tracking pixels
    if (lower.startsWith('data:')) return false;
    if (lower.includes('.svg')) return false;
    if (lower.includes('.gif')) return false;
    // Reject common junk patterns
    const junkPatterns = [
        'cookie', 'loading', 'logo', 'embleem', 'icon', 'favicon',
        'footer', 'slider', 'banner', 'shutterstock', 'stock',
        'placeholder', 'default', 'voetbal', 'nullijn', 'template',
        'toast-published', 'scale_crop/42', '/0/0/1/', 'cookies.png',
    ];
    if (junkPatterns.some(p => lower.includes(p))) return false;
    // Must be https (not http)
    if (!lower.startsWith('https://')) return false;
    // Must have image extension or known image CDN
    const imagePatterns = ['.jpg', '.jpeg', '.png', '.webp', 'wixstatic.com/media', 'squarespace-cdn.com', 'googleusercontent.com', 'framerusercontent.com', 'editmysite.com', 'usercontent.one'];
    if (!imagePatterns.some(p => lower.includes(p))) return false;
    return true;
}

export default function DirectoryClient() {
    const [allLawyers, setAllLawyers] = useState<Lawyer[]>([]);
    const [filtered, setFiltered] = useState<Lawyer[]>([]);
    const [searchText, setSearchText] = useState('');
    const [activeField, setActiveField] = useState('');
    const [activeCity, setActiveCity] = useState('');

    const [topCities, setTopCities] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const PER_PAGE = 24;

    useEffect(() => {
        async function fetchAll() {
            setLoading(true);
            let all: Lawyer[] = [], from = 0;
            while (true) {
                const { data, error } = await supabase
                    .from('advocaten')
                    .select('id,slug,name,bezoekadres,rechtsgebieden,telefoon,email,website,arrondissement,profile_url,foto_url')
                    .range(from, from + 999);
                if (error || !data || data.length === 0) break;
                all = [...all, ...data];
                if (data.length < 1000) break;
                from += 1000;
            }
            const enriched = all.map(l => ({
                ...l,
                _city: extractCity(l.bezoekadres),
                _fields: parseFields(l.rechtsgebieden),
                _website: cleanWebsite(l.website),
                _validPhoto: isValidPhotoUrl(l.foto_url),
            }));
            setAllLawyers(enriched);
            // Compute top cities by frequency
            const cityCounts: Record<string, number> = {};
            enriched.forEach(l => { if (l._city) cityCounts[l._city] = (cityCounts[l._city] || 0) + 1; });
            const sorted = Object.entries(cityCounts).sort((a, b) => b[1] - a[1]).slice(0, 12).map(([c]) => c);
            setTopCities(sorted);
            setLoading(false);
        }
        fetchAll();
    }, []);

    useEffect(() => {
        let res = allLawyers;
        if (searchText.trim()) {
            const q = searchText.toLowerCase();
            res = res.filter(l =>
                (l.name || '').toLowerCase().includes(q) ||
                (l._city || '').toLowerCase().includes(q) ||
                (l.arrondissement || '').toLowerCase().includes(q)
            );
        }
        if (activeField) {
            res = res.filter(l => (l.rechtsgebieden || '').toLowerCase().includes(activeField.toLowerCase()));
        }
        if (activeCity) {
            res = res.filter(l => (l._city || '').toLowerCase() === activeCity.toLowerCase());
        }

        setFiltered(res);
        setPage(1);
    }, [searchText, activeField, activeCity, allLawyers]);

    const toggleField = useCallback((f: string) => { setActiveField(p => p === f ? '' : f); }, []);
    const toggleCity = useCallback((c: string) => { setActiveCity(p => p === c ? '' : c); }, []);
    const visible = filtered.slice(0, page * PER_PAGE);
    const hasMore = visible.length < filtered.length;

    return (
        <div style={{ minHeight: '100vh', background: '#F5F3EE', fontFamily: "var(--font-space-grotesk)" }}>
            {/* ── Top Bar ── */}
            <header style={{ background: '#111111', position: 'sticky', top: 0, zIndex: 40 }}>
                <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 20px', height: 56, display: 'flex', alignItems: 'center', gap: 16 }}>
                    <Link href="/" style={{ color: 'rgba(232,228,221,0.5)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontFamily: "var(--font-space-mono)" }}>
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" /></svg>
                        Home
                    </Link>
                    <div style={{ flex: 1, maxWidth: 520, position: 'relative' }}>
                        <svg style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'rgba(232,228,221,0.3)', pointerEvents: 'none' }} width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                        </svg>
                        <input
                            value={searchText}
                            onChange={e => setSearchText(e.target.value)}
                            placeholder="Naam of stad zoeken..."
                            style={{ width: '100%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '8px 14px 8px 38px', color: '#E8E4DD', fontSize: 14, fontFamily: "var(--font-space-grotesk)", outline: 'none' }}
                        />
                    </div>
                    <span style={{ color: 'rgba(232,228,221,0.4)', fontFamily: "var(--font-space-mono)", fontSize: 12, whiteSpace: 'nowrap' }}>
                        {loading ? '…' : `${filtered.length.toLocaleString('nl')} advocaten`}
                    </span>

                </div>

                {/* Filter chips */}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '8px 20px', display: 'flex', gap: 6, overflowX: 'auto' }}>
                    <span style={{ color: 'rgba(232,228,221,0.3)', fontFamily: "var(--font-space-mono)", fontSize: 11, whiteSpace: 'nowrap', lineHeight: '28px' }}>GEBIED:</span>
                    {['', ...TOP_FIELDS].map(f => (
                        <button key={f || 'alle'} onClick={() => toggleField(f)}
                            style={{
                                padding: '5px 12px', borderRadius: 100, fontSize: 11,
                                fontFamily: "var(--font-space-mono)", whiteSpace: 'nowrap', cursor: 'pointer',
                                background: activeField === f ? '#E8E4DD' : 'rgba(255,255,255,0.07)',
                                color: activeField === f ? '#111111' : 'rgba(232,228,221,0.6)',
                                border: 'none', transition: 'all 0.15s',
                            }}>
                            {f || 'Alle'}
                        </button>
                    ))}
                </div>

                {/* City filter chips */}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '8px 20px', display: 'flex', gap: 6, overflowX: 'auto' }}>
                    <span style={{ color: 'rgba(232,228,221,0.3)', fontFamily: "var(--font-space-mono)", fontSize: 11, whiteSpace: 'nowrap', lineHeight: '28px' }}>STAD:</span>
                    {['', ...topCities].map(c => (
                        <button key={c || 'alle-steden'} onClick={() => toggleCity(c)}
                            style={{
                                padding: '5px 12px', borderRadius: 100, fontSize: 11,
                                fontFamily: "var(--font-space-mono)", whiteSpace: 'nowrap', cursor: 'pointer',
                                background: activeCity === c ? '#E63B2E' : 'rgba(255,255,255,0.07)',
                                color: activeCity === c ? 'white' : 'rgba(232,228,221,0.6)',
                                border: 'none', transition: 'all 0.15s',
                            }}>
                            {c || 'Alle'}
                        </button>
                    ))}
                </div>
            </header>

            <main style={{ maxWidth: 1280, margin: '0 auto', padding: '24px 20px 80px' }}>
                {loading ? (
                    <div style={{ textAlign: 'center', padding: '80px 0', color: 'rgba(17,17,17,0.3)', fontFamily: "var(--font-space-mono)", fontSize: 13 }}>
                        Advocaten laden…
                    </div>
                ) : (
                    <>
                        <p style={{ margin: '0 0 16px', fontFamily: "var(--font-space-mono)", fontSize: 11, color: 'rgba(17,17,17,0.4)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                            {filtered.length.toLocaleString('nl')} gevonden — {visible.length} getoond
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 16 }}>
                            {visible.map(l => <LawyerCard key={l.id} lawyer={l} />)}
                        </div>
                        {hasMore && (
                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
                                <button onClick={() => setPage(p => p + 1)}
                                    style={{ background: '#111111', color: '#E8E4DD', border: 'none', borderRadius: 100, padding: '12px 32px', fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>
                                    Laad meer ({(filtered.length - visible.length).toLocaleString('nl')} resterend)
                                </button>
                            </div>
                        )}
                    </>
                )}
            </main>
        </div>
    );
}

function LawyerCard({ lawyer }: { lawyer: Lawyer }) {
    const city = lawyer._city || lawyer.arrondissement || '';
    const slug = lawyer.slug;
    const fields = lawyer._fields || [];
    const field1 = fields[0] || null;
    const field1Label = field1 && field1.length > 28 ? field1.slice(0, 26) + '…' : field1;
    const moreN = fields.length - 1;
    const website = lawyer._website;
    const { bg: avatarBg, text: avatarText } = getAvatarStyle(lawyer.name || '');
    const initials = getInitials(lawyer.name || '');

    return (
        <article style={{ background: 'white', borderRadius: 20, border: '1px solid rgba(17,17,17,0.07)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, padding: '20px 20px 0' }}>
                {website ? (
                    <div style={{ width: 64, height: 64, borderRadius: 16, flexShrink: 0, background: '#fff', border: '1px solid rgba(17,17,17,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                        <img
                            src={`https://www.google.com/s2/favicons?domain=${shortDomain(website)}&sz=128`}
                            alt=""
                            style={{ width: 36, height: 36, objectFit: 'contain' }}
                            onError={(e) => { const img = e.target as HTMLImageElement; img.style.display = 'none'; const p = img.parentElement as HTMLElement; p.style.background = avatarBg; p.style.fontSize = '22px'; p.style.fontWeight = '700'; p.style.color = avatarText; p.textContent = initials; }}
                        />
                    </div>
                ) : (
                    <div style={{ width: 64, height: 64, borderRadius: 16, flexShrink: 0, background: avatarBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, fontWeight: 700, color: avatarText, boxShadow: `0 4px 12px ${avatarBg}55` }}>
                        {initials}
                    </div>
                )}
                <div style={{ flex: 1, minWidth: 0 }}>
                    <Link href={`/advocaat/${slug}`} style={{ textDecoration: 'none' }}>
                        <h3 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: '#111111', lineHeight: 1.25, letterSpacing: '-0.01em' }}>
                            {lawyer.name}
                        </h3>
                    </Link>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4, flexWrap: 'wrap' }}>
                        {city && (
                            <span style={{ fontFamily: "var(--font-space-mono)", fontSize: 11, color: 'rgba(17,17,17,0.45)', display: 'flex', alignItems: 'center', gap: 3 }}>
                                <svg width="10" height="10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                                {city}
                            </span>
                        )}
                        <span style={{ fontSize: 10, fontFamily: "var(--font-space-mono)", background: 'rgba(22,163,74,0.08)', color: '#16a34a', padding: '2px 7px', borderRadius: 100, border: '1px solid rgba(22,163,74,0.2)', fontWeight: 700 }}>
                            ✓ NOvA
                        </span>
                    </div>
                    {field1 && (
                        <div style={{ marginTop: 10, display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                            <span style={{ fontSize: 11, fontFamily: "var(--font-space-mono)", background: '#F0EEE9', color: 'rgba(17,17,17,0.7)', padding: '3px 10px', borderRadius: 100 }}>{field1Label}</span>
                            {moreN > 0 && <span style={{ fontSize: 11, fontFamily: "var(--font-space-mono)", color: 'rgba(17,17,17,0.35)', padding: '3px 6px', borderRadius: 100, border: '1px solid rgba(17,17,17,0.1)' }}>+{moreN}</span>}
                        </div>
                    )}
                </div>
            </div>
            <div style={{ height: 1, background: 'rgba(17,17,17,0.06)', margin: '16px 20px 0' }} />
            <div style={{ padding: '12px 20px 0', display: 'flex', flexDirection: 'column', gap: 6 }}>
                {lawyer.telefoon && <ContactRow href={`tel:${lawyer.telefoon}`} icon="phone" label={lawyer.telefoon} />}
                {lawyer.email && <ContactRow href={`mailto:${lawyer.email}`} icon="mail" label={lawyer.email} />}
            </div>
            <div style={{ padding: '12px 16px 16px', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <Link href={`/advocaat/${slug}`} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, background: '#F5F3EE', color: '#111111', borderRadius: 12, padding: '9px 14px', textDecoration: 'none', fontFamily: "var(--font-space-mono)", fontSize: 11, fontWeight: 700, border: '1px solid rgba(17,17,17,0.1)' }}>
                    Bekijk profiel →
                </Link>
                {website && (
                    <a href={website} target="_blank" rel="noopener noreferrer"
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, background: '#111111', color: '#E8E4DD', borderRadius: 12, padding: '9px 14px', textDecoration: 'none', fontFamily: "var(--font-space-mono)", fontSize: 11 }}>
                        <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                        {shortDomain(website)}
                    </a>
                )}
            </div>
        </article>
    );
}

function ContactRow({ href, icon, label }: { href: string; icon: string; label: string }) {
    const icons: Record<string, React.ReactNode> = {
        phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 5.61 5.61l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />,
        mail: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,12 2,6" /></>,
    };
    return (
        <a href={href} style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: 'rgba(17,17,17,0.5)', fontFamily: "var(--font-space-mono)", fontSize: 11, overflow: 'hidden' }}>
            <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>{icons[icon]}</svg>
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{label}</span>
        </a>
    );
}
