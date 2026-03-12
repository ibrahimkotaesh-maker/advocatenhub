import { MetadataRoute } from 'next';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';
export const revalidate = 86400; // Re-generate daily

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://www.advocaatvinder.nl';

    // Static pages
    const static_pages: MetadataRoute.Sitemap = [
        { url: baseUrl, changeFrequency: 'weekly', priority: 1.0 },
        { url: `${baseUrl}/advocaten`, changeFrequency: 'daily', priority: 0.9 },
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
        changeFrequency: 'weekly' as const,
        priority: 0.85,
    }));

    // Blog article pages
    const BLOG_SLUGS = [
        'wat-kost-een-advocaat', 'gesubsidieerde-rechtsbijstand',
        'pro-deo-advocaat', 'no-cure-no-pay-advocaat', 'advocaat-kiezen-tips',
    ];
    const blogUrls: MetadataRoute.Sitemap = [
        { url: `${baseUrl}/blog`, changeFrequency: 'weekly' as const, priority: 0.8 },
        ...BLOG_SLUGS.map(s => ({
            url: `${baseUrl}/blog/${s}`,
            changeFrequency: 'monthly' as const,
            priority: 0.75,
        })),
    ];

    // Dynamic lawyer pages — fetch all IDs + names
    let all: { id: string; name: string; bezoekadres: string | null; slug: string }[] = [];
    let from = 0;
    while (true) {
        const { data, error } = await supabase
            .from('advocaten')
            .select('id,name,bezoekadres,slug')
            .range(from, from + 999);
        if (error || !data || data.length === 0) break;
        all = [...all, ...data];
        if (data.length < 1000) break;
        from += 1000;
    }

    const lawyerUrls: MetadataRoute.Sitemap = all.map(l => ({
        url: `${baseUrl}/advocaat/${l.slug}`,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...static_pages, ...cityUrls, ...specialtyUrls, ...blogUrls, ...lawyerUrls];
}
