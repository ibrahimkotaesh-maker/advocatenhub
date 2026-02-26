// Blog article data for SEO — all content in Dutch
// targeting low-competition, high-volume keywords

export type BlogArticle = {
    slug: string;
    title: string;
    metaTitle: string;
    metaDescription: string;
    publishedAt: string;
    updatedAt: string;
    readingTime: string;
    category: string;
    keyword: string;
    searchVolume: string;
    sections: { heading: string; content: string }[];
};

export const BLOG_ARTICLES: BlogArticle[] = [
    {
        slug: 'wat-kost-een-advocaat',
        title: 'Wat Kost een Advocaat per Uur in 2026?',
        metaTitle: 'Wat Kost een Advocaat per Uur? Tarieven & Kosten 2026',
        metaDescription: 'Wat kost een advocaat per uur in Nederland? Overzicht van uurtarieven (€150-€350), kosten per zaak, en tips om te besparen. Actuele tarieven 2026.',
        publishedAt: '2026-02-27',
        updatedAt: '2026-02-27',
        readingTime: '6 min',
        category: 'Kosten',
        keyword: 'kosten advocaat per uur',
        searchVolume: '560/mo',
        sections: [
            {
                heading: 'Gemiddelde uurtarieven van advocaten',
                content: 'Het uurtarief van een advocaat in Nederland varieert doorgaans tussen de €150 en €350 per uur. Dit tarief is afhankelijk van diverse factoren, zoals de ervaring van de advocaat, het rechtsgebied, de complexiteit van de zaak en de locatie van het kantoor.\n\nVoorbeelden van gemiddelde tarieven:\n\n• Beginnend advocaat (0-5 jaar): €150 – €200 per uur\n• Ervaren advocaat (5-15 jaar): €200 – €275 per uur\n• Specialist/partner (15+ jaar): €275 – €350+ per uur\n\nGrote kantoren in Amsterdam en Rotterdam hanteren vaak hogere tarieven dan kleinere kantoren in andere steden.',
            },
            {
                heading: 'Wat beïnvloedt de kosten?',
                content: 'Verschillende factoren bepalen hoeveel u uiteindelijk kwijt bent aan een advocaat:\n\n1. **Het rechtsgebied** — Arbeidsrecht en ondernemingsrecht zijn doorgaans duurder dan familierecht of bestuursrecht.\n\n2. **De complexiteit** — Een eenvoudige ontslagzaak kost minder dan een internationaal handelsgeschil.\n\n3. **De locatie** — Advocaten in de Randstad (Amsterdam, Rotterdam, Den Haag) rekenen gemiddeld 15-25% meer dan kantoren in andere delen van Nederland.\n\n4. **Het type kantoor** — Grote, internationale kantoren (zoals De Brauw, Houthoff, Loyens & Loeff) hanteren tarieven tot €600+ per uur. Zelfstandige advocaten zijn vaak voordeliger.',
            },
            {
                heading: 'Kosten per type zaak',
                content: 'Naast het uurtarief zijn dit de gemiddelde totale kosten per type zaak:\n\n• **Echtscheiding (eenvoudig):** €750 – €2.500\n• **Echtscheiding (complex, met kinderen):** €2.500 – €10.000\n• **Ontslagzaak:** €1.500 – €5.000\n• **Strafzaak (eenvoudig):** €1.000 – €3.000\n• **Ondernemingsrecht advies:** €2.000 – €15.000\n• **Letselschade (no cure no pay):** geen voorafgaande kosten, 15-25% van de schadevergoeding\n\nLet op: bij elke zaak komen er mogelijk griffierechten, deurwaarderskosten en eventuele deskundigenkosten bij.',
            },
            {
                heading: 'Gesubsidieerde rechtsbijstand (pro deo)',
                content: 'Heeft u een laag inkomen? Dan komt u mogelijk in aanmerking voor gesubsidieerde rechtsbijstand, ook wel "pro deo" genoemd. Via de Raad voor Rechtsbijstand betaalt u dan alleen een eigen bijdrage van €155 tot €897 (2026), afhankelijk van uw inkomen.\n\nVoorwaarden:\n• Alleenstaand: maximaal inkomen €30.000 bruto per jaar\n• Samenwonend: maximaal inkomen €42.400 bruto per jaar\n• Vermogen (exclusief woning): maximaal €31.340\n\nU kunt een toevoeging aanvragen via het Juridisch Loket of rechtstreeks bij een advocaat die werkt op toevoegingsbasis.',
            },
            {
                heading: 'Tips om te besparen op advocaatkosten',
                content: '1. **Bereid u goed voor** — Verzamel alle relevante documenten vóór het eerste gesprek. Zo bespaart u tijd (en dus geld).\n\n2. **Vraag om een kostenraming** — Een goede advocaat geeft u vooraf een inschatting van de totale kosten.\n\n3. **Vergelijk tarieven** — Via AdvocaatVinder kunt u meerdere advocaten vergelijken en direct contact opnemen.\n\n4. **Overweeg mediation** — Bij familierecht en arbeidsrecht is mediation vaak sneller en goedkoper.\n\n5. **Check uw rechtsbijstandverzekering** — Veel Nederlanders hebben een rechtsbijstandverzekering maar vergeten deze te gebruiken.\n\n6. **Vraag naar vaste prijzen** — Sommige advocaten werken met vaste prijzen per zaak in plaats van een uurtarief.',
            },
        ],
    },
    {
        slug: 'gesubsidieerde-rechtsbijstand',
        title: 'Gesubsidieerde Rechtsbijstand: Alles Wat U Moet Weten',
        metaTitle: 'Gesubsidieerde Rechtsbijstand — Pro Deo Advocaat Uitleg 2026',
        metaDescription: 'Wat is gesubsidieerde rechtsbijstand? Leer wie er recht op heeft, hoe u een pro deo advocaat aanvraagt, en wat de eigen bijdrage is. Complete gids 2026.',
        publishedAt: '2026-02-27',
        updatedAt: '2026-02-27',
        readingTime: '7 min',
        category: 'Rechtsbijstand',
        keyword: 'gesubsidieerde rechtsbijstand',
        searchVolume: '590/mo',
        sections: [
            {
                heading: 'Wat is gesubsidieerde rechtsbijstand?',
                content: 'Gesubsidieerde rechtsbijstand is een regeling van de Nederlandse overheid waarmee mensen met een laag inkomen toegang krijgen tot juridische hulp. De overheid betaalt het grootste deel van de advocaatkosten, zodat iedereen — ongeacht financiële situatie — recht heeft op juridische bijstand.\n\nDe regeling wordt uitgevoerd door de Raad voor Rechtsbijstand en is vastgelegd in de Wet op de rechtsbijstand (Wrb). In de volksmond wordt dit ook wel "pro deo" of "toevoegingsadvocaat" genoemd, hoewel het niet volledig gratis is: u betaalt altijd een eigen bijdrage.',
            },
            {
                heading: 'Wie komt in aanmerking?',
                content: 'Of u in aanmerking komt voor gesubsidieerde rechtsbijstand hangt af van uw inkomen en vermogen. De Raad voor Rechtsbijstand toetst dit aan de hand van uw fiscale gegevens van twee jaar geleden.\n\nInkomensgrenzen 2026:\n• **Alleenstaanden:** maximaal €30.000 bruto jaarinkomen\n• **Samenwonenden/gehuwden:** maximaal €42.400 bruto jaarinkomen\n\nVermogensgrenzen 2026:\n• Maximaal **€31.340** aan vermogen (excl. eigen woning)\n\nLet op: als u net boven de grens zit maar door bijzondere omstandigheden (schulden, hoge zorgkosten) de kosten niet kunt dragen, kunt u een beroep doen op de hardheidsclausule.',
            },
            {
                heading: 'Eigen bijdrage',
                content: 'Ook bij gesubsidieerde rechtsbijstand betaalt u een eigen bijdrage. De hoogte hangt af van uw inkomen:\n\n• Inkomen tot €21.600 (alleenstaand): **€155**\n• Inkomen €21.601 – €24.200: **€287**\n• Inkomen €24.201 – €27.000: **€434**\n• Inkomen €27.001 – €30.000: **€897**\n\nBij samenwonenden gelden hogere drempels maar vergelijkbare bijdragen.\n\nDeze eigen bijdrage betaalt u rechtstreeks aan uw advocaat. De rest van de kosten wordt door de overheid vergoed.',
            },
            {
                heading: 'Hoe vraagt u het aan?',
                content: 'U kunt gesubsidieerde rechtsbijstand op meerdere manieren aanvragen:\n\n1. **Via het Juridisch Loket** — Gratis eerste advies en doorverwijzing naar een toevoegingsadvocaat (tel: 0900-8020).\n\n2. **Rechtstreeks bij een advocaat** — Zoek via AdvocaatVinder een advocaat die op toevoegingsbasis werkt. De advocaat vraagt de toevoeging voor u aan bij de Raad voor Rechtsbijstand.\n\n3. **Online** — Via mijn.rvr.org kunt u zelf controleren of u in aanmerking komt.\n\nDe aanvraag duurt gemiddeld 2-4 weken. Bij spoedzaken (dreigende huisuitzetting, strafrecht) kan een spoedtoevoeging worden aangevraagd.',
            },
            {
                heading: 'Veelgestelde vragen',
                content: '**Is pro deo helemaal gratis?**\nNee, u betaalt altijd een eigen bijdrage tussen €155 en €897.\n\n**Mag ik zelf een advocaat kiezen?**\nJa, u bent vrij om zelf een advocaat te kiezen, mits deze op toevoegingsbasis werkt. Niet alle advocaten werken op basis van een toevoeging.\n\n**Geldt het voor alle juridische zaken?**\nNiet voor alle zaken. Bij consumentenzaken onder €500, eenvoudige overtredingen, en sommige bestuursrechtelijke zaken is geen toevoeging mogelijk.\n\n**Wat als mijn inkomen verandert tijdens de zaak?**\nDe toetsing vindt plaats op het moment van de aanvraag. Een stijging van het inkomen tijdens de zaak heeft geen gevolgen.',
            },
        ],
    },
    {
        slug: 'pro-deo-advocaat',
        title: 'Pro Deo Advocaat: Wanneer Heeft U Recht op Gratis Rechtshulp?',
        metaTitle: 'Pro Deo Advocaat — Gratis Rechtshulp & Kosten Uitleg 2026',
        metaDescription: 'Alles over de pro deo advocaat: wie komt in aanmerking, wat kost het, en hoe vindt u er een? Complete gids voor gesubsidieerde rechtsbijstand in Nederland.',
        publishedAt: '2026-02-27',
        updatedAt: '2026-02-27',
        readingTime: '5 min',
        category: 'Rechtsbijstand',
        keyword: 'pro deo advocaat',
        searchVolume: '390/mo',
        sections: [
            {
                heading: 'Wat is een pro deo advocaat?',
                content: 'Een pro deo advocaat is een advocaat die juridische bijstand verleent aan cliënten die niet genoeg verdienen om zelf een advocaat te betalen. "Pro deo" is Latijn voor "voor God" en betekent in de praktijk "gratis" of "tegen gereduceerd tarief".\n\nIn Nederland is het officiële systeem gesubsidieerde rechtsbijstand. De advocaat ontvangt een vergoeding van de overheid (via de Raad voor Rechtsbijstand), en de cliënt betaalt een beperkte eigen bijdrage.',
            },
            {
                heading: 'Verschil met een reguliere advocaat',
                content: 'Een pro deo advocaat is een reguliere, NOvA-geregistreerde advocaat die ervoor kiest om ook zaken op toevoegingsbasis aan te nemen. Er is geen verschil in kwaliteit — dezelfde advocaat kan zowel betalende cliënten als pro deo cliënten bijstaan.\n\nWel zijn er verschillen:\n• **Kosten:** Pro deo betaalt u alleen de eigen bijdrage (€155-€897). Bij een reguliere advocaat betaalt u het volledige uurtarief.\n• **Beschikbaarheid:** Niet alle advocaten werken op toevoegingsbasis. Gebruik AdvocaatVinder om een geschikte advocaat te vinden.\n• **Vergoeding:** De advocaat ontvangt van de overheid circa €800-€1.100 per zaak, ongeacht de werkelijke tijdsbesteding.',
            },
            {
                heading: 'Hoe vindt u een pro deo advocaat?',
                content: 'Er zijn meerdere manieren om een pro deo advocaat te vinden:\n\n1. **AdvocaatVinder** — Zoek op specialisatie en stad. Neem contact op om te vragen of de advocaat op toevoegingsbasis werkt.\n\n2. **Het Juridisch Loket** — Gratis eerste hulplijn die u kan doorverwijzen naar geschikte advocaten in uw regio.\n\n3. **De Raad voor Rechtsbijstand** — Via het spreekuuroverzicht op rvr.org vindt u advocaten die deelnemen aan het piketrooster.\n\n4. **De rechtbank** — Bij strafzaken wordt automatisch een piketadvocaat toegewezen als u geen eigen advocaat heeft.',
            },
            {
                heading: 'Pro deo bij strafzaken',
                content: 'Bij strafzaken heeft u altijd recht op een advocaat, ook als u niet kunt betalen. Dit is vastgelegd in het Europees Verdrag voor de Rechten van de Mens (EVRM, artikel 6).\n\nBij aanhouding door de politie krijgt u automatisch een piketadvocaat toegewezen voor het eerste verhoor. Dit is sinds 2017 verplicht en volledig kosteloos.\n\nVoor de verdere procedure kunt u een toevoeging aanvragen als u aan de inkomenscriteria voldoet. De piketadvocaat kan u hierbij helpen.',
            },
        ],
    },
    {
        slug: 'no-cure-no-pay-advocaat',
        title: 'No Cure No Pay Advocaat: Hoe Werkt Het in Nederland?',
        metaTitle: 'No Cure No Pay Advocaat — Hoe Werkt Het? Uitleg & Regels 2026',
        metaDescription: 'Hoe werkt no cure no pay bij advocaten in Nederland? Leer de regels, voor welke zaken het geldt, en wat de percentages zijn. Complete uitleg.',
        publishedAt: '2026-02-27',
        updatedAt: '2026-02-27',
        readingTime: '6 min',
        category: 'Kosten',
        keyword: 'no cure no pay advocaat',
        searchVolume: '720/mo',
        sections: [
            {
                heading: 'Wat is no cure no pay?',
                content: 'No cure no pay betekent dat u alleen kosten betaalt als uw zaak wordt gewonnen. Als de advocaat uw zaak verliest, hoeft u niets te betalen. De advocaat neemt dus het financiële risico op zich.\n\nIn Nederland is no cure no pay bij advocaten in principe verboden door de Nederlandse Orde van Advocaten (NOvA). Er geldt echter een uitzondering: letselschadezaken en overlijdensschadezaken mogen sinds 2014 op basis van no cure no pay worden behandeld.',
            },
            {
                heading: 'Voor welke zaken geldt het?',
                content: 'No cure no pay is in Nederland uitsluitend toegestaan bij:\n\n✅ **Letselschadezaken** — Schade door verkeersongevallen, medische fouten, arbeidsongevallen, etc.\n✅ **Overlijdensschade** — Schade aan nabestaanden bij overlijden door onrechtmatige daad.\n\n❌ Niet toegestaan bij:\n• Strafzaken\n• Echtscheidingen\n• Arbeidsgeschillen\n• Contractgeschillen\n• Bestuursrecht\n\nDe reden voor deze beperking is dat de NOvA wil voorkomen dat de onafhankelijkheid van advocaten in gevaar komt wanneer hun beloning afhangt van het resultaat.',
            },
            {
                heading: 'Hoe werkt het in de praktijk?',
                content: 'Bij een no cure no pay afspraak gelden de volgende regels:\n\n1. **Intake** — De advocaat beoordeelt eerst of uw zaak kansrijk is. Alleen bij een redelijke succeskans zal de advocaat de zaak aannemen.\n\n2. **Percentage** — Bij succes betaalt u doorgaans 15% tot 25% van de schadevergoeding als honorarium aan de advocaat.\n\n3. **Kosten** — De externe kosten (medisch advies, deurwaarderskosten, griffierecht) zijn meestal voor rekening van de advocaat bij de no cure no pay-regeling.\n\n4. **Geen resultaat = geen kosten** — Als de zaak verloren wordt of als er geen schadevergoeding wordt toegekend, betaalt u niets.\n\n5. **Schriftelijke overeenkomst** — De afspraken worden altijd vastgelegd in een schriftelijke overeenkomst.',
            },
            {
                heading: 'Alternatieven voor no cure no pay',
                content: 'Omdat no cure no pay in de meeste rechtsgebieden niet is toegestaan, zijn er alternatieven:\n\n• **Gesubsidieerde rechtsbijstand (pro deo)** — Bij laag inkomen betaalt u slechts een eigen bijdrage van €155-€897.\n\n• **Rechtsbijstandverzekering** — Veel Nederlanders hebben een juridische verzekering die de kosten dekt.\n\n• **Procesfinanciering** — Een derde partij financiert uw zaak in ruil voor een deel van de opbrengst.\n\n• **Vaste prijs** — Sommige advocaten bieden een vast tarief per zaak, zodat u van tevoren weet wat de kosten zijn.\n\n• **Eerste gratis consult** — Veel advocaten bieden een gratis kennismakingsgesprek van 30 minuten aan.',
            },
        ],
    },
    {
        slug: 'advocaat-kiezen-tips',
        title: 'Een Goede Advocaat Kiezen: 7 Tips voor de Juiste Keuze',
        metaTitle: 'Goede Advocaat Kiezen — 7 Tips voor de Juiste Keuze 2026',
        metaDescription: 'Hoe kiest u de juiste advocaat? 7 praktische tips voor het vinden van een goede advocaat in Nederland. Specialisatie, ervaring, tarieven en meer.',
        publishedAt: '2026-02-27',
        updatedAt: '2026-02-27',
        readingTime: '5 min',
        category: 'Tips',
        keyword: 'goede advocaat',
        searchVolume: '370/mo',
        sections: [
            {
                heading: '1. Kies een specialist',
                content: 'De advocatuur kent tientallen rechtsgebieden. Een advocaat die gespecialiseerd is in familierecht is niet per se de beste keuze voor een arbeidsgeschil. Kies altijd een advocaat die ervaring heeft met uw specifieke juridische probleem.\n\nOp AdvocaatVinder kunt u filteren op rechtsgebied, zodat u direct advocaten vindt die gespecialiseerd zijn in uw zaak. Nederland telt meer dan 18.670 NOvA-geregistreerde advocaten — er is altijd een specialist te vinden.',
            },
            {
                heading: '2. Check de NOvA-registratie',
                content: 'Elke advocaat in Nederland moet geregistreerd zijn bij de Nederlandse Orde van Advocaten (NOvA). Dit garandeert dat de advocaat:\n\n• Een rechtenstudie heeft afgerond\n• De beroepsopleiding advocatuur heeft voltooid\n• Zich houdt aan de Gedragsregels Advocatuur\n• Jaarlijks verplichte bijscholing volgt\n• Een beroepsaansprakelijkheidsverzekering heeft\n\nAlle advocaten op AdvocaatVinder zijn NOvA-geregistreerd.',
            },
            {
                heading: '3. Vraag om referenties en ervaring',
                content: 'Een goede advocaat kan vertellen hoeveel vergelijkbare zaken hij of zij heeft behandeld. Vraag naar:\n\n• Het aantal jaren ervaring in het specifieke rechtsgebied\n• Het succespercentage bij vergelijkbare zaken\n• Of de advocaat lid is van een specialisatievereniging (zoals vFAS voor familierecht of LSA voor letselschade)',
            },
            {
                heading: '4. Let op de communicatie',
                content: 'Goede communicatie is essentieel. Tijdens het eerste gesprek kunt u al veel afleiden:\n\n• Luistert de advocaat naar uw verhaal?\n• Legt hij of zij de juridische termen begrijpelijk uit?\n• Reageert het kantoor snel op e-mails en telefoontjes?\n• Heeft u een goed gevoel bij de persoon?\n\nU moet uw advocaat vertrouwen en zich op uw gemak voelen om openlijk over uw situatie te praten.',
            },
            {
                heading: '5. Wees duidelijk over kosten',
                content: 'Vraag vóór het eerste gesprek altijd:\n\n• Wat is het uurtarief?\n• Is het eerste gesprek gratis of betaald?\n• Kan de advocaat een schatting geven van de totale kosten?\n• Werkt de advocaat op basis van een vast tarief of uurtarief?\n• Komt u in aanmerking voor gesubsidieerde rechtsbijstand?\n\nEen transparante advocaat geeft u van tevoren een duidelijke kostenschatting.',
            },
            {
                heading: '6. Vergelijk meerdere advocaten',
                content: 'Neem niet de eerste de beste advocaat. Het is verstandig om ten minste 2-3 advocaten te spreken voordat u een keuze maakt. Via AdvocaatVinder kunt u eenvoudig meerdere advocaten in uw stad vergelijken op specialisatie en contactgegevens.\n\nDe meeste advocaten bieden een gratis of goedkoop kennismakingsgesprek aan. Maak hier gebruik van.',
            },
            {
                heading: '7. Check de bereikbaarheid',
                content: 'Een advocaat in uw eigen stad of regio heeft voordelen:\n\n• Korte reisafstand voor overleg\n• Kennis van de lokale rechtbank en rechters\n• Bekendheid met lokale juridische praktijken\n\nGebruik de stadspagina\'s op AdvocaatVinder om advocaten bij u in de buurt te vinden, of zoek direct op uw stad in de hoofddirectory.',
            },
        ],
    },
];
