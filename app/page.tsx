'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

// ─── FAQ + BreadcrumbList JSON-LD for Homepage SEO ─────────────────────────────
const homepageJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.advocaatvinder.nl',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Hoe vind ik een goede advocaat in Nederland?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Via AdvocaatVinder kunt u zoeken door meer dan 18.670 NOvA-geregistreerde advocaten in Nederland. Filter op rechtsgebied (zoals familierecht, arbeidsrecht of strafrecht), stad, of naam om de juiste advocaat te vinden. Alle advocaten op AdvocaatVinder zijn geregistreerd bij de Nederlandse Orde van Advocaten.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wat kost een advocaat per uur in Nederland?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Het uurtarief van een advocaat in Nederland varieert doorgaans tussen €150 en €350 per uur, afhankelijk van de ervaring, het rechtsgebied en de locatie. Gespecialiseerde advocaten in niche-gebieden zoals ondernemingsrecht of letselschade kunnen hogere tarieven hanteren. Voor mensen met een laag inkomen is gesubsidieerde rechtsbijstand (pro deo) beschikbaar.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wat is een pro deo advocaat en hoe vraag ik er een aan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Een pro deo advocaat (ook wel toevoegingsadvocaat) is een advocaat die juridische bijstand verleent met gesubsidieerde kosten via de Raad voor Rechtsbijstand. Iedereen met een inkomen onder een bepaalde grens kan hiervoor in aanmerking komen. U kunt via het Juridisch Loket of rechtstreeks bij een advocaat een toevoeging aanvragen.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wat zijn de meest voorkomende rechtsgebieden?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'De meest voorkomende rechtsgebieden in Nederland zijn: familierecht (echtscheiding, voogdij), arbeidsrecht (ontslag, arbeidsovereenkomsten), strafrecht, ondernemingsrecht, huurrecht, letselschade, bestuursrecht en vreemdelingenrecht. Op AdvocaatVinder kunt u filteren op elk van deze specialisaties.',
        },
      },
      {
        '@type': 'Question',
        name: 'Hoeveel advocaten zijn er in Nederland?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Er zijn meer dan 18.670 advocaten geregistreerd bij de Nederlandse Orde van Advocaten (NOvA), verspreid over 11 arrondissementen in heel Nederland. AdvocaatVinder biedt een volledig overzicht van al deze geregistreerde advocaten.',
        },
      },
      {
        '@type': 'Question',
        name: 'Kan ik een advocaat zoeken op specialisatie?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja, op AdvocaatVinder kunt u advocaten filteren op hun rechtsgebied of specialisatie. Veelgebruikte filters zijn onder andere familierecht, arbeidsrecht, strafrecht, ondernemingsrecht en letselschade. U kunt ook zoeken op stad of arrondissement om een advocaat bij u in de buurt te vinden.',
        },
      },
    ],
  },
];

// ─── Data ──────────────────────────────────────────────────────────────────────

const POPULAR_SEARCHES = [
  { label: 'Familierecht Amsterdam', href: '/advocaten/amsterdam?q=familierecht' },
  { label: 'Strafrecht Rotterdam', href: '/advocaten/rotterdam?q=strafrecht' },
  { label: 'Arbeidsrecht Den Haag', href: '/advocaten/den-haag?q=arbeidsrecht' },
  { label: 'Ondernemingsrecht Utrecht', href: '/advocaten/utrecht?q=ondernemingsrecht' },
  { label: 'Huurrecht Eindhoven', href: '/advocaten/eindhoven?q=huurrecht' },
  { label: 'Letselschade Groningen', href: '/advocaten/groningen?q=letselschade' },
];

const CITIES = [
  { slug: 'amsterdam', name: 'Amsterdam', count: '2.800+' },
  { slug: 'rotterdam', name: 'Rotterdam', count: '1.400+' },
  { slug: 'den-haag', name: 'Den Haag', count: '2.100+' },
  { slug: 'utrecht', name: 'Utrecht', count: '1.200+' },
  { slug: 'eindhoven', name: 'Eindhoven', count: '450+' },
  { slug: 'groningen', name: 'Groningen', count: '380+' },
  { slug: 'tilburg', name: 'Tilburg', count: '300+' },
  { slug: 'breda', name: 'Breda', count: '320+' },
  { slug: 'arnhem', name: 'Arnhem', count: '500+' },
  { slug: 'maastricht', name: 'Maastricht', count: '350+' },
  { slug: 'haarlem', name: 'Haarlem', count: '280+' },
  { slug: 'nijmegen', name: 'Nijmegen', count: '260+' },
];

const SPECIALTIES = [
  { slug: 'familierecht', name: 'Familierecht', icon: '👨‍👩‍👧‍👦', desc: 'Echtscheiding, voogdij, alimentatie' },
  { slug: 'arbeidsrecht', name: 'Arbeidsrecht', icon: '💼', desc: 'Ontslag, contracten, arbeidsgeschillen' },
  { slug: 'strafrecht', name: 'Strafrecht', icon: '⚖️', desc: 'Verdediging, aangifte, strafzaken' },
  { slug: 'ondernemingsrecht', name: 'Ondernemingsrecht', icon: '🏢', desc: 'Bedrijfsrecht, fusies, contracten' },
  { slug: 'huurrecht', name: 'Huurrecht', icon: '🏠', desc: 'Huurgeschillen, ontruiming, huurprijs' },
  { slug: 'bestuursrecht', name: 'Bestuursrecht', icon: '🏛️', desc: 'Bezwaar, vergunningen, overheid' },
  { slug: 'letselschaderecht', name: 'Letselschade', icon: '🩹', desc: 'Schadevergoeding, ongevallen' },
  { slug: 'immigratierecht', name: 'Immigratierecht', icon: '🌍', desc: 'Verblijfsvergunning, asiel, IND' },
  { slug: 'erfrecht', name: 'Erfrecht', icon: '📜', desc: 'Testament, nalatenschap, verdeling' },
  { slug: 'belastingrecht', name: 'Belastingrecht', icon: '🧾', desc: 'Belastingzaken, bezwaar, advies' },
];

const BLOGS = [
  { slug: 'wat-kost-een-advocaat', title: 'Wat kost een advocaat per uur?', tag: 'Kosten' },
  { slug: 'gesubsidieerde-rechtsbijstand', title: 'Gesubsidieerde rechtsbijstand uitleg', tag: 'Rechtsbijstand' },
  { slug: 'pro-deo-advocaat', title: 'Pro deo advocaat: uw rechten', tag: 'Rechtsbijstand' },
  { slug: 'no-cure-no-pay-advocaat', title: 'No cure no pay: hoe werkt het?', tag: 'Kosten' },
  { slug: 'advocaat-kiezen-tips', title: '7 tips voor de juiste advocaat', tag: 'Tips' },
];

// ─── Rotating headline words ──────────────────────────────────────────────────
const ROTATING_WORDS = ['advocaat', 'jurist', 'raadsman', 'specialist'];

export default function HomePage() {
  const router = useRouter();
  const [searchName, setSearchName] = useState('');
  const [searchCity, setSearchCity] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // Rotate headline word
  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex(i => (i + 1) % ROTATING_WORDS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Navbar scroll morph
  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchName.trim()) params.set('naam', searchName.trim());
    const citySlug = searchCity.trim().toLowerCase().replace(/\s+/g, '-');
    if (citySlug) {
      router.push(`/advocaten/${citySlug}${params.toString() ? '?' + params.toString() : ''}`);
    } else {
      router.push(`/advocaten${params.toString() ? '?' + params.toString() : ''}`);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#111111', fontFamily: "var(--font-space-grotesk)", display: 'flex', flexDirection: 'column' }}>

      {/* FAQ + BreadcrumbList structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageJsonLd) }}
      />

      {/* ── Navbar (Floating Island — morphs on scroll) ── */}
      <header style={{
        position: 'fixed', top: 16, left: '50%', transform: 'translateX(-50%)',
        zIndex: 50, padding: '0 24px', height: 52,
        display: 'flex', alignItems: 'center', gap: 24,
        borderRadius: 100,
        background: isScrolled ? 'rgba(17,17,17,0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
        border: isScrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
        transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        width: 'fit-content', maxWidth: 'calc(100vw - 32px)',
      }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: 16, color: '#E8E4DD', textDecoration: 'none', letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>
          AdvocaatVinder
        </Link>
        <nav style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
          <Link href="/advocaten" className="nav-link">Advocaten</Link>
          <Link href="/blog" className="nav-link">Blog</Link>
          <Link href="/advocaten" className="nav-cta">
            Zoek nu
          </Link>
        </nav>
      </header>

      {/* ── Hero Section — Search-First ── */}
      <main style={{
        flex: 1, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '120px 24px 60px', textAlign: 'center',
        minHeight: '100dvh',
      }}>
        {/* Trust badge */}
        <div className="trust-badge">
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} className="pulse-dot" />
          18.670+ NOvA-geregistreerde advocaten
        </div>

        {/* Headline with rotating word */}
        <h1 style={{
          margin: '24px 0 0', fontSize: 'clamp(36px, 6vw, 72px)',
          fontWeight: 800, color: '#E8E4DD', lineHeight: 1.05,
          letterSpacing: '-0.04em',
        }}>
          Vind de juiste
        </h1>
        <h1 style={{
          margin: '0 0 24px', fontSize: 'clamp(36px, 6vw, 72px)',
          fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.04em',
          fontFamily: "var(--font-dm-serif)", fontStyle: 'italic',
          position: 'relative', overflow: 'hidden', height: 'clamp(44px, 7.5vw, 88px)',
        }}>
          <span key={wordIndex} className="rotating-word" style={{ color: '#E63B2E' }}>
            {ROTATING_WORDS[wordIndex]}.
          </span>
        </h1>

        <p style={{
          margin: '0 0 36px', fontSize: 17, color: 'rgba(232,228,221,0.5)',
          maxWidth: 520, lineHeight: 1.6,
        }}>
          De grootste onafhankelijke gids van Nederlandse advocaten. Zoek gratis op naam, stad of rechtsgebied.
        </p>

        {/* ── Search Bar (Avvo-style dual input) ── */}
        <form onSubmit={handleSearch} className="search-bar">
          <div className="search-field">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ flexShrink: 0, opacity: 0.4 }}>
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <input
              value={searchName}
              onChange={e => setSearchName(e.target.value)}
              placeholder="Naam of rechtsgebied"
              className="search-input"
            />
          </div>
          <div className="search-divider" />
          <div className="search-field">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" style={{ flexShrink: 0, opacity: 0.4 }}>
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <input
              value={searchCity}
              onChange={e => setSearchCity(e.target.value)}
              placeholder="Stad (bijv. Amsterdam)"
              className="search-input"
            />
          </div>
          <button type="submit" className="search-button">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            Zoeken
          </button>
        </form>

        {/* ── Popular Searches (Clutch-style pills) ── */}
        <div style={{ marginTop: 20, display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', maxWidth: 640 }}>
          <span style={{ fontSize: 11, color: 'rgba(232,228,221,0.3)', fontFamily: "var(--font-space-mono)", lineHeight: '28px', whiteSpace: 'nowrap' }}>
            Populair:
          </span>
          {POPULAR_SEARCHES.map(s => (
            <Link key={s.label} href={s.href} className="popular-pill">
              {s.label}
            </Link>
          ))}
        </div>

        {/* ── Trust Stats Row ── */}
        <div style={{ marginTop: 56, display: 'flex', gap: 40, flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { icon: '⚖️', n: '18.670+', label: 'advocaten' },
            { icon: '✓', n: '100%', label: 'NOvA-geregistreerd' },
            { icon: '🏛️', n: '19', label: 'arrondissementen' },
            { icon: '🆓', n: 'Gratis', label: 'altijd kosteloos' },
          ].map(({ icon, n, label }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 28, fontWeight: 800, color: '#E8E4DD', letterSpacing: '-0.03em', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                <span style={{ fontSize: 20 }}>{icon}</span> {n}
              </div>
              <div style={{ fontSize: 11, color: 'rgba(232,228,221,0.35)', fontFamily: "var(--font-space-mono)", marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</div>
            </div>
          ))}
        </div>
      </main>

      {/* ══════════════════════════════════════════════════════════════════════
           ── Below-The-Fold Content ──
         ══════════════════════════════════════════════════════════════════════ */}

      {/* ── Why AdvocaatVinder? (Trust Section) ── */}
      <section style={{ padding: '64px 24px', background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ margin: '0 0 8px', fontSize: 13, fontFamily: "var(--font-space-mono)", color: '#E63B2E', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, textAlign: 'center' }}>
            Waarom AdvocaatVinder
          </h2>
          <p style={{ margin: '0 0 40px', fontSize: 28, fontWeight: 700, color: '#E8E4DD', textAlign: 'center', letterSpacing: '-0.02em', lineHeight: 1.3 }}>
            De snelste weg naar juridische hulp
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {[
              { icon: '🔍', title: 'Zoek & Vergelijk', desc: 'Doorzoek 18.670+ advocaten op naam, stad of rechtsgebied. Vergelijk profielen en kies met vertrouwen.' },
              { icon: '🛡️', title: '100% NOvA-geregistreerd', desc: 'Alle advocaten zijn geregistreerd bij de Nederlandse Orde van Advocaten. Gegarandeerd betrouwbaar.' },
              { icon: '💰', title: 'Altijd gratis', desc: 'AdvocaatVinder is en blijft gratis voor iedereen. Geen verborgen kosten, geen registratie vereist.' },
            ].map(f => (
              <div key={f.title} className="feature-card">
                <span style={{ fontSize: 32, marginBottom: 12, display: 'block' }}>{f.icon}</span>
                <h3 style={{ margin: '0 0 8px', fontSize: 17, fontWeight: 700, color: '#E8E4DD', letterSpacing: '-0.01em' }}>{f.title}</h3>
                <p style={{ margin: 0, fontSize: 14, color: 'rgba(232,228,221,0.5)', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Rechtsgebieden (Specialty Cards) ── */}
      <section style={{ padding: '64px 24px 0', maxWidth: 960, margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 24, flexWrap: 'wrap', gap: 8 }}>
          <div>
            <h2 style={{ margin: '0 0 4px', fontSize: 22, fontWeight: 700, color: '#E8E4DD', letterSpacing: '-0.02em' }}>Rechtsgebieden</h2>
            <p style={{ margin: 0, fontSize: 13, color: 'rgba(232,228,221,0.35)', fontFamily: "var(--font-space-mono)" }}>Zoek op specialisatie</p>
          </div>
          <Link href="/advocaten" style={{ fontSize: 13, color: '#E63B2E', textDecoration: 'none', fontWeight: 600, fontFamily: "var(--font-space-mono)" }}>
            Alle rechtsgebieden →
          </Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12 }}>
          {SPECIALTIES.map(s => (
            <Link key={s.slug} href={`/advocaten/rechtsgebied/${s.slug}`} className="specialty-card">
              <span style={{ fontSize: 28 }}>{s.icon}</span>
              <span style={{ fontSize: 14, fontWeight: 700, color: '#E8E4DD', letterSpacing: '-0.01em' }}>{s.name}</span>
              <span style={{ fontSize: 11, color: 'rgba(232,228,221,0.4)', lineHeight: 1.4 }}>{s.desc}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Advocaten per Stad (City Pills with counts) ── */}
      <section style={{ padding: '56px 24px 0', maxWidth: 960, margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 20, flexWrap: 'wrap', gap: 8 }}>
          <div>
            <h2 style={{ margin: '0 0 4px', fontSize: 22, fontWeight: 700, color: '#E8E4DD', letterSpacing: '-0.02em' }}>Advocaten per stad</h2>
            <p style={{ margin: 0, fontSize: 13, color: 'rgba(232,228,221,0.35)', fontFamily: "var(--font-space-mono)" }}>Vind een advocaat bij u in de buurt</p>
          </div>
          <Link href="/advocaten" style={{ fontSize: 13, color: '#E63B2E', textDecoration: 'none', fontWeight: 600, fontFamily: "var(--font-space-mono)" }}>
            Alle steden →
          </Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 10 }}>
          {CITIES.map(c => (
            <Link key={c.slug} href={`/advocaten/${c.slug}`} className="city-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg width="14" height="14" fill="rgba(232,228,221,0.4)" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span style={{ fontSize: 14, fontWeight: 600, color: '#E8E4DD' }}>{c.name}</span>
              </div>
              <span style={{ fontSize: 11, fontFamily: "var(--font-space-mono)", color: 'rgba(232,228,221,0.35)' }}>{c.count}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Blog Preview ── */}
      <section style={{ padding: '56px 24px 64px', maxWidth: 960, margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 20, flexWrap: 'wrap', gap: 8 }}>
          <div>
            <h2 style={{ margin: '0 0 4px', fontSize: 22, fontWeight: 700, color: '#E8E4DD', letterSpacing: '-0.02em' }}>Juridisch advies</h2>
            <p style={{ margin: 0, fontSize: 13, color: 'rgba(232,228,221,0.35)', fontFamily: "var(--font-space-mono)" }}>Lees onze artikelen over advocaatkosten en rechtsbijstand</p>
          </div>
          <Link href="/blog" style={{ fontSize: 13, color: '#E63B2E', textDecoration: 'none', fontWeight: 600, fontFamily: "var(--font-space-mono)" }}>
            Alle artikelen →
          </Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12 }}>
          {BLOGS.map(a => (
            <Link key={a.slug} href={`/blog/${a.slug}`} className="blog-card">
              <span style={{ fontSize: 10, fontFamily: "var(--font-space-mono)", color: '#E63B2E', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{a.tag}</span>
              <span style={{ fontSize: 14, fontWeight: 600, color: '#E8E4DD', lineHeight: 1.4 }}>{a.title}</span>
              <span style={{ fontSize: 12, color: 'rgba(232,228,221,0.3)', fontFamily: "var(--font-space-mono)" }}>Lees meer →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '24px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: 12,
        background: 'rgba(0,0,0,0.3)',
        borderRadius: '32px 32px 0 0',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <span style={{ fontWeight: 700, fontSize: 14, color: '#E8E4DD' }}>AdvocaatVinder</span>
          <span style={{ fontFamily: "var(--font-space-mono)", fontSize: 11, color: 'rgba(232,228,221,0.25)' }}>
            De grootste onafhankelijke gids van Nederlandse advocaten
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <Link href="/advocaten" style={{ color: 'rgba(232,228,221,0.4)', textDecoration: 'none', fontSize: 12, fontFamily: "var(--font-space-mono)" }}>Advocaten</Link>
          <Link href="/blog" style={{ color: 'rgba(232,228,221,0.4)', textDecoration: 'none', fontSize: 12, fontFamily: "var(--font-space-mono)" }}>Blog</Link>
          <span style={{ fontFamily: "var(--font-space-mono)", fontSize: 11, color: 'rgba(34,197,94,0.7)', display: 'flex', alignItems: 'center', gap: 6 }}>
            <span className="pulse-dot" style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
            Systeem actief
          </span>
        </div>
        <span style={{ fontFamily: "var(--font-space-mono)", fontSize: 11, color: 'rgba(232,228,221,0.15)', width: '100%', textAlign: 'center', marginTop: 8 }}>
          © 2025 AdvocaatVinder — Alle rechten voorbehouden
        </span>
      </footer>
    </div>
  );
}
