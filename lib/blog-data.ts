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
    heroImage?: string;
    tldr?: string;
    sections: { heading: string; content: string }[];
};

export const BLOG_ARTICLES: BlogArticle[] = [
    {
        slug: 'wat-kost-een-advocaat',
        title: 'Wat Kost een Advocaat in 2026? Het Eerlijke Overzicht van Tarieven, Kosten en Bespaartips',
        metaTitle: 'Wat Kost een Advocaat? | Direct Besparen op Tarieven | AdvocaatVinder',
        metaDescription: 'Wat kost een advocaat per uur in Nederland? Compleet overzicht van uurtarieven (€100-€500+), kosten per rechtsgebied, griffierechten én 6 bewezen manieren om te besparen. Bijgewerkt maart 2026.',
        publishedAt: '2026-02-27',
        updatedAt: '2026-03-24',
        readingTime: '12 min',
        category: 'Kosten',
        keyword: 'wat kost een advocaat',
        searchVolume: '3.100/mo',
        heroImage: '/images/blog/wat-kost-een-advocaat.jpg',
        tldr: 'Een advocaat in Nederland kost gemiddeld €225 per uur (excl. btw), maar tarieven variëren van €100 tot €500+ afhankelijk van ervaring en specialisatie. Hieronder vindt u een eerlijk overzicht van alle kosten per rechtsgebied én 6 bewezen manieren om direct te besparen.',
        sections: [
            {
                heading: 'Wat kost een advocaat? De korte versie',
                content: 'Laten we meteen met de kern beginnen: een advocaat in Nederland kost gemiddeld **€225 per uur**, exclusief btw. Maar dat getal vertelt slechts de helft van het verhaal.\n\nDe werkelijke kosten worden bepaald door een simpele formule:\n\n**Totale kosten = uurtarief × aantal bestede uren + bijkomende kosten**\n\nHet uurtarief is niet bij wet vastgelegd — de Nederlandse Orde van Advocaten (NOvA) schrijft geen vaste tarieven voor. Dat betekent dat advocaten hun prijzen zelf bepalen. In de praktijk lopen de uurtarieven uiteen van **€100 tot ruim €500 per uur**, afhankelijk van ervaring, specialisatie en locatie.\n\nHieronder vindt u een uitgebreid overzicht van alle factoren die de kosten beïnvloeden, een tabel met prijsindicaties per type zaak, en concrete tips waarmee u honderden tot duizenden euro\'s kunt besparen.',
            },
            {
                heading: 'Uurtarieven per ervaringsniveau',
                content: 'De ervaring van een advocaat is de belangrijkste factor achter het uurtarief. Een advocaat met twintig jaar ervaring in ondernemingsrecht vraagt logischerwijs meer dan iemand die net de beroepsopleiding heeft afgerond — maar dat hogere tarief vertaalt zich vaak ook in snellere afhandeling.\n\nRichtprijzen voor 2026 (exclusief 21% btw):\n\n• **Starter / junior advocaat** (0-3 jaar): €100 – €150 per uur\n• **Medior advocaat** (3-7 jaar): €150 – €250 per uur\n• **Senior advocaat / specialist** (7-15 jaar): €250 – €400 per uur\n• **Partner in een topkantoor** (15+ jaar): €400 – €600+ per uur\n\nTer referentie: het advocatenkantoor Unger Nolet publiceerde onlangs hun tarieven voor 2025-2026. Partners rekenen daar €280-€330, advocaten €250-€280, stagiairs €190-€240, en juridisch medewerkers €160 per uur. Dit geeft een realistisch beeld van wat een middelgroot kantoor rekent.\n\nBelangrijk: een lager uurtarief betekent niet per definitie lagere totale kosten. Een ervaren specialist lost een kwestie soms in vier uur op waar een junior tien uur over doet.',
            },
            {
                heading: 'Kosten per rechtsgebied',
                content: 'Het rechtsgebied bepaalt voor een groot deel wat u kwijt bent. Complexe rechtsgebieden met veel jurisprudentie of bedrijfsbelangen kennen hogere tarieven dan meer toegankelijke, \'standaard\' gebieden.\n\nOverzicht van gangbare uurtarieven per rechtsgebied:\n\n• **Personen- en familierecht** (echtscheiding, voogdij, alimentatie): €150 – €300 per uur\n• **Arbeidsrecht** (ontslag, vaststellingsovereenkomst, concurrentiebeding): €200 – €300 per uur\n• **Strafrecht** (verdediging bij misdrijven en overtredingen): €195 – €350 per uur\n• **Huurrecht** (geschillen tussen huurder en verhuurder): €150 – €250 per uur\n• **Ondernemingsrecht** (contracten, fusies, aansprakelijkheid): €250 – €450 per uur\n• **Bestuursrecht** (bezwaar tegen overheidsbesluiten): €175 – €300 per uur\n• **Vastgoedrecht** (aan- en verkoop, bouwgeschillen): €200 – €350 per uur\n• **Intellectueel eigendomsrecht** (merken, patenten, auteursrecht): €250 – €400 per uur\n\nDeze bedragen zijn exclusief 21% btw. Houd er rekening mee dat de spreiding binnen elk rechtsgebied groot kan zijn: een eenvoudig alimentatieberekening valt in de onderste range, terwijl een complexe vechtscheiding met internationale aspecten eerder in de bovenste range valt.',
            },
            {
                heading: 'Totale kosten per type zaak',
                content: 'Een uurtarief alleen zegt weinig als u niet weet hoeveel uren er in uw zaak gaan zitten. Hieronder vindt u een overzicht van de gemiddelde totale kosten per type zaak, gebaseerd op het beschikbare aanbod in Nederland.\n\n• **Echtscheiding op gemeenschappelijk verzoek:** €750 – €2.500\n  Een gezamenlijke advocaat regelt de scheiding voor beide partijen. Dit is de goedkoopste route.\n\n• **Echtscheiding op tegenspraak (met kinderen, boedelverdeling):** €3.000 – €15.000+\n  Bij geschillen over voogdij, alimentatie of vermogensverdeling lopen de kosten snel op.\n\n• **Ontslagzaak / vaststellingsovereenkomst laten controleren:** €600 – €1.500\n  Veel advocaten bieden een vaste prijs aan voor het checken en onderhandelen van een vaststellingsovereenkomst.\n\n• **Arbeidsgeschil via de kantonrechter:** €2.000 – €6.000\n  Inclusief processtukken, zitting en eventueel getuigenverhoor.\n\n• **Strafzaak (eenvoudig: winkeldiefstal, rijden onder invloed):** €1.000 – €3.000\n  Bij een pro deo toegeving betaalt u alleen de eigen bijdrage.\n\n• **Strafzaak (complex: fraude, drugshandel):** €5.000 – €25.000+\n  Omvangrijke dossiers en langlopende processen drijven de kosten op.\n\n• **Letselschade (no cure no pay):** geen kosten vooraf\n  U betaalt alleen bij succes: 15% tot 25% van de schadevergoeding.\n\n• **Ondernemingsrecht advies (contracten, oprichting, geschillen):** €2.000 – €20.000\n  Afhankelijk van de omvang van het bedrijf en de complexiteit.\n\n• **Bezwaar bestuursrecht:** €500 – €2.000\n  Relatief eenvoudige procedures, maar kan oplopen bij beroep bij de rechtbank.\n\nLet op: bij deze bedragen zijn de bijkomende kosten (griffierechten, deurwaarderskosten) nog niet inbegrepen.',
            },
            {
                heading: 'Bijkomende kosten waar u rekening mee moet houden',
                content: 'Naast het honorarium van de advocaat zijn er diverse bijkomende kosten die de totale rekening verhogen. Het is belangrijk om hier vooraf een duidelijk beeld van te hebben.\n\n**1. Btw (21%)**\nAlle genoemde uurtarieven zijn doorgaans exclusief btw. Op een tarief van €225 per uur betaalt u dus in werkelijkheid €272,25 per uur. Particulieren kunnen btw niet terugvorderen — voor bedrijven is dat vaak wel mogelijk.\n\n**2. Kantoorkosten (4-6% van het honorarium)**\nVeel advocatenkantoren brengen een opslag in rekening voor kantoorkosten: denk aan printkosten, porti, telefoonkosten en dossierbeheer. Dit percentage varieert van 4% tot 6% van het totale honorarium.\n\n**3. Griffierechten**\nDit zijn de kosten die de rechtbank in rekening brengt voor de behandeling van uw zaak. In 2026 gelden de volgende bedragen:\n\n• Kantonrechter (particulier): €92 – €267\n• Rechtbank (particulier): €196 – €2.889\n• Gerechtshof: €362 – €6.219\n\nDe exacte hoogte hangt af van het type zaak en het financieel belang.\n\n**4. Deurwaarderskosten**\nVoor het uitbrengen van een dagvaarding rekent een deurwaarder gemiddeld €100 tot €150. Bij beslag of executie komen daar extra kosten bij.\n\n**5. Kosten voor deskundigen**\nIn sommige zaken is een deskundigenrapport nodig — denk aan een medisch expert bij letselschade, een taxateur bij vastgoed, of een forensisch accountant bij een fraudezaak. Deze kosten variëren van enkele honderden tot duizenden euro\'s.',
            },
            {
                heading: 'De invloed van locatie op het tarief',
                content: 'De vestigingsplaats van het kantoor heeft een merkbare invloed op het uurtarief. Advocaten in de vier grote steden (Amsterdam, Rotterdam, Den Haag en Utrecht) rekenen gemiddeld **15-25% meer** dan kantoren in de rest van Nederland.\n\nDit verschil is grotendeels te verklaren door hogere bedrijfskosten (huur, personeel) en de concentratie van grote, internationale kantoren in de Randstad. De zogeheten \'Zuidas-kantoren\' in Amsterdam — denk aan De Brauw Blackstone Westbroek, Houthoff en Loyens & Loeff — hanteren tarieven die kunnen oplopen tot **€600 tot €800 per uur** voor senior partners.\n\nOmgekeerd: zelfstandige advocaten en kleinere kantoren buiten de Randstad bieden vaak uitstekende kwaliteit tegen aanzienlijk lagere tarieven. Via AdvocaatVinder kunt u advocaten in uw eigen stad of regio vergelijken en zo een weloverwogen keuze maken.',
            },
            {
                heading: 'Gesubsidieerde rechtsbijstand (pro deo)',
                content: 'Niet iedereen kan de volledige kosten van een advocaat zelf dragen. Daarom biedt de Nederlandse overheid via de Raad voor Rechtsbijstand een stelsel van gesubsidieerde rechtsbijstand, in de volksmond ook wel \"pro deo\" genoemd.\n\nBij een pro deo toevoeging betaalt u alleen een **eigen bijdrage**, afhankelijk van uw inkomen:\n\n• Inkomen tot €21.600 (alleenstaand): **€155** eigen bijdrage\n• Inkomen €21.601 – €24.200: **€287**\n• Inkomen €24.201 – €27.000: **€434**\n• Inkomen €27.001 – €30.000: **€897**\n\n**Voorwaarden om in aanmerking te komen (2026):**\n\n• Alleenstaand: maximaal bruto jaarinkomen van €30.000\n• Samenwonend/gehuwd: maximaal bruto jaarinkomen van €42.400\n• Vermogen (exclusief eigen woning): maximaal €31.340\n\nDe toetsing vindt plaats op basis van uw fiscale gegevens van twee jaar geleden. U kunt een toevoeging aanvragen via het Juridisch Loket (0900-8020), rechtstreeks bij een advocaat die op toevoegingsbasis werkt, of online via mijn.rvr.org.\n\nBelangrijk: niet alle advocaten werken op toevoegingsbasis. Gebruik AdvocaatVinder om een advocaat in uw regio te vinden en vraag specifiek of deze op basis van een toevoeging werkt.',
            },
            {
                heading: '6 bewezen manieren om te besparen op advocaatkosten',
                content: 'De kosten van een advocaat hoeven niet door het dak te gaan. Met deze zes strategieën kunt u honderden tot duizenden euro\'s besparen zonder in te boeten op kwaliteit.\n\n**1. Bereid u grondig voor op het eerste gesprek**\nVerzamel vóór het intakegesprek alle relevante documenten: contracten, correspondentie, beschikkingen en bewijsstukken. Hoe beter voorbereid u bent, hoe minder tijd de advocaat kwijt is aan het in kaart brengen van uw zaak. Bij een uurtarief van €225 bespaart u al gauw €100-€200 door een goed georganiseerd dossier mee te nemen.\n\n**2. Vraag altijd om een schriftelijke kostenindicatie**\nEen goede advocaat geeft u vóór aanvang een realistische inschatting van de totale kosten. Vraag om een kostenoverzicht op papier, inclusief een uitsplitsing van het uurtarief, geschatte uren, kantoorkosten en eventuele griffierechten. Zo voorkomt u verrassingen achteraf.\n\n**3. Vergelijk meerdere advocaten**\nNeem niet de eerste de beste advocaat. Neem contact op met minstens twee of drie kantoren om tarieven, aanpak en persoonlijke klik te vergelijken. Via AdvocaatVinder vindt u advocaten per rechtsgebied en stad, zodat u eenvoudig meerdere opties naast elkaar kunt leggen.\n\n**4. Vraag naar een vaste prijsafspraak**\nSteeds meer advocaten bieden standaardzaken aan tegen een vast tarief. Denk aan het controleren van een vaststellingsovereenkomst (vaak rond €600), een gemeenschappelijke echtscheiding (vanaf €750), of het opstellen van een samenlevingscontract. Bij een vaste prijs weet u precies waar u aan toe bent.\n\n**5. Check uw rechtsbijstandverzekering**\nVolgens het Verbond van Verzekeraars hebben circa 4,5 miljoen Nederlandse huishoudens een rechtsbijstandverzekering — maar veel verzekerden vergeten deze bij juridische problemen in te schakelen. Controleer altijd eerst of uw verzekering dekking biedt. Let wel op uitsluitingen en de wachttijd bij kort geleden afgesloten polissen.\n\n**6. Overweeg mediation als alternatief**\nBij familierecht- en arbeidsgeschillen is mediation vaak sneller, goedkoper en minder belastend dan een juridische procedure. Een mediator rekent doorgaans €100 tot €200 per uur, en veel geschillen worden binnen twee tot vier sessies opgelost. Bovendien kunt u bij mediation de kosten delen met de andere partij.',
            },
            {
                heading: 'Kosten verhalen op de tegenpartij',
                content: 'In bepaalde situaties kunt u de advocaatkosten (deels) verhalen op de wederpartij.\n\n**Bij ontslag met wederzijds goedvinden** is het gebruikelijk dat de werkgever een vergoeding voor juridische kosten opneemt in de vaststellingsovereenkomst. Dit is geen wettelijke verplichting, maar veel werkgevers stemmen hiermee in. Bedragen van €500 tot €1.500 zijn gangbaar. Laat uw advocaat dit onderhandelen — het scheelt u mogelijk de volledige rekening.\n\n**Als u een rechtszaak wint** kan de rechter de tegenpartij veroordelen tot betaling van uw proceskosten. Dit betreft de griffierechten, deurwaardersexploten en een gestandaardiseerde vergoeding voor de advocaat (het zogeheten \'liquidatietarief\'). Let op: het liquidatietarief dekt zelden de volledige advocaatkosten — het is een forfaitair bedrag.\n\n**Bij letselschade** komen de advocaatkosten voor rekening van de aansprakelijke partij (of diens verzekeraar). Dit is een van de redenen waarom no cure no pay bij letselschade zo populair is: u hoeft zelf niets voor te schieten.',
            },
            {
                heading: 'Zijn advocaatkosten fiscaal aftrekbaar?',
                content: 'Veel mensen vragen zich af of advocaatkosten aftrekbaar zijn van de belasting. Het antwoord hangt af van het type zaak.\n\n**Wel aftrekbaar:**\n• Advocaatkosten gemaakt voor het verkrijgen, behouden of verbeteren van alimentatie (partneralimentatie). Deze vallen onder de \'persoonsgebonden aftrek\' in de inkomstenbelasting.\n• Advocaatkosten voor ondernemers die betrekking hebben op de bedrijfsvoering. Deze zijn als bedrijfskosten aftrekbaar.\n\n**Niet aftrekbaar:**\n• Advocaatkosten bij ontslag of arbeidsgeschillen zijn sinds 2001 niet meer aftrekbaar voor particulieren.\n• Advocaatkosten bij echtscheiding (behoudens het alimentatiegedeelte).\n• Kosten voor strafzaken of bestuursrechtelijke procedures.\n\nTwijfelt u? Raadpleeg uw belastingadviseur of accountant.',
            },
            {
                heading: 'Veelgestelde vragen over advocaatkosten',
                content: '**Wat is het gemiddelde uurtarief van een advocaat in Nederland?**\nHet gemiddelde uurtarief ligt rond de €225 per uur exclusief btw. In de praktijk varieert dit van €100 voor een junior tot meer dan €500 voor een senior partner bij een topkantoor.\n\n**Is het eerste gesprek met een advocaat gratis?**\nVeel advocaten bieden een gratis kennismakingsgesprek van 15 tot 30 minuten aan. Niet allemaal — vraag dit altijd vooraf na. Via het Juridisch Loket kunt u altijd gratis een eerste advies krijgen.\n\n**Hoe weet ik of ik recht heb op een pro deo advocaat?**\nU kunt dit controleren op mijn.rvr.org of bel het Juridisch Loket (0900-8020). De belangrijkste criteria zijn uw bruto jaarinkomen (max. €30.000 alleenstaand / €42.400 samenwonend) en uw vermogen (max. €31.340).\n\n**Wat is het verschil tussen een advocaat en een jurist?**\nEen advocaat is altijd een jurist, maar omgekeerd geldt dat niet. Alleen advocaten zijn beëdigd, staan ingeschreven bij de NOvA, en mogen u vertegenwoordigen in de meeste rechtbanken. Een jurist mag wel adviseren maar niet pleiten.\n\n**Kan ik zelf onderhandelen over het uurtarief?**\nJa, dat mag en het gebeurt vaker dan u denkt. Advocaten bepalen hun eigen tarieven en zijn in veel gevallen bereid om mee te denken over een tarief dat bij uw situatie past, vooral bij langlopende zaken of een groot dossier.\n\n**Moet ik btw betalen over advocaatkosten?**\nJa, alle advocaatkosten zijn belast met 21% btw. Als particulier kunt u deze btw niet terugvorderen. Ondernemers met recht op btw-aftrek kunnen dat doorgaans wel.\n\n**Hoe lang duurt een gemiddelde juridische procedure?**\nDit varieert sterk. Een eenvoudige kantonzaak kan binnen 2-3 maanden afgerond zijn. Een civiele bodemprocedure bij de rechtbank duurt gemiddeld 9-18 maanden. Bij hoger beroep moet u rekening houden met 1-2 jaar extra.\n\n**Wat als ik de advocaat niet kan betalen?**\nNaast pro deo kunt u kijken naar betalingsregelingen (veel kantoren bieden dit aan), rechtsbijstandverzekering, of het Juridisch Loket voor gratis eerste hulp. Bij letselschade kunt u een no cure no pay-advocaat inschakelen.\n\n**Worden kantoorkosten altijd apart berekend?**\nNiet altijd. Sommige kantoren verwerken de kantoorkosten in het uurtarief (\'all-in tarief\'), terwijl anderen een opslag van 4-6% rekenen bovenop het honorarium. Vraag hier altijd naar bij de intake.\n\n**Kan ik halverwege van advocaat wisselen?**\nJa, u bent vrij om op elk moment van advocaat te wisselen. De huidige advocaat moet uw dossier overdragen aan de nieuwe advocaat. Houd er wel rekening mee dat u de reeds gemaakte uren moet betalen en dat de nieuwe advocaat insleestijd nodig heeft.',
            },
        ],
    },
    {
        slug: 'gesubsidieerde-rechtsbijstand',
        title: 'Gesubsidieerde Rechtsbijstand: Alles Wat U Moet Weten',
        metaTitle: 'Gesubsidieerde Rechtsbijstand | Gratis Advocaat Aanvragen | AdvocaatVinder',
        metaDescription: 'Wat is gesubsidieerde rechtsbijstand? Leer wie er recht op heeft, hoe u een pro deo advocaat aanvraagt, en wat de eigen bijdrage is. Complete gids 2026.',
        publishedAt: '2026-02-27',
        updatedAt: '2026-02-27',
        readingTime: '7 min',
        category: 'Rechtsbijstand',
        keyword: 'gesubsidieerde rechtsbijstand',
        searchVolume: '590/mo',
        tldr: 'Heeft u een laag inkomen? Dan heeft u mogelijk recht op een gratis of bijna-gratis advocaat via de overheid. Wij leggen uit wie er recht op heeft, hoe u het aanvraagt, en wat de eigen bijdrage is (€69–€1.120).',
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
        metaTitle: 'Pro Deo Advocaat | Uw Recht op Gratis Rechtshulp | AdvocaatVinder',
        metaDescription: 'Alles over de pro deo advocaat: wie komt in aanmerking, wat kost het, en hoe vindt u er een? Complete gids voor gesubsidieerde rechtsbijstand in Nederland.',
        publishedAt: '2026-02-27',
        updatedAt: '2026-02-27',
        readingTime: '5 min',
        category: 'Rechtsbijstand',
        keyword: 'pro deo advocaat',
        searchVolume: '390/mo',
        tldr: 'Een pro deo advocaat is een advocaat die u (bijna) gratis krijgt via gesubsidieerde rechtsbijstand. U betaalt alleen een eigen bijdrage vanaf €69. Hieronder leest u of u in aanmerking komt en hoe u direct een pro deo advocaat vindt.',
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
        metaTitle: 'No Cure No Pay Advocaat | Geen Risico, Alleen Betalen bij Succes | AdvocaatVinder',
        metaDescription: 'Hoe werkt no cure no pay bij advocaten in Nederland? Leer de regels, voor welke zaken het geldt, en wat de percentages zijn. Complete uitleg.',
        publishedAt: '2026-02-27',
        updatedAt: '2026-02-27',
        readingTime: '6 min',
        category: 'Kosten',
        keyword: 'no cure no pay advocaat',
        searchVolume: '720/mo',
        tldr: 'Bij no cure no pay betaalt u uw advocaat alleen als u de zaak wint. Geen resultaat? Geen kosten. Dit model is in Nederland alleen toegestaan bij letselschadezaken. Hieronder leest u precies hoe het werkt en wat de percentages zijn.',
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
        metaTitle: 'Goede Advocaat Kiezen | 7 Bewezen Tips om de Beste te Vinden | AdvocaatVinder',
        metaDescription: 'Hoe kiest u de juiste advocaat? 7 praktische tips voor het vinden van een goede advocaat in Nederland. Specialisatie, ervaring, tarieven en meer.',
        publishedAt: '2026-02-27',
        updatedAt: '2026-02-27',
        readingTime: '5 min',
        category: 'Tips',
        keyword: 'goede advocaat',
        searchVolume: '370/mo',
        tldr: 'De juiste advocaat kiezen bespaart u tijd, geld en stress. Met deze 7 praktische tips vindt u een specialist die bij uw zaak past — van het checken van specialisatie tot het onderhandelen over het tarief.',
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
    {
        slug: 'vaststellingsovereenkomst',
        title: 'Vaststellingsovereenkomst (VSO): De Complete Gids met Checklist 2026',
        metaTitle: 'Vaststellingsovereenkomst | Behoud WW & Maximale Vergoeding | AdvocaatVinder',
        metaDescription: 'Wat is een vaststellingsovereenkomst? Complete gids met 12-punten checklist, bedenktijd van 14 dagen, WW-uitkering voorwaarden, transitievergoeding en concurrentiebeding. Bijgewerkt 2026.',
        publishedAt: '2026-03-24',
        updatedAt: '2026-03-24',
        readingTime: '14 min',
        category: 'Arbeidsrecht',
        keyword: 'vaststellingsovereenkomst',
        searchVolume: '12.000/mo',
        heroImage: '/images/blog/vaststellingsovereenkomst.jpg',
        tldr: 'Een vaststellingsovereenkomst (VSO) is een overeenkomst waarmee u en uw werkgever het dienstverband beëindigen. U heeft altijd 14 dagen bedenktijd en kunt uw WW-rechten behouden als de VSO juist is opgesteld. Hieronder leest u exact waar u op moet letten.',
        sections: [
            {
                heading: 'Wat is een vaststellingsovereenkomst?',
                content: 'Een vaststellingsovereenkomst — afgekort VSO, ook wel beëindigingsovereenkomst genoemd — is een schriftelijk contract waarmee werkgever en werknemer samen afspreken om de arbeidsovereenkomst te beëindigen. In juridisch jargon heet dit "ontslag met wederzijds goedvinden", en het is verreweg de meest voorkomende manier waarop arbeidsrelaties in Nederland eindigen.\n\nAnders dan bij ontslag via het UWV of de kantonrechter, is er bij een VSO geen externe partij die oordeelt over de redelijkheid van het ontslag. U en uw werkgever sluiten een deal: u gaat akkoord met uw vertrek, en in ruil daarvoor ontvangt u bepaalde vergoedingen en voorwaarden. Precies daarom is het cruciaal dat u weet wat er in die overeenkomst hoort te staan — en wat juist niet.\n\nIn de praktijk neemt het initiatief voor een vaststellingsovereenkomst bijna altijd de werkgever. De redenen variëren: een reorganisatie, een verschil van inzicht over de koers, een verstoorde arbeidsrelatie, of bedrijfseconomische omstandigheden. Soms wordt een VSO aangeboden omdat de werkgever de stap naar het UWV of de rechter wil vermijden, wat voor beide partijen tijd en geld bespaart.',
            },
            {
                heading: 'De 12-punten checklist: wat hoort er in een VSO?',
                content: 'Een goede vaststellingsovereenkomst bevat minimaal de volgende twaalf onderdelen. Ontbreekt er een punt? Laat dit dan door een arbeidsrecht advocaat controleren voordat u tekent.\n\n**1. Ontslagdatum**\nDe exacte datum waarop uw dienstverband eindigt. Deze datum moet aansluiten op de opzegtermijn die voor u geldt — anders riskeert u een WW-gat.\n\n**2. Initiatief van de werkgever**\nDe VSO moet expliciet vermelden dat het initiatief voor de beëindiging bij de werkgever ligt. Dit is essentieel voor uw WW-rechten.\n\n**3. Ontslagreden**\nEen neutrale reden zoals "verschil van inzicht over de koers" of "bedrijfseconomische redenen". Vermijd formuleringen die suggereren dat u verwijtbaar bent ontslagen.\n\n**4. Transitievergoeding of ontslagvergoeding**\nHet bedrag dat u ontvangt. In de praktijk wordt vaak de wettelijke transitievergoeding aangehouden, maar u kunt onderhandelen over een hoger bedrag.\n\n**5. Vrijstelling van werkzaamheden**\nDe periode tussen ondertekening en de ontslagdatum: bent u vrijgesteld van werk? Zo ja, met behoud van salaris.\n\n**6. Concurrentiebeding en relatiebeding**\nWordt een bestaand concurrentiebeding gehandhaafd, beperkt of vervalt het? Dit is een belangrijk onderhandelingspunt.\n\n**7. Eindafrekening**\nEen gedetailleerd overzicht van wat er nog wordt uitbetaald: resterend salaris, vakantiegeld, niet-opgenomen vakantiedagen, eventuele 13e maand of bonus.\n\n**8. Juridische kosten**\nVeel werkgevers vergoeden de kosten van een advocaat die de VSO controleert: bedragen van €500 tot €1.500 zijn gangbaar. Laat dit opnemen als dat niet al in het voorstel staat.\n\n**9. Getuigschrift en referenties**\nAfspraken over de inhoud van het getuigschrift en hoe referenties worden verstrekt aan toekomstige werkgevers.\n\n**10. Geheimhoudingsbeding**\nVertrouwelijke bedrijfsinformatie mag u niet delen. Controleer of de geheimhoudingsclausule redelijk is afgebakend.\n\n**11. Finale kwijting**\nEen verklaring dat beide partijen na afwikkeling niets meer van elkaar te vorderen hebben. Let erop dat deze clausule geen lopende claims of rechten uitsluit die u wilt behouden.\n\n**12. Bedenktijd van 14 dagen**\nDe wettelijke bedenktijd moet expliciet worden vermeld. Staat deze er niet in? Dan wordt de bedenktijd automatisch verlengd naar drie weken.',
            },
            {
                heading: 'Bedenktijd: 14 dagen om terug te komen op uw besluit',
                content: 'Sinds de invoering van de Wet Werk en Zekerheid (WWZ) in 2015 heeft elke werknemer die een vaststellingsovereenkomst tekent het wettelijk recht om binnen 14 dagen zonder opgaaf van redenen de overeenkomst te ontbinden. Dit betekent concreet: u kunt uw handtekening herroepen en uw baan behouden.\n\nDrie belangrijke punten over de bedenktijd:\n\n• **De 14 dagen starten op de dag waarop schriftelijk overeenstemming is bereikt** — niet per se de dag van de formele ondertekening. Een akkoord per e-mail telt ook mee.\n\n• **Als de bedenktijd niet in de VSO wordt vermeld**, wordt deze automatisch verlengd naar drie weken. Dit is door de wetgever opgenomen als bescherming van de werknemer.\n\n• **De ontbinding moet schriftelijk plaatsvinden.** Een e-mail volstaat; een mondeling telefoontje niet. Bewaar altijd een kopie van uw ontbindingsverklaring.\n\n• **Maximaal één keer per zes maanden.** Als u binnen zes maanden eerder al een VSO heeft ontbonden via de bedenktijd, vervalt dit recht bij de volgende VSO.\n\nIn de praktijk wordt de bedenktijd zelden ingeroepen, maar het is een belangrijk vangnet — vooral als u onder druk voelt om snel te tekenen.',
            },
            {
                heading: 'WW-uitkering veiligstellen: de vier gouden regels',
                content: 'De grootste angst van de meeste werknemers bij een vaststellingsovereenkomst is: kom ik nog in aanmerking voor een WW-uitkering? Het antwoord is ja, mits de VSO aan vier voorwaarden voldoet.\n\n**Regel 1: Het initiatief ligt bij de werkgever**\nDe VSO moet onomwonden vermelden dat de werkgever het initiatief heeft genomen tot beëindiging. De formulering "partijen zijn in onderling overleg overeengekomen" is onvoldoende — het UWV kan dit interpreteren als eigen initiatief van de werknemer.\n\n**Regel 2: Neutrale ontslagreden**\nVermijd begrippen als "disfunctioneren" of "plichtsverzuim" — deze suggereren verwijtbaar ontslag. Veilige formuleringen zijn: "reorganisatie", "bedrijfseconomische omstandigheden", "verschil van inzicht" of "een verstoorde arbeidsverhouding".\n\n**Regel 3: Correcte fictieve opzegtermijn**\nDe einddatum van uw dienstverband moet rekening houden met de (fictieve) opzegtermijn. Uw wettelijke opzegtermijn staat in uw arbeidsovereenkomst of cao. Kiest u een te vroege einddatum, dan krijgt u geen WW-uitkering over de gemiste opzegtermijn-periode — het zogeheten "WW-gat".\n\n**Regel 4: Geen ontslag tijdens ziekte**\nTekent u een VSO terwijl u ziek bent? Dan kunt u problemen krijgen met uw WW-aanvraag, omdat u mogelijk niet beschikbaar bent voor de arbeidsmarkt. Bent u ziek, overleg dan altijd met een advocaat voordat u tekent.\n\nVoldoet uw VSO aan deze vier regels, dan heeft het UWV in de regel geen reden om uw WW-aanvraag af te wijzen.',
            },
            {
                heading: 'Transitievergoeding bij een VSO',
                content: 'Bij een vaststellingsovereenkomst is er strikt genomen geen wettelijk recht op een transitievergoeding — die geldt namelijk alleen bij een eenzijdige beëindiging door de werkgever (via UWV of kantonrechter). Maar in de praktijk is de transitievergoeding de absolute ondergrens bij onderhandeling over een VSO.\n\nDe maximale transitievergoeding in 2026 bedraagt **€102.000 bruto**, of één bruto jaarsalaris als dat hoger is. De berekening is eenvoudig:\n\n• **1/3 bruto maandsalaris per volledig gewerkt dienstjaar**\n• Voor resterende maanden: 1/36 bruto maandsalaris per maand\n• Voor resterende dagen: 1/1095 bruto maandsalaris per dag\n\nHet bruto maandsalaris omvat het basissalaris plus vakantietoeslag (8%), eventuele vaste eindejaarsuitkering, structurele overwerkvergoeding en variabele bonussen (gemiddeld over 36 maanden).\n\n**Onderhandelen boven de transitievergoeding**\nBij een VSO kunt u vaak meer dan de wettelijke transitievergoeding bedingen. Hoeveel extra u kunt vragen hangt af van meerdere factoren: de sterkte van uw juridische positie, de duur van uw dienstverband, uw leeftijd, en de mate waarin de werkgever belang heeft bij een snelle en stille beëindiging. Een arbeidsrecht advocaat kan inschatten wat een realistische onderhandelingspositie is.\n\nVia AdvocaatVinder kunt u een arbeidsrecht specialist vinden die de VSO voor u beoordeelt en namens u onderhandelt.',
            },
            {
                heading: 'Het concurrentiebeding in de VSO',
                content: 'Veel werknemers hebben in hun arbeidsovereenkomst een concurrentiebeding staan dat hun na vertrek verbiedt om bij een concurrent te werken of een eigen concurrerend bedrijf te starten. Bij een vaststellingsovereenkomst is het concurrentiebeding een van de belangrijkste onderhandelingspunten.\n\nU heeft drie opties:\n\n**Optie 1: Het beding laten vervallen**\nIn de VSO laat u opnemen dat het concurrentiebeding volledig vervalt. Dit geeft u optimale vrijheid op de arbeidsmarkt.\n\n**Optie 2: Het beding beperken**\nU onderhandelt over een kortere duur (bijvoorbeeld 6 in plaats van 12 maanden) of een smaller geografisch bereik.\n\n**Optie 3: Het beding ongemoeid laten**\nAls u in een andere branche wilt werken, maakt het concurrentiebeding wellicht niet uit. Maar wees voorzichtig: een breed geformuleerd beding kan u onverwachts beperken.\n\n**Let op: nieuwe wetgeving in aantocht**\nEr wordt in 2026 gewerkt aan nieuwe wetgeving die het concurrentiebeding in Nederland aanmerkelijk beperkt. De verwachting is dat de maximumduur wordt beperkt tot één jaar en dat werkgevers een concrete, schriftelijke motivatie van hun zwaarwegende bedrijfsbelangen moeten geven. Houd dit in de gaten bij uw onderhandeling.',
            },
            {
                heading: 'De eindafrekening: waar heeft u recht op?',
                content: 'Bij het einde van uw dienstverband heeft u recht op een eindafrekening. Dit is een overzicht van alle financiële posten die nog moeten worden verrekend. Een complete eindafrekening omvat:\n\n• **Salaris tot de laatste werkdag** — inclusief eventuele toeslagen\n• **Opgebouwd vakantiegeld** — u heeft recht op uitbetaling van het vakantiegeld dat is opgebouwd sinds de laatste uitbetaling\n• **Niet-opgenomen vakantiedagen** — deze worden uitbetaald tegen uw reguliere dagloon\n• **Pro rata 13e maand of eindejaarsuitkering** — als u hier recht op heeft\n• **Openstaande declaraties en onkostenvergoedingen** — reiskosten, thuiswerkvergoeding, etc.\n• **Pensioen** — informatie over de afhandeling van uw pensioenopbouw\n\nLaat deze bedragen in de VSO opnemen zodat er geen discussie achteraf ontstaat. Een goede advocaat controleert of alle posten correct zijn berekend en of niets ontbreekt.\n\nDaarnaast regelt de VSO meestal ook de inlevering van bedrijfseigendommen (laptop, telefoon, leaseauto, toegangspas) en de termijn waarbinnen dit moet gebeuren.',
            },
            {
                heading: 'VSO laten controleren: 5 redenen om een advocaat in te schakelen',
                content: 'Een vaststellingsovereenkomst is een juridisch bindend document met potentieel grote financiële gevolgen. Hier zijn vijf redenen waarom u de VSO altijd door een arbeidsrecht advocaat moet laten controleren:\n\n**1. U ontdekt wat u misloopt**\nVeel werknemers ondertekenen de eerste VSO die ze voorgelegd krijgen. Een advocaat weet welke vergoedingen en voorwaarden gangbaar zijn in uw sector en functieniveau, en kan inschatten of het voorstel redelijk is.\n\n**2. Uw WW-rechten worden veiliggesteld**\nEen foutieve formulering in de VSO kan uw WW-aanvraag in gevaar brengen. Een advocaat controleert of de vier gouden regels worden nageleefd.\n\n**3. De werkgever betaalt meestal de advocaat**\nIn het overgrote deel van de VSO-onderhandelingen neemt de werkgever de juridische kosten van de werknemer voor rekening. Bedragen van €500 tot €1.500 exclusief btw zijn gebruikelijk.\n\n**4. Betere onderhandelingspositie**\nEen advocaat die namens u onderhandelt, wordt door werkgevers serieus genomen. De ervaring leert dat professionele onderhandeling leidt tot betere voorwaarden: een hogere vergoeding, het vervallen van het concurrentiebeding, of langere vrijstelling van werk.\n\n**5. Zekerheid over alle bijzonderheden**\nPensioenrechten, studiekostenbeding, bonusafspraken, hypotheekverklaring — een advocaat signaleert bijzonderheden die u zelf over het hoofd kunt zien.\n\nVia AdvocaatVinder vindt u een gespecialiseerde arbeidsrecht advocaat in uw regio die ervaring heeft met vaststellingsovereenkomsten.',
            },
            {
                heading: 'Praktijkvoorbeelden: wat is een realistisch resultaat?',
                content: 'Om een idee te geven van wat u kunt verwachten, drie geanonimiseerde praktijkvoorbeelden:\n\n**Voorbeeld 1: Marketingmanager, 8 jaar in dienst, salaris €5.000 bruto/maand**\nAangeboden transitievergoeding: €13.600. Na onderhandeling door advocaat: €21.000 + vrijstelling van werk gedurende 3 maanden + vervallen concurrentiebeding + €1.000 juridische kostenvergoeding.\n\n**Voorbeeld 2: Accountant, 3 jaar in dienst, salaris €3.800 bruto/maand**\nAangeboden transitievergoeding: €3.800. Na onderhandeling: €5.700 + positief getuigschrift + vergoeding juridische kosten €750.\n\n**Voorbeeld 3: ICT-specialist, 15 jaar in dienst, salaris €6.200 bruto/maand**\nAangeboden transitievergoeding: €31.000. Na onderhandeling: €48.000 + volledig vervallen concurrentiebeding + 4 maanden vrijstelling met behoud van salaris + outplacementbudget van €3.000.\n\nDeze voorbeelden illustreren dat de eerste aanbieding van de werkgever zelden het maximaal haalbare is. Professionele onderhandeling levert vrijwel altijd een beter resultaat op.',
            },
            {
                heading: 'Stap-voor-stap: het VSO-proces van A tot Z',
                content: 'Het volledige proces van vaststellingsovereenkomst ziet er in de praktijk als volgt uit:\n\n**Stap 1: Gesprek met de werkgever (dag 1)**\nUw werkgever deelt mee dat het dienstverband beëindigd wordt en biedt u een concept-VSO aan. Neem dit document mee naar huis en teken niets ter plekke.\n\n**Stap 2: Advocaat inschakelen (dag 1-3)**\nZoek via AdvocaatVinder een arbeidsrecht advocaat en laat de VSO controleren. Vraag de werkgever om de juridische kosten te vergoeden.\n\n**Stap 3: Beoordeling en onderhandeling (dag 3-14)**\nUw advocaat beoordeelt de VSO op alle twaalf checklistpunten en stelt een tegenbod op. Er volgen meestal een tot drie rondes van onderhandeling.\n\n**Stap 4: Ondertekening**\nWanneer u akkoord gaat met de definitieve VSO, ondertekenen beide partijen. De bedenktijd van 14 dagen begint te lopen.\n\n**Stap 5: Bedenktijd (dag 1-14 na ondertekening)**\nU heeft 14 dagen om de overeenkomst ongedaan te maken. Na afloop van de bedenktijd is de VSO definitief.\n\n**Stap 6: Vrijstelling en vertrek**\nGedurende de opzegperiode bent u (doorgaans) vrijgesteld van werk. U ontvangt uw reguliere salaris en bouwt vakantiedagen op.\n\n**Stap 7: WW-aanvraag**\nVanaf de eerste dag na het einde van uw dienstverband kunt u een WW-uitkering aanvragen bij het UWV. Zorg dat u alle documenten bij de hand heeft: de VSO, uw laatste loonstroken en uw werkgeversverklaring.',
            },
            {
                heading: 'Veelgestelde vragen over de vaststellingsovereenkomst',
                content: '**Moet ik een vaststellingsovereenkomst tekenen?**\nNee, u bent nooit verplicht om een VSO te ondertekenen. Als u weigert, moet de werkgever een andere ontslagroute kiezen (UWV of kantonrechter), waarbij een onafhankelijke partij beoordeelt of het ontslag gerechtvaardigd is.\n\n**Kan ik de VSO na ondertekening nog herroepen?**\nJa, u heeft een wettelijke bedenktijd van 14 dagen (of 21 dagen als de bedenktijd niet in de VSO is vermeld). Binnen deze termijn kunt u de overeenkomst zonder opgaaf van redenen ontbinden.\n\n**Krijg ik een WW-uitkering na een VSO?**\nJa, mits de VSO correct is opgesteld: het initiatief ligt bij de werkgever, er is een neutrale ontslagreden, en de (fictieve) opzegtermijn is in acht genomen.\n\n**Hoeveel transitievergoeding krijg ik?**\nDe wettelijke transitievergoeding bedraagt 1/3 bruto maandsalaris per dienstjaar, met een maximum van €102.000 in 2026. Bij een VSO kunt u onderhandelen over een hoger bedrag.\n\n**Wat als ik ziek ben op het moment van de VSO?**\nWees uiterst voorzichtig. Tekenen tijdens ziekte kan uw recht op een Ziektewet- of WW-uitkering in gevaar brengen. Schakel altijd een advocaat in.\n\n**Betaalt de werkgever mijn advocaat?**\nIn de meeste gevallen neemt de werkgever de juridische kosten (€500-€1.500) voor rekening. Dit wordt expliciet in de VSO opgenomen.\n\n**Hoe lang duurt het hele VSO-traject?**\nGemiddeld twee tot vier weken, van het eerste gesprek tot de definitieve ondertekening. Bij complexe situaties kan het langer duren.\n\n**Mag mijn werkgever mij onder druk zetten om snel te tekenen?**\nNee. U heeft altijd het recht om de VSO mee naar huis te nemen, een advocaat te raadplegen, en na te denken over het voorstel. Druk van de werkgever om direct te tekenen is een rode vlag.',
            },
        ],
    },
    {
        slug: 'echtscheiding-kosten',
        title: 'Echtscheiding Kosten 2026: Compleet Overzicht van Advocaat, Mediator & Griffierechten',
        metaTitle: 'Echtscheiding Kosten 2026 | Voorkom Onverwachte Rekeningen | AdvocaatVinder',
        metaDescription: 'Wat kost een echtscheiding in 2026? Compleet overzicht: griffierechten (€341), advocaat (€150-€300/uur), mediator, gemeenschappelijk verzoek vs tegenspraak, boedelverdeling en bespaartips.',
        publishedAt: '2026-03-24',
        updatedAt: '2026-03-24',
        readingTime: '13 min',
        category: 'Familierecht',
        keyword: 'echtscheiding kosten',
        searchVolume: '5.000/mo',
        heroImage: '/images/blog/echtscheiding-kosten.jpg',
        tldr: 'Een echtscheiding kost gemiddeld €1.750 bij een gezamenlijke aanvraag tot €15.000+ bij een vechtscheiding. De grootste kostenbesparing zit in de keuze tussen advocaat of mediator. Hieronder vindt u alle kosten op een rij én 5 manieren om duizenden euro\'s te besparen.',
        sections: [
            {
                heading: 'Wat kost een echtscheiding? Het eerlijke antwoord',
                content: 'Elk jaar eindigen in Nederland ongeveer 30.000 huwelijken in een echtscheiding. Een van de eerste vragen die de meeste mensen stellen is: wat gaat dit kosten? Het eerlijke antwoord: dat hangt volledig af van hoe u en uw partner uit elkaar gaan.\n\nDe kosten variëren van **€1.000 tot meer dan €20.000** — en in uitzonderlijke gevallen nog hoger. De twee bepalende factoren zijn:\n\n1. **Gemeenschappelijk verzoek of op tegenspraak?** Als u en uw partner het eens zijn over de voorwaarden, deelt u één advocaat of mediator. Bent u het oneens, dan heeft ieder een eigen advocaat nodig.\n\n2. **De complexiteit van uw situatie.** Een scheiding zonder kinderen, zonder koopwoning en zonder onderneming is aanzienlijk goedkoper dan een scheiding met minderjarige kinderen, een te verdelen koophuis en pensioenverrekening.\n\nHieronder vindt u een gedetailleerde kostenopbouw per onderdeel, praktische bespaartips en informatie over wanneer u in aanmerking komt voor gesubsidieerde rechtsbijstand.',
            },
            {
                heading: 'Griffierechten 2026: de vaste kosten van de rechtbank',
                content: 'Elke echtscheiding in Nederland moet via de rechtbank lopen — dat is wettelijk verplicht. De rechtbank brengt hiervoor griffierechten in rekening. Dit zijn de vaste tarieven voor 2026:\n\n**Gemeenschappelijk verzoek:**\n• Griffierecht: **€341** voor beide partners samen (€170,50 per persoon)\n• Bij gesubsidieerde rechtsbijstand (toevoeging): **€93** totaal (€46,50 per persoon)\n\n**Eenzijdig verzoek (op tegenspraak):**\n• Griffierecht verzoeker: **€341**\n• Griffierecht verweerder: **€341** (als deze ook een verzoek indient)\n\nDaarnaast betaalt u kosten voor het opvragen van uittreksels bij de gemeente: circa **€15-€20** per uittreksel. U heeft minimaal een uittreksel van het huwelijk en uittreksels van de geboorteakten van eventuele kinderen nodig.\n\nDeze griffierechten worden jaarlijks op 1 januari aangepast. In 2026 zijn ze met 2,94% verhoogd ten opzichte van 2025.',
            },
            {
                heading: 'Kosten advocaat bij echtscheiding',
                content: 'In Nederland is het wettelijk verplicht om een advocaat in te schakelen voor het indienen van een echtscheidingsverzoek bij de rechtbank. Zelfs bij mediation moet uiteindelijk een advocaat het verzoek indienen.\n\nDe kosten van een echtscheidingsadvocaat hangen af van het type scheiding:\n\n**Gemeenschappelijk verzoek (één advocaat voor beide partijen):**\n• Uurtarief: €150 – €300 exclusief btw\n• Totale kosten: **€750 – €2.500** (inclusief convenant en verzoekschrift)\n• Sommige kantoren bieden pakketprijzen aan, bijvoorbeeld €880 per persoon all-in\n\n**Op tegenspraak (ieder een eigen advocaat):**\n• Uurtarief per advocaat: €150 – €350 exclusief btw\n• Totale kosten per partij: **€3.000 – €10.000+**\n• Bij ernstige conflicten over voogdij of vermogen: **€10.000 – €25.000** per partij\n\n**Wat doet de advocaat bij een scheiding?**\nDe advocaat stelt het echtscheidingsconvenant op (de overeenkomst met alle afspraken), maakt een ouderschapsplan als er kinderen zijn, berekent de alimentatie, regelt de verdeling van de boedel, en dient het verzoekschrift in bij de rechtbank.\n\nVia AdvocaatVinder kunt u eenvoudig familierecht advocaten in uw regio vergelijken.',
            },
            {
                heading: 'Kosten mediator bij echtscheiding',
                content: 'Mediation is een populair alternatief voor het inschakelen van twee aparte advocaten. Een mediator helpt u en uw partner om gezamenlijk tot afspraken te komen.\n\n**Tarieven mediator 2026:**\n• Standaard mediator: **€150 – €200** per uur exclusief btw\n• Ervaren mediator of advocaat-mediator: **€200 – €250** per uur exclusief btw\n• Gemiddeld aantal sessies: 3-5 sessies van 1,5-2 uur\n\n**Totale kosten mediation:**\n• Eenvoudige scheiding via mediation: **€1.500 – €2.500**\n• Inclusief indiening bij de rechtbank en griffierechten: **€2.000 – €3.000**\n• Complexe scheiding met mediation: **€3.000 – €5.000**\n\n**Gesubsidieerde mediation**\nAls u in aanmerking komt voor gesubsidieerde rechtsbijstand, kunt u ook gebruik maken van gesubsidieerde mediation via de Raad voor Rechtsbijstand. De eigen bijdrage bedraagt in 2026 slechts **€69 of €138 per persoon**, afhankelijk van uw inkomen.\n\n**Belangrijk:** Na mediation moet alsnog een advocaat het verzoekschrift bij de rechtbank indienen. Veel mediators die ook advocaat zijn, doen dit er automatisch bij.',
            },
            {
                heading: 'Gemeenschappelijk verzoek versus tegenspraak: het kostenverschil',
                content: 'Het verschil in kosten tussen een scheiding op gemeenschappelijk verzoek en een scheiding op tegenspraak is aanzienlijk. Een overzicht:\n\n**Totale kosten gemeenschappelijk verzoek:**\n• Via mediation + advocaat: **€2.000 – €3.500** (voor beide partijen samen)\n• Via één advocaat: **€1.500 – €3.000** (voor beide partijen samen)\n• Pro deo: **€93 – €276** (eigen bijdrage + laag griffierecht)\n\n**Totale kosten op tegenspraak:**\n• Twee advocaten, relatief eenvoudig: **€6.000 – €15.000** (voor beide partijen samen)\n• Twee advocaten, complexe zaak: **€15.000 – €40.000+** (voor beide partijen samen)\n• Bij procedures over voogdij, onderneming of internationaal vermogen: vrijwel onbeperkt\n\nHet kostenverschil kan dus oplopen tot **tienduizenden euro\'s**. Dit is de reden waarom familierecht advocaten en rechters altijd adviseren om eerst te proberen er samen uit te komen.\n\nMocht u er niet uitkomen via mediation, dan kunt u alsnog naar de rechter stappen. Het omgekeerde (eerst procederen, dan alsnog mediëren) komt ook voor maar is duurder.',
            },
            {
                heading: 'Bijkomende kosten bij een echtscheiding',
                content: 'Naast de advocaat- of mediatorkosten en de griffierechten zijn er diverse bijkomende kosten waar u rekening mee moet houden:\n\n**Boedelverdeling:**\n• Taxatie koopwoning: **€400 – €750**\n• Notariskosten verdeling woning: **€750 – €1.500**\n• Taxatie onderneming (als van toepassing): **€3.000 – €10.000**\n\n**Pensioenverrekening:**\n• Berekening pensioenverevening door actuaris: **€200 – €500**\n• Uitvoering door het pensioenfonds: doorgaans kosteloos\n\n**Alimentatie:**\n• Alimentatieberekening (als niet via advocaat): **€150 – €300**\n• Draagkrachtberekening door financieel adviseur: **€300 – €600**\n\n**Overige:**\n• Btw (21%) over alle advocaat- en mediatorkosten (particulieren kunnen dit niet terugvorderen)\n• Kantoorkosten advocaat: 4-6% opslag over het honorarium\n• Uittreksels gemeente: **€15 – €20** per stuk\n\nBelangrijk: advocaatkosten bij een echtscheiding zijn niet fiscaal aftrekbaar, behalve de kosten die betrekking hebben op het **vaststellen van partneralimentatie** — deze vallen onder de persoonsgebonden aftrek.',
            },
            {
                heading: 'Gesubsidieerde rechtsbijstand bij echtscheiding',
                content: 'Als uw inkomen onder de grens valt, kunt u in aanmerking komen voor gesubsidieerde rechtsbijstand (pro deo). In dat geval betaalt de overheid het grootste deel van de advocaatkosten.\n\n**Inkomensgrenzen 2026:**\n• Alleenstaanden: maximaal **€30.000** bruto jaarinkomen\n• Samenwonenden/gehuwden: maximaal **€42.400** bruto jaarinkomen\n• Vermogen (exclusief eigen woning): maximaal **€31.340**\n\n**Eigen bijdrage 2026:**\nDe eigen bijdrage voor gesubsidieerde rechtsbijstand varieert van **€69 tot €1.120** per persoon, afhankelijk van uw inkomen. Bij mediation via de Raad voor Rechtsbijstand is de bijdrage lager: **€69 of €138** per persoon.\n\n**Hoe vraagt u het aan?**\n1. Neem contact op met het Juridisch Loket (0900-8020) voor een gratis eerste advies\n2. Zoek via AdvocaatVinder een advocaat die op toevoegingsbasis werkt\n3. De advocaat vraagt de toevoeging aan bij de Raad voor Rechtsbijstand\n4. U ontvangt binnen 2-4 weken bericht of u in aanmerking komt\n\nLet op: omdat u bij een echtscheiding formeel nog gehuwd bent, wordt uw inkomen getoetst op basis van uw individuele situatie, niet op basis van het gezamenlijke inkomen.',
            },
            {
                heading: '7 manieren om te besparen op uw echtscheiding',
                content: 'Een scheiding hoeft niet het financiële drama te zijn dat velen vrezen. Met deze zeven tips bespaart u aanzienlijk op de kosten:\n\n**1. Kies voor een gemeenschappelijk verzoek**\nAls het enigszins mogelijk is, probeer het eens te worden met uw partner over de belangrijkste punten. Dit bespaart tienduizenden euro\'s.\n\n**2. Schakel een mediator in**\nMediation is gemiddeld 50-70% goedkoper dan twee aparte advocaten. De meeste scheidingen via mediation worden binnen 3-5 sessies afgerond.\n\n**3. Bereid u goed voor**\nVerzamel vooraf alle financiële gegevens: loonstroken, belastingaangiftes, hypotheekinfo, pensioenoverzichten, bankafschriften. Hoe beter voorbereid, hoe minder uren de advocaat of mediator nodig heeft.\n\n**4. Vraag een vaste prijs**\nSteeds meer advocaten en mediators bieden een vast tarief voor een echtscheiding op gemeenschappelijk verzoek. Vergelijk meerdere aanbieders.\n\n**5. Check uw rechtsbijstandverzekering**\nSommige rechtsbijstandverzekeringen dekken (een deel van) de kosten van een echtscheiding. Raadpleeg uw polisvoorwaarden.\n\n**6. Overweeg gesubsidieerde mediation**\nBij een laag inkomen betaalt u via de Raad voor Rechtsbijstand slechts €69-€138 eigen bijdrage voor mediation.\n\n**7. Vermijd de rechtbank**\nElke extra zitting bij de rechtbank kost uw advocaat voorbereiding, reistijd en zittingstijd. Hoe meer u buiten de rechtbank regelt, hoe lager de rekening.',
            },
            {
                heading: 'Veelgestelde vragen over echtscheidingskosten',
                content: '**Wat is de goedkoopste manier om te scheiden?**\nEen scheiding op gemeenschappelijk verzoek via mediation is het goedkoopst: vanaf circa €1.500 voor beide partijen inclusief griffierechten.\n\n**Wie betaalt de kosten van een echtscheiding?**\nBij een gemeenschappelijk verzoek deelt u de kosten. Bij een scheiding op tegenspraak betaalt iedere partij de eigen advocaat. De griffierechten worden in familierechtelijke zaken vrijwel altijd gecompenseerd.\n\n**Is een echtscheiding fiscaal aftrekbaar?**\nAlleen de advocaatkosten die betrekking hebben op het vaststellen of wijzigen van partneralimentatie zijn aftrekbaar. De overige kosten niet.\n\n**Hoe lang duurt een echtscheiding?**\nOp gemeenschappelijk verzoek: 4-12 weken vanaf het indienen van het verzoekschrift. Op tegenspraak: 6-18 maanden, afhankelijk van de complexiteit.\n\n**Heb ik altijd een advocaat nodig bij een scheiding?**\nJa, dit is wettelijk verplicht in Nederland. Alleen een advocaat mag een echtscheidingsverzoek indienen bij de rechtbank.\n\n**Kan ik scheiden zonder mediator?**\nJa, mediation is niet verplicht. U kunt ook direct een advocaat inschakelen. Wel wordt mediation door veel rechtbanken aanbevolen.\n\n**Wat kost een scheiding als ik pro deo in aanmerking kom?**\nBij gesubsidieerde rechtsbijstand betaalt u alleen de eigen bijdrage (€69-€1.120) plus het verlaagde griffierecht (€46,50 per persoon).\n\n**Kan ik de echtscheidingskosten in termijnen betalen?**\nVeel advocaten en mediators bieden betalingsregelingen aan. Vraag hier bij de intake naar.',
            },
        ],
    },
    {
        slug: 'transitievergoeding-berekenen',
        title: 'Transitievergoeding 2026: Berekening, Maximum & Veelgestelde Vragen',
        metaTitle: 'Transitievergoeding Berekenen | Krijg Waar U Recht Op Heeft | AdvocaatVinder',
        metaDescription: 'Hoe berekent u de transitievergoeding in 2026? Formule (1/3 maandsalaris per dienstjaar), maximum €102.000, bruto-netto verschil, belastingtarieven en 3 rekenvoorbeelden.',
        publishedAt: '2026-03-24',
        updatedAt: '2026-03-24',
        readingTime: '11 min',
        category: 'Arbeidsrecht',
        keyword: 'transitievergoeding berekenen',
        searchVolume: '3.500/mo',
        heroImage: '/images/blog/transitievergoeding-berekenen.jpg',
        tldr: 'De transitievergoeding bedraagt 1/3 maandsalaris per dienstjaar, met een maximum van €102.000 bruto in 2026. U heeft hier recht op bij elk ontslag door de werkgever. Hieronder berekent u in 3 stappen exact hoeveel u krijgt.',
        sections: [
            {
                heading: 'Wat is de transitievergoeding?',
                content: 'De transitievergoeding is een wettelijke ontslagvergoeding waar u als werknemer recht op heeft wanneer uw werkgever het dienstverband beëindigt. De vergoeding is bedoeld om de overgang ("transitie") naar een nieuwe baan te vergemakkelijken — denk aan omscholing, sollicitatiecoaching of een financiële buffer tijdens het zoeken naar nieuw werk.\n\nSinds 1 januari 2020 bouwt elke werknemer vanaf de eerste werkdag transitievergoeding op. Het maakt niet uit of u een vast contract, een tijdelijk contract of een oproepcontract heeft — het recht geldt voor iedereen.\n\nBelangrijk: de transitievergoeding wordt altijd bruto uitbetaald. Dat betekent dat u er nog loonbelasting en premies over betaalt. Het nettobedrag dat u op uw rekening ontvangt, is dus lager dan het brutobedrag.',
            },
            {
                heading: 'Wanneer heeft u recht op een transitievergoeding?',
                content: 'U heeft recht op een transitievergoeding in de volgende situaties:\n\n✅ **Ontslag via het UWV** — bij bedrijfseconomische redenen of langdurige arbeidsongeschiktheid (na 2 jaar ziekte)\n✅ **Ontslag via de kantonrechter** — bij disfunctioneren, verstoorde arbeidsverhouding, of andere gronden\n✅ **Niet-verlenging tijdelijk contract** — als uw werkgever uw tijdelijke contract niet verlengt\n✅ **Ontslag op staande voet** — mits dit later door de rechter onterecht wordt verklaard\n✅ **Ernstig verwijtbaar handelen van de werkgever** — als u zelf ontslag neemt vanwege ernstig verwijtbare situatie\n\n❌ **Geen recht op transitievergoeding bij:**\n• Ontslag wegens ernstig verwijtbaar handelen van de werknemer (fraude, diefstal, etc.)\n• Zelf ontslag nemen (tenzij door toedoen van de werkgever)\n• Bereiken van de AOW-leeftijd\n• Faillissement van de werkgever\n• Werknemer is jonger dan 18 jaar en werkt gemiddeld minder dan 12 uur per week\n\nBij een vaststellingsovereenkomst (VSO) is er strikt genomen geen wettelijk recht op transitievergoeding, maar in de praktijk wordt deze vrijwel altijd als ondergrens gebruikt bij de onderhandeling.',
            },
            {
                heading: 'De formule: zo berekent u de transitievergoeding',
                content: 'De berekening van de transitievergoeding is sinds 2020 verrassend eenvoudig. De formule:\n\n**Transitievergoeding = 1/3 bruto maandsalaris × aantal dienstjaren**\n\nVoor de restperiode (maanden en dagen die geen volledig dienstjaar vormen):\n• Per resterende maand: **1/36 bruto maandsalaris**\n• Per resterende dag: **1/1095 bruto maandsalaris**\n\n**Wat telt mee in het bruto maandsalaris?**\nHet bruto maandsalaris voor de berekening is meer dan alleen uw basissalaris. De volgende componenten tellen mee:\n\n• Basissalaris\n• Vakantietoeslag (8% of het bedrag uit uw contract/cao)\n• Vaste eindejaarsuitkering of 13e maand (1/12 per maand)\n• Structurele overwerkvergoeding (gemiddelde over 12 maanden)\n• Vaste ploegentoeslag\n• Structurele bonussen en winstuitkeringen (gemiddelde over 36 maanden)\n\n**Wat telt niet mee?**\n• Incidentele bonussen\n• Onkostenvergoedingen (reiskosten, thuiswerkvergoeding)\n• Werkgeversbijdrage pensioen\n• Bijdrage zorgverzekering\n\nBij een oproep- of uitzendcontract wordt uitgegaan van het gemiddelde uurloon en het gemiddelde aantal gewerkte uren over de laatste 12 maanden.',
            },
            {
                heading: 'Maximum transitievergoeding 2026',
                content: 'De transitievergoeding kent een wettelijk maximum dat jaarlijks wordt geïndexeerd. Voor 2026 gelden de volgende maxima:\n\n**Maximale transitievergoeding 2026: €102.000 bruto**\n\nOf: **één bruto jaarsalaris** als dat hoger is dan €102.000.\n\nDit betekent concreet:\n• Verdient u €80.000 bruto per jaar? Dan is uw maximum €102.000.\n• Verdient u €120.000 bruto per jaar? Dan is uw maximum €120.000 (één jaarsalaris).\n\n**Historisch overzicht maximale transitievergoeding:**\n• 2024: €94.000\n• 2025: €98.000\n• 2026: €102.000\n\nHet maximum wordt jaarlijks per 1 januari aangepast op basis van de ontwikkeling van de contractlonen, zoals vastgesteld door het CBS.',
            },
            {
                heading: '3 rekenvoorbeelden uitgewerkt',
                content: 'Om de formule concreet te maken, drie praktijkvoorbeelden:\n\n**Voorbeeld 1: Verkoper, 5 jaar en 3 maanden in dienst**\n• Bruto maandsalaris: €3.000\n• Vakantietoeslag (8%): €240\n• Totaal bruto maandsalaris: €3.240\n\nBerekening:\n• 5 volle jaren: 5 × (1/3 × €3.240) = **€5.400**\n• 3 resterende maanden: 3 × (1/36 × €3.240) = **€270**\n• **Totale transitievergoeding: €5.670 bruto**\n\n**Voorbeeld 2: Projectmanager, 12 jaar en 8 maanden in dienst**\n• Bruto maandsalaris: €5.500\n• Vakantietoeslag: €440\n• 13e maand (1/12): €458,33\n• Totaal bruto maandsalaris: €6.398,33\n\nBerekening:\n• 12 volle jaren: 12 × (1/3 × €6.398,33) = **€25.593,33**\n• 8 resterende maanden: 8 × (1/36 × €6.398,33) = **€1.421,85**\n• **Totale transitievergoeding: €27.015,18 bruto**\n\n**Voorbeeld 3: Senior consultant, 22 jaar in dienst**\n• Bruto maandsalaris: €7.800\n• Vakantietoeslag: €624\n• Bonus (gemiddeld over 36 maanden): €325/maand\n• Totaal bruto maandsalaris: €8.749\n\nBerekening:\n• 22 volle jaren: 22 × (1/3 × €8.749) = **€64.160,67**\n• **Totale transitievergoeding: €64.160,67 bruto**\n\nDit valt onder het maximum van €102.000, dus het volledige bedrag wordt uitbetaald.',
            },
            {
                heading: 'Belasting over de transitievergoeding: bruto versus netto',
                content: 'De transitievergoeding is een brutobedrag. Uw werkgever houdt loonbelasting en premies in en draagt deze af aan de Belastingdienst. Wat u netto ontvangt, hangt af van de belastingschijf waarin het bedrag valt.\n\n**Belastingtarieven 2026 (inkomstenbelasting):**\n• Tot €38.883: **35,75%**\n• Van €38.883 tot €78.426: **37,56%**\n• Vanaf €78.426: **49,50%**\n\n**Vuistregel:** De meeste werknemers ontvangen circa **65% tot 70%** van de bruto transitievergoeding netto. Bij hogere bedragen kan dit percentage dalen naar 50-55% door het hogere belastingtarief.\n\n**Rekenvoorbeeld:**\nBruto transitievergoeding: €25.000\n• Belasting (stel gemiddeld 37%): €9.250\n• **Netto uitbetaling: circa €15.750**\n\n**Manieren om meer netto over te houden:**\n\n1. **Gebruik het bedrag voor scholing** — Onder bepaalde voorwaarden kunt u de transitievergoeding (deels) inzetten voor scholing, waardoor er minder belasting wordt geheven.\n\n2. **Middeling** — Als uw inkomen in het jaar van de transitievergoeding sterk afwijkt van de jaren ervoor en erna, kunt u via de inkomstenbelasting een middelingsverzoek indienen om het tarief te middelen.\n\n3. **Spreiding over twee jaren** — Als de transitievergoeding in december wordt uitbetaald, kunt u met uw werkgever afspreken om een deel in januari van het volgende jaar te betalen, zodat het bedrag over twee belastingjaren wordt verspreid.',
            },
            {
                heading: 'Transitievergoeding na 2 jaar ziekte',
                content: 'Een veelbesproken situatie: u bent twee jaar ziek geweest en uw werkgever vraagt ontslag aan bij het UWV. Ook in dit geval heeft u recht op de volledige transitievergoeding.\n\nSinds 2020 bestaat de **Compensatieregeling transitievergoeding bij langdurige arbeidsongeschiktheid**. Dit betekent dat uw werkgever de transitievergoeding aan u betaalt, en vervolgens deze kosten kan terugvragen bij het UWV. De werkgever wordt dus gecompenseerd — maar u ontvangt gewoon uw volledige vergoeding.\n\n**Let op bij een slapend dienstverband:**\nSommige werkgevers houden het dienstverband na twee jaar ziekte bewust in stand (een "slapend dienstverband") om de transitievergoeding te vermijden. De Hoge Raad heeft in 2019 geoordeeld dat werkgevers in principe verplicht zijn om mee te werken aan beëindiging als de werknemer daarom vraagt. Weigert uw werkgever? Schakel een arbeidsrecht advocaat in.\n\nVia AdvocaatVinder vindt u een specialist in arbeidsrecht en ontslagzaken die u kan adviseren over uw rechten bij langdurige ziekte.',
            },
            {
                heading: 'Transitievergoeding bij een tijdelijk contract',
                content: 'Ook bij een tijdelijk contract bouwt u vanaf dag één transitievergoeding op. De meest voorkomende situaties:\n\n**Het contract wordt niet verlengd:**\nAls uw werkgever besluit uw tijdelijke contract niet te verlengen, heeft u recht op transitievergoeding over de volledige contractduur. De werkgever moet u hier uiterlijk één maand voor het einde van uw contract over informeren (de "aanzegtermijn").\n\n**Meerdere tijdelijke contracten achter elkaar:**\nAlle opeenvolgende contracten bij dezelfde werkgever worden opgeteld voor de berekening van de transitievergoeding. Ook tussenpozen van maximaal zes maanden worden meegeteld.\n\n**Rekenvoorbeeld:**\n• Eerste contract: 12 maanden\n• Tweede contract: 12 maanden\n• Bruto maandsalaris inclusief vakantietoeslag: €2.700\n• Transitievergoeding: 2 × (1/3 × €2.700) = **€1.800 bruto**\n\nBelangrijk: als uw werkgever vergeet u op tijd aan te zeggen (de aanzegtermijn), bent u bovenop de transitievergoeding ook een aanzegvergoeding van maximaal één maandsalaris verschuldigd.',
            },
            {
                heading: 'Veelgestelde vragen over de transitievergoeding',
                content: '**Hoeveel transitievergoeding krijg ik in 2026?**\nDe transitievergoeding bedraagt 1/3 bruto maandsalaris per dienstjaar. Het maximum in 2026 is €102.000 bruto, of één bruto jaarsalaris als dat hoger is.\n\n**Is de transitievergoeding bruto of netto?**\nDe berekening is altijd bruto. U ontvangt het nettobedrag na aftrek van loonbelasting en premies. Vuistregel: u houdt circa 65-70% netto over.\n\n**Wanneer wordt de transitievergoeding uitbetaald?**\nDe werkgever moet de transitievergoeding betalen binnen één maand na het einde van het dienstverband. Bij te late betaling is de werkgever wettelijke rente verschuldigd.\n\n**Kan ik onderhandelen over een hogere transitievergoeding?**\nBij ontslag via UWV of kantonrechter is het bedrag wettelijk bepaald. Bij een vaststellingsovereenkomst kunt u wel onderhandelen — en krijgt u in de praktijk vaak meer dan het wettelijke minimum.\n\n**Telt vakantiegeld mee bij de berekening?**\nJa. De vakantietoeslag (standaard 8%) wordt altijd bij het bruto maandsalaris opgeteld voor de berekening.\n\n**Krijg ik transitievergoeding als ik zelf ontslag neem?**\nIn principe niet. Alleen als u ontslag neemt vanwege ernstig verwijtbaar handelen van uw werkgever (zware arbeidsomstandigheden, discriminatie, niet betalen van loon) kunt u via de rechter aanspraak maken op de transitievergoeding.\n\n**Krijg ik transitievergoeding bij faillissement?**\nNee. Bij faillissement van uw werkgever heeft u geen recht op de transitievergoeding. Wel kunt u bij het UWV een beroep doen op de loongarantieregeling voor achterstallig loon.\n\n**Kan mijn werkgever de transitievergoeding in termijnen betalen?**\nDit kan alleen als u hier samen schriftelijk afspraken over maakt. Zonder uw toestemming moet de werkgever het volledige bedrag binnen één maand betalen.\n\n**Hoe lang heb ik de tijd om de transitievergoeding op te eisen?**\nU heeft drie maanden na het einde van het dienstverband om een verzoek in te dienen bij de kantonrechter als uw werkgever weigert te betalen. Na deze termijn vervalt uw recht.\n\n**Moet ik de transitievergoeding terugbetalen?**\nNee, de transitievergoeding hoeft nooit te worden terugbetaald. Het is een definitieve vergoeding bij het einde van het dienstverband.',
            },
        ],
    },
    {
        slug: 'alimentatie-berekenen',
        title: 'Alimentatie Berekenen 2026: Kinderalimentatie, Partneralimentatie & Indexering',
        metaTitle: 'Alimentatie Berekenen 2026 | Eerlijke Berekening in 3 Stappen | AdvocaatVinder',
        metaDescription: 'Hoe wordt alimentatie berekend in 2026? Kinderalimentatie via NIBUD-tabellen, partneralimentatie berekening, indexering 4,6%, draagkracht en 3 rekenvoorbeelden.',
        publishedAt: '2026-03-24',
        updatedAt: '2026-03-24',
        readingTime: '13 min',
        category: 'Familierecht',
        keyword: 'alimentatie berekenen',
        searchVolume: '3.000/mo',
        heroImage: '/images/blog/alimentatie-berekenen.jpg',
        tldr: 'De alimentatie-indexering voor 2026 is 4,6%. Kinderalimentatie wordt berekend via NIBUD-tabellen op basis van gezinsinkomen, partneralimentatie via de 60%-norm en draagkrachtberekening. Hieronder vindt u de volledige stap-voor-stap berekening met twee concrete rekenvoorbeelden.',
        sections: [
            {
                heading: 'Hoe wordt alimentatie berekend in Nederland?',
                content: 'Alimentatie — de financiële bijdrage na een scheiding — is voor veel Nederlanders een van de meest beladen onderwerpen bij een echtscheiding. Hoeveel moet ik betalen? Of: hoeveel heb ik recht op? De berekening is complexer dan de meeste mensen verwachten, maar de basisprincipes zijn helder.\n\nEr zijn twee vormen van alimentatie:\n\n1. **Kinderalimentatie** — de bijdrage in de kosten van de opvoeding en het levensonderhoud van de kinderen.\n2. **Partneralimentatie** — de bijdrage van de meestverdienende ex-partner aan de minstverdienende ex-partner.\n\nBeide vormen worden berekend aan de hand van de officiële **Trema-normen** (voluit: het Rapport Alimentatienormen), die jaarlijks worden bijgewerkt door de Expertgroep Alimentatienormen van de Rechtspraak. De versie voor 2026 is op 31 december 2025 gepubliceerd.\n\nIn dit artikel leggen we de volledige berekening stap voor stap uit, inclusief de indexering voor 2026, rekenvoorbeelden en veelgestelde vragen.',
            },
            {
                heading: 'Indexering alimentatie 2026: verhoging van 4,6%',
                content: 'Elk jaar worden alle alimentatiebedragen in Nederland automatisch verhoogd door de wettelijke indexering. Dit percentage wordt vastgesteld door de Minister van Justitie op basis van de loon- en prijsontwikkelingen.\n\n**De indexering voor 2026 bedraagt 4,6%.**\n\nDit betekent concreet: als u in 2025 €500 per maand aan alimentatie betaalde of ontving, wordt dit per 1 januari 2026 automatisch **€523** per maand.\n\nBelangrijke punten over de indexering:\n\n• De verhoging geldt voor zowel kinder- als partneralimentatie.\n• De indexering is **wettelijk verplicht** — u hoeft geen wijziging aan te vragen bij de rechter.\n• De alimentatiebetaler is zelf verantwoordelijk voor het doorvoeren van de verhoging. Dit gaat niet automatisch.\n• Vergeten te indexeren? De ontvanger kan achterstallige indexering tot **vijf jaar terug** vorderen.\n• De indexering kan alleen worden uitgesloten als dit schriftelijk is vastgelegd, bijvoorbeeld in het echtscheidingsconvenant.\n\n**Historisch overzicht indexeringspercentages:**\n• 2024: 6,2%\n• 2025: 5,3%\n• 2026: 4,6%\n\nU kunt de geïndexeerde bedragen eenvoudig berekenen via de rekentool op de website van het LBIO (Landelijk Bureau Inning Onderhoudsbijdragen).',
            },
            {
                heading: 'Kinderalimentatie berekenen: de drie stappen',
                content: 'De berekening van kinderalimentatie volgt drie vaste stappen volgens de Trema-normen:\n\n**Stap 1: De behoefte van het kind vaststellen**\nDe behoefte is het bedrag dat nodig is om het kind hetzelfde welvaartsniveau te bieden als vóór de scheiding. Dit wordt bepaald aan de hand van de **NIBUD-tabellen** (eigen bijdrage kosten kinderen), die rekening houden met:\n• Het netto gezinsinkomen vóór de scheiding\n• De leeftijd van het kind\n• Het aantal kinderen\n\nNieuw in 2026: de NIBUD-tabellen zijn uitgebreid tot een netto gezinsinkomen van **€7.500** per maand (voorheen €6.000). Daarnaast is in de behoeftetabellen rekening gehouden met de kinderbijslag, wat kan leiden tot een iets lager eigen aandeel van ouders.\n\n**Stap 2: De draagkracht van beide ouders berekenen**\nDe draagkracht bepaalt hoeveel elke ouder kan bijdragen aan de kosten van het kind. De berekening omvat:\n• Het netto besteedbaar inkomen na scheiding\n• Het draagkrachtloos inkomen (het bestaansminimum)\n• De draagkrachtruimte: het verschil tussen deze twee bedragen\n• Van de draagkrachtruimte wordt **70%** aangemerkt als beschikbaar voor kinderalimentatie\n\nVoor netto besteedbare inkomens boven €2.200 per maand gelden specifieke draagkrachttabellen van de Rechtspraak.\n\nMinimumdraaagkracht: ouders met een inkomen onder €1.680 per maand betalen een minimum van **€25 per kind** (of €50 voor twee of meer kinderen).\n\n**Stap 3: Verdeling en zorgkorting**\nDe kosten worden verdeeld naar rato van de draagkracht van beide ouders. Daarnaast ontvangt de ouder met de omgangsregeling een **zorgkorting**: een aftrek op het alimentatiebedrag die de verblijfskosten tijdens de omgang compenseert.\n\nDe zorgkorting bedraagt:\n• 15% bij minder dan 1 dag per week omgang\n• 25% bij gemiddeld 1 dag per week\n• 35% bij gemiddeld 2 dagen per week\n• 45% bij een nagenoeg gelijke verdeling',
            },
            {
                heading: 'Partneralimentatie berekenen: behoefte en draagkracht',
                content: 'De berekening van partneralimentatie is complexer en kent eveneens drie stappen:\n\n**Stap 1: Behoefte van de minstverdienende partner**\nDe behoefte wordt bepaald op basis van het welvaartsniveau tijdens het huwelijk. De rechter kijkt naar het netto besteedbaar gezinsinkomen en de werkelijke uitgaven tijdens het huwelijk.\n\nEen veelgebruikte vuistregel is de **"60%-norm"**: de behoefte wordt gesteld op 60% van het netto besteedbaar gezinsinkomen minus de kosten van kinderen. Dit is echter slechts een richtlijn; de rechter kan hiervan afwijken.\n\n**Stap 2: Draagkracht van de meestverdienende partner**\nDe draagkracht wordt berekend door van het netto besteedbaar inkomen de volgende posten af te trekken:\n• Forfaitaire woonlasten: **30% van het netto besteedbaar inkomen** (sinds 2023)\n• Premie zorgverzekering\n• Eventuele kinderalimentatie\n• Het draagkrachtloos inkomen\n\nVan de resterende draagkrachtruimte wordt **60%** aangemerkt als beschikbaar voor partneralimentatie.\n\n**Stap 3: Jusvergelijking**\nUiteindelijk wordt een jusvergelijking gemaakt: de alimentatie mag er niet toe leiden dat de betaler minder overhoudt dan de ontvanger. De jusvergelijking voorkomt dat de alimentatiebetaler er financieel slechter voor komt te staan dan de alimentatieontvanger.',
            },
            {
                heading: 'Duur van de partneralimentatie',
                content: 'De maximale duur van de partneralimentatie is in 2020 gewijzigd door de Wet herziening partneralimentatie. De huidige regels:\n\n**Hoofdregel: maximaal 5 jaar**\nDe partneralimentatie duurt maximaal de helft van de duur van het huwelijk, met een maximum van **5 jaar**.\n\n**Uitzonderingen:**\n\n• **Huwelijken langer dan 15 jaar**: als de ontvanger binnen 10 jaar de AOW-leeftijd bereikt, loopt de alimentatie door tot de AOW-datum.\n• **Kinderen jonger dan 12 jaar**: de alimentatie loopt door tot het jongste kind 12 jaar wordt.\n• **Huwelijken vóór 1 januari 2020 die langer dan 15 jaar duurden en de ontvanger is geboren vóór 1 januari 1970**: maximaal 10 jaar alimentatie (overgangsrecht).\n\n**Verlenging en beëindiging:**\n• Na afloop van de termijn kan de rechter in uitzonderlijke gevallen verlengen als beëindiging te ingrijpend zou zijn.\n• Partneralimentatie eindigt automatisch bij hertrouwen of samenwonen van de ontvanger.\n• Beide partijen kunnen de rechter vragen het bedrag te wijzigen bij gewijzigde omstandigheden (inkomensdaling, werkloosheid, nieuw inkomen ontvanger).',
            },
            {
                heading: 'Rekenvoorbeeld kinderalimentatie',
                content: 'Een concreet voorbeeld om de berekening te illustreren:\n\n**Situatie:**\n• Vader: netto besteedbaar inkomen €3.500/maand\n• Moeder: netto besteedbaar inkomen €2.000/maand\n• Twee kinderen: 8 en 11 jaar\n• Co-ouderschap: vader heeft de kinderen 2 dagen per week\n\n**Stap 1: Behoefte**\nNetto gezinsinkomen vóór scheiding: €5.500\nVolgens NIBUD-tabellen 2026: behoefte twee kinderen ≈ **€1.100/maand**\n\n**Stap 2: Draagkracht**\nVader:\n• Netto besteedbaar inkomen: €3.500\n• Draagkrachtloos inkomen: ca. €1.175\n• Draagkrachtruimte: €2.325\n• 70% voor kinderen: **€1.628**\n\nMoeder:\n• Netto besteedbaar inkomen: €2.000\n• Draagkrachtloos inkomen: ca. €1.175\n• Draagkrachtruimte: €825\n• 70% voor kinderen: **€578**\n\n**Stap 3: Verdeling**\nTotale draagkracht: €1.628 + €578 = €2.206\nAandeel vader: (€1.628 / €2.206) × €1.100 = **€812**\nZorgkorting vader (35% bij 2 dagen/week): €1.100 × 35% = €385\nKinderalimentatie vader: €812 – €385 = **€427 per maand**',
            },
            {
                heading: 'Rekenvoorbeeld partneralimentatie',
                content: '**Situatie:**\n• Man: netto besteedbaar inkomen €4.200/maand\n• Vrouw: netto besteedbaar inkomen €1.200/maand\n• Gehuwd geweest: 10 jaar\n• Geen kinderen\n\n**Stap 1: Behoefte vrouw**\n60%-norm: 60% × €5.400 (gezinsinkomen) = €3.240\nEigen inkomen vrouw: €1.200\nAanvullende behoefte: €3.240 – €1.200 = **€2.040/maand**\n\n**Stap 2: Draagkracht man**\n• Netto besteedbaar inkomen: €4.200\n• Forfaitaire woonlasten (30%): €1.260\n• Premie zorgverzekering: €170\n• Draagkrachtloos inkomen: ca. €1.175\n• Draagkrachtruimte: €1.595\n• 60% beschikbaar: **€957/maand**\n\n**Stap 3: Vaststelling**\nDe draagkracht (€957) is lager dan de behoefte (€2.040), dus de partneralimentatie wordt vastgesteld op **€957 per maand**, voor een maximale duur van **5 jaar** (helft van 10 jaar huwelijk).\n\nNa de jusvergelijking kan dit bedrag nog iets worden bijgesteld.',
            },
            {
                heading: 'Fiscale behandeling van alimentatie',
                content: 'De fiscale behandeling van alimentatie verschilt per type:\n\n**Partneralimentatie:**\n• Voor de betaler: **aftrekbaar** in de inkomstenbelasting\n• Aftrekbaar tegen maximaal **37,56%** voor inkomens boven €78.426 (2026)\n• Voor lagere inkomens: aftrekbaar tegen het geldende schijventarief\n• Voor de ontvanger: belast als inkomen in box 1\n\n**Kinderalimentatie:**\n• Voor de betaler: **niet aftrekbaar**\n• Voor de ontvanger: **belastingvrij** — de ontvanger hoeft kinderalimentatie niet op te geven bij de Belastingdienst\n\n**Praktisch voorbeeld fiscaal voordeel partneralimentatie:**\nU betaalt €1.000 per maand partneralimentatie = €12.000 per jaar\nBelastingvoordeel bij schijf 37,56%: €12.000 × 37,56% = **€4.507 per jaar**\nNetto kosten alimentatie: €12.000 – €4.507 = **€7.493 per jaar** (ofwel €624/maand)\n\nDit fiscale voordeel maakt partneralimentatie voor de betaler aanzienlijk draaglijker dan het bruto bedrag suggereert.',
            },
            {
                heading: 'Wat te doen als u het niet eens bent met de alimentatie?',
                content: 'Er zijn verschillende situaties waarin u de alimentatie kunt laten herzien:\n\n**Wijziging vragen bij de rechter**\nAls uw financiële situatie substantieel is veranderd — bijvoorbeeld door werkloosheid, arbeidsongeschiktheid, een nieuw inkomen, samenwonen of hertrouwen — kunt u de rechter vragen om de alimentatie te wijzigen. Dit kan zowel een verhoging als een verlaging zijn.\n\n**Nihilbeding**\nBij de scheiding kunt u afspreken dat u afziet van partneralimentatie (nihilbeding). Let op: voor kinderalimentatie kan dit niet — het recht op kinderalimentatie is een recht van het kind.\n\n**Mediation**\nBij onenigheid over de alimentatie kan mediation een goedkoper alternatief zijn voor een gang naar de rechter. Een mediator helpt u samen tot een nieuwe afspraak te komen.\n\n**LBIO inschakelen**\nAls uw ex-partner de alimentatie niet betaalt, kunt u het LBIO (Landelijk Bureau Inning Onderhoudsbijdragen) inschakelen voor inning. Het LBIO kan beslag leggen op het inkomen van de alimentatieplichtige.\n\n**Advocaat inschakelen**\nVoor complexe alimentatieberekeningen of geschillen is het verstandig een familierecht advocaat in te schakelen. Via AdvocaatVinder vindt u een specialist in uw regio.',
            },
            {
                heading: 'Veelgestelde vragen over alimentatie',
                content: '**Hoe lang moet ik alimentatie betalen?**\nKinderalimentatie loopt tot het kind 21 jaar wordt. Partneralimentatie duurt maximaal 5 jaar (met uitzonderingen bij huwelijken langer dan 15 jaar of kinderen jonger dan 12).\n\n**Hoeveel indexering in 2026?**\nHet indexeringspercentage voor 2026 is 4,6%. Dit geldt voor alle lopende alimentatieverplichtingen per 1 januari 2026.\n\n**Kan ik zelf alimentatie berekenen?**\nEen globale schatting is mogelijk met online rekentools, maar voor een bindende berekening is gespecialiseerde software nodig die de officiële Trema-normen volgt. Een advocaat of mediator kan dit voor u doen.\n\n**Is kinderalimentatie belastingvrij?**\nJa. De ontvanger betaalt geen belasting over kinderalimentatie. De betaler kan kinderalimentatie niet aftrekken.\n\n**Wat als mijn ex-partner niet betaalt?**\nSchakel het LBIO in. Het LBIO kan het alimentatiebedrag verhoogd met 15% opslagkosten innen via loonbeslag of andere incassomaatregelen.\n\n**Kan alimentatie met terugwerkende kracht worden gewijzigd?**\nJa, de rechter kan alimentatie met terugwerkende kracht wijzigen, maar in de praktijk wordt meestal de datum van indiening van het verzoekschrift als ingangsdatum gehanteerd.\n\n**Wat kost een alimentatieberekening?**\nEen professionele alimentatieberekening door een advocaat of mediator kost gemiddeld €150 tot €600, afhankelijk van de complexiteit. Bij een toevoeging (pro deo) betaalt u alleen de eigen bijdrage.\n\n**Stopt partneralimentatie bij samenwonen?**\nJa. Partneralimentatie eindigt automatisch als de ontvanger gaat samenwonen met een nieuwe partner "als waren zij gehuwd" (duurzaam samenwonen).',
            },
        ],
    },
    {
        slug: 'ontslag-op-staande-voet',
        title: 'Ontslag op Staande Voet: Uw Rechten, Verweer & Wat U Direct Moet Doen',
        metaTitle: 'Ontslag op Staande Voet | Bescherm Uw Rechten Vandaag | AdvocaatVinder',
        metaDescription: 'Ontslag op staande voet gekregen? Lees wat een dringende reden is, welke rechten u heeft, hoe u het binnen 2 maanden aanvecht, en wanneer het ontslag ongeldig is.',
        publishedAt: '2026-03-24',
        updatedAt: '2026-03-24',
        readingTime: '12 min',
        category: 'Arbeidsrecht',
        keyword: 'ontslag op staande voet',
        searchVolume: '2.500/mo',
        heroImage: '/images/blog/ontslag-op-staande-voet.jpg',
        tldr: 'Ontslag op staande voet kan worden vernietigd als de werkgever niet aan alle drie de wettelijke vereisten voldoet. U heeft 2 maanden om het aan te vechten bij de kantonrechter. Hieronder leest u precies wat u moet doen, welke rechten u heeft, en wanneer het ontslag ongeldig is.',
        sections: [
            {
                heading: 'Wat is ontslag op staande voet?',
                content: 'Ontslag op staande voet is de meest ingrijpende vorm van ontslag in het Nederlandse arbeidsrecht. Het dienstverband eindigt per direct — geen opzegtermijn, geen WW-uitkering, geen transitievergoeding. De werknemer staat van het ene op het andere moment zonder baan en zonder inkomen op straat.\n\nJuist vanwege deze verstrekkende gevolgen worden er strenge eisen gesteld aan de geldigheid van een ontslag op staande voet. De werkgever moet aantonen dat:\n\n1. Er sprake is van een **dringende reden** (artikel 7:677 en 7:678 Burgerlijk Wetboek)\n2. Het ontslag **onverwijld** is gegeven — dus zonder onnodig uitstel\n3. De dringende reden **onverwijld is medegedeeld** aan de werknemer\n\nAls één van deze drie voorwaarden niet is vervuld, is het ontslag ongeldig. In de praktijk vernietigt de rechter een aanzienlijk deel van de ontslagen op staande voet, omdat werkgevers niet aan alle vereisten voldoen.\n\nBent u op staande voet ontslagen? Dan is het cruciaal dat u snel handelt. U heeft slechts **twee maanden** om het ontslag aan te vechten bij de kantonrechter.',
            },
            {
                heading: 'Wat is een "dringende reden"?',
                content: 'Niet elk vergrijp rechtvaardigt ontslag op staande voet. De wet noemt in artikel 7:678 BW een aantal voorbeelden van dringende redenen, maar deze lijst is niet uitputtend. De rechter beoordeelt per geval of de reden voldoende dringend is.\n\n**Voorbeelden die de wet noemt:**\n• Misleiding bij het aangaan van de arbeidsovereenkomst (valse diploma\'s, cv-fraude)\n• Diefstal, verduistering, bedrog of andere misdrijven\n• Mishandeling, bedreiging of ernstige belediging van collega\'s of de werkgever\n• Opzettelijke beschadiging van eigendommen van de werkgever\n• Werkweigering zonder geldige reden\n• Ernstige schending van geheimhoudingsplicht\n• Hardnekkig weigeren om redelijke instructies op te volgen\n\n**Voorbeelden die in de praktijk vaak worden aangevoerd:**\n• Diefstal op de werkvloer — zelfs van geringe waarde (een blikje fris, een pak koekjes)\n• Fraude met declaraties of urenregistratie\n• Gebruik van drugs of alcohol op het werk\n• Sexuele intimidatie\n• Ernstige overtreding van veiligheidsvoorschriften\n• Nevenwerkzaamheden in strijd met het contract\n\n**De beoordeling is altijd een afweging:**\nDe rechter weegt de dringende reden af tegen de persoonlijke omstandigheden van de werknemer: de duur van het dienstverband, het eerdere functioneren, de leeftijd, kostwinnerschap, zorgtaken, en de kans op het vinden van nieuw werk. Een lang en vlekkeloos dienstverband kan een ontslag op staande voet ongeldig maken, zelfs als het vergrijp op zich ernstig is.',
            },
            {
                heading: 'De drie vereisten voor een geldig ontslag',
                content: 'Voor een rechtsgeldig ontslag op staande voet moet de werkgever aan drie strenge vereisten voldoen:\n\n**Vereiste 1: Dringende reden**\nZoals hierboven beschreven, moet er sprake zijn van een gedraging die zo ernstig is dat van de werkgever redelijkerwijs niet kan worden gevergd het dienstverband te laten voortduren. De reden moet zowel objectief (algemeen erkend als ernstig) als subjectief (specifiek voor deze werkgever onacceptabel) dringend zijn.\n\n**Vereiste 2: Onverwijld ontslag**\nHet ontslag moet "onverwijld" worden gegeven — dat wil zeggen: zo snel mogelijk nadat de werkgever kennis heeft genomen van de dringende reden. De werkgever mag kort de tijd nemen voor onderzoek of om juridisch advies in te winnen, maar mag het ontslag niet onnodig uitstellen.\n\nIn de rechtspraak wordt een termijn van enkele dagen tot maximaal een week doorgaans aanvaard. Wacht de werkgever te lang, dan kan de rechter oordelen dat de reden kennelijk niet zo dringend was.\n\n**Vereiste 3: Onverwijlde mededeling**\nDe werkgever moet de dringende reden direct en duidelijk aan de werknemer meedelen. Dit bepaalt de grondslag van het ontslag: de werkgever kan de opgegeven reden later niet meer aanvullen of wijzigen.\n\nRecente rechtspraak uit 2026 bevestigt dat rechters streng toetsen. Zo werd een ontslag op staande voet vernietigd omdat de werkgever een miscommunicatie over inroostering als dringende reden aanvoerde — de rechter oordeelde dat dit niet voldoende ernstig was.',
            },
            {
                heading: 'Ontslag op staande voet gekregen? Dit moet u DIRECT doen',
                content: 'Als u op staande voet bent ontslagen, onderneem dan direct de volgende acties:\n\n**Actie 1: Blijf kalm en schrijf alles op**\nNoteer precies wat er is gezegd, wanneer, en door wie. Let op de exacte bewoordingen van de ontslagreden. Vraag om een schriftelijke bevestiging als u die niet direct ontvangt.\n\n**Actie 2: Protesteer schriftelijk — dezelfde dag nog**\nStuur dezelfde dag of de volgende ochtend een e-mail of aangetekende brief naar uw werkgever waarin u:\n• Protesteert tegen het ontslag\n• Aangeeft dat u het ontslag ongeldig acht\n• Mededeelt dat u zich beschikbaar houdt voor werkhervatting\n• Aankondigt dat u juridisch advies inwindt\n\nBewaar een kopie en de verzendbevestiging.\n\n**Actie 3: Schakel dezelfde week een arbeidsrecht advocaat in**\nGezien de korte vervaltermijn van twee maanden is snelheid geboden. Via AdvocaatVinder vindt u arbeidsrecht advocaten in uw regio die ervaring hebben met ontslag op staande voet.\n\n**Actie 4: Vraag een uitkering aan bij het UWV**\nOok al heeft u bij ontslag op staande voet in principe geen recht op WW, meld u toch direct aan bij het UWV. Als het ontslag later door de rechter wordt vernietigd, voorkomt u hiermee een gat in uw uitkeringsrechten.\n\n**Actie 5: Verzamel bewijsmateriaal**\nBewaar alle relevante documenten: uw arbeidsovereenkomst, functioneringsverslagen, e-mailcorrespondentie, WhatsApp-berichten met uw leidinggevende, en eventuele getuigenverklaringen.',
            },
            {
                heading: 'Het ontslag aanvechten: procedure en termijnen',
                content: 'U heeft twee opties om een ontslag op staande voet aan te vechten:\n\n**Optie 1: Vernietiging vragen (u wilt terug)**\nU vraagt de kantonrechter om het ontslag te vernietigen. Als de rechter u gelijk geeft:\n• De arbeidsovereenkomst blijft in stand\n• U heeft recht op doorbetaling van loon vanaf de ontslagdatum\n• U kunt uw werkzaamheden hervatten\n\n**Optie 2: Vergoeding vragen (u wilt niet terug)**\nU accepteert het ontslag maar vordert een billijke vergoeding en de transitievergoeding. De rechter kan een aanzienlijke vergoeding toekennen als het ontslag ten onrechte is gegeven.\n\nIn de praktijk kiezen veel werknemers voor optie 1 als drukmiddel: na de vernietiging door de rechter volgt vaak een vaststellingsovereenkomst met gunstige voorwaarden, omdat het vertrouwen wederzijds beschadigd is.\n\n**Cruciale termijnen:**\n• **2 maanden** na de ontslagdatum: deadline om een verzoekschrift in te dienen bij de kantonrechter\n• Na deze termijn is het ontslag definitief en onherroepelijk\n• De procedure duurt gemiddeld 4-8 weken na indiening\n\n**Kosten:**\n• Griffierecht: €86 (met toevoeging) tot €533 (zonder toevoeging)\n• Advocaatkosten: €1.000 - €5.000 afhankelijk van de complexiteit\n• Bij gesubsidieerde rechtsbijstand: alleen eigen bijdrage (€69 - €1.120)',
            },
            {
                heading: 'Gevolgen van ontslag op staande voet',
                content: 'De financiële gevolgen van ontslag op staande voet zijn ingrijpend:\n\n**Loon stopt per direct**\nAnders dan bij regulier ontslag, waar de opzegtermijn nog geldt, stopt uw loon onmiddellijk bij ontslag op staande voet.\n\n**Geen WW-uitkering**\nBij een terecht ontslag op staande voet heeft u geen recht op een WW-uitkering. Het UWV beschouwt u als "verwijtbaar werkloos". U kunt wel een bijstandsuitkering aanvragen, maar het UWV kan een maatregel opleggen wegens verwijtbare werkloosheid.\n\n**Geen transitievergoeding**\nBij een rechtsgeldig ontslag op staande voet wegens ernstig verwijtbaar handelen heeft u geen recht op de transitievergoeding.\n\n**Mogelijke schadevergoeding aan werkgever**\nDe werkgever kan u een schadevergoeding in rekening brengen ter hoogte van het loon over de opzegtermijn die u normaal gesproken in acht had moeten nemen. Dit wordt de "gefixeerde schadevergoeding" genoemd.\n\n**Als het ontslag wordt vernietigd:**\nWordt het ontslag door de rechter vernietigd, dan draaien alle gevolgen terug:\n• U heeft recht op het volledige achterstallige loon + wettelijke verhoging (tot 50%)\n• U heeft recht op de wettelijke rente over het achterstallige loon\n• De arbeidsovereenkomst herleeft volledig',
            },
            {
                heading: 'Wanneer is ontslag op staande voet ongeldig?',
                content: 'De praktijk leert dat ontslag op staande voet in veel gevallen niet standhoudt bij de rechter. Veelvoorkomende redenen voor vernietiging:\n\n**1. Geen dringende reden**\nHet gedrag van de werknemer is niet ernstig genoeg voor ontslag op staande voet. Een eenmalige uitglijer na jaren vlekkeloos functioneren is zelden een dringende reden.\n\n**2. Niet onverwijld gegeven**\nDe werkgever heeft te lang gewacht met het geven van het ontslag. Als er weken zitten tussen de ontdekking van het vergrijp en het ontslag, is het niet meer "onverwijld".\n\n**3. Onvoldoende onderzoek**\nDe werkgever heeft geen of onvoldoende hoor en wederhoor toegepast. De werknemer heeft geen kans gekregen om zijn kant van het verhaal te vertellen.\n\n**4. Verkeerde of onvolledige mededeling**\nDe ontslagreden is niet duidelijk genoeg gecommuniceerd, of de werkgever probeert achteraf extra redenen aan te voeren.\n\n**5. Geen eerdere waarschuwing**\nBij gedragingen die eerdere waarschuwingen vereisten (zoals te laat komen of attitude-problemen) is ontslag op staande voet zonder voorafgaande waarschuwingen doorgaans ongeldig.\n\n**6. Persoonlijke omstandigheden**\nEen lang dienstverband (15+ jaar), hoge leeftijd, moeilijke positie op de arbeidsmarkt, of psychische problematiek kunnen het ontslag onevenredig zwaar maken.\n\n**Recente jurisprudentie 2026:**\nDe rechtspraak bevestigt dat de lat hoog ligt. In 2026 zijn meerdere ontslagen op staande voet vernietigd: een miscommunicatie over roostering werd niet als dringende reden aanvaard, en het vragen om salarisuitbetaling bleek evenmin een geldige grond.',
            },
            {
                heading: 'Praktijkvoorbeelden uit de rechtspraak',
                content: 'Drie geanonimiseerde praktijkvoorbeelden die de nuances van ontslag op staande voet illustreren:\n\n**Voorbeeld 1: De supermarktmedewerkster (diefstal — ontslag geldig)**\nEen supermarktmedewerkster met 6 jaar dienstverband nam een boterham mee uit de broodjeshoek van de winkel zonder te betalen. De werkgever gaf ontslag op staande voet wegens diefstal. De kantonrechter hield het ontslag in stand: diefstal is diefstal, ongeacht de geringe waarde. Het vertrouwen was onherstelbaar beschadigd.\n\n**Voorbeeld 2: De magazijnmedewerker (alcohol — ontslag vernietigd)**\nEen magazijnmedewerker met 18 jaar vlekkeloos dienstverband werd betrapt met een bierblikje tijdens de lunch. De werkgever gaf ontslag op staande voet. De rechter vernietigde het ontslag: gezien de lange duur van het dienstverband, het eenmalige karakter, en het ontbreken van een eerder alcoholbeleid was het ontslag niet evenredig. Een waarschuwing zou passender zijn geweest.\n\n**Voorbeeld 3: De accountmanager (nevenactiviteiten — schikking)**\nEen accountmanager met een concurrentiebeding bleek freelance opdrachten aan te nemen voor een concurrent. De werkgever gaf ontslag op staande voet. De advocaat van de werknemer vocht het ontslag aan. Uiteindelijk werd geschikt: het ontslag werd omgezet in een beëindiging met wederzijds goedvinden, de werknemer ontving 50% van de transitievergoeding, en het concurrentiebeding werd beperkt tot 6 maanden.\n\nDeze voorbeelden tonen aan: elk geval is uniek. Professioneel juridisch advies is altijd noodzakelijk.',
            },
            {
                heading: 'Ontslag op staande voet versus andere vormen van ontslag',
                content: 'Het is belangrijk om ontslag op staande voet te onderscheiden van andere ontslagvormen:\n\n**Regulier ontslag (via UWV of kantonrechter):**\n• Opzegtermijn geldt\n• Recht op transitievergoeding\n• Recht op WW-uitkering\n• Werkgever moet onderbouwde grond aantonen\n\n**Ontslag in de proeftijd:**\n• Mag zonder reden\n• Geen opzegtermijn\n• Geen transitievergoeding\n• Wel recht op WW (als u aan de wekeneis voldoet)\n\n**Ontslag op staande voet:**\n• Geen opzegtermijn\n• Geen WW-uitkering\n• Geen transitievergoeding\n• Alleen bij dringende reden\n• Aanvechtbaar binnen 2 maanden\n\n**Vaststellingsovereenkomst (VSO):**\n• Wederzijds goedvinden\n• Onderhandelbare voorwaarden\n• Behoud WW-rechten (bij juiste formulering)\n• Transitievergoeding als ondergrens\n\nSoms proberen werkgevers een ontslag op staande voet te geven om de werknemer onder druk te zetten om daarna akkoord te gaan met een VSO met ongunstige voorwaarden. Een arbeidsrecht advocaat kan u hiertegen beschermen.',
            },
            {
                heading: 'Veelgestelde vragen over ontslag op staande voet',
                content: '**Hoe snel moet ik het ontslag aanvechten?**\nU heeft maximaal 2 maanden na de ontslagdatum om een verzoekschrift in te dienen bij de kantonrechter. Wacht niet te lang — een advocaat heeft tijd nodig om het verzoekschrift op te stellen.\n\n**Mijn werkgever dreigt met ontslag op staande voet. Wat nu?**\nEen dreiging is nog geen ontslag. Documenteer de dreiging schriftelijk en zoek direct juridisch advies. Als het ontslag wordt doorgezet, weet u wat u moet doen.\n\n**Kan ik WW krijgen na ontslag op staande voet?**\nIn principe niet. Bij een rechtsgeldig ontslag op staande voet beschouwt het UWV u als verwijtbaar werkloos. Als het ontslag door de rechter wordt vernietigd, kunt u alsnog WW aanvragen.\n\n**Krijg ik een transitievergoeding na ontslag op staande voet?**\nAlleen als het ontslag door de rechter wordt vernietigd of als de rechter oordeelt dat het ontslag niet wegens ernstig verwijtbaar handelen is gegeven.\n\n**Mag ontslag op staande voet mondeling worden gegeven?**\nJa, een mondeling ontslag op staande voet is in principe geldig. Maar de werkgever moet de dringende reden wel onverwijld meedelen en kan dit later niet meer aanvullen.\n\n**Kan ik op staande voet worden ontslagen tijdens ziekte?**\nJa, het opzegverbod tijdens ziekte geldt niet bij ontslag op staande voet. Maar de dringende reden moet wel aan alle vereisten voldoen.\n\n**Wat als ik het niet eens ben maar niet naar de rechter wil?**\nU kunt proberen via onderhandeling of mediation tot een oplossing te komen. Maar als u niet binnen 2 maanden een verzoekschrift indient bij de rechter, staat het ontslag definitief vast.\n\n**Hoeveel kost het om ontslag op staande voet aan te vechten?**\nBij gesubsidieerde rechtsbijstand: eigen bijdrage €69-€1.120 + griffierecht €86. Zonder toevoeging: advocaatkosten €1.000-€5.000 + griffierecht €533.',
            },
        ],
    },
];

// ─── Specialty → related blog articles mapping ───────────────────────────────
// Maps rechtsgebied slugs (from specialty pages) to relevant blog slugs.
// Used for internal linking on specialty pages and lawyer profile pages.
const SPECIALTY_BLOG_MAP: Record<string, string[]> = {
    // Cost-related articles are relevant to ALL specialties
    _general: ['wat-kost-een-advocaat', 'advocaat-kiezen-tips'],
    // Specialty-specific mappings
    familierecht: ['echtscheiding-kosten', 'alimentatie-berekenen', 'wat-kost-een-advocaat'],
    arbeidsrecht: ['vaststellingsovereenkomst', 'ontslag-op-staande-voet', 'transitievergoeding-berekenen'],
    strafrecht: ['pro-deo-advocaat', 'gesubsidieerde-rechtsbijstand', 'wat-kost-een-advocaat'],
    letselschaderecht: ['no-cure-no-pay-advocaat', 'wat-kost-een-advocaat', 'advocaat-kiezen-tips'],
    huurrecht: ['wat-kost-een-advocaat', 'gesubsidieerde-rechtsbijstand', 'advocaat-kiezen-tips'],
    bestuursrecht: ['wat-kost-een-advocaat', 'gesubsidieerde-rechtsbijstand', 'advocaat-kiezen-tips'],
    erfrecht: ['wat-kost-een-advocaat', 'advocaat-kiezen-tips'],
    ondernemingsrecht: ['vaststellingsovereenkomst', 'wat-kost-een-advocaat', 'advocaat-kiezen-tips'],
    immigratierecht: ['pro-deo-advocaat', 'gesubsidieerde-rechtsbijstand', 'wat-kost-een-advocaat'],
    'sociaal-zekerheidsrecht': ['gesubsidieerde-rechtsbijstand', 'transitievergoeding-berekenen', 'wat-kost-een-advocaat'],
};

/**
 * Returns up to `limit` related blog articles for a given specialty slug.
 * Falls back to general cost/tip articles if no specialty-specific mapping exists.
 */
export function getRelatedBlogArticles(specialtySlug: string, limit = 3): BlogArticle[] {
    const slugs = SPECIALTY_BLOG_MAP[specialtySlug] || SPECIALTY_BLOG_MAP._general;
    return slugs
        .slice(0, limit)
        .map(slug => BLOG_ARTICLES.find(a => a.slug === slug))
        .filter((a): a is BlogArticle => !!a);
}

/**
 * Returns up to `limit` related blog articles for a lawyer based on their specialties.
 * Deduplicates and prioritizes specialty-specific matches.
 */
export function getRelatedBlogArticlesForLawyer(rechtsgebieden: string[], limit = 2): BlogArticle[] {
    const seen = new Set<string>();
    const result: BlogArticle[] = [];

    // Map rechtsgebied display names to slugs
    const nameToSlug: Record<string, string> = {
        'personen- en familierecht': 'familierecht',
        'familierecht': 'familierecht',
        'arbeidsrecht': 'arbeidsrecht',
        'strafrecht': 'strafrecht',
        'letselschade': 'letselschaderecht',
        'letselschaderecht': 'letselschaderecht',
        'huurrecht': 'huurrecht',
        'bestuursrecht': 'bestuursrecht',
        'erfrecht': 'erfrecht',
        'ondernemingsrecht': 'ondernemingsrecht',
        'immigratierecht': 'immigratierecht',
        'vreemdelingenrecht': 'immigratierecht',
        'sociaal zekerheidsrecht': 'sociaal-zekerheidsrecht',
        'jeugdstrafrecht': 'strafrecht',
    };

    for (const field of rechtsgebieden) {
        const slug = nameToSlug[field.toLowerCase()];
        if (slug) {
            for (const article of getRelatedBlogArticles(slug, 3)) {
                if (!seen.has(article.slug)) {
                    seen.add(article.slug);
                    result.push(article);
                    if (result.length >= limit) return result;
                }
            }
        }
    }

    // Fallback: add general articles
    if (result.length < limit) {
        for (const article of getRelatedBlogArticles('_general', limit)) {
            if (!seen.has(article.slug)) {
                seen.add(article.slug);
                result.push(article);
                if (result.length >= limit) return result;
            }
        }
    }

    return result;
}
