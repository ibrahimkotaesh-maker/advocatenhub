import { supabase, type Lawyer } from '@/lib/supabase';
import { slugify, extractCity, parseFields, getInitials, getAvatarStyle } from '@/lib/utils';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// ─── City config ─────────────────────────────────────────────────────────────
// Slug → display name map for major Dutch cities (SEO targets)
const CITIES: Record<string, { name: string; province: string }> = {
    'amsterdam': { name: 'Amsterdam', province: 'Noord-Holland' },
    'rotterdam': { name: 'Rotterdam', province: 'Zuid-Holland' },
    'den-haag': { name: "DEN HAAG", province: 'Zuid-Holland' },
    'utrecht': { name: 'Utrecht', province: 'Utrecht' },
    'eindhoven': { name: 'Eindhoven', province: 'Noord-Brabant' },
    'groningen': { name: 'Groningen', province: 'Groningen' },
    'tilburg': { name: 'Tilburg', province: 'Noord-Brabant' },
    'almere': { name: 'Almere', province: 'Flevoland' },
    'breda': { name: 'Breda', province: 'Noord-Brabant' },
    'nijmegen': { name: 'Nijmegen', province: 'Gelderland' },
    'arnhem': { name: 'Arnhem', province: 'Gelderland' },
    'haarlem': { name: 'Haarlem', province: 'Noord-Holland' },
    'enschede': { name: 'Enschede', province: 'Overijssel' },
    'den-bosch': { name: "'S-HERTOGENBOSCH", province: 'Noord-Brabant' },
    'amersfoort': { name: 'Amersfoort', province: 'Utrecht' },
    'zaanstad': { name: 'Zaanstad', province: 'Noord-Holland' },
    'zwolle': { name: 'Zwolle', province: 'Overijssel' },
    'leiden': { name: 'Leiden', province: 'Zuid-Holland' },
    'maastricht': { name: 'Maastricht', province: 'Limburg' },
    'dordrecht': { name: 'Dordrecht', province: 'Zuid-Holland' },
    'leeuwarden': { name: 'Leeuwarden', province: 'Friesland' },
    'apeldoorn': { name: 'Apeldoorn', province: 'Gelderland' },
    'alkmaar': { name: 'Alkmaar', province: 'Noord-Holland' },
    'roermond': { name: 'Roermond', province: 'Limburg' },
    'hilversum': { name: 'Hilversum', province: 'Noord-Holland' },
    'delft': { name: 'Delft', province: 'Zuid-Holland' },
    'deventer': { name: 'Deventer', province: 'Overijssel' },
    'middelburg': { name: 'Middelburg', province: 'Zeeland' },
    'assen': { name: 'Assen', province: 'Drenthe' },
    'lelystad': { name: 'Lelystad', province: 'Flevoland' },
};

// Display-friendly name for a city (title-cased)
function displayName(slug: string): string {
    const cfg = CITIES[slug];
    if (!cfg) return slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    // Handle special uppercase city names
    if (cfg.name === cfg.name.toUpperCase()) {
        return cfg.name.split(/[\s-]+/).map(w => w.charAt(0) + w.slice(1).toLowerCase()).join(' ');
    }
    return cfg.name;
}

// ─── Fetch lawyers by city ───────────────────────────────────────────────────
async function getLawyersByCity(citySlug: string): Promise<{ lawyers: Lawyer[]; total: number; matchCity: string }> {
    const cfg = CITIES[citySlug];
    // The city name in bezoekadres is stored as uppercase (e.g. "AMSTERDAM", "DEN HAAG")
    const searchTerm = cfg ? cfg.name.toUpperCase() : citySlug.replace(/-/g, ' ').toUpperCase();

    // Get total count first
    const { count } = await supabase
        .from('advocaten')
        .select('id', { count: 'exact', head: true })
        .ilike('bezoekadres', `%${searchTerm}%`);

    // Fetch a page of lawyers for display
    const { data, error } = await supabase
        .from('advocaten')
        .select('id,name,bezoekadres,rechtsgebieden,telefoon,email,website,arrondissement,profile_url,foto_url,bio_text,extra_specializations,lawyer_type')
        .ilike('bezoekadres', `%${searchTerm}%`)
        .order('name', { ascending: true })
        .limit(48);

    if (error || !data) return { lawyers: [], total: 0, matchCity: searchTerm };
    return { lawyers: data as Lawyer[], total: count || data.length, matchCity: searchTerm };
}

// ─── Get top specialties for a city ──────────────────────────────────────────
function getTopSpecialties(lawyers: Lawyer[]): { field: string; count: number }[] {
    const freq = new Map<string, number>();
    for (const l of lawyers) {
        const fields = parseFields(l.rechtsgebieden);
        for (const f of fields) {
            freq.set(f, (freq.get(f) || 0) + 1);
        }
    }
    return [...freq.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, 8)
        .map(([field, count]) => ({ field, count }));
}

// ─── Dynamic Metadata ────────────────────────────────────────────────────────
export async function generateMetadata({
    params,
}: {
    params: Promise<{ city: string }>;
}): Promise<Metadata> {
    const { city } = await params;
    const name = displayName(city);
    const { total } = await getLawyersByCity(city);

    if (total === 0) return { title: `Advocaat ${name} — Niet gevonden` };

    return {
        title: `Advocaat ${name} — ${total}+ Advocaten in ${name}`,
        description: `Vind een advocaat in ${name}. Doorzoek ${total}+ NOvA-geregistreerde advocaten in ${name}. Filter op rechtsgebied, bekijk contactgegevens en specialisaties. AdvocaatVinder — de grootste gids.`,
        openGraph: {
            title: `Advocaat ${name} — ${total}+ NOvA-advocaten`,
            description: `Zoek advocaten in ${name}. ${total}+ advocaten met contactgegevens, specialisaties en meer.`,
        },
        alternates: {
            canonical: `https://www.advocaatvinder.nl/advocaten/${city}`,
        },
    };
}

// ─── Static generation for top cities ────────────────────────────────────────
export function generateStaticParams() {
    return Object.keys(CITIES).map(city => ({ city }));
}

// Allow on-demand rendering of unknown cities too
export const dynamicParams = true;

// ─── Page Component ──────────────────────────────────────────────────────────
export default async function CityPage({
    params,
}: {
    params: Promise<{ city: string }>;
}) {
    const { city } = await params;
    const name = displayName(city);
    const cfg = CITIES[city];
    const { lawyers, total } = await getLawyersByCity(city);

    if (total === 0) notFound();

    const topSpecialties = getTopSpecialties(lawyers);
    const otherCities = Object.entries(CITIES)
        .filter(([slug]) => slug !== city)
        .slice(0, 12);

    // ── JSON-LD ──────────────────────────────────────────────────────────────
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.advocaatvinder.nl' },
            { '@type': 'ListItem', position: 2, name: 'Advocaten', item: 'https://www.advocaatvinder.nl/advocaten' },
            { '@type': 'ListItem', position: 3, name: `Advocaten ${name}`, item: `https://www.advocaatvinder.nl/advocaten/${city}` },
        ],
    };

    const localBusinessJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: `Advocaten in ${name}`,
        description: `Overzicht van ${total}+ NOvA-geregistreerde advocaten in ${name}${cfg ? `, ${cfg.province}` : ''}.`,
        numberOfItems: total,
        itemListElement: lawyers.slice(0, 10).map((l, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: {
                '@type': 'LegalService',
                name: l.name,
                url: `https://www.advocaatvinder.nl/advocaat/${slugify(l.name || 'advocaat', extractCity(l.bezoekadres))}`,
                address: {
                    '@type': 'PostalAddress',
                    addressLocality: name,
                    addressCountry: 'NL',
                },
            },
        })),
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />

            <div style={{ minHeight: '100vh', background: '#F5F3EE', fontFamily: "var(--font-space-grotesk)" }}>
                {/* ── Top Bar ── */}
                <header style={{ background: '#111111', position: 'sticky', top: 0, zIndex: 40, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 20px', height: 56, display: 'flex', alignItems: 'center', gap: 16 }}>
                        <Link href="/advocaten" style={{ color: 'rgba(232,228,221,0.5)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontFamily: "var(--font-space-mono)" }}>
                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" /></svg>
                            Alle advocaten
                        </Link>
                        <Link href="/" style={{ marginLeft: 'auto', color: '#E8E4DD', textDecoration: 'none', fontWeight: 700, fontSize: 15, fontFamily: "var(--font-space-grotesk)" }}>
                            AdvocaatVinder
                        </Link>
                    </div>
                </header>

                {/* ── City Hero ── */}
                <section style={{
                    background: '#111111', padding: '48px 20px 56px', textAlign: 'center',
                    borderBottom: '3px solid #E63B2E',
                }}>
                    <p style={{
                        margin: '0 0 12px', fontFamily: "var(--font-space-mono)", fontSize: 11,
                        color: 'rgba(232,228,221,0.35)', letterSpacing: '0.12em', textTransform: 'uppercase',
                    }}>
                        {cfg?.province || 'Nederland'} · {total.toLocaleString('nl')} advocaten
                    </p>
                    <h1 style={{
                        margin: '0 0 8px', fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800,
                        color: '#E8E4DD', lineHeight: 1.1, letterSpacing: '-0.03em',
                    }}>
                        Advocaat <span style={{ color: '#E63B2E', fontFamily: "var(--font-dm-serif)", fontStyle: 'italic', fontWeight: 400 }}>{name}</span>
                    </h1>
                    <p style={{
                        margin: '0 auto', maxWidth: 520, fontSize: 15, color: 'rgba(232,228,221,0.5)', lineHeight: 1.6,
                    }}>
                        Vind de juiste advocaat in {name}. {total.toLocaleString('nl')} NOvA-geregistreerde advocaten.
                    </p>
                    <div style={{ marginTop: 28, display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
                        <Link href={`/advocaten?stad=${encodeURIComponent(name)}`} style={{
                            display: 'inline-flex', alignItems: 'center', gap: 8,
                            background: '#E63B2E', color: 'white', borderRadius: 100,
                            padding: '12px 28px', textDecoration: 'none', fontSize: 14, fontWeight: 700,
                        }}>
                            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
                            Zoek in {name}
                        </Link>
                    </div>
                </section>

                <main style={{ maxWidth: 1280, margin: '0 auto', padding: '32px 20px 80px' }}>

                    {/* ── Top Specialties ── */}
                    {topSpecialties.length > 0 && (
                        <section style={{ marginBottom: 40 }}>
                            <h2 style={{ margin: '0 0 16px', fontSize: 18, fontWeight: 700, letterSpacing: '-0.02em', color: '#111111' }}>
                                Rechtsgebieden in {name}
                            </h2>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                {topSpecialties.map(({ field, count }) => (
                                    <span key={field} style={{
                                        background: 'white', border: '1px solid rgba(17,17,17,0.1)',
                                        borderRadius: 100, padding: '8px 16px', fontSize: 13,
                                        fontFamily: "var(--font-space-mono)", color: 'rgba(17,17,17,0.7)',
                                        display: 'flex', alignItems: 'center', gap: 8,
                                    }}>
                                        {field}
                                        <span style={{ fontSize: 11, color: 'rgba(17,17,17,0.35)', fontWeight: 700 }}>{count}</span>
                                    </span>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* ── Lawyer Grid ── */}
                    <h2 style={{ margin: '0 0 16px', fontSize: 18, fontWeight: 700, letterSpacing: '-0.02em', color: '#111111' }}>
                        Advocaten in {name}
                    </h2>
                    <p style={{ margin: '0 0 16px', fontFamily: "var(--font-space-mono)", fontSize: 11, color: 'rgba(17,17,17,0.4)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                        {total.toLocaleString('nl')} advocaten — top {Math.min(lawyers.length, 48)} getoond
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 16 }}>
                        {lawyers.map(l => {
                            const lawyerCity = extractCity(l.bezoekadres) || l.arrondissement || '';
                            const slug = slugify(l.name || 'advocaat', lawyerCity);
                            const fields = parseFields(l.rechtsgebieden);
                            const { bg: avatarBg, text: avatarText } = getAvatarStyle(l.name || '');
                            const initials = getInitials(l.name || '');

                            return (
                                <article key={l.id} style={{
                                    background: 'white', borderRadius: 20, border: '1px solid rgba(17,17,17,0.07)',
                                    overflow: 'hidden', display: 'flex', flexDirection: 'column',
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, padding: '20px 20px 0' }}>
                                        {l.foto_url ? (
                                            <div style={{
                                                width: 56, height: 56, borderRadius: 14, flexShrink: 0,
                                                overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
                                            }}>
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img src={l.foto_url} alt={l.name || 'Advocaat'}
                                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            </div>
                                        ) : (
                                            <div style={{
                                                width: 56, height: 56, borderRadius: 14, flexShrink: 0,
                                                background: avatarBg, display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                fontSize: 18, fontWeight: 700, color: avatarText,
                                                boxShadow: `0 4px 12px ${avatarBg}55`,
                                            }}>
                                                {initials}
                                            </div>
                                        )}
                                        <div style={{ flex: 1, minWidth: 0 }}>
                                            <Link href={`/advocaat/${slug}`} style={{ textDecoration: 'none' }}>
                                                <h3 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: '#111111', lineHeight: 1.25, letterSpacing: '-0.01em' }}>
                                                    {l.name}
                                                </h3>
                                            </Link>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4, flexWrap: 'wrap' }}>
                                                {lawyerCity && (
                                                    <span style={{ fontFamily: "var(--font-space-mono)", fontSize: 11, color: 'rgba(17,17,17,0.45)', display: 'flex', alignItems: 'center', gap: 3 }}>
                                                        <svg width="10" height="10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                                                        {lawyerCity}
                                                    </span>
                                                )}
                                                <span style={{ fontSize: 10, fontFamily: "var(--font-space-mono)", background: 'rgba(22,163,74,0.08)', color: '#16a34a', padding: '2px 7px', borderRadius: 100, border: '1px solid rgba(22,163,74,0.2)', fontWeight: 700 }}>
                                                    ✓ NOvA
                                                </span>
                                            </div>
                                            {fields.length > 0 && (
                                                <div style={{ marginTop: 10, display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                                                    <span style={{ fontSize: 11, fontFamily: "var(--font-space-mono)", background: '#F0EEE9', color: 'rgba(17,17,17,0.7)', padding: '3px 10px', borderRadius: 100 }}>
                                                        {fields[0].length > 28 ? fields[0].slice(0, 26) + '…' : fields[0]}
                                                    </span>
                                                    {fields.length > 1 && (
                                                        <span style={{ fontSize: 11, fontFamily: "var(--font-space-mono)", color: 'rgba(17,17,17,0.35)', padding: '3px 6px', borderRadius: 100, border: '1px solid rgba(17,17,17,0.1)' }}>
                                                            +{fields.length - 1}
                                                        </span>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div style={{ flex: 1 }} />
                                    <div style={{ padding: '12px 16px 16px', display: 'flex', gap: 8 }}>
                                        <Link href={`/advocaat/${slug}`} style={{
                                            flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5,
                                            background: '#F5F3EE', color: '#111111', borderRadius: 12, padding: '9px 14px',
                                            textDecoration: 'none', fontFamily: "var(--font-space-mono)", fontSize: 11, fontWeight: 700,
                                            border: '1px solid rgba(17,17,17,0.1)',
                                        }}>
                                            Bekijk profiel →
                                        </Link>
                                    </div>
                                </article>
                            );
                        })}
                    </div>

                    {/* Show more CTA */}
                    {total > lawyers.length && (
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
                            <Link href={`/advocaten?stad=${encodeURIComponent(name)}`} style={{
                                background: '#111111', color: '#E8E4DD', borderRadius: 100,
                                padding: '14px 36px', textDecoration: 'none', fontWeight: 600, fontSize: 14,
                                display: 'inline-flex', alignItems: 'center', gap: 8,
                            }}>
                                Bekijk alle {total.toLocaleString('nl')} advocaten in {name}
                                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </Link>
                        </div>
                    )}

                    {/* ── SEO Text ── */}
                    <section style={{
                        marginTop: 56, background: 'white', borderRadius: 24,
                        border: '1px solid rgba(17,17,17,0.07)', padding: '32px',
                    }}>
                        <h2 style={{ margin: '0 0 16px', fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em' }}>
                            Een advocaat vinden in {name}
                        </h2>
                        <div style={{ color: 'rgba(17,17,17,0.6)', lineHeight: 1.8, fontSize: 14 }}>
                            <p style={{ margin: '0 0 12px' }}>
                                {name} telt {total.toLocaleString('nl')} NOvA-geregistreerde advocaten verspreid over diverse rechtsgebieden.
                                Of u nu juridische bijstand zoekt voor familierecht, arbeidsrecht, strafrecht of een ander rechtsgebied —
                                AdvocaatVinder helpt u snel de juiste advocaat in {name} te vinden.
                            </p>
                            <p style={{ margin: '0 0 12px' }}>
                                Alle advocaten op deze pagina zijn geregistreerd bij de Nederlandse Orde van Advocaten (NOvA),
                                wat garandeert dat zij voldoen aan de strenge kwaliteitseisen van de Nederlandse advocatuur.
                                {cfg && ` ${name} valt onder de provincie ${cfg.province}.`}
                            </p>
                            <p style={{ margin: 0 }}>
                                Gebruik de zoekfunctie om te filteren op specialisatie, of bekijk de volledige lijst van advocaten in {name}.
                                U kunt direct contact opnemen via telefoon of e-mail.
                            </p>
                        </div>
                    </section>

                    {/* ── Other Cities ── */}
                    <section style={{ marginTop: 40 }}>
                        <h2 style={{ margin: '0 0 16px', fontSize: 16, fontWeight: 700, color: 'rgba(17,17,17,0.6)' }}>
                            Advocaten in andere steden
                        </h2>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                            {otherCities.map(([slug, cfg]) => (
                                <Link key={slug} href={`/advocaten/${slug}`} style={{
                                    background: 'white', border: '1px solid rgba(17,17,17,0.1)',
                                    borderRadius: 100, padding: '8px 18px', fontSize: 13,
                                    textDecoration: 'none', color: '#111111', fontWeight: 500,
                                    transition: 'all 0.15s',
                                }}>
                                    {displayName(slug)}
                                </Link>
                            ))}
                        </div>
                    </section>
                </main>

                {/* ── Footer ── */}
                <footer style={{
                    background: '#111111', borderTop: '1px solid rgba(255,255,255,0.06)',
                    padding: '20px 32px', display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between', flexWrap: 'wrap', gap: 8,
                }}>
                    <span style={{ fontFamily: "var(--font-space-mono)", fontSize: 11, color: 'rgba(232,228,221,0.2)' }}>
                        © 2025 AdvocaatVinder
                    </span>
                    <span style={{ fontFamily: "var(--font-space-mono)", fontSize: 11, color: 'rgba(34,197,94,0.7)', display: 'flex', alignItems: 'center', gap: 6 }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                        Systeem actief
                    </span>
                </footer>
            </div>
        </>
    );
}
