import { supabase, type Lawyer } from '@/lib/supabase';
import { extractCity, cleanWebsite, shortDomain, parseFields, getInitials, getAvatarStyle } from '@/lib/utils';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Dynamic rendering — don't pre-generate pages at build time
// (18K pages are generated on-demand and cached by Next.js)
export const dynamic = 'force-dynamic';

// ─── Fetch a single lawyer by slug (direct lookup on slug column) ────────────
async function getLawyerBySlug(slug: string): Promise<Lawyer | null> {
    const { data, error } = await supabase
        .from('advocaten')
        .select('id,slug,name,bezoekadres,rechtsgebieden,telefoon,email,website,arrondissement,profile_url,foto_url,bio_text,extra_specializations,lawyer_type')
        .eq('slug', slug)
        .single();
    if (error || !data) return null;
    return data as Lawyer;
}

// ─── Dynamic Metadata ─────────────────────────────────────────────────────────
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const lawyer = await getLawyerBySlug(slug);
    if (!lawyer) return { title: 'Advocaat niet gevonden' };

    const city = extractCity(lawyer.bezoekadres) || lawyer.arrondissement || 'Nederland';
    const fields = parseFields(lawyer.rechtsgebieden);
    const specialty = fields[0] || 'Algemene praktijk';

    return {
        title: `${lawyer.name} | Advocaat ${city}`,
        description: `Neem contact op met ${lawyer.name}, advocaat in ${city} gespecialiseerd in ${specialty}. ✓ NOvA-geregistreerd.${lawyer.telefoon ? ` Tel: ${lawyer.telefoon}.` : ''}`,
        openGraph: {
            title: `${lawyer.name} — Advocaat ${city}`,
            description: `${specialty} advocaat in ${city}. Bekijk contactgegevens en specialisaties op AdvocaatVinder.`,
        },
    };
}

// ─── Page Component ───────────────────────────────────────────────────────────
export default async function LawyerPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const lawyer = await getLawyerBySlug(slug);
    if (!lawyer) notFound();

    const city = extractCity(lawyer.bezoekadres) || lawyer.arrondissement || '';
    const fields = parseFields(lawyer.rechtsgebieden);
    const website = cleanWebsite(lawyer.website);
    const { bg: avatarBg, text: avatarText } = getAvatarStyle(lawyer.name || '');
    const initials = getInitials(lawyer.name || '');

    // ── JSON-LD Structured Data (LegalService + BreadcrumbList) ───────────────
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'LegalService',
        name: lawyer.name,
        url: website || undefined,
        telephone: lawyer.telefoon || undefined,
        email: lawyer.email || undefined,
        address: lawyer.bezoekadres
            ? {
                '@type': 'PostalAddress',
                streetAddress: lawyer.bezoekadres,
                addressLocality: city,
                addressCountry: 'NL',
            }
            : undefined,
        areaServed: {
            '@type': 'AdministrativeArea',
            name: lawyer.arrondissement || 'Nederland',
        },
        knowsAbout: fields,
        memberOf: {
            '@type': 'Organization',
            name: 'Nederlandse Orde van Advocaten (NOvA)',
            url: 'https://www.advocatenorde.nl',
        },
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://www.advocaatvinder.nl',
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Advocaten',
                item: 'https://www.advocaatvinder.nl/advocaten',
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: lawyer.name || 'Advocaat',
                item: `https://www.advocaatvinder.nl/advocaat/${slug}`,
            },
        ],
    };

    return (
        <>
            {/* Inject JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />

            <div style={{ minHeight: '100vh', background: '#F5F3EE', fontFamily: "var(--font-space-grotesk)" }}>
                {/* ── Top Bar ── */}
                <header style={{ background: '#111111', position: 'sticky', top: 0, zIndex: 40, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 20px', height: 52, display: 'flex', alignItems: 'center', gap: 16 }}>
                        <Link href="/advocaten" style={{ color: 'rgba(232,228,221,0.5)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6, fontFamily: "var(--font-space-mono)", fontSize: 12, transition: 'color 0.2s' }}>
                            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" /></svg>
                            Alle advocaten
                        </Link>
                        <Link href="/" style={{ marginLeft: 'auto', color: '#E8E4DD', textDecoration: 'none', fontWeight: 700, fontSize: 15, fontFamily: "var(--font-space-grotesk)" }}>
                            AdvocaatVinder
                        </Link>
                    </div>
                </header>

                <main style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 80px' }}>

                    {/* ── Hero Card ── */}
                    <div style={{ background: 'white', borderRadius: 24, border: '1px solid rgba(17,17,17,0.07)', overflow: 'hidden', marginBottom: 24 }}>
                        {/* Accent stripe */}
                        <div style={{ height: 4, background: 'linear-gradient(90deg, #E63B2E, #111111)' }} />

                        <div style={{ padding: '32px 32px 28px', display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' }}>
                            {/* Avatar */}
                            <div style={{
                                    width: 88, height: 88, borderRadius: 20, flexShrink: 0,
                                    background: avatarBg, display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: 28, fontWeight: 700, color: avatarText,
                                    boxShadow: `0 8px 24px ${avatarBg}55`,
                                }}>
                                    {initials}
                                </div>

                            {/* Info */}
                            <div style={{ flex: 1, minWidth: 200 }}>
                                <h1 style={{ margin: 0, fontSize: 26, fontWeight: 700, color: '#111111', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                                    {lawyer.name}
                                </h1>

                                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8, flexWrap: 'wrap' }}>
                                    {city && (
                                        <span style={{ fontFamily: "var(--font-space-mono)", fontSize: 12, color: 'rgba(17,17,17,0.5)', display: 'flex', alignItems: 'center', gap: 4 }}>
                                            <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                                            {city}
                                        </span>
                                    )}
                                    {lawyer.arrondissement && city !== lawyer.arrondissement && (
                                        <span style={{ fontFamily: "var(--font-space-mono)", fontSize: 11, color: 'rgba(17,17,17,0.35)' }}>
                                            Arrondissement {lawyer.arrondissement}
                                        </span>
                                    )}
                                    <span style={{ fontSize: 11, fontFamily: "var(--font-space-mono)", background: 'rgba(22,163,74,0.08)', color: '#16a34a', padding: '3px 9px', borderRadius: 100, border: '1px solid rgba(22,163,74,0.2)', fontWeight: 700 }}>
                                        ✓ NOvA-advocaat
                                    </span>
                                </div>

                                {/* Specialties */}
                                {fields.length > 0 && (
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 14 }}>
                                        {fields.map((f, i) => (
                                            <span key={i} style={{
                                                fontSize: 12, fontFamily: "var(--font-space-mono)",
                                                background: i === 0 ? '#111111' : '#F0EEE9',
                                                color: i === 0 ? '#E8E4DD' : 'rgba(17,17,17,0.7)',
                                                padding: '4px 12px', borderRadius: 100,
                                            }}>
                                                {f}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>

                        {/* ── Contact Card ── */}
                        <div style={{ background: 'white', borderRadius: 20, border: '1px solid rgba(17,17,17,0.07)', padding: '24px' }}>
                            <h2 style={{ margin: '0 0 16px', fontSize: 13, fontWeight: 700, fontFamily: "var(--font-space-mono)", letterSpacing: '0.05em', color: 'rgba(17,17,17,0.4)', textTransform: 'uppercase' }}>
                                Contact
                            </h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                                {lawyer.telefoon && <ContactItem icon="phone" label={lawyer.telefoon} href={`tel:${lawyer.telefoon}`} />}
                                {lawyer.email && <ContactItem icon="mail" label={lawyer.email} href={`mailto:${lawyer.email}`} />}
                                {website && <ContactItem icon="globe" label={shortDomain(website)} href={website} />}
                                {lawyer.bezoekadres && <ContactItem icon="pin" label={lawyer.bezoekadres} href={`https://maps.google.com/?q=${encodeURIComponent(lawyer.bezoekadres)}`} />}
                            </div>

                            <div style={{ display: 'flex', gap: 8, marginTop: 20, flexWrap: 'wrap' }}>
                                {website && (
                                    <a href={website} target="_blank" rel="noopener noreferrer" style={{
                                        flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                                        background: '#111111', color: '#E8E4DD', borderRadius: 12, padding: '11px 16px',
                                        textDecoration: 'none', fontSize: 13, fontWeight: 600, whiteSpace: 'nowrap',
                                    }}>
                                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                        Website
                                    </a>
                                )}
                                {lawyer.profile_url && (
                                    <a href={lawyer.profile_url} target="_blank" rel="noopener noreferrer" style={{
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5,
                                        background: '#F0EEE9', color: 'rgba(17,17,17,0.7)', borderRadius: 12, padding: '11px 16px',
                                        textDecoration: 'none', fontFamily: "var(--font-space-mono)", fontSize: 12, whiteSpace: 'nowrap',
                                        ...(website ? {} : { flex: 1 })
                                    }}>
                                        NOvA Profiel
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* ── Map Card ── */}
                        {lawyer.bezoekadres && (
                            <div style={{ background: 'white', borderRadius: 20, border: '1px solid rgba(17,17,17,0.07)', overflow: 'hidden', minHeight: 220 }}>
                                <iframe
                                    title={`Locatie ${lawyer.name}`}
                                    width="100%"
                                    height="100%"
                                    style={{ minHeight: 220, border: 'none', display: 'block' }}
                                    src={`https://maps.google.com/maps?q=${encodeURIComponent(lawyer.bezoekadres)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        )}
                    </div>

                    {/* ── About Section (SEO text) ── */}
                    <div style={{ background: 'white', borderRadius: 20, border: '1px solid rgba(17,17,17,0.07)', padding: '28px 32px', marginTop: 16 }}>
                        <h2 style={{ margin: '0 0 12px', fontSize: 18, fontWeight: 700, letterSpacing: '-0.01em' }}>
                            Over {lawyer.name}
                        </h2>
                        <p style={{ margin: 0, color: 'rgba(17,17,17,0.6)', lineHeight: 1.7, fontSize: 14 }}>
                            {lawyer.name} is een NOvA-geregistreerde advocaat{city ? ` in ${city}` : ' in Nederland'}.
                            {fields.length > 0 && ` ${fields.length > 1 ? 'Specialisaties omvatten' : 'Specialisatie is'} ${fields.join(', ')}.`}
                            {lawyer.telefoon && ` U kunt contact opnemen via ${lawyer.telefoon}.`}
                            {lawyer.email && ` Of per e-mail: ${lawyer.email}.`}
                        </p>

                        {/* Nearby search link — internal linking for SEO */}
                        {city && (
                            <Link
                                href={`/advocaten?stad=${encodeURIComponent(city)}`}
                                style={{ display: 'inline-block', marginTop: 16, color: '#E63B2E', textDecoration: 'none', fontSize: 13, fontWeight: 600 }}
                            >
                                Andere advocaten in {city} →
                            </Link>
                        )}
                    </div>

                    {/* ── Bio Section (from scraped website) ── */}
                    {lawyer.bio_text && (
                        <div style={{ background: 'white', borderRadius: 20, border: '1px solid rgba(17,17,17,0.07)', padding: 28, marginBottom: 24 }}>
                            <h2 style={{ margin: '0 0 12px', fontSize: 17, fontWeight: 700, color: '#111', fontFamily: 'var(--font-space-grotesk)' }}>
                                Over {lawyer.name?.split(' ').pop()}
                            </h2>
                            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: 'rgba(17,17,17,0.7)' }}>
                                {lawyer.bio_text}
                            </p>
                            {lawyer.lawyer_type && (
                                <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
                                    <span style={{
                                        padding: '4px 12px', borderRadius: 999, fontSize: 11, fontWeight: 600,
                                        fontFamily: 'var(--font-space-mono)',
                                        background: lawyer.lawyer_type === 'zelfstandig' ? '#E8F5E9' : '#E3F2FD',
                                        color: lawyer.lawyer_type === 'zelfstandig' ? '#2E7D32' : '#1565C0',
                                    }}>
                                        {lawyer.lawyer_type === 'zelfstandig' ? '👤 Zelfstandig advocaat' : '🏢 Kantoor'}
                                    </span>
                                </div>
                            )}
                        </div>
                    )}
                </main>
            </div>
        </>
    );
}

// ─── Contact Item helper ───────────────────────────────────────────────────────
function ContactItem({ icon, label, href }: { icon: string; label: string; href: string }) {
    const icons: Record<string, React.ReactNode> = {
        phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 5.61 5.61l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />,
        mail: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,12 2,6" /></>,
        globe: <><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></>,
        pin: <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />,
    };
    return (
        <a href={href} target={icon === 'phone' || icon === 'mail' ? undefined : '_blank'} rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'flex-start', gap: 10, textDecoration: 'none', color: 'rgba(17,17,17,0.55)', fontSize: 13, fontFamily: "var(--font-space-mono)" }}>
            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: 1 }}>
                {icons[icon]}
            </svg>
            <span style={{ wordBreak: 'break-all' }}>{label}</span>
        </a>
    );
}
