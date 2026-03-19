import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BLOG_ARTICLES } from '@/lib/blog-data';
import { supabase } from '@/lib/supabase';
import MarkdownRenderer from '@/components/MarkdownRenderer';

// ── Types ────────────────────────────────────────────────────────────────
type DbArticle = {
    slug: string;
    title: string;
    meta_title: string;
    meta_description: string;
    category: string;
    keyword: string;
    search_volume: string;
    reading_time: string;
    content_markdown: string;
    published_at: string;
};

// ── Helper: fetch a DB article ───────────────────────────────────────────
async function getDbArticle(slug: string): Promise<DbArticle | null> {
    try {
        const { data, error } = await supabase
            .from('blog_articles')
            .select('*')
            .eq('slug', slug)
            .single();
        if (error || !data) return null;
        return data as DbArticle;
    } catch {
        return null;
    }
}

// ── Helper: get all DB article slugs ────────────────────────────────────
async function getAllDbSlugs(): Promise<string[]> {
    try {
        const { data } = await supabase.from('blog_articles').select('slug');
        return (data || []).map((a: any) => a.slug);
    } catch {
        return [];
    }
}

// ── Helper: get all articles for sidebar ─────────────────────────────────
async function getAllArticleMeta() {
    const staticMeta = BLOG_ARTICLES.map(a => ({
        slug: a.slug, title: a.title, readingTime: a.readingTime,
    }));

    try {
        const { data } = await supabase
            .from('blog_articles')
            .select('slug, title, reading_time');
        const dbMeta = (data || []).map((a: any) => ({
            slug: a.slug, title: a.title, readingTime: a.reading_time || '5 min',
        }));
        const staticSlugs = new Set(staticMeta.map(a => a.slug));
        return [...staticMeta, ...dbMeta.filter((a: any) => !staticSlugs.has(a.slug))];
    } catch {
        return staticMeta;
    }
}

// ── Simple markdown-to-HTML renderer ─────────────────────────────────────
function renderMarkdownToSections(markdown: string): { heading: string; content: string }[] {
    if (!markdown) return [];

    // Split by source separators and headings
    const lines = markdown.split('\n');
    const sections: { heading: string; content: string }[] = [];
    let currentHeading = '';
    let currentContent: string[] = [];

    for (const line of lines) {
        // Skip source comments and separators
        if (line.startsWith('<!-- Source:') || line === '---') continue;

        // Check for headings (## or #)
        const h2Match = line.match(/^##\s+(.+)/);
        const h1Match = line.match(/^#\s+(.+)/);

        if (h2Match || h1Match) {
            // Save previous section
            if (currentHeading && currentContent.length > 0) {
                sections.push({
                    heading: currentHeading,
                    content: currentContent.join('\n').trim(),
                });
            }
            currentHeading = (h2Match?.[1] || h1Match?.[1] || '').trim();
            currentContent = [];
        } else {
            currentContent.push(line);
        }
    }

    // Save last section
    if (currentHeading && currentContent.length > 0) {
        sections.push({
            heading: currentHeading,
            content: currentContent.join('\n').trim(),
        });
    }

    // Filter out very short or empty sections, keep meaningful ones
    return sections.filter(s => s.content.length > 50).slice(0, 15);
}

// ─── Metadata ────────────────────────────────────────────────────────────────
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;

    // Try static first
    const staticArticle = BLOG_ARTICLES.find(a => a.slug === slug);
    if (staticArticle) {
        return {
            title: staticArticle.metaTitle,
            description: staticArticle.metaDescription,
            openGraph: {
                title: staticArticle.metaTitle,
                description: staticArticle.metaDescription,
                type: 'article',
                publishedTime: staticArticle.publishedAt,
                modifiedTime: staticArticle.updatedAt,
            },
            alternates: { canonical: `https://www.advocaatvinder.nl/blog/${slug}` },
        };
    }

    // Try DB
    const dbArticle = await getDbArticle(slug);
    if (dbArticle) {
        return {
            title: dbArticle.meta_title,
            description: dbArticle.meta_description,
            openGraph: {
                title: dbArticle.meta_title,
                description: dbArticle.meta_description,
                type: 'article',
                publishedTime: dbArticle.published_at,
            },
            alternates: { canonical: `https://www.advocaatvinder.nl/blog/${slug}` },
        };
    }

    return { title: 'Artikel niet gevonden' };
}

// ─── Static params ───────────────────────────────────────────────────────────
export async function generateStaticParams() {
    const staticSlugs = BLOG_ARTICLES.map(a => ({ slug: a.slug }));
    const dbSlugs = (await getAllDbSlugs()).map(s => ({ slug: s }));
    const allSlugs = new Set(staticSlugs.map(s => s.slug));
    return [...staticSlugs, ...dbSlugs.filter(s => !allSlugs.has(s.slug))];
}

// ─── Render paragraph with bold markers ──────────────────────────────────
function ParagraphContent({ text }: { text: string }) {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return (
        <>
            {parts.map((part, k) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={k} style={{ color: '#111111', fontWeight: 600 }}>{part.slice(2, -2)}</strong>;
                }
                return <span key={k}>{part}</span>;
            })}
        </>
    );
}

// ─── Page Component ──────────────────────────────────────────────────────────
export default async function ArticlePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    // Try static first
    const staticArticle = BLOG_ARTICLES.find(a => a.slug === slug);
    let title: string;
    let category: string;
    let readingTime: string;
    let publishedAt: string;
    let metaDescription: string;
    let sections: { heading: string; content: string }[] | null = null;
    let markdownContent: string | null = null;
    let isDbArticle = false;

    if (staticArticle) {
        title = staticArticle.title;
        category = staticArticle.category;
        readingTime = staticArticle.readingTime;
        publishedAt = staticArticle.publishedAt;
        metaDescription = staticArticle.metaDescription;
        sections = staticArticle.sections;
    } else {
        // Try DB
        const dbArticle = await getDbArticle(slug);
        if (!dbArticle) notFound();

        title = dbArticle.title;
        category = dbArticle.category;
        readingTime = dbArticle.reading_time;
        publishedAt = dbArticle.published_at;
        metaDescription = dbArticle.meta_description;
        markdownContent = dbArticle.content_markdown;
        isDbArticle = true;
    }

    // Get other articles for "More Articles" section
    const allMeta = await getAllArticleMeta();
    const otherArticles = allMeta.filter(a => a.slug !== slug).slice(0, 3);

    // ── JSON-LD ──────────────────────────────────────────────────────────────
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description: metaDescription,
        datePublished: publishedAt,
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
            { '@type': 'ListItem', position: 3, name: title, item: `https://www.advocaatvinder.nl/blog/${slug}` },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

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
                                {category}
                            </span>
                            <span style={{ fontSize: 11, fontFamily: "var(--font-space-mono)", color: 'rgba(232,228,221,0.35)' }}>
                                {readingTime} leestijd
                            </span>
                            <span style={{ fontSize: 11, fontFamily: "var(--font-space-mono)", color: 'rgba(232,228,221,0.25)' }}>
                                {new Date(publishedAt).toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </span>
                        </div>
                        <h1 style={{
                            margin: 0, fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800,
                            color: '#E8E4DD', lineHeight: 1.15, letterSpacing: '-0.03em',
                        }}>
                            {title}
                        </h1>
                    </div>
                </section>

                {/* ── Hero Image (DB articles) ── */}
                {isDbArticle && (
                    <div style={{ maxWidth: 720, margin: '0 auto', padding: '32px 20px 0' }}>
                        <div style={{
                            borderRadius: 20, overflow: 'hidden',
                            position: 'relative', height: 340,
                            border: '1px solid rgba(17,17,17,0.07)',
                        }}>
                            <Image
                                src={`/images/blog/${slug}.png`}
                                alt={title}
                                fill
                                style={{ objectFit: 'cover' }}
                                sizes="720px"
                                priority
                            />
                        </div>
                    </div>
                )}

                {/* ── Article Body ── */}
                <main style={{ maxWidth: 720, margin: '0 auto', padding: '40px 20px 64px' }}>
                    {/* Table of Contents (static articles only) */}
                    {sections && sections.length > 0 && (
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
                                {sections.map((s, i) => (
                                    <li key={i} style={{ fontSize: 14, color: 'rgba(17,17,17,0.6)', lineHeight: 1.5 }}>
                                        <a href={`#section-${i}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                            {s.heading}
                                        </a>
                                    </li>
                                ))}
                            </ol>
                        </nav>
                    )}

                    {/* Article Content */}
                    {isDbArticle && markdownContent ? (
                        /* DB articles: render full markdown */
                        <section style={{
                            background: 'white', borderRadius: 20,
                            border: '1px solid rgba(17,17,17,0.07)', padding: '28px 32px', marginBottom: 16,
                        }}>
                            <MarkdownRenderer content={markdownContent} />
                        </section>
                    ) : (
                        /* Static articles: render sections */
                        sections && sections.map((section, i) => (
                            <section key={i} id={`section-${i}`} style={{
                                background: 'white', borderRadius: 20,
                                border: '1px solid rgba(17,17,17,0.07)', padding: '28px 32px', marginBottom: 16,
                            }}>
                                <h2 style={{ margin: '0 0 16px', fontSize: 20, fontWeight: 700, color: '#111111', letterSpacing: '-0.02em' }}>
                                    {section.heading}
                                </h2>
                                <div style={{ color: 'rgba(17,17,17,0.6)', lineHeight: 1.85, fontSize: 14.5 }}>
                                    {section.content.split('\n\n').map((paragraph, j) => (
                                        <p key={j} style={{ margin: j === 0 ? 0 : '12px 0 0' }}>
                                            <ParagraphContent text={paragraph} />
                                        </p>
                                    ))}
                                </div>
                            </section>
                        ))
                    )}

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
