import { supabase, type Lawyer } from '@/lib/supabase';
import { extractCity, parseFields, getInitials, getAvatarStyle } from '@/lib/utils';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// ─── City config (reused from parent) ────────────────────────────────────────
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

// ─── Specialty config (reused from rechtsgebied) ─────────────────────────────
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

// ─── Display helpers ─────────────────────────────────────────────────────────
function displayCityName(slug: string): string {
    const cfg = CITIES[slug];
    if (!cfg) return slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    if (cfg.name === cfg.name.toUpperCase()) {
        return cfg.name.split(/[\s-]+/).map(w => w.charAt(0) + w.slice(1).toLowerCase()).join(' ');
    }
    return cfg.name;
}

function displaySpecialtyName(slug: string): string {
    return SPECIALTIES[slug]?.name || slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

// ─── Fetch lawyers by city + specialty ────────────────────────────────────────
async function getLawyersByCityAndSpecialty(
    citySlug: string,
    specialtySlug: string
): Promise<{ lawyers: Lawyer[]; total: number }> {
    const cityCfg = CITIES[citySlug];
    const spec = SPECIALTIES[specialtySlug];
    if (!spec) return { lawyers: [], total: 0 };

    const citySearch = cityCfg ? cityCfg.name.toUpperCase() : citySlug.replace(/-/g, ' ').toUpperCase();
    const orClauses = spec.searchTerms.map(t => `rechtsgebieden.ilike.%${t}%`).join(',');

    // Count
    const { count } = await supabase
        .from('advocaten')
        .select('id', { count: 'exact', head: true })
        .ilike('bezoekadres', `%${citySearch}%`)
        .or(orClauses);

    // Fetch
    const { data, error } = await supabase
        .from('advocaten')
        .select('id,slug,name,bezoekadres,rechtsgebieden,telefoon,email,website,arrondissement,profile_url,foto_url,bio_text,extra_specializations,lawyer_type')
        .ilike('bezoekadres', `%${citySearch}%`)
        .or(orClauses)
        .order('name', { ascending: true })
        .limit(48);

    if (error || !data) return { lawyers: [], total: 0 };
    return { lawyers: data as Lawyer[], total: count || data.length };
}

// ─── Dynamic Metadata ────────────────────────────────────────────────────────
export async function generateMetadata({
    params,
}: {
    params: Promise<{ city: string; specialty: string }>;
}): Promise<Metadata> {
    const { city, specialty } = await params;
    const cityName = displayCityName(city);
    const specName = displaySpecialtyName(specialty);
    const spec = SPECIALTIES[specialty];
    const { total } = await getLawyersByCityAndSpecialty(city, specialty);

    if (total === 0 || !spec) return { title: `${specName} Advocaat ${cityName} — Niet gevonden` };

    return {
        title: `${specName} Advocaat ${cityName} — ${total}+ Specialisten ✓`,
        description: `Zoek een ${specName.toLowerCase()} advocaat in ${cityName}? Vergelijk ${total}+ gespecialiseerde advocaten. ${spec.description} AdvocaatVinder — de grootste advocatengids van Nederland.`,
        openGraph: {
            title: `${specName} Advocaat ${cityName} — ${total}+ Specialisten`,
            description: `Vind de beste ${specName.toLowerCase()} advocaat in ${cityName}. ${total}+ NOvA-geregistreerde specialisten.`,
        },
        alternates: {
            canonical: `https://www.advocaatvinder.nl/advocaten/${city}/${specialty}`,
        },
    };
}

// ─── Static generation for top combos ────────────────────────────────────────
const TOP_CITIES = ['amsterdam', 'rotterdam', 'den-haag', 'utrecht', 'eindhoven', 'groningen', 'tilburg', 'breda', 'arnhem', 'haarlem'];
const TOP_SPECIALTIES = ['familierecht', 'arbeidsrecht', 'strafrecht', 'ondernemingsrecht', 'huurrecht', 'bestuursrecht', 'letselschaderecht', 'immigratierecht'];

export function generateStaticParams() {
    const combos: { city: string; specialty: string }[] = [];
    for (const city of TOP_CITIES) {
        for (const specialty of TOP_SPECIALTIES) {
            combos.push({ city, specialty });
        }
    }
    return combos;
}

export const dynamicParams = true;

// ─── Page Component ──────────────────────────────────────────────────────────
export default async function CitySpecialtyPage({
    params,
}: {
    params: Promise<{ city: string; specialty: string }>;
}) {
    const { city, specialty } = await params;
    const cityName = displayCityName(city);
    const specName = displaySpecialtyName(specialty);
    const spec = SPECIALTIES[specialty];
    const cityCfg = CITIES[city];
    const { lawyers, total } = await getLawyersByCityAndSpecialty(city, specialty);

    if (total === 0 || !spec) notFound();

    // Related specialties in this city (exclude current)
    const otherSpecialties = Object.entries(SPECIALTIES)
        .filter(([slug]) => slug !== specialty)
        .slice(0, 10);

    // Related cities for this specialty (exclude current)
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
            { '@type': 'ListItem', position: 3, name: `Advocaten ${cityName}`, item: `https://www.advocaatvinder.nl/advocaten/${city}` },
            { '@type': 'ListItem', position: 4, name: `${specName} ${cityName}`, item: `https://www.advocaatvinder.nl/advocaten/${city}/${specialty}` },
        ],
    };

    const itemListJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: `${specName} Advocaten in ${cityName}`,
        description: `Overzicht van ${total}+ ${specName.toLowerCase()} advocaten in ${cityName}.`,
        numberOfItems: total,
        itemListElement: lawyers.slice(0, 10).map((l, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: {
                '@type': 'LegalService',
                name: l.name,
                url: `https://www.advocaatvinder.nl/advocaat/${l.slug}`,
                address: {
                    '@type': 'PostalAddress',
                    addressLocality: cityName,
                    addressCountry: 'NL',
                },
                knowsAbout: specName,
            },
        })),
    };

    const faqJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: `Hoeveel ${specName.toLowerCase()} advocaten zijn er in ${cityName}?`,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: `Er zijn ${total}+ NOvA-geregistreerde ${specName.toLowerCase()} advocaten in ${cityName}. Op AdvocaatVinder kunt u alle specialisten doorzoeken en direct contact opnemen.`,
                },
            },
            {
                '@type': 'Question',
                name: `Wat kost een ${specName.toLowerCase()} advocaat in ${cityName}?`,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: `De kosten van een ${specName.toLowerCase()} advocaat in ${cityName} variëren van €150 tot €300 per uur, afhankelijk van ervaring en complexiteit. Bij een laag inkomen kunt u in aanmerking komen voor gesubsidieerde rechtsbijstand (pro deo).`,
                },
            },
            {
                '@type': 'Question',
                name: `Hoe kies ik de beste ${specName.toLowerCase()} advocaat in ${cityName}?`,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: `Vergelijk ${total}+ specialisten op AdvocaatVinder. Let op: ervaring in ${specName.toLowerCase()}, NOvA-registratie, en bereikbaarheid. Veel advocaten bieden een gratis intakegesprek aan.`,
                },
            },
            {
                '@type': 'Question',
                name: `Wat doet een ${specName.toLowerCase()} advocaat?`,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: `${spec.description} In ${cityName} zijn er ${total}+ gespecialiseerde advocaten die u kunnen bijstaan.`,
                },
            },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

            <div style={{ minHeight: '100vh', background: '#F5F3EE', fontFamily: "var(--font-space-grotesk)" }}>
                {/* ── Top Bar ── */}
                <header style={{ background: '#111111', position: 'sticky', top: 0, zIndex: 40, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 20px', height: 56, display: 'flex', alignItems: 'center', gap: 16 }}>
                        <Link href={`/advocaten/${city}`} style={{ color: 'rgba(232,228,221,0.5)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontFamily: "var(--font-space-mono)" }}>
                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" /></svg>
                            Advocaten {cityName}
                        </Link>
                        <Link href="/" style={{ marginLeft: 'auto', color: '#E8E4DD', textDecoration: 'none', fontWeight: 700, fontSize: 15, fontFamily: "var(--font-space-grotesk)" }}>
                            AdvocaatVinder
                        </Link>
                    </div>
                </header>

                {/* ── Hero ── */}
                <section style={{
                    background: '#111111', padding: '48px 20px 56px', textAlign: 'center',
                    borderBottom: '3px solid #E63B2E',
                }}>
                    <div style={{ fontSize: 40, marginBottom: 12 }}>{spec.icon}</div>
                    <p style={{
                        margin: '0 0 6px', fontFamily: "var(--font-space-mono)", fontSize: 11,
                        color: 'rgba(232,228,221,0.35)', letterSpacing: '0.12em', textTransform: 'uppercase',
                    }}>
                        {cityCfg?.province || 'Nederland'} · {total.toLocaleString('nl')} specialisten
                    </p>
                    <h1 style={{
                        margin: '0 0 8px', fontSize: 'clamp(28px, 4.5vw, 48px)', fontWeight: 800,
                        color: '#E8E4DD', lineHeight: 1.1, letterSpacing: '-0.03em',
                    }}>
                        <span style={{ color: '#E63B2E', fontFamily: "var(--font-dm-serif)", fontStyle: 'italic', fontWeight: 400 }}>{specName}</span> Advocaat{' '}
                        <span style={{ color: '#E8E4DD' }}>{cityName}</span>
                    </h1>
                    <p style={{
                        margin: '0 auto', maxWidth: 560, fontSize: 15, color: 'rgba(232,228,221,0.5)', lineHeight: 1.6,
                    }}>
                        {spec.description}
                    </p>

                    {/* ── Breadcrumb navigation ── */}
                    <nav style={{ marginTop: 24, display: 'flex', justifyContent: 'center', gap: 6, flexWrap: 'wrap', fontSize: 12, fontFamily: "var(--font-space-mono)" }}>
                        <Link href="/advocaten" style={{ color: 'rgba(232,228,221,0.35)', textDecoration: 'none' }}>Alle advocaten</Link>
                        <span style={{ color: 'rgba(232,228,221,0.2)' }}>›</span>
                        <Link href={`/advocaten/${city}`} style={{ color: 'rgba(232,228,221,0.35)', textDecoration: 'none' }}>{cityName}</Link>
                        <span style={{ color: 'rgba(232,228,221,0.2)' }}>›</span>
                        <span style={{ color: '#E63B2E' }}>{specName}</span>
                    </nav>
                </section>

                <main style={{ maxWidth: 1280, margin: '0 auto', padding: '32px 20px 80px' }}>

                    {/* ── Lawyer Grid ── */}
                    <h2 style={{ margin: '0 0 16px', fontSize: 18, fontWeight: 700, letterSpacing: '-0.02em', color: '#111111' }}>
                        {specName} advocaten in {cityName}
                    </h2>
                    <p style={{ margin: '0 0 16px', fontFamily: "var(--font-space-mono)", fontSize: 11, color: 'rgba(17,17,17,0.4)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                        {total.toLocaleString('nl')} specialisten — top {Math.min(lawyers.length, 48)} getoond
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 16 }}>
                        {lawyers.map(l => {
                            const lawyerCity = extractCity(l.bezoekadres) || l.arrondissement || '';
                            const fields = parseFields(l.rechtsgebieden);
                            const { bg: avatarBg, text: avatarText } = getAvatarStyle(l.name || '');
                            const initials = getInitials(l.name || '');

                            return (
                                <article key={l.id} style={{
                                    background: 'white', borderRadius: 20, border: '1px solid rgba(17,17,17,0.07)',
                                    overflow: 'hidden', display: 'flex', flexDirection: 'column',
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, padding: '20px 20px 0' }}>
                                        <div style={{
                                            width: 56, height: 56, borderRadius: 14, flexShrink: 0,
                                            background: avatarBg, display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            fontSize: 18, fontWeight: 700, color: avatarText,
                                            boxShadow: `0 4px 12px ${avatarBg}55`,
                                        }}>
                                            {initials}
                                        </div>
                                        <div style={{ flex: 1, minWidth: 0 }}>
                                            <Link href={`/advocaat/${l.slug}`} style={{ textDecoration: 'none' }}>
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
                            <Link href={`/advocaten?stad=${encodeURIComponent(cityName)}`} style={{
                                background: '#111111', color: '#E8E4DD', borderRadius: 100,
                                padding: '14px 36px', textDecoration: 'none', fontWeight: 600, fontSize: 14,
                                display: 'inline-flex', alignItems: 'center', gap: 8,
                            }}>
                                Bekijk alle {total.toLocaleString('nl')} advocaten
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
                            {specName} advocaat vinden in {cityName}
                        </h2>
                        <div style={{ color: 'rgba(17,17,17,0.6)', lineHeight: 1.8, fontSize: 14 }}>
                            <p style={{ margin: '0 0 12px' }}>
                                Zoekt u een gespecialiseerde {specName.toLowerCase()} advocaat in {cityName}? Op AdvocaatVinder vindt u {total}+ NOvA-geregistreerde
                                {' '}{specName.toLowerCase()} specialisten in {cityName}{cityCfg ? `, ${cityCfg.province}` : ''}.
                            </p>
                            <p style={{ margin: '0 0 12px' }}>
                                {spec.description} Al onze vermelde advocaten zijn ingeschreven bij de Nederlandse Orde van Advocaten (NOvA),
                                wat garandeert dat zij voldoen aan de strengste kwaliteitseisen van de Nederlandse advocatuur.
                            </p>
                            <p style={{ margin: '0 0 12px' }}>
                                De kosten van een {specName.toLowerCase()} advocaat in {cityName} variëren doorgaans van €150 tot €300 per uur.
                                Veel advocaten bieden een gratis intakegesprek aan zodat u vrijblijvend uw situatie kunt bespreken.
                                Bij een laag inkomen kunt u in aanmerking komen voor gesubsidieerde rechtsbijstand (pro deo / toevoeging).
                            </p>
                            <p style={{ margin: 0 }}>
                                Vergelijk advocaten op basis van specialisatie, ervaring en bereikbaarheid. Neem direct contact op via
                                telefoon of e-mail voor een persoonlijke kennismaking.
                            </p>
                        </div>
                    </section>

                    {/* ── Internal Links: Other specialties in city ── */}
                    <section style={{ marginTop: 40 }}>
                        <h2 style={{ margin: '0 0 16px', fontSize: 16, fontWeight: 700, color: 'rgba(17,17,17,0.6)' }}>
                            Andere rechtsgebieden in {cityName}
                        </h2>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                            {otherSpecialties.map(([slug, sp]) => (
                                <Link key={slug} href={`/advocaten/${city}/${slug}`} style={{
                                    background: 'white', border: '1px solid rgba(17,17,17,0.1)',
                                    borderRadius: 100, padding: '8px 18px', fontSize: 13,
                                    textDecoration: 'none', color: '#111111', fontWeight: 500,
                                    transition: 'all 0.15s', display: 'flex', alignItems: 'center', gap: 6,
                                }}>
                                    <span>{sp.icon}</span> {sp.name}
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* ── Internal Links: Same specialty in other cities ── */}
                    <section style={{ marginTop: 32 }}>
                        <h2 style={{ margin: '0 0 16px', fontSize: 16, fontWeight: 700, color: 'rgba(17,17,17,0.6)' }}>
                            {specName} advocaat in andere steden
                        </h2>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                            {otherCities.map(([slug]) => (
                                <Link key={slug} href={`/advocaten/${slug}/${specialty}`} style={{
                                    background: 'white', border: '1px solid rgba(17,17,17,0.1)',
                                    borderRadius: 100, padding: '8px 18px', fontSize: 13,
                                    textDecoration: 'none', color: '#111111', fontWeight: 500,
                                    transition: 'all 0.15s',
                                }}>
                                    {displayCityName(slug)}
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* ── Back links ── */}
                    <section style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                        <Link href={`/advocaten/${city}`} style={{
                            background: '#111111', color: '#E8E4DD', borderRadius: 100,
                            padding: '10px 24px', textDecoration: 'none', fontSize: 13, fontWeight: 600,
                            display: 'inline-flex', alignItems: 'center', gap: 6,
                        }}>
                            ← Alle advocaten in {cityName}
                        </Link>
                        <Link href={`/advocaten/rechtsgebied/${specialty}`} style={{
                            background: 'white', color: '#111111', borderRadius: 100,
                            padding: '10px 24px', textDecoration: 'none', fontSize: 13, fontWeight: 600,
                            border: '1px solid rgba(17,17,17,0.15)',
                            display: 'inline-flex', alignItems: 'center', gap: 6,
                        }}>
                            {spec.icon} Alle {specName.toLowerCase()} advocaten
                        </Link>
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
