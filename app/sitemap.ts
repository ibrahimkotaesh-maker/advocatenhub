import { MetadataRoute } from 'next';
import { supabase } from '@/lib/supabase';
import { slugify, extractCity } from '@/lib/utils';

export const dynamic = 'force-dynamic';
export const revalidate = 86400; // Re-generate daily

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://advocatenhub.nl';

    // Static pages
    const static_pages: MetadataRoute.Sitemap = [
        { url: baseUrl, changeFrequency: 'weekly', priority: 1.0 },
        { url: `${baseUrl}/advocaten`, changeFrequency: 'daily', priority: 0.9 },
    ];

    // Dynamic lawyer pages — fetch all IDs + names
    let all: { id: string; name: string; bezoekadres: string | null }[] = [];
    let from = 0;
    while (true) {
        const { data, error } = await supabase
            .from('advocaten')
            .select('id,name,bezoekadres')
            .range(from, from + 999);
        if (error || !data || data.length === 0) break;
        all = [...all, ...data];
        if (data.length < 1000) break;
        from += 1000;
    }

    const lawyerUrls: MetadataRoute.Sitemap = all.map(l => ({
        url: `${baseUrl}/advocaat/${slugify(l.name || 'advocaat', extractCity(l.bezoekadres))}`,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...static_pages, ...lawyerUrls];
}
