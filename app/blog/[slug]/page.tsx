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

    // ── FAQ Schema (extract Q&A pairs from FAQ section) ──────────────────
    const faqSection = sections?.find(s => s.heading.toLowerCase().includes('veelgestelde vragen'));
    let faqJsonLd = null;
    if (faqSection) {
        const faqPairs: { question: string; answer: string }[] = [];
        const faqLines = faqSection.content.split('\n\n');
        let currentQ = '';
        for (const line of faqLines) {
            const qMatch = line.match(/^\*\*(.+?)\*\*$/);
            if (qMatch) {
                if (currentQ && faqPairs.length > 0) {
                    // previous Q already has an answer
                }
                currentQ = qMatch[1];
            } else if (currentQ) {
                faqPairs.push({ question: currentQ, answer: line.trim() });
                currentQ = '';
            }
        }
        if (faqPairs.length > 0) {
            faqJsonLd = {
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: faqPairs.map(faq => ({
                    '@type': 'Question',
                    name: faq.question,
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: faq.answer,
                    },
                })),
            };
        }
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}

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

                {/* ── Hero Image ── */}
                {(isDbArticle || (staticArticle?.heroImage)) && (
                    <div style={{ maxWidth: 720, margin: '0 auto', padding: '32px 20px 0' }}>
                        <div style={{
                            borderRadius: 20, overflow: 'hidden',
                            position: 'relative', height: 340,
                            border: '1px solid rgba(17,17,17,0.07)',
                        }}>
                            <Image
                                src={staticArticle?.heroImage || `/images/blog/${slug}.png`}
                                alt={title}
                                fill
                                style={{ objectFit: 'cover' }}
                                sizes="720px"
                                priority
                            />
                        </div>
                    </div>
                )}

                {/* ── TL;DR Summary (Above the Fold) ── */}
                {staticArticle?.tldr && (
                    <div style={{ maxWidth: 720, margin: '0 auto', padding: '24px 20px 0' }}>
                        <div style={{
                            background: 'white', borderRadius: 20,
                            border: '1px solid rgba(17,17,17,0.07)',
                            borderLeft: '4px solid #E63B2E',
                            padding: '24px 28px',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="#E63B2E" stroke="none">
                                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                </svg>
                                <span style={{
                                    fontFamily: "var(--font-space-mono)", fontSize: 10,
                                    color: '#E63B2E', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700,
                                }}>
                                    Samenvatting
                                </span>
                            </div>
                            <p style={{
                                margin: 0, fontSize: 15, lineHeight: 1.7,
                                color: '#333333', fontWeight: 400,
                            }}>
                                {staticArticle.tldr}
                            </p>
                            <div style={{ marginTop: 16 }}>
                                <Link href="/advocaten" style={{
                                    display: 'inline-flex', alignItems: 'center', gap: 8,
                                    background: '#E63B2E', color: '#fff', textDecoration: 'none',
                                    padding: '10px 22px', borderRadius: 100,
                                    fontSize: 13, fontWeight: 700,
                                    transition: 'all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                }}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                    Vind een specialist
                                </Link>
                            </div>
                        </div>
                    </div>
                )}

                {/* ── Article Body ── */}
                <main style={{ maxWidth: 720, margin: '0 auto', padding: '40px 20px 64px' }}>
                    {/* Table of Contents (static articles only) */}
                    {sections && sections.length > 0 && (
                        <nav style={{
                            background: 'white', borderRadius: 20,
                            border: '1px solid rgba(17,17,17,0.07)', padding: '28px 32px', marginBottom: 32,
                            boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                        }}>
                            <div style={{
                                display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20,
                                paddingBottom: 16, borderBottom: '2px solid rgba(230,59,46,0.12)',
                            }}>
                                <div style={{
                                    width: 28, height: 28, borderRadius: 8, background: '#E63B2E',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                }}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
                                        <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" />
                                        <line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
                                    </svg>
                                </div>
                                <p style={{
                                    margin: 0, fontFamily: "var(--font-space-mono)", fontSize: 11,
                                    color: '#111111', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 700,
                                }}>
                                    Inhoudsopgave
                                </p>
                                <span style={{
                                    marginLeft: 'auto', fontFamily: "var(--font-space-mono)", fontSize: 10,
                                    color: 'rgba(17,17,17,0.3)', fontWeight: 500,
                                }}>
                                    {sections.length} secties
                                </span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                {sections.map((s, i) => (
                                    <a
                                        key={i}
                                        href={`#section-${i}`}
                                        className="toc-item"
                                        style={{
                                            display: 'flex', alignItems: 'center', gap: 14,
                                            textDecoration: 'none', color: 'rgba(17,17,17,0.65)',
                                            padding: '10px 12px', borderRadius: 12,
                                            transition: 'all 0.2s ease',
                                        }}
                                    >
                                        <span style={{
                                            minWidth: 28, height: 28, borderRadius: 8,
                                            background: 'rgba(230,59,46,0.08)', color: '#E63B2E',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            fontFamily: "var(--font-space-mono)", fontSize: 11, fontWeight: 700,
                                            transition: 'all 0.2s ease',
                                        }}>
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                        <span style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.4 }}>
                                            {s.heading}
                                        </span>
                                        <svg style={{ marginLeft: 'auto', opacity: 0, transition: 'opacity 0.2s ease', flexShrink: 0 }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E63B2E" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                    </a>
                                ))}
                            </div>
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

                    {/* ── Related Specialty & City Pages ── */}
                    {(() => {
                        const categoryToSpecialty: Record<string, { slug: string; label: string }> = {
                            'familierecht': { slug: 'familierecht', label: 'Familierecht' },
                            'arbeidsrecht': { slug: 'arbeidsrecht', label: 'Arbeidsrecht' },
                            'strafrecht': { slug: 'strafrecht', label: 'Strafrecht' },
                            'huurrecht': { slug: 'huurrecht', label: 'Huurrecht' },
                            'ondernemingsrecht': { slug: 'ondernemingsrecht', label: 'Ondernemingsrecht' },
                            'immigratierecht': { slug: 'immigratierecht', label: 'Immigratierecht' },
                            'erfrecht': { slug: 'erfrecht', label: 'Erfrecht' },
                            'bestuursrecht': { slug: 'bestuursrecht', label: 'Bestuursrecht' },
                            'letselschade': { slug: 'letselschaderecht', label: 'Letselschaderecht' },
                            'vastgoed': { slug: 'vastgoedrecht', label: 'Vastgoedrecht' },
                            'intellectueel eigendom': { slug: 'intellectueel-eigendomsrecht', label: 'Intellectueel Eigendomsrecht' },
                            'consumentenrecht': { slug: 'consumentenrecht', label: 'Consumentenrecht' },
                        };
                        const topCities = [
                            { slug: 'amsterdam', label: 'Amsterdam' },
                            { slug: 'rotterdam', label: 'Rotterdam' },
                            { slug: 'den-haag', label: 'Den Haag' },
                            { slug: 'utrecht', label: 'Utrecht' },
                            { slug: 'eindhoven', label: 'Eindhoven' },
                        ];
                        const spec = categoryToSpecialty[category?.toLowerCase()];
                        if (!spec) return null;
                        return (
                            <section style={{ marginTop: 32 }}>
                                <h2 style={{ margin: '0 0 16px', fontSize: 16, fontWeight: 700, color: 'rgba(17,17,17,0.6)' }}>
                                    Gerelateerde pagina&apos;s
                                </h2>
                                {/* Specialty page link */}
                                <Link href={`/advocaten/rechtsgebied/${spec.slug}`} style={{
                                    display: 'block', background: '#111111', borderRadius: 16,
                                    padding: '16px 20px', textDecoration: 'none', marginBottom: 12,
                                }}>
                                    <p style={{ margin: '0 0 4px', fontSize: 15, fontWeight: 600, color: '#E8E4DD' }}>
                                        {spec.label} advocaat nodig?
                                    </p>
                                    <span style={{ fontSize: 12, fontFamily: "var(--font-space-mono)", color: 'rgba(232,228,221,0.4)' }}>
                                        Bekijk alle {spec.label.toLowerCase()} advocaten in Nederland →
                                    </span>
                                </Link>
                                {/* City+specialty combo links */}
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 8 }}>
                                    {topCities.map(city => (
                                        <Link key={city.slug} href={`/advocaten/${city.slug}/${spec.slug}`} style={{
                                            display: 'block', background: 'white', borderRadius: 12,
                                            border: '1px solid rgba(17,17,17,0.07)', padding: '12px 16px',
                                            textDecoration: 'none',
                                        }}>
                                            <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: '#111111' }}>
                                                {spec.label} {city.label}
                                            </p>
                                            <span style={{ fontSize: 11, fontFamily: "var(--font-space-mono)", color: 'rgba(17,17,17,0.35)' }}>
                                                Vind advocaten →
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        );
                    })()}

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
