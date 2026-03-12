'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// ─── Types ─────────────────────────────────────────────────────────────────────
type CityData = { slug: string; name: string; count: number };
type FeaturedLawyer = {
  slug: string; name: string; city: string;
  fields: string[]; foto_url: string | null;
};
type HomeClientProps = {
  cities: CityData[];
  totalLawyers: number;
  featuredLawyers: FeaturedLawyer[];
};

// ─── Data ──────────────────────────────────────────────────────────────────────

const POPULAR_SEARCHES = [
  { label: 'Familierecht Amsterdam', href: '/advocaten/amsterdam' },
  { label: 'Strafrecht Rotterdam', href: '/advocaten/rotterdam' },
  { label: 'Arbeidsrecht Den Haag', href: '/advocaten/den-haag' },
  { label: 'Ondernemingsrecht Utrecht', href: '/advocaten/utrecht' },
  { label: 'Huurrecht Eindhoven', href: '/advocaten/eindhoven' },
  { label: 'Letselschade Groningen', href: '/advocaten/groningen' },
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

const ROTATING_WORDS = ['advocaat', 'jurist', 'raadsman', 'specialist'];

// ─── Helper: avatar style ──────────────────────────────────────────────────────
function getInitials(name: string): string {
  return name.split(/\s+/).filter(Boolean).map(w => w[0]).slice(0, 2).join('').toUpperCase();
}
function getAvatarBg(name: string): string {
  const colors = ['#3B82F6','#8B5CF6','#EC4899','#F97316','#10B981','#6366F1','#EF4444','#14B8A6','#F59E0B','#06B6D4'];
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return colors[Math.abs(hash) % colors.length];
}

// Photo validation — reject junk images
function isValidPhoto(url: string | null): boolean {
  if (!url) return false;
  const lower = url.toLowerCase();
  if (lower.startsWith('data:') || lower.includes('.svg') || lower.includes('.gif')) return false;
  const junk = ['cookie','loading','logo','icon','favicon','footer','banner','placeholder','default','template','shutterstock'];
  if (junk.some(p => lower.includes(p))) return false;
  if (!lower.startsWith('https://')) return false;
  const ok = ['.jpg','.jpeg','.png','.webp','wixstatic.com','squarespace-cdn.com','googleusercontent.com'];
  return ok.some(p => lower.includes(p));
}

// ─── Client Component ──────────────────────────────────────────────────────────
export default function HomeClient({ cities, totalLawyers, featuredLawyers }: HomeClientProps) {
  const router = useRouter();
  const [searchName, setSearchName] = useState('');
  const [searchCity, setSearchCity] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // Rotate headline word
  useEffect(() => {
    const timer = setInterval(() => setWordIndex(i => (i + 1) % ROTATING_WORDS.length), 3000);
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
    const citySlug = searchCity.trim().toLowerCase().replace(/\s+/g, '-');
    const nameQ = searchName.trim();

    if (citySlug && nameQ) {
      router.push(`/advocaten/${citySlug}?q=${encodeURIComponent(nameQ)}`);
    } else if (citySlug) {
      router.push(`/advocaten/${citySlug}`);
    } else if (nameQ) {
      router.push(`/advocaten?q=${encodeURIComponent(nameQ)}`);
    } else {
      router.push('/advocaten');
    }
  };

  const totalFormatted = totalLawyers.toLocaleString('nl');

  return (
    <div style={{ minHeight: '100vh', background: '#111111', fontFamily: "var(--font-space-grotesk)", display: 'flex', flexDirection: 'column' }}>

      {/* ── Navbar ── */}
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
          <Link href="/advocaten" className="nav-cta">Zoek nu</Link>
        </nav>
      </header>

      {/* ── Hero Section ── */}
      <main style={{
        flex: 1, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '120px 24px 60px', textAlign: 'center',
        minHeight: '100dvh',
      }}>
        {/* Trust badge */}
        <div className="trust-badge">
          <span className="pulse-dot" style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
          {totalFormatted} NOvA-geregistreerde advocaten
        </div>

        {/* Headline with rotating word */}
        <h1 style={{ margin: '24px 0 0', fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 800, color: '#E8E4DD', lineHeight: 1.05, letterSpacing: '-0.04em' }}>
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

        <p style={{ margin: '0 0 36px', fontSize: 17, color: 'rgba(232,228,221,0.5)', maxWidth: 520, lineHeight: 1.6 }}>
          De grootste onafhankelijke gids van Nederlandse advocaten. Zoek gratis op naam, stad of rechtsgebied.
        </p>

        {/* ── Search Bar ── */}
        <form onSubmit={handleSearch} className="search-bar">
          <div className="search-field">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ flexShrink: 0, opacity: 0.4 }}>
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <input value={searchName} onChange={e => setSearchName(e.target.value)} placeholder="Naam of rechtsgebied" className="search-input" />
          </div>
          <div className="search-divider" />
          <div className="search-field">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" style={{ flexShrink: 0, opacity: 0.4 }}>
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <input value={searchCity} onChange={e => setSearchCity(e.target.value)} placeholder="Stad (bijv. Amsterdam)" className="search-input" />
          </div>
          <button type="submit" className="search-button">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            Zoeken
          </button>
        </form>

        {/* Popular pills */}
        <div style={{ marginTop: 20, display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', maxWidth: 640 }}>
          <span style={{ fontSize: 11, color: 'rgba(232,228,221,0.3)', fontFamily: "var(--font-space-mono)", lineHeight: '28px', whiteSpace: 'nowrap' }}>
            Populair:
          </span>
          {POPULAR_SEARCHES.map(s => (
            <Link key={s.label} href={s.href} className="popular-pill">{s.label}</Link>
          ))}
        </div>

        {/* Trust Stats */}
        <div style={{ marginTop: 56, display: 'flex', gap: 40, flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { icon: '⚖️', n: `${totalFormatted}`, label: 'advocaten' },
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
           ── Featured Lawyers ──
         ══════════════════════════════════════════════════════════════════════ */}
      {featuredLawyers.length > 0 && (
        <section style={{ padding: '64px 24px 0', maxWidth: 960, margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 24, flexWrap: 'wrap', gap: 8 }}>
            <div>
              <h2 style={{ margin: '0 0 4px', fontSize: 22, fontWeight: 700, color: '#E8E4DD', letterSpacing: '-0.02em' }}>Uitgelichte advocaten</h2>
              <p style={{ margin: 0, fontSize: 13, color: 'rgba(232,228,221,0.35)', fontFamily: "var(--font-space-mono)" }}>Recent toegevoegd met profielfoto</p>
            </div>
            <Link href="/advocaten" style={{ fontSize: 13, color: '#E63B2E', textDecoration: 'none', fontWeight: 600, fontFamily: "var(--font-space-mono)" }}>
              Alle advocaten →
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 14 }}>
            {featuredLawyers.map(l => {
              const hasPhoto = isValidPhoto(l.foto_url);
              const bg = getAvatarBg(l.name);
              const initials = getInitials(l.name);
              return (
                <Link key={l.slug} href={`/advocaat/${l.slug}`} className="featured-card">
                  {hasPhoto ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={l.foto_url!} alt={l.name} style={{ width: 52, height: 52, borderRadius: 14, objectFit: 'cover', flexShrink: 0 }} />
                  ) : (
                    <div style={{ width: 52, height: 52, borderRadius: 14, flexShrink: 0, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 700, color: 'white' }}>
                      {initials}
                    </div>
                  )}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#E8E4DD', lineHeight: 1.3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{l.name}</div>
                    <div style={{ fontSize: 11, color: 'rgba(232,228,221,0.4)', fontFamily: "var(--font-space-mono)", marginTop: 2, display: 'flex', alignItems: 'center', gap: 4 }}>
                      <svg width="10" height="10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                      {l.city}
                    </div>
                    {l.fields.length > 0 && (
                      <div style={{ fontSize: 10, color: 'rgba(232,228,221,0.3)', fontFamily: "var(--font-space-mono)", marginTop: 4, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {l.fields.slice(0, 2).join(' · ')}
                      </div>
                    )}
                  </div>
                  <span style={{ fontSize: 10, fontFamily: "var(--font-space-mono)", background: 'rgba(22,163,74,0.1)', color: '#22c55e', padding: '2px 7px', borderRadius: 100, border: '1px solid rgba(22,163,74,0.2)', fontWeight: 700, flexShrink: 0 }}>
                    ✓ NOvA
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* ── Why AdvocaatVinder? ── */}
      <section style={{ padding: '64px 24px', background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: 48 }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ margin: '0 0 8px', fontSize: 13, fontFamily: "var(--font-space-mono)", color: '#E63B2E', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, textAlign: 'center' }}>
            Waarom AdvocaatVinder
          </h2>
          <p style={{ margin: '0 0 40px', fontSize: 28, fontWeight: 700, color: '#E8E4DD', textAlign: 'center', letterSpacing: '-0.02em', lineHeight: 1.3 }}>
            De snelste weg naar juridische hulp
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {[
              { icon: '🔍', title: 'Zoek & Vergelijk', desc: `Doorzoek ${totalFormatted} advocaten op naam, stad of rechtsgebied. Vergelijk profielen en kies met vertrouwen.` },
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

      {/* ── Rechtsgebieden ── */}
      <section style={{ padding: '64px 24px 0', maxWidth: 960, margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 24, flexWrap: 'wrap', gap: 8 }}>
          <div>
            <h2 style={{ margin: '0 0 4px', fontSize: 22, fontWeight: 700, color: '#E8E4DD', letterSpacing: '-0.02em' }}>Rechtsgebieden</h2>
            <p style={{ margin: 0, fontSize: 13, color: 'rgba(232,228,221,0.35)', fontFamily: "var(--font-space-mono)" }}>Zoek op specialisatie</p>
          </div>
          <Link href="/advocaten" style={{ fontSize: 13, color: '#E63B2E', textDecoration: 'none', fontWeight: 600, fontFamily: "var(--font-space-mono)" }}>Alle rechtsgebieden →</Link>
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

      {/* ── Advocaten per Stad (REAL counts from Supabase) ── */}
      <section style={{ padding: '56px 24px 0', maxWidth: 960, margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 20, flexWrap: 'wrap', gap: 8 }}>
          <div>
            <h2 style={{ margin: '0 0 4px', fontSize: 22, fontWeight: 700, color: '#E8E4DD', letterSpacing: '-0.02em' }}>Advocaten per stad</h2>
            <p style={{ margin: 0, fontSize: 13, color: 'rgba(232,228,221,0.35)', fontFamily: "var(--font-space-mono)" }}>Vind een advocaat bij u in de buurt</p>
          </div>
          <Link href="/advocaten" style={{ fontSize: 13, color: '#E63B2E', textDecoration: 'none', fontWeight: 600, fontFamily: "var(--font-space-mono)" }}>Alle steden →</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 10 }}>
          {cities.map(c => (
            <Link key={c.slug} href={`/advocaten/${c.slug}`} className="city-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg width="14" height="14" fill="rgba(232,228,221,0.4)" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span style={{ fontSize: 14, fontWeight: 600, color: '#E8E4DD' }}>{c.name}</span>
              </div>
              <span style={{ fontSize: 11, fontFamily: "var(--font-space-mono)", color: 'rgba(232,228,221,0.35)' }}>
                {c.count.toLocaleString('nl')}
              </span>
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
          <Link href="/blog" style={{ fontSize: 13, color: '#E63B2E', textDecoration: 'none', fontWeight: 600, fontFamily: "var(--font-space-mono)" }}>Alle artikelen →</Link>
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
