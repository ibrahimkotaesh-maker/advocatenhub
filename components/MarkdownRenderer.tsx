'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

/**
 * Aggressively extract ONLY real article content from scraped website markdown.
 * Strategy: A line is "content" if it's a heading followed by real paragraphs,
 * or a paragraph with actual sentences (not just links/nav items).
 */
function cleanMarkdown(raw: string): string {
    if (!raw) return '';

    const lines = raw.split('\n');
    const contentLines: string[] = [];
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const trimmed = line.trim();
        
        // Skip empty lines (we'll add back between content blocks)
        if (trimmed === '') {
            contentLines.push('');
            continue;
        }

        // Skip metadata
        if (/^\*\*(Keyword|Category|Search Volume):\*\*/.test(trimmed)) continue;
        
        // Skip source comments and separators
        if (trimmed.startsWith('<!-- Source:') || trimmed === '---') continue;

        // Skip lines that are purely navigation/link patterns
        // A line is "nav junk" if it's ONLY a markdown link with no surrounding text
        if (/^\*\s+\[.*?\]\(https?:\/\/.*?\)$/.test(trimmed)) continue;  // bulleted link
        if (/^\s+\*\s+\[.*?\]\(https?:\/\/.*?\)$/.test(line)) continue;   // indented bulleted link
        if (/^\[.*?\]\(https?:\/\/.*?\)$/.test(trimmed) && trimmed.length < 120) continue;  // standalone link
        if (/^\[\s*\]\(/.test(trimmed)) continue;  // empty link text
        if (/^!\[\s*\]\(/.test(trimmed)) continue; // empty alt image
        if (/^!\[.*?\]\(data:/.test(trimmed)) continue; // data URI image
        if (/^\[?\s*!\[.*?logo.*?\]/i.test(trimmed)) continue; // logo images
        
        // Skip cookie/privacy banner indicators
        if (/^(Toestemming|Details|Over\s*$|\[#|Consent|consent-studio|__Secure|Functioneel|Analytics|Marketing|Noodzakelijk|Voorkeuren|Statistieken)/i.test(trimmed)) continue;
        if (/cookie/i.test(trimmed) && !/alimentatie|scheiding|recht/i.test(trimmed)) continue;
        if (/Maximale bewaartermijn|HTTP-cookie|Pixeltracker|Sessie$|Verzamelt gegevens/i.test(trimmed)) continue;
        
        // Skip form/UI elements
        if (/^(Zoeken|Zoek|Menu|sluit|panel|prev|next|Δ|chevron|Dit veld is bedoeld|Comments$|Verzenden$|Inschrijven$|Toelichting$)/i.test(trimmed)) continue;
        if (/^(Positive Feedback|Negative Feedback|Geef je feedback|E-mail\(|Ja$|Nee$)/i.test(trimmed)) continue;
        
        // Skip phone/contact one-liners
        if (/^(Bel nu|Direct hulp|Bel de |ma t\/m|gebruikelijke belkosten|vrijblijvend|Plan een vrijblijvend)/i.test(trimmed)) continue;
        if (/^\[\d{3}[-\s]?\d{3,}.*?\]\(tel:/.test(trimmed)) continue;
        
        // Skip social media labels
        if (/^(Facebook|Twitter|LinkedIn|Instagram|youtube|facebook)$/i.test(trimmed)) continue;
        
        // Skip "Lees voor" / "Translate" / ReadSpeaker
        if (/\[\s*(Lees voor|Translate|ReadSpeaker)\s*\]/i.test(trimmed)) continue;
        
        // Skip footer/copyright
        if (/^(Copyright|©|KvK:|BTW id:|Algemene Voorwaarden|Privacyverklaring|Cookiebeleid|Sitemap$|Disclaimer$|Privacy$|Klachtenprocedure)/i.test(trimmed)) continue;
        if (/^(Openingstijden|Ma\.\s*t\/m|Za\.\s*&\s*zo)/i.test(trimmed)) continue;
        
        // Skip "Was deze informatie nuttig?"
        if (/Was deze informatie nuttig/i.test(trimmed)) continue;
        
        // Skip 404 page content
        if (/deze pagina lijkt niet te bestaan/i.test(trimmed)) continue;
        if (/^(Get Started Now|Ready To Transform|Do you ever|Are you scared|Book a session)/i.test(trimmed)) continue;
        
        // Skip standalone numbers (stat blocks like "250.000+")
        if (/^\d[\d\.,]*\+?$/.test(trimmed)) continue;
        if (/^\*\*(Bezoekers|Advocaten|Hulpvragen|Contactgegevens)\*\*/.test(trimmed)) continue;
        
        // Skip image/svg references
        if (trimmed === 'image/svg+xml') continue;
        if (/^data:,?$/.test(trimmed)) continue;
        
        // Skip "nab" brand references
        if (/^nab$/i.test(trimmed)) continue;
        
        // Skip WeeFlaG / acceptance buttons
        if (/^(Weiger alles|Accepteer selectie|Accepteer alles|Ok$|Lees meer$)/i.test(trimmed)) continue;

        // The line passed all filters - keep it
        contentLines.push(line);
    }

    // Now do a second pass: remove blocks of 3+ consecutive lines that are all just links
    const result: string[] = [];
    let linkBuffer: string[] = [];

    for (const line of contentLines) {
        const trimmed = line.trim();
        const isLinkOnlyLine = /^\[.*?\]\(.*?\)\s*$/.test(trimmed) ||
                               /^\*\s+\[.*?\]\(.*?\)/.test(trimmed) ||
                               /^\*\*\[.*?\]\(.*?\)\*\*/.test(trimmed) ||
                               /^\[\s*.*?\s*\]\(https?:\/\//.test(trimmed) && !trimmed.includes('. ') && trimmed.length < 200;

        if (isLinkOnlyLine && trimmed.length > 0) {
            linkBuffer.push(line);
        } else {
            if (linkBuffer.length < 3) {
                result.push(...linkBuffer);
            }
            linkBuffer = [];
            result.push(line);
        }
    }
    if (linkBuffer.length < 3) {
        result.push(...linkBuffer);
    }

    // Third pass: detect and remove sections that are clearly "about us" / testimonials / branding
    let output = result.join('\n');
    
    // Remove "Wie zijn wij" about sections
    output = output.replace(/#{1,3}\s*Wie zijn wij\?[\s\S]*?(?=\n#{1,3}\s|$)/g, '');
    
    // Remove "Wat onze klanten zeggen" testimonial sections
    output = output.replace(/#{1,3}\s*Wat onze klanten zeggen[\s\S]*?(?=\n#{1,3}\s[^#]|$)/g, '');
    
    // Remove "Laatste artikelen" sections
    output = output.replace(/#{1,3}\s*Laatste artikelen[\s\S]*?(?=\n#{1,3}\s[^#]|$)/g, '');
    
    // Remove "Blijf op de hoogte" newsletter sections
    output = output.replace(/#{1,3}\s*Blijf op de hoogte[\s\S]*?(?=\n#{1,3}\s|$)/g, '');
    
    // Remove "Hoe werken wij" process sections from source sites
    output = output.replace(/#{1,3}\s*Hoe werken wij\?[\s\S]*?(?=\n#{1,3}\s[^#]|$)/g, '');
    
    // Remove "Vind een kantoor" sections
    output = output.replace(/#{1,3}\s*Vind een kantoor[\s\S]*?(?=\n#{1,3}\s|$)/g, '');
    
    // Remove "Kunnen wij jou helpen" CTA sections
    output = output.replace(/\*\*Kunnen wij jou helpen\?\*\*[\s\S]*?(?=\n#{1,3}\s|$)/g, '');
    
    // Remove sections with "SCHEIDINGSINFORMATIE.NL" / "OVER ONS" / "Echtscheidingsadvocaten"
    output = output.replace(/#{1,3}\s*(SCHEIDINGSINFORMATIE|OVER ONS|Echtscheidingsadvocaten|NAB Informatie|Hulp bij alimentatie|Juridische informatie)[\s\S]*?(?=\n#{1,3}\s[^#]|$)/gi, '');
    
    // Remove "Onze website gebruikt cookies" sections
    output = output.replace(/\*\*Onze website gebruikt cookies\*\*[\s\S]*/g, '');

    // Remove "Aangesloten bij" / "Onze advocaten"
    output = output.replace(/\*\*Aangesloten bij\*\*[\s\S]*?(?=\n#{1,3}\s|$)/g, '');
    output = output.replace(/\*\*Onze advocaten zijn[\s\S]*?(?=\n#{1,3}\s|$)/g, '');

    // Clean up: collapse excessive blank lines
    output = output.replace(/\n{4,}/g, '\n\n\n').trim();
    
    // Remove leading non-heading non-paragraph content (nav remnants before first real section)
    // Find the first real heading (# or ## that starts a real section, not a site name)
    const firstHeadingMatch = output.match(/^(#{1,3})\s+(.+)$/m);
    if (firstHeadingMatch) {
        const headingIndex = output.indexOf(firstHeadingMatch[0]);
        // Check if there's substantial junk before the first heading
        const preamble = output.substring(0, headingIndex);
        const preambleLines = preamble.split('\n').filter(l => l.trim().length > 0);
        // If most preamble lines are short (nav items), remove the preamble
        const shortLines = preambleLines.filter(l => l.trim().length < 80);
        if (preambleLines.length > 3 && shortLines.length > preambleLines.length * 0.6) {
            output = output.substring(headingIndex);
        }
    }

    return output;
}

export default function MarkdownRenderer({ content }: { content: string }) {
    const cleaned = cleanMarkdown(content);

    return (
        <div className="markdown-article">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    h1: ({ children }) => (
                        <h2 style={{
                            margin: '32px 0 16px', fontSize: 24, fontWeight: 700,
                            color: '#111111', letterSpacing: '-0.02em',
                            borderBottom: '2px solid #E63B2E', paddingBottom: 8,
                        }}>
                            {children}
                        </h2>
                    ),
                    h2: ({ children }) => (
                        <h2 style={{
                            margin: '28px 0 12px', fontSize: 20, fontWeight: 700,
                            color: '#111111', letterSpacing: '-0.02em',
                        }}>
                            {children}
                        </h2>
                    ),
                    h3: ({ children }) => (
                        <h3 style={{
                            margin: '20px 0 8px', fontSize: 17, fontWeight: 600,
                            color: '#111111',
                        }}>
                            {children}
                        </h3>
                    ),
                    p: ({ children }) => (
                        <p style={{
                            margin: '10px 0', fontSize: 14.5, color: 'rgba(17,17,17,0.65)',
                            lineHeight: 1.85,
                        }}>
                            {children}
                        </p>
                    ),
                    ul: ({ children }) => (
                        <ul style={{
                            margin: '8px 0', padding: '0 0 0 20px',
                            color: 'rgba(17,17,17,0.6)', fontSize: 14.5, lineHeight: 1.85,
                        }}>
                            {children}
                        </ul>
                    ),
                    ol: ({ children }) => (
                        <ol style={{
                            margin: '8px 0', padding: '0 0 0 20px',
                            color: 'rgba(17,17,17,0.6)', fontSize: 14.5, lineHeight: 1.85,
                        }}>
                            {children}
                        </ol>
                    ),
                    li: ({ children }) => (
                        <li style={{ margin: '4px 0' }}>{children}</li>
                    ),
                    strong: ({ children }) => (
                        <strong style={{ color: '#111111', fontWeight: 600 }}>{children}</strong>
                    ),
                    a: ({ href, children }) => (
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#E63B2E', textDecoration: 'underline' }}
                        >
                            {children}
                        </a>
                    ),
                    blockquote: ({ children }) => (
                        <blockquote style={{
                            margin: '12px 0', padding: '12px 20px',
                            borderLeft: '3px solid #E63B2E', background: 'rgba(230,59,46,0.05)',
                            borderRadius: '0 12px 12px 0',
                        }}>
                            {children}
                        </blockquote>
                    ),
                    table: ({ children }) => (
                        <div style={{ overflowX: 'auto', margin: '12px 0' }}>
                            <table style={{
                                width: '100%', borderCollapse: 'collapse',
                                fontSize: 13, fontFamily: "var(--font-space-mono)",
                            }}>
                                {children}
                            </table>
                        </div>
                    ),
                    th: ({ children }) => (
                        <th style={{
                            padding: '8px 12px', textAlign: 'left',
                            borderBottom: '2px solid #111111', fontWeight: 700,
                            fontSize: 12, color: '#111111',
                        }}>
                            {children}
                        </th>
                    ),
                    td: ({ children }) => (
                        <td style={{
                            padding: '8px 12px',
                            borderBottom: '1px solid rgba(17,17,17,0.07)',
                            color: 'rgba(17,17,17,0.6)',
                        }}>
                            {children}
                        </td>
                    ),
                    img: () => null,  // Skip all scraped images
                }}
            >
                {cleaned}
            </ReactMarkdown>
        </div>
    );
}
