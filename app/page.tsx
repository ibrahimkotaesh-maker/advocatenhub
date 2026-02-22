import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', background: '#111111', fontFamily: "var(--font-space-grotesk)", display: 'flex', flexDirection: 'column' }}>

      {/* ── Navbar ── */}
      <header style={{ padding: '0 32px', height: 60, display: 'flex', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <span style={{ fontWeight: 800, fontSize: 18, color: '#E8E4DD', letterSpacing: '-0.02em' }}>AdvocatenHub</span>
        <nav style={{ marginLeft: 'auto', display: 'flex', gap: 24, alignItems: 'center' }}>
          <Link href="/advocaten" style={{ color: 'rgba(232,228,221,0.5)', textDecoration: 'none', fontSize: 13, fontFamily: "var(--font-space-mono)" }}>Advocaten</Link>
        </nav>
      </header>

      {/* ── Hero ── */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '80px 32px', textAlign: 'center' }}>
        <p style={{ margin: '0 0 16px', fontFamily: "var(--font-space-mono)", fontSize: 12, color: 'rgba(232,228,221,0.35)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          Nederland · 18.670+ NOvA-advocaten
        </p>

        <h1 style={{ margin: '0 0 8px', fontSize: 'clamp(42px, 7vw, 88px)', fontWeight: 800, color: '#E8E4DD', lineHeight: 1, letterSpacing: '-0.04em' }}>
          Vind de juiste
        </h1>
        <h1 style={{ margin: '0 0 32px', fontSize: 'clamp(42px, 7vw, 88px)', fontWeight: 400, color: '#E63B2E', lineHeight: 1, letterSpacing: '-0.04em', fontFamily: "var(--font-dm-serif)", fontStyle: 'italic' }}>
          advocaat.
        </h1>

        <p style={{ margin: '0 0 48px', fontSize: 17, color: 'rgba(232,228,221,0.5)', maxWidth: 480, lineHeight: 1.6 }}>
          De grootste onafhankelijke gids van Nederlandse advocaten. Zoek op naam, stad, of rechtsgebied.
        </p>

        <Link href="/advocaten" style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          background: '#E63B2E', color: 'white', borderRadius: 100,
          padding: '16px 36px', textDecoration: 'none',
          fontSize: 15, fontWeight: 700, letterSpacing: '-0.01em',
          transition: 'all 0.2s',
        }}>
          Zoek een advocaat
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </Link>

        {/* ── Stats row ── */}
        <div style={{ marginTop: 80, display: 'flex', gap: 48, flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { n: '18.670+', label: 'advocaten' },
            { n: '100%', label: 'NOvA-geregistreerd' },
            { n: '19', label: 'arrondissementen' },
          ].map(({ n, label }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 32, fontWeight: 800, color: '#E8E4DD', letterSpacing: '-0.03em' }}>{n}</div>
              <div style={{ fontSize: 12, color: 'rgba(232,228,221,0.35)', fontFamily: "var(--font-space-mono)", marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</div>
            </div>
          ))}
        </div>
      </main>

      {/* ── Footer ── */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '20px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
        <span style={{ fontFamily: "var(--font-space-mono)", fontSize: 11, color: 'rgba(232,228,221,0.2)' }}>
          © 2025 AdvocatenHub
        </span>
        <span style={{ fontFamily: "var(--font-space-mono)", fontSize: 11, color: 'rgba(34,197,94,0.7)', display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block', animation: 'pulse 2s infinite' }} />
          Systeem actief
        </span>
      </footer>
    </div>
  );
}
