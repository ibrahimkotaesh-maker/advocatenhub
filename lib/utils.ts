// Utility functions shared across pages

export function slugify(name: string, city: string): string {
    const clean = (s: string) =>
        s
            .toLowerCase()
            .replace(/^(de heer|mevrouw|dhr\.|mw\.|mr\.?)\s*/gi, '')
            .replace(/[àáâãäå]/g, 'a')
            .replace(/[èéêë]/g, 'e')
            .replace(/[ìíîï]/g, 'i')
            .replace(/[òóôõö]/g, 'o')
            .replace(/[ùúûü]/g, 'u')
            .replace(/[ñ]/g, 'n')
            .replace(/[ç]/g, 'c')
            .replace(/[^a-z0-9\s-]/g, '')
            .trim()
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');

    const namePart = clean(name);
    const cityPart = clean(city || 'nederland');
    return `${namePart}-${cityPart}`.slice(0, 100);
}

export function extractCity(adres: string | null): string {
    if (!adres) return '';
    // Dutch address: "Street 12     1234 AB CITY  Nederland"
    // Strategy: find the postcode (4 digits + 2 letters), take next token(s) as city
    // Stop before "Nederland" and similar country names
    const SKIP = new Set(['nederland', 'netherlands', 'nl']);
    const tokens = adres.split(/\s+/).filter(Boolean);
    const postcodeIdx = tokens.findIndex(t => /^\d{4}$/.test(t) || /^\d{4}[A-Z]{2}$/.test(t));
    if (postcodeIdx === -1) {
        // fallback: last comma-delimited part
        return adres.split(',').pop()?.replace(/\s*(nederland|netherlands)\s*/gi, '').trim() || '';
    }
    // Skip the postcode token (possibly two tokens: "1234" + "AB")
    let start = postcodeIdx + 1;
    if (start < tokens.length && /^[A-Z]{2}$/.test(tokens[start])) start++;
    // Collect city tokens (all-caps words), stop at country name
    const cityTokens: string[] = [];
    for (let i = start; i < tokens.length; i++) {
        const t = tokens[i];
        if (SKIP.has(t.toLowerCase())) break;
        if (/^[A-Z\-']+$/.test(t)) cityTokens.push(t);
        else break;
    }
    return cityTokens.join(' ');
}


export function cleanWebsite(url: string | null): string | null {
    if (!url) return null;
    if (!url.startsWith('http')) return `https://${url}`;
    return url;
}

export function shortDomain(url: string | null): string {
    if (!url) return '';
    try {
        return new URL(cleanWebsite(url)!).hostname.replace('www.', '');
    } catch {
        return url;
    }
}

export function parseFields(str: string | null): string[] {
    if (!str || str === 'Niet bekend') return [];
    const chunks = str.split(/\s{2,}|\n/).map(s => s.trim()).filter(Boolean);
    if (chunks.length > 1) return chunks;
    return [str.trim()];
}

export function getInitials(name: string): string {
    if (!name) return '??';
    const clean = name.replace(/^(de heer|mevrouw|dhr\.|mw\.|mr\.?)\s*/gi, '').trim();
    const parts = clean.split(/\s+/).filter(Boolean);
    if (parts.length === 0) return '??';
    if (parts.length === 1) return parts[0][0].toUpperCase();
    const first = parts[0].replace(/[^A-Za-z]/g, '')[0] || '';
    const last = parts[parts.length - 1].replace(/[^A-Za-z]/g, '')[0] || '';
    return (first + last).toUpperCase();
}

const AVATAR_COLORS = [
    ['#1A1A2E', '#E63B2E'], ['#0F3460', '#E94560'], ['#16213E', '#0F3460'],
    ['#533483', '#E94560'], ['#2D4A22', '#86C232'], ['#3D1A78', '#C77DFF'],
    ['#1B4332', '#52B788'], ['#7B2D8B', '#F9C74F'], ['#1D3557', '#457B9D'],
    ['#6B2737', '#E76F51'], ['#023E8A', '#48CAE4'], ['#370617', '#F48C06'],
];

export function getAvatarStyle(name: string): { bg: string; text: string } {
    let hash = 0;
    for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
    const [bg, text] = AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
    return { bg, text };
}
