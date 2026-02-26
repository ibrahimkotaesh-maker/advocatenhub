import type { Metadata } from 'next';
import DirectoryClient from './DirectoryClient';

export const metadata: Metadata = {
    title: 'Advocaten Zoeken — 18.000+ NOvA-advocaten',
    description:
        'Zoek door meer dan 18.000 NOvA-geregistreerde advocaten in Nederland. Filter op rechtsgebied, stad, of naam. Gratis en onafhankelijk.',
};

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.advocaatvinder.nl',
        },
        {
            '@type': 'ListItem',
            position: 2,
            name: 'Advocaten Zoeken',
            item: 'https://www.advocaatvinder.nl/advocaten',
        },
    ],
};

export default function AdvocatenPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <DirectoryClient />
        </>
    );
}
