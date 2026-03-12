import { supabase, type Lawyer } from '@/lib/supabase';
import { extractCity, parseFields, getInitials, getAvatarStyle } from '@/lib/utils';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// ─── Specialty config ────────────────────────────────────────────────────────
// Slug → search term + display name + SEO description
const SPECIALTIES: Record<string, {
    name: string;
    searchTerms: string[];
    description: string;
    icon: string;
}> = {
    'familierecht': {
        name: 'Familierecht',
        searchTerms: ['Personen- en familierecht', 'Familierecht', 'Jeugdrecht'],
        description: 'Specialisten in echtscheiding, voogdij, alimentatie, omgangsregelingen en jeugdrecht.',
        icon: '👨‍👩‍👧‍👦',
    },
    'arbeidsrecht': {
        name: 'Arbeidsrecht',
        searchTerms: ['Arbeidsrecht', 'Ambtenarenrecht'],
        description: 'Experts in ontslag, arbeidsovereenkomsten, cao-recht, reorganisatie en arbeidsongeschiktheid.',
        icon: '💼',
    },
    'strafrecht': {
        name: 'Strafrecht',
        searchTerms: ['Strafrecht', 'Jeugdstrafrecht'],
        description: 'Verdediging in strafzaken, verkeersrecht, economisch strafrecht en jeugdstrafrecht.',
        icon: '⚖️',
    },
    'ondernemingsrecht': {
        name: 'Ondernemingsrecht',
        searchTerms: ['Ondernemingsrecht', 'Vennootschapsrecht'],
        description: 'Juridische bijstand bij bedrijfsoprichting, fusies, aandeelhoudersgeschillen en vennootschapsrecht.',
        icon: '🏢',
    },
    'huurrecht': {
        name: 'Huurrecht',
        searchTerms: ['Huurrecht'],
        description: 'Advies en procedures over huurovereenkomsten, huurbescherming, onderhoud en ontruiming.',
        icon: '🏠',
    },
    'bestuursrecht': {
        name: 'Bestuursrecht',
        searchTerms: ['Bestuursrecht', 'Omgevingsrecht'],
        description: 'Procedures tegen de overheid, vergunningen, handhaving en omgevingsrecht.',
        icon: '🏛️',
    },
    'vastgoedrecht': {
        name: 'Vastgoedrecht',
        searchTerms: ['Vastgoed', 'Bouwrecht', 'Vastgoedrecht'],
        description: 'Juridische begeleiding bij vastgoedtransacties, bouwgeschillen en projectontwikkeling.',
        icon: '🏗️',
    },
    'erfrecht': {
        name: 'Erfrecht',
        searchTerms: ['Erfrecht'],
        description: 'Advies over testamenten, nalatenschappen, legaten en erfbelasting.',
        icon: '📜',
    },
    'intellectueel-eigendom': {
        name: 'Intellectueel Eigendom',
        searchTerms: ['Intellectueel eigendom', 'IE-recht', 'Merkenrecht', 'Auteursrecht'],
        description: 'Bescherming van merken, octrooien, auteursrecht en handelsgeheimen.',
        icon: '💡',
    },
    'immigratierecht': {
        name: 'Immigratierecht',
        searchTerms: ['Immigratierecht', 'Vreemdelingenrecht', 'Asiel- en vluchtelingenrecht'],
        description: 'Juridische hulp bij verblijfsvergunningen, asielaanvragen, naturalisatie en uitzetting.',
        icon: '🌍',
    },
    'letselschaderecht': {
        name: 'Letselschaderecht',
        searchTerms: ['Letselschade', 'Aansprakelijkheidsrecht', 'Letselschaderecht'],
        description: 'Schadevergoeding bij letsel door ongevallen, medische fouten en arbeidsongevallen.',
        icon: '🩹',
    },
    'verbintenissenrecht': {
        name: 'Verbintenissenrecht',
        searchTerms: ['Verbintenissenrecht', 'Contractenrecht', 'Algemeen civiel recht'],
        description: 'Contractgeschillen, wanprestatie, schadevergoeding en nakoming van overeenkomsten.',
        icon: '📋',
    },
    'insolventierecht': {
        name: 'Insolventierecht',
        searchTerms: ['Insolventierecht', 'Faillissementsrecht'],
        description: 'Juridische bijstand bij faillissement, surseance van betaling en schuldsanering.',
        icon: '📉',
    },
    'mededingingsrecht': {
        name: 'Mededingingsrecht',
        searchTerms: ['Mededingingsrecht', 'Europees recht'],
        description: 'Kartelrecht, fusiecontrole, staatssteun en oneerlijke mededinging.',
        icon: '🔄',
    },
    'belastingrecht': {
        name: 'Belastingrecht',
        searchTerms: ['Belastingrecht', 'Fiscaal recht'],
        description: 'Fiscale procedures, belastingaanslagen, btw-geschillen en internationale belastingplanning.',
        icon: '🧾',
    },
    'verzekeringsrecht': {
        name: 'Verzekeringsrecht',
        searchTerms: ['Verzekeringsrecht'],
        description: 'Geschillen over polisuitleg, dekkingsvragen, premies en verzekeringsplicht.',
        icon: '🛡️',
    },
    'sociaal-zekerheidsrecht': {
        name: 'Sociaal Zekerheidsrecht',
        searchTerms: ['Sociaal zekerheidsrecht'],
        description: 'Uitkeringen, WIA, WW, bijstand en procedures tegen het UWV of gemeente.',
        icon: '🤝',
    },
    'burenrecht': {
        name: 'Burenrecht',
        searchTerms: ['Burenrecht'],
        description: 'Geschillen met buren over erfgrenzen, overlast, overhangende takken en recht van overpad.',
        icon: '🏡',
    },
    'mediarecht': {
        name: 'Mediarecht',
        searchTerms: ['Mediarecht', 'IT-recht', 'Telecommunicatierecht'],
        description: 'Juridische kwesties rond media, internet, privacy, IT-contracten en telecom.',
        icon: '📱',
    },
    'gezondheidsrecht': {
        name: 'Gezondheidsrecht',
        searchTerms: ['Gezondheidsrecht', 'Medisch tuchtrecht'],
        description: 'Medische aansprakelijkheid, tuchtrecht, patiëntenrechten en zorginstellingen.',
        icon: '🏥',
    },
};

// ─── Display name from slug ──────────────────────────────────────────────────
function displayName(slug: string): string {
    return SPECIALTIES[slug]?.name || slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

// ─── Fetch lawyers by specialty ──────────────────────────────────────────────
async function getLawyersBySpecialty(slug: string): Promise<{ lawyers: Lawyer[]; total: number }> {
    const spec = SPECIALTIES[slug];
    if (!spec) return { lawyers: [], total: 0 };

    // Build an OR filter matching any of the search terms
    const searchTerms = spec.searchTerms;
    let query = supabase
        .from('advocaten')
        .select('id,slug,name,bezoekadres,rechtsgebieden,telefoon,email,website,arrondissement,profile_url,foto_url,bio_text,extra_specializations,lawyer_type');

    // Use OR conditions with ilike for flexibility
    const orClauses = searchTerms.map(t => `rechtsgebieden.ilike.%${t}%`).join(',');
    query = query.or(orClauses);

    // Get count
    const { count } = await supabase
        .from('advocaten')
        .select('id', { count: 'exact', head: true })
        .or(orClauses);

    // Get lawyers
    const { data, error } = await query
        .order('name', { ascending: true })
        .limit(48);

    if (error || !data) return { lawyers: [], total: 0 };
    return { lawyers: data as Lawyer[], total: count || data.length };
}

// ─── Top cities for a specialty ──────────────────────────────────────────────
function getTopCities(lawyers: Lawyer[]): { city: string; count: number; slug: string }[] {
    const freq = new Map<string, number>();
    for (const l of lawyers) {
        const city = extractCity(l.bezoekadres);
        if (city && city.length > 1) freq.set(city, (freq.get(city) || 0) + 1);
    }
    return [...freq.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([city, count]) => ({
            city: city.split(/[\s-]+/).map(w => w.charAt(0) + w.slice(1).toLowerCase()).join(' '),
            count,
            slug: city.toLowerCase().replace(/\s+/g, '-').replace(/'/g, ''),
        }));
}

// ─── Dynamic Metadata ────────────────────────────────────────────────────────
export async function generateMetadata({
    params,
}: {
    params: Promise<{ specialty: string }>;
}): Promise<Metadata> {
    const { specialty } = await params;
    const name = displayName(specialty);
    const spec = SPECIALTIES[specialty];
    const { total } = await getLawyersBySpecialty(specialty);

    if (total === 0) return { title: `Advocaat ${name} — Niet gevonden` };

    return {
        title: `Advocaat ${name} — ${total}+ Specialisten in ${name}`,
        description: `Vind een advocaat gespecialiseerd in ${name.toLowerCase()}. ${total}+ NOvA-geregistreerde ${name.toLowerCase()} advocaten in Nederland. ${spec?.description || ''} AdvocaatVinder.`,
        openGraph: {
            title: `Advocaat ${name} — ${total}+ Specialisten`,
            description: `Zoek een advocaat voor ${name.toLowerCase()}. ${total}+ advocaten met specialisatie ${name.toLowerCase()}.`,
        },
        alternates: {
            canonical: `https://www.advocaatvinder.nl/advocaten/rechtsgebied/${specialty}`,
        },
    };
}

// ─── Static generation for known specialties ─────────────────────────────────
export function generateStaticParams() {
    return Object.keys(SPECIALTIES).map(specialty => ({ specialty }));
}

export const dynamicParams = true;

// ─── Page Component ──────────────────────────────────────────────────────────
export default async function SpecialtyPage({
    params,
}: {
    params: Promise<{ specialty: string }>;
}) {
    const { specialty } = await params;
    const name = displayName(specialty);
    const spec = SPECIALTIES[specialty];
    const { lawyers, total } = await getLawyersBySpecialty(specialty);

    if (total === 0 || !spec) notFound();

    const topCities = getTopCities(lawyers);
    const otherSpecialties = Object.entries(SPECIALTIES)
        .filter(([slug]) => slug !== specialty)
        .slice(0, 12);

    // ── JSON-LD ──────────────────────────────────────────────────────────────
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.advocaatvinder.nl' },
            { '@type': 'ListItem', position: 2, name: 'Advocaten', item: 'https://www.advocaatvinder.nl/advocaten' },
            { '@type': 'ListItem', position: 3, name: `${name} Advocaat`, item: `https://www.advocaatvinder.nl/advocaten/rechtsgebied/${specialty}` },
        ],
    };

    const itemListJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: `Advocaten Gespecialiseerd in ${name}`,
        description: spec.description,
        numberOfItems: total,
        itemListElement: lawyers.slice(0, 10).map((l, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: {
                '@type': 'LegalService',
                name: l.name,
                url: `https://www.advocaatvinder.nl/advocaat/${l.slug}`,
                knowsAbout: name,
            },
        })),
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />

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

                {/* ── Specialty Hero ── */}
                <section style={{
                    background: '#111111', padding: '48px 20px 56px', textAlign: 'center',
                    borderBottom: '3px solid #E63B2E',
                }}>
                    <div style={{ fontSize: 40, marginBottom: 12 }}>{spec.icon}</div>
                    <p style={{
                        margin: '0 0 12px', fontFamily: "var(--font-space-mono)", fontSize: 11,
                        color: 'rgba(232,228,221,0.35)', letterSpacing: '0.12em', textTransform: 'uppercase',
                    }}>
                        Rechtsgebied · {total.toLocaleString('nl')} advocaten
                    </p>
                    <h1 style={{
                        margin: '0 0 8px', fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800,
                        color: '#E8E4DD', lineHeight: 1.1, letterSpacing: '-0.03em',
                    }}>
                        Advocaat <span style={{ color: '#E63B2E', fontFamily: "var(--font-dm-serif)", fontStyle: 'italic', fontWeight: 400 }}>{name}</span>
                    </h1>
                    <p style={{
                        margin: '0 auto', maxWidth: 560, fontSize: 15, color: 'rgba(232,228,221,0.5)', lineHeight: 1.6,
                    }}>
                        {spec.description}
                    </p>
                    <div style={{ marginTop: 28, display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
                        <Link href={`/advocaten?gebied=${encodeURIComponent(name)}`} style={{
                            display: 'inline-flex', alignItems: 'center', gap: 8,
                            background: '#E63B2E', color: 'white', borderRadius: 100,
                            padding: '12px 28px', textDecoration: 'none', fontSize: 14, fontWeight: 700,
                        }}>
                            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
                            Zoek {name.toLowerCase()} advocaat
                        </Link>
                    </div>
                </section>

                <main style={{ maxWidth: 1280, margin: '0 auto', padding: '32px 20px 80px' }}>

                    {/* ── Top Cities for this specialty ── */}
                    {topCities.length > 0 && (
                        <section style={{ marginBottom: 40 }}>
                            <h2 style={{ margin: '0 0 16px', fontSize: 18, fontWeight: 700, letterSpacing: '-0.02em', color: '#111111' }}>
                                {name} advocaten per stad
                            </h2>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                {topCities.map(({ city, count, slug }) => (
                                    <Link key={slug} href={`/advocaten/${slug}`} style={{
                                        background: 'white', border: '1px solid rgba(17,17,17,0.1)',
                                        borderRadius: 100, padding: '8px 16px', fontSize: 13,
                                        fontFamily: "var(--font-space-mono)", color: 'rgba(17,17,17,0.7)',
                                        textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8,
                                    }}>
                                        <svg width="10" height="10" fill="currentColor" viewBox="0 0 24 24" style={{ opacity: 0.4 }}><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                                        {city}
                                        <span style={{ fontSize: 11, color: 'rgba(17,17,17,0.35)', fontWeight: 700 }}>{count}</span>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* ── Lawyer Grid ── */}
                    <h2 style={{ margin: '0 0 16px', fontSize: 18, fontWeight: 700, letterSpacing: '-0.02em', color: '#111111' }}>
                        {name} advocaten in Nederland
                    </h2>
                    <p style={{ margin: '0 0 16px', fontFamily: "var(--font-space-mono)", fontSize: 11, color: 'rgba(17,17,17,0.4)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                        {total.toLocaleString('nl')} specialisten — top {Math.min(lawyers.length, 48)} getoond
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 16 }}>
                        {lawyers.map(l => {
                            const city = extractCity(l.bezoekadres) || l.arrondissement || '';
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
                                            <Link href={`/advocaat/${l.slug}`} style={{ textDecoration: 'none' }}>
                                                <h3 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: '#111111', lineHeight: 1.25, letterSpacing: '-0.01em' }}>
                                                    {l.name}
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
                                            {fields.length > 0 && (
                                                <div style={{ marginTop: 10, display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                                                    <span style={{
                                                        fontSize: 11, fontFamily: "var(--font-space-mono)",
                                                        background: fields[0].toLowerCase().includes(name.toLowerCase()) ? '#111111' : '#F0EEE9',
                                                        color: fields[0].toLowerCase().includes(name.toLowerCase()) ? '#E8E4DD' : 'rgba(17,17,17,0.7)',
                                                        padding: '3px 10px', borderRadius: 100,
                                                    }}>
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
                                        <Link href={`/advocaat/${l.slug}`} style={{
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
                            <Link href={`/advocaten?gebied=${encodeURIComponent(name)}`} style={{
                                background: '#111111', color: '#E8E4DD', borderRadius: 100,
                                padding: '14px 36px', textDecoration: 'none', fontWeight: 600, fontSize: 14,
                                display: 'inline-flex', alignItems: 'center', gap: 8,
                            }}>
                                Bekijk alle {total.toLocaleString('nl')} {name.toLowerCase()} advocaten
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
                            Een {name.toLowerCase()} advocaat vinden
                        </h2>
                        <div style={{ color: 'rgba(17,17,17,0.6)', lineHeight: 1.8, fontSize: 14 }}>
                            <p style={{ margin: '0 0 12px' }}>
                                Nederland telt {total.toLocaleString('nl')} NOvA-geregistreerde advocaten die gespecialiseerd zijn in {name.toLowerCase()}.
                                {' '}{spec.description}
                            </p>
                            <p style={{ margin: '0 0 12px' }}>
                                Alle advocaten op AdvocaatVinder zijn geregistreerd bij de Nederlandse Orde van Advocaten (NOvA).
                                Dit garandeert dat zij voldoen aan de strenge kwaliteitseisen en gedragsregels van de Nederlandse advocatuur.
                                U kunt direct contact opnemen met een {name.toLowerCase()} advocaat via telefoon of e-mail.
                            </p>
                            <p style={{ margin: 0 }}>
                                Gebruik de zoekfunctie om te filteren op stad, of bekijk onze stadspagina&apos;s voor een overzicht van {name.toLowerCase()} advocaten bij u in de buurt.
                            </p>
                        </div>
                    </section>

                    {/* ── Other Specialties ── */}
                    <section style={{ marginTop: 40 }}>
                        <h2 style={{ margin: '0 0 16px', fontSize: 16, fontWeight: 700, color: 'rgba(17,17,17,0.6)' }}>
                            Andere rechtsgebieden
                        </h2>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                            {otherSpecialties.map(([slug, s]) => (
                                <Link key={slug} href={`/advocaten/rechtsgebied/${slug}`} style={{
                                    background: 'white', border: '1px solid rgba(17,17,17,0.1)',
                                    borderRadius: 100, padding: '8px 18px', fontSize: 13,
                                    textDecoration: 'none', color: '#111111', fontWeight: 500,
                                    transition: 'all 0.15s',
                                }}>
                                    {s.icon} {s.name}
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
