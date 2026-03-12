import { supabase } from '@/lib/supabase';
import HomeClient from './HomeClient';

export const revalidate = 3600; // Re-fetch every hour

// ─── FAQ + BreadcrumbList JSON-LD ──────────────────────────────────────────────
const homepageJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.advocaatvinder.nl' }],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Hoe vind ik een goede advocaat in Nederland?',
        acceptedAnswer: { '@type': 'Answer', text: 'Via AdvocaatVinder kunt u zoeken door meer dan 18.670 NOvA-geregistreerde advocaten in Nederland. Filter op rechtsgebied, stad, of naam.' },
      },
      {
        '@type': 'Question',
        name: 'Wat kost een advocaat per uur in Nederland?',
        acceptedAnswer: { '@type': 'Answer', text: 'Het uurtarief varieert doorgaans tussen €150 en €350 per uur, afhankelijk van de ervaring, het rechtsgebied en de locatie.' },
      },
      {
        '@type': 'Question',
        name: 'Wat is een pro deo advocaat?',
        acceptedAnswer: { '@type': 'Answer', text: 'Een pro deo advocaat verleent juridische bijstand met gesubsidieerde kosten via de Raad voor Rechtsbijstand. Iedereen met een inkomen onder een bepaalde grens kan hiervoor in aanmerking komen.' },
      },
    ],
  },
];

// ─── City config ───────────────────────────────────────────────────────────────
const CITY_MAP: Record<string, string> = {
  'amsterdam': 'AMSTERDAM',
  'rotterdam': 'ROTTERDAM',
  'den-haag': 'DEN HAAG',
  'utrecht': 'UTRECHT',
  'eindhoven': 'EINDHOVEN',
  'groningen': 'GRONINGEN',
  'tilburg': 'TILBURG',
  'breda': 'BREDA',
  'arnhem': 'ARNHEM',
  'maastricht': 'MAASTRICHT',
  'haarlem': 'HAARLEM',
  'nijmegen': 'NIJMEGEN',
};

// Pretty name from slug
function displayName(slug: string): string {
  const upper = CITY_MAP[slug] || slug.toUpperCase();
  return upper.split(/[\s-]+/).map(w => w.charAt(0) + w.slice(1).toLowerCase()).join(' ');
}

// ─── Supabase data fetching ────────────────────────────────────────────────────

async function getHomeData() {
  // 1. Total lawyer count
  const { count: totalCount } = await supabase
    .from('advocaten')
    .select('id', { count: 'exact', head: true });

  const totalLawyers = totalCount || 18670;

  // 2. City counts (parallel queries)
  const cityEntries = Object.entries(CITY_MAP);
  const cityCounts = await Promise.all(
    cityEntries.map(async ([slug, searchTerm]) => {
      const { count } = await supabase
        .from('advocaten')
        .select('id', { count: 'exact', head: true })
        .ilike('bezoekadres', `%${searchTerm}%`);
      return { slug, name: displayName(slug), count: count || 0 };
    })
  );

  // Sort by count descending
  cityCounts.sort((a, b) => b.count - a.count);

  // 3. Featured lawyers (those with photos, randomly sampled)
  const { data: featured } = await supabase
    .from('advocaten')
    .select('slug,name,bezoekadres,rechtsgebieden,foto_url')
    .not('foto_url', 'is', null)
    .not('foto_url', 'eq', '')
    .ilike('foto_url', 'https://%')
    .limit(100);

  // Filter to real photos and pick 8 random ones
  const validPhotos = (featured || [])
    .filter(l => {
      const url = (l.foto_url || '').toLowerCase();
      const junk = ['cookie','logo','icon','favicon','banner','placeholder','default','.svg','.gif','template','shutterstock'];
      if (junk.some(j => url.includes(j))) return false;
      const ok = ['.jpg','.jpeg','.png','.webp','wixstatic.com','squarespace-cdn.com','googleusercontent.com'];
      return ok.some(ext => url.includes(ext));
    });

  // Shuffle and take 8
  const shuffled = validPhotos.sort(() => Math.random() - 0.5).slice(0, 8);
  const featuredLawyers = shuffled.map(l => {
    // Extract city from bezoekadres
    const addr = l.bezoekadres || '';
    const parts = addr.split('\n').pop()?.trim() || '';
    const cityMatch = parts.replace(/^\d{4}\s*[A-Z]{0,2}\s*/, '').trim();
    const city = cityMatch
      ? cityMatch.split(/[\s-]+/).map((w: string) => w.charAt(0) + w.slice(1).toLowerCase()).join(' ')
      : '';

    // Parse rechtsgebieden
    const fields = (l.rechtsgebieden || '')
      .replace(/[\[\]"]/g, '')
      .split(/[;,]/)
      .map((f: string) => f.trim())
      .filter(Boolean);

    return { slug: l.slug, name: l.name, city, fields, foto_url: l.foto_url };
  });

  return { totalLawyers, cities: cityCounts, featuredLawyers };
}

// ─── Page (Server Component) ───────────────────────────────────────────────────
export default async function HomePage() {
  const { totalLawyers, cities, featuredLawyers } = await getHomeData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageJsonLd) }}
      />
      <HomeClient
        cities={cities}
        totalLawyers={totalLawyers}
        featuredLawyers={featuredLawyers}
      />
    </>
  );
}
