import { MetadataRoute } from 'next';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';
export const revalidate = 86400; // Re-generate daily

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://www.advocaatvinder.nl';

    // Static pages
    const static_pages: MetadataRoute.Sitemap = [
        { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
        { url: `${baseUrl}/advocaten`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    ];

    // City landing pages
    const CITY_SLUGS = [
        'amsterdam', 'rotterdam', 'den-haag', 'utrecht', 'eindhoven', 'groningen',
        'tilburg', 'almere', 'breda', 'nijmegen', 'arnhem', 'haarlem', 'enschede',
        'den-bosch', 'amersfoort', 'zaanstad', 'zwolle', 'leiden', 'maastricht',
        'dordrecht', 'leeuwarden', 'apeldoorn', 'alkmaar', 'roermond', 'hilversum',
        'delft', 'deventer', 'middelburg', 'assen', 'lelystad',
    ];
    const cityUrls: MetadataRoute.Sitemap = CITY_SLUGS.map(c => ({
        url: `${baseUrl}/advocaten/${c}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.85,
    }));

    // Specialty / rechtsgebied landing pages
    const SPECIALTY_SLUGS = [
        'familierecht', 'arbeidsrecht', 'strafrecht', 'ondernemingsrecht', 'huurrecht',
        'bestuursrecht', 'vastgoedrecht', 'erfrecht', 'intellectueel-eigendom', 'immigratierecht',
        'letselschaderecht', 'verbintenissenrecht', 'insolventierecht', 'mededingingsrecht',
        'belastingrecht', 'verzekeringsrecht', 'sociaal-zekerheidsrecht', 'burenrecht',
        'mediarecht', 'gezondheidsrecht',
    ];
    const specialtyUrls: MetadataRoute.Sitemap = SPECIALTY_SLUGS.map(s => ({
        url: `${baseUrl}/advocaten/rechtsgebied/${s}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.85,
    }));

    // Blog article pages — Static + Database
    const STATIC_BLOG_SLUGS = [
        'wat-kost-een-advocaat', 'gesubsidieerde-rechtsbijstand',
        'pro-deo-advocaat', 'no-cure-no-pay-advocaat', 'advocaat-kiezen-tips',
    ];

    let dbBlogSlugs: string[] = [];
    try {
        const { data } = await supabase
            .from('blog_articles')
            .select('slug')
            .order('published_at', { ascending: false });
        if (data) dbBlogSlugs = data.map((a: any) => a.slug);
    } catch { /* ignore */ }

    const allBlogSlugs = [...new Set([...STATIC_BLOG_SLUGS, ...dbBlogSlugs])];

    const blogUrls: MetadataRoute.Sitemap = [
        { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
        ...allBlogSlugs.map(s => ({
            url: `${baseUrl}/blog/${s}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.75,
        })),
    ];

    // Dynamic lawyer pages — fetch all slugs in batches
    let allSlugs: string[] = [];
    let from = 0;
    while (true) {
        const { data, error } = await supabase
            .from('advocaten')
            .select('slug')
            .range(from, from + 999);
        if (error || !data || data.length === 0) break;
        allSlugs = [...allSlugs, ...data.map((l: any) => l.slug)];
        if (data.length < 1000) break;
        from += 1000;
    }

    const lawyerUrls: MetadataRoute.Sitemap = allSlugs.map(slug => ({
        url: `${baseUrl}/advocaat/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...static_pages, ...cityUrls, ...specialtyUrls, ...blogUrls, ...lawyerUrls];
}
