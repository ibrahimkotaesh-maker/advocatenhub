import Link from 'next/link';

export default function NotFound() {
    return (
        <div style={{ minHeight: '100vh', background: '#111111', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: "var(--font-space-grotesk)", textAlign: 'center', padding: 32 }}>
            <p style={{ fontSize: 11, fontFamily: "var(--font-space-mono)", color: 'rgba(232,228,221,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>404</p>
            <h1 style={{ fontSize: 40, fontWeight: 800, color: '#E8E4DD', margin: '0 0 12px', letterSpacing: '-0.03em' }}>Pagina niet gevonden</h1>
            <p style={{ color: 'rgba(232,228,221,0.4)', marginBottom: 32, fontSize: 15 }}>De advocaat of pagina die u zoekt bestaat niet (meer).</p>
            <Link href="/advocaten" style={{ background: '#E63B2E', color: 'white', borderRadius: 100, padding: '12px 28px', textDecoration: 'none', fontWeight: 700, fontSize: 14 }}>
                Terug naar advocaten
            </Link>
        </div>
    );
}
