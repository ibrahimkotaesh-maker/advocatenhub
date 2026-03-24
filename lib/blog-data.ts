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
    sections: { heading: string; content: string }[];
};

export const BLOG_ARTICLES: BlogArticle[] = [
    {
        slug: 'wat-kost-een-advocaat',
        title: 'Wat Kost een Advocaat in 2026? Het Eerlijke Overzicht van Tarieven, Kosten en Bespaartips',
        metaTitle: 'Wat Kost een Advocaat? Uurtarieven, Kosten per Zaak & Bespaartips (2026)',
        metaDescription: 'Wat kost een advocaat per uur in Nederland? Compleet overzicht van uurtarieven (€100-€500+), kosten per rechtsgebied, griffierechten én 6 bewezen manieren om te besparen. Bijgewerkt maart 2026.',
        publishedAt: '2026-02-27',
        updatedAt: '2026-03-24',
        readingTime: '12 min',
        category: 'Kosten',
        keyword: 'wat kost een advocaat',
        searchVolume: '3.100/mo',
        heroImage: '/images/blog/wat-kost-een-advocaat.jpg',
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

// ─── Specialty → related blog articles mapping ───────────────────────────────
// Maps rechtsgebied slugs (from specialty pages) to relevant blog slugs.
// Used for internal linking on specialty pages and lawyer profile pages.
const SPECIALTY_BLOG_MAP: Record<string, string[]> = {
    // Cost-related articles are relevant to ALL specialties
    _general: ['wat-kost-een-advocaat', 'advocaat-kiezen-tips'],
    // Specialty-specific mappings
    familierecht: ['wat-kost-een-advocaat', 'gesubsidieerde-rechtsbijstand', 'pro-deo-advocaat'],
    arbeidsrecht: ['wat-kost-een-advocaat', 'no-cure-no-pay-advocaat', 'advocaat-kiezen-tips'],
    strafrecht: ['pro-deo-advocaat', 'gesubsidieerde-rechtsbijstand', 'wat-kost-een-advocaat'],
    letselschaderecht: ['no-cure-no-pay-advocaat', 'wat-kost-een-advocaat', 'advocaat-kiezen-tips'],
    huurrecht: ['wat-kost-een-advocaat', 'gesubsidieerde-rechtsbijstand', 'advocaat-kiezen-tips'],
    bestuursrecht: ['wat-kost-een-advocaat', 'gesubsidieerde-rechtsbijstand', 'advocaat-kiezen-tips'],
    erfrecht: ['wat-kost-een-advocaat', 'advocaat-kiezen-tips'],
    ondernemingsrecht: ['wat-kost-een-advocaat', 'advocaat-kiezen-tips'],
    immigratierecht: ['pro-deo-advocaat', 'gesubsidieerde-rechtsbijstand', 'wat-kost-een-advocaat'],
    'sociaal-zekerheidsrecht': ['gesubsidieerde-rechtsbijstand', 'pro-deo-advocaat', 'wat-kost-een-advocaat'],
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
