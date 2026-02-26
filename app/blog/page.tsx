import Link from 'next/link';
import type { Metadata } from 'next';
import { BLOG_ARTICLES } from '@/lib/blog-data';

export const metadata: Metadata = {
    title: 'Juridisch Blog — Advocaat Tips, Kosten & Rechtshulp | AdvocaatVinder',
    description: 'Lees onze artikelen over advocaatkosten, gesubsidieerde rechtsbijstand, pro deo, en tips voor het kiezen van de juiste advocaat in Nederland.',
    alternates: { canonical: 'https://www.advocaatvinder.nl/blog' },
};

const categoryColors: Record<string, string> = {
    Kosten: '#E63B2E',
    Rechtsbijstand: '#2563eb',
    Tips: '#16a34a',
};

export default function BlogIndex() {
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.advocaatvinder.nl' },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.advocaatvinder.nl/blog' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <div style={{ minHeight: '100vh', background: '#F5F3EE', fontFamily: "var(--font-space-grotesk)" }}>
                {/* ── Top Bar ── */}
                <header style={{ background: '#111111', position: 'sticky', top: 0, zIndex: 40, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 20px', height: 56, display: 'flex', alignItems: 'center', gap: 16 }}>
                        <Link href="/" style={{ color: 'rgba(232,228,221,0.5)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontFamily: "var(--font-space-mono)" }}>
                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" /></svg>
                            Home
                        </Link>
                        <Link href="/" style={{ marginLeft: 'auto', color: '#E8E4DD', textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>
                            AdvocaatVinder
                        </Link>
                    </div>
                </header>

                {/* ── Hero ── */}
                <section style={{
                    background: '#111111', padding: '48px 20px 56px', textAlign: 'center',
                    borderBottom: '3px solid #E63B2E',
                }}>
                    <p style={{
                        margin: '0 0 12px', fontFamily: "var(--font-space-mono)", fontSize: 11,
                        color: 'rgba(232,228,221,0.35)', letterSpacing: '0.12em', textTransform: 'uppercase',
                    }}>
                        Juridisch blog · {BLOG_ARTICLES.length} artikelen
                    </p>
                    <h1 style={{
                        margin: '0 0 8px', fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800,
                        color: '#E8E4DD', lineHeight: 1.1, letterSpacing: '-0.03em',
                    }}>
                        Juridisch <span style={{ color: '#E63B2E', fontFamily: "var(--font-dm-serif)", fontStyle: 'italic', fontWeight: 400 }}>Advies</span>
                    </h1>
                    <p style={{ margin: '0 auto', maxWidth: 520, fontSize: 15, color: 'rgba(232,228,221,0.5)', lineHeight: 1.6 }}>
                        Alles over advocaatkosten, rechtsbijstand en het vinden van de juiste advocaat.
                    </p>
                </section>

                {/* ── Articles Grid ── */}
                <main style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 80px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                        {BLOG_ARTICLES.map((article, i) => (
                            <Link key={article.slug} href={`/blog/${article.slug}`} style={{ textDecoration: 'none' }}>
                                <article style={{
                                    background: 'white', borderRadius: 24,
                                    border: '1px solid rgba(17,17,17,0.07)',
                                    padding: '28px 32px', display: 'flex', gap: 24,
                                    alignItems: 'flex-start', transition: 'all 0.2s',
                                    ...(i === 0 ? { borderLeft: '4px solid #E63B2E' } : {}),
                                }}>
                                    <div style={{
                                        width: 48, height: 48, borderRadius: 14, flexShrink: 0,
                                        background: '#111111', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: 18, fontWeight: 800, color: '#E8E4DD',
                                        fontFamily: "var(--font-space-mono)",
                                    }}>
                                        {String(i + 1).padStart(2, '0')}
                                    </div>
                                    <div style={{ flex: 1, minWidth: 0 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, flexWrap: 'wrap' }}>
                                            <span style={{
                                                fontSize: 10, fontFamily: "var(--font-space-mono)",
                                                background: `${categoryColors[article.category] || '#E63B2E'}15`,
                                                color: categoryColors[article.category] || '#E63B2E',
                                                padding: '3px 10px', borderRadius: 100, fontWeight: 700,
                                                border: `1px solid ${categoryColors[article.category] || '#E63B2E'}30`,
                                            }}>
                                                {article.category}
                                            </span>
                                            <span style={{ fontSize: 11, fontFamily: "var(--font-space-mono)", color: 'rgba(17,17,17,0.35)' }}>
                                                {article.readingTime}
                                            </span>
                                        </div>
                                        <h2 style={{ margin: '0 0 8px', fontSize: 18, fontWeight: 700, color: '#111111', lineHeight: 1.3, letterSpacing: '-0.02em' }}>
                                            {article.title}
                                        </h2>
                                        <p style={{ margin: 0, fontSize: 14, color: 'rgba(17,17,17,0.5)', lineHeight: 1.6 }}>
                                            {article.metaDescription.slice(0, 120)}…
                                        </p>
                                    </div>
                                    <svg width="20" height="20" fill="none" stroke="rgba(17,17,17,0.2)" strokeWidth="2" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: 4 }}>
                                        <path d="M9 18l6-6-6-6" />
                                    </svg>
                                </article>
                            </Link>
                        ))}
                    </div>

                    {/* ── CTA ── */}
                    <section style={{
                        marginTop: 48, background: '#111111', borderRadius: 24,
                        padding: '32px', textAlign: 'center',
                    }}>
                        <h2 style={{ margin: '0 0 12px', fontSize: 22, fontWeight: 700, color: '#E8E4DD' }}>
                            Direct een advocaat zoeken?
                        </h2>
                        <p style={{ margin: '0 0 20px', fontSize: 14, color: 'rgba(232,228,221,0.5)' }}>
                            Doorzoek 18.670+ NOvA-geregistreerde advocaten in Nederland.
                        </p>
                        <Link href="/advocaten" style={{
                            display: 'inline-flex', alignItems: 'center', gap: 8,
                            background: '#E63B2E', color: 'white', borderRadius: 100,
                            padding: '12px 28px', textDecoration: 'none', fontSize: 14, fontWeight: 700,
                        }}>
                            Zoek een advocaat →
                        </Link>
                    </section>
                </main>

                {/* ── Footer ── */}
                <footer style={{
                    background: '#111111', borderTop: '1px solid rgba(255,255,255,0.06)',
                    padding: '20px 32px', display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between', flexWrap: 'wrap', gap: 8,
                }}>
                    <span style={{ fontFamily: "var(--font-space-mono)", fontSize: 11, color: 'rgba(232,228,221,0.2)' }}>© 2025 AdvocaatVinder</span>
                    <span style={{ fontFamily: "var(--font-space-mono)", fontSize: 11, color: 'rgba(34,197,94,0.7)', display: 'flex', alignItems: 'center', gap: 6 }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                        Systeem actief
                    </span>
                </footer>
            </div>
        </>
    );
}
