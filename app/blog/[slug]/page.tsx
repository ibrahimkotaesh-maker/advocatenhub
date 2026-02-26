import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BLOG_ARTICLES } from '@/lib/blog-data';

// ─── Metadata ────────────────────────────────────────────────────────────────
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const article = BLOG_ARTICLES.find(a => a.slug === slug);
    if (!article) return { title: 'Artikel niet gevonden' };

    return {
        title: article.metaTitle,
        description: article.metaDescription,
        openGraph: {
            title: article.metaTitle,
            description: article.metaDescription,
            type: 'article',
            publishedTime: article.publishedAt,
            modifiedTime: article.updatedAt,
        },
        alternates: {
            canonical: `https://www.advocaatvinder.nl/blog/${slug}`,
        },
    };
}

// ─── Static params ───────────────────────────────────────────────────────────
export function generateStaticParams() {
    return BLOG_ARTICLES.map(a => ({ slug: a.slug }));
}

// ─── Page Component ──────────────────────────────────────────────────────────
export default async function ArticlePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const article = BLOG_ARTICLES.find(a => a.slug === slug);
    if (!article) notFound();

    const currentIndex = BLOG_ARTICLES.indexOf(article);
    const otherArticles = BLOG_ARTICLES.filter(a => a.slug !== slug).slice(0, 3);

    // ── JSON-LD ──────────────────────────────────────────────────────────────
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.metaDescription,
        datePublished: article.publishedAt,
        dateModified: article.updatedAt,
        author: {
            '@type': 'Organization',
            name: 'AdvocaatVinder',
            url: 'https://www.advocaatvinder.nl',
        },
        publisher: {
            '@type': 'Organization',
            name: 'AdvocaatVinder',
            url: 'https://www.advocaatvinder.nl',
        },
        mainEntityOfPage: `https://www.advocaatvinder.nl/blog/${slug}`,
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.advocaatvinder.nl' },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.advocaatvinder.nl/blog' },
            { '@type': 'ListItem', position: 3, name: article.title, item: `https://www.advocaatvinder.nl/blog/${slug}` },
        ],
    };

    const faqJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: article.sections
            .filter(s => s.heading.includes('?') || s.heading.toLowerCase().includes('veelgestelde'))
            .flatMap(s => {
                // Extract Q&A pairs from FAQ sections
                const pairs: { '@type': string; name: string; acceptedAnswer: { '@type': string; text: string } }[] = [];
                const lines = s.content.split('\n\n');
                for (let i = 0; i < lines.length; i++) {
                    const line = lines[i].trim();
                    if (line.startsWith('**') && line.endsWith('**')) {
                        const question = line.replace(/\*\*/g, '');
                        const answer = lines[i + 1]?.trim() || '';
                        if (answer) {
                            pairs.push({
                                '@type': 'Question',
                                name: question,
                                acceptedAnswer: { '@type': 'Answer', text: answer },
                            });
                        }
                    }
                }
                return pairs;
            }),
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            {faqJsonLd.mainEntity.length > 0 && (
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            )}

            <div style={{ minHeight: '100vh', background: '#F5F3EE', fontFamily: "var(--font-space-grotesk)" }}>
                {/* ── Top Bar ── */}
                <header style={{ background: '#111111', position: 'sticky', top: 0, zIndex: 40 }}>
                    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 20px', height: 56, display: 'flex', alignItems: 'center', gap: 16 }}>
                        <Link href="/blog" style={{ color: 'rgba(232,228,221,0.5)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontFamily: "var(--font-space-mono)" }}>
                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" /></svg>
                            Blog
                        </Link>
                        <Link href="/" style={{ marginLeft: 'auto', color: '#E8E4DD', textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>
                            AdvocaatVinder
                        </Link>
                    </div>
                </header>

                {/* ── Article Header ── */}
                <section style={{
                    background: '#111111', padding: '40px 20px 48px',
                    borderBottom: '3px solid #E63B2E',
                }}>
                    <div style={{ maxWidth: 720, margin: '0 auto' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                            <span style={{
                                fontSize: 10, fontFamily: "var(--font-space-mono)",
                                background: 'rgba(230,59,46,0.15)', color: '#E63B2E',
                                padding: '4px 12px', borderRadius: 100, fontWeight: 700,
                            }}>
                                {article.category}
                            </span>
                            <span style={{ fontSize: 11, fontFamily: "var(--font-space-mono)", color: 'rgba(232,228,221,0.35)' }}>
                                {article.readingTime} leestijd
                            </span>
                            <span style={{ fontSize: 11, fontFamily: "var(--font-space-mono)", color: 'rgba(232,228,221,0.25)' }}>
                                {new Date(article.publishedAt).toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </span>
                        </div>
                        <h1 style={{
                            margin: 0, fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800,
                            color: '#E8E4DD', lineHeight: 1.15, letterSpacing: '-0.03em',
                        }}>
                            {article.title}
                        </h1>
                    </div>
                </section>

                {/* ── Article Body ── */}
                <main style={{ maxWidth: 720, margin: '0 auto', padding: '40px 20px 64px' }}>
                    {/* Table of Contents */}
                    <nav style={{
                        background: 'white', borderRadius: 20,
                        border: '1px solid rgba(17,17,17,0.07)', padding: '24px 28px', marginBottom: 32,
                    }}>
                        <p style={{
                            margin: '0 0 12px', fontFamily: "var(--font-space-mono)", fontSize: 10,
                            color: 'rgba(17,17,17,0.35)', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700,
                        }}>
                            Inhoudsopgave
                        </p>
                        <ol style={{ margin: 0, padding: '0 0 0 18px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                            {article.sections.map((s, i) => (
                                <li key={i} style={{ fontSize: 14, color: 'rgba(17,17,17,0.6)', lineHeight: 1.5 }}>
                                    <a href={`#section-${i}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        {s.heading}
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </nav>

                    {/* Article Sections */}
                    {article.sections.map((section, i) => (
                        <section key={i} id={`section-${i}`} style={{
                            background: 'white', borderRadius: 20,
                            border: '1px solid rgba(17,17,17,0.07)', padding: '28px 32px', marginBottom: 16,
                        }}>
                            <h2 style={{ margin: '0 0 16px', fontSize: 20, fontWeight: 700, color: '#111111', letterSpacing: '-0.02em' }}>
                                {section.heading}
                            </h2>
                            <div style={{ color: 'rgba(17,17,17,0.6)', lineHeight: 1.85, fontSize: 14.5 }}>
                                {section.content.split('\n\n').map((paragraph, j) => {
                                    // Handle bold markers
                                    const parts = paragraph.split(/(\*\*.*?\*\*)/g);
                                    return (
                                        <p key={j} style={{ margin: j === 0 ? 0 : '12px 0 0' }}>
                                            {parts.map((part, k) => {
                                                if (part.startsWith('**') && part.endsWith('**')) {
                                                    return <strong key={k} style={{ color: '#111111', fontWeight: 600 }}>{part.slice(2, -2)}</strong>;
                                                }
                                                return <span key={k}>{part}</span>;
                                            })}
                                        </p>
                                    );
                                })}
                            </div>
                        </section>
                    ))}

                    {/* ── CTA ── */}
                    <section style={{
                        background: '#111111', borderRadius: 24,
                        padding: '32px', textAlign: 'center', marginTop: 32,
                    }}>
                        <h2 style={{ margin: '0 0 12px', fontSize: 20, fontWeight: 700, color: '#E8E4DD' }}>
                            Op zoek naar een advocaat?
                        </h2>
                        <p style={{ margin: '0 0 20px', fontSize: 14, color: 'rgba(232,228,221,0.5)' }}>
                            Vind direct de juiste advocaat via AdvocaatVinder.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
                            <Link href="/advocaten" style={{
                                display: 'inline-flex', alignItems: 'center', gap: 8,
                                background: '#E63B2E', color: 'white', borderRadius: 100,
                                padding: '12px 24px', textDecoration: 'none', fontSize: 14, fontWeight: 700,
                            }}>
                                Zoek een advocaat →
                            </Link>
                        </div>
                    </section>

                    {/* ── More Articles ── */}
                    {otherArticles.length > 0 && (
                        <section style={{ marginTop: 40 }}>
                            <h2 style={{ margin: '0 0 16px', fontSize: 16, fontWeight: 700, color: 'rgba(17,17,17,0.6)' }}>
                                Meer artikelen
                            </h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                                {otherArticles.map(a => (
                                    <Link key={a.slug} href={`/blog/${a.slug}`} style={{
                                        background: 'white', borderRadius: 16,
                                        border: '1px solid rgba(17,17,17,0.07)',
                                        padding: '16px 20px', textDecoration: 'none',
                                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                    }}>
                                        <div>
                                            <p style={{ margin: '0 0 4px', fontSize: 15, fontWeight: 600, color: '#111111' }}>
                                                {a.title}
                                            </p>
                                            <span style={{ fontSize: 11, fontFamily: "var(--font-space-mono)", color: 'rgba(17,17,17,0.35)' }}>
                                                {a.readingTime}
                                            </span>
                                        </div>
                                        <svg width="16" height="16" fill="none" stroke="rgba(17,17,17,0.2)" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" /></svg>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}
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
