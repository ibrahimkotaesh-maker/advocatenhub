import type { Metadata } from 'next';
import DirectoryClient from './DirectoryClient';

export const metadata: Metadata = {
    title: 'Advocaten Zoeken — 18.000+ NOvA-advocaten',
    description:
        'Zoek door meer dan 18.000 NOvA-geregistreerde advocaten in Nederland. Filter op rechtsgebied, stad, of naam. Gratis en onafhankelijk.',
};

export default function AdvocatenPage() {
    return <DirectoryClient />;
}
