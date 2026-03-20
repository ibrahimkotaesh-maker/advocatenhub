const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
    'https://wxdwpnuxxcpsfgjfmxax.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4ZHdwbnV4eGNwc2ZnamZteGF4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MTY3NTUwNywiZXhwIjoyMDg3MjUxNTA3fQ.CumPpLi_-YGK6CzOXMELc6bA9LlG0flKHh_wLrdnHJw'
);

// Schema: id, slug, title, meta_title, meta_description, category, keyword, search_volume, reading_time, content_markdown, sources, sources_count, published_at, created_at, updated_at

const articles = [
    {
        slug: 'echtscheiding-advocaat-kosten-procedure',
        title: 'Echtscheiding Advocaat — Kosten, Procedure & Tips 2025',
        keyword: 'echtscheiding advocaat',
        search_volume: 2400,
        category: 'familierecht',
        reading_time: 6,
        meta_title: 'Echtscheiding Advocaat — Kosten, Procedure & Tips 2025',
        meta_description: 'Wat kost een echtscheiding via een advocaat? Leer over de procedure, duur, pro deo mogelijkheden en het verschil met mediation.',
        content_markdown: `## Wat kost een echtscheiding via een advocaat?

Een echtscheiding via een advocaat kost gemiddeld tussen de **€750 en €5.000**, afhankelijk van de complexiteit. Bij een gezamenlijk verzoek ('flitsscheiding') liggen de kosten vaak tussen €750 en €1.500. Een vechtscheiding kan oplopen tot €10.000 of meer per partner.

## Is een advocaat verplicht bij echtscheiding?

Ja, in Nederland is een advocaat **wettelijk verplicht** bij echtscheiding. Alleen een advocaat kan een verzoekschrift tot echtscheiding indienen bij de rechtbank. Bij een gezamenlijk verzoek kunt u samen één advocaat nemen, wat kosten bespaart.

## Hoe lang duurt een echtscheiding?

De duur varieert sterk:

- **Gezamenlijk verzoek:** 4 tot 8 weken na indiening
- **Eenzijdig verzoek:** 3 tot 6 maanden
- **Vechtscheiding:** 1 tot 3 jaar

Na de uitspraak moet u de echtscheiding nog laten inschrijven bij de gemeente.

## Echtscheiding of mediation?

Bij mediation werkt u samen met uw partner onder begeleiding van een mediator. Dit is vaak sneller, goedkoper en minder belastend — vooral als er kinderen bij betrokken zijn. Veel familierechtadvocaten zijn ook gecertificeerd mediator.

## Pro deo echtscheiding

Bij een laag inkomen kunt u in aanmerking komen voor gesubsidieerde rechtsbijstand. U betaalt dan alleen een eigen bijdrage van €159 tot €861 (2025). Uw advocaat dient de toevoeging aan bij de Raad voor Rechtsbijstand.

## Wat regelt een echtscheidingsadvocaat?

- Verdeling van bezittingen en schulden
- Partneralimentatie en kinderalimentatie
- Ouderschapsplan en omgangsregeling
- Verdeling pensioenrechten
- Inschrijving echtscheiding bij de gemeente

## Tips bij het kiezen van een echtscheidingsadvocaat

Let op specialisatie in personen- en familierecht, ervaring met vergelijkbare zaken, en of de advocaat ook mediation aanbiedt. Vraag altijd vooraf om een kostenindicatie en plan een kennismakingsgesprek.`,
        sources: null,
        sources_count: 0,
    },
    {
        slug: 'alimentatie-berekenen-soorten-duur',
        title: 'Alimentatie Berekenen — Soorten, Duur & Bedragen 2025',
        keyword: 'alimentatie berekenen',
        search_volume: 1800,
        category: 'familierecht',
        reading_time: 5,
        meta_title: 'Alimentatie Berekenen — Soorten, Duur & Bedragen 2025',
        meta_description: 'Hoe wordt alimentatie berekend? Lees over partneralimentatie, kinderalimentatie, duur, wijziging en belastingregels.',
        content_markdown: `## Wat is alimentatie?

Alimentatie is een financiële bijdrage die u betaalt of ontvangt na een scheiding. Er zijn twee soorten: **partneralimentatie** (voor uw ex-partner) en **kinderalimentatie** (voor de verzorging van uw kinderen).

## Hoe wordt kinderalimentatie berekend?

De hoogte van kinderalimentatie wordt berekend op basis van:

- De **behoefte** van het kind (gebaseerd op het gezinsinkomen tijdens het huwelijk)
- De **draagkracht** van beide ouders (netto-inkomen minus noodzakelijke lasten)
- De **zorgverdeling** (wie hoeveel dagen voor het kind zorgt)

De NIBUD-tabellen en Tremanormen worden gebruikt voor de berekening. Gemiddeld ligt kinderalimentatie tussen €150 en €500 per maand per kind.

## Hoe wordt partneralimentatie berekend?

Partneralimentatie is gebaseerd op:

- **Behoefte:** 60% van het netto gezinsinkomen tijdens het huwelijk
- **Draagkracht:** wat de betalende partner kan missen
- **Verdiencapaciteit:** wat de ontvangende partner zelf kan verdienen

## Hoe lang duurt alimentatie?

Sinds de Wet herziening partneralimentatie (2020):

- **Maximaal 5 jaar** partneralimentatie (was 12 jaar)
- **Uitzonderingen:** huwelijk > 15 jaar + leeftijd > 50 = max 10 jaar
- **Kinderalimentatie:** tot het kind 21 jaar wordt

## Alimentatie wijzigen

U kunt alimentatie laten wijzigen als er sprake is van een **wijziging van omstandigheden**: ontslag, ziekte, samenleving met een nieuwe partner, of inkomensstijging. Een alimentatieadvocaat kan u helpen met een wijzigingsverzoek bij de rechtbank.

## Alimentatie en belasting

Partneralimentatie is **aftrekbaar** voor de betaler en **belast** bij de ontvanger. Kinderalimentatie is niet aftrekbaar en niet belast.`,
        sources: null,
        sources_count: 0,
    },
    {
        slug: 'ontslag-advocaat-ontslagrecht',
        title: 'Ontslag Advocaat — Onterecht Ontslag & Uw Rechten 2025',
        keyword: 'ontslag advocaat',
        search_volume: 1500,
        category: 'arbeidsrecht',
        reading_time: 6,
        meta_title: 'Ontslag Advocaat — Onterecht Ontslag & Uw Rechten 2025',
        meta_description: 'Ontslagen of dreigend ontslag? Lees over uw rechten, transitievergoeding, vaststellingsovereenkomst en wanneer een advocaat nodig is.',
        content_markdown: `## Wanneer heeft u een ontslag advocaat nodig?

Een arbeidsrechtadvocaat is aan te raden wanneer u:

- Een **vaststellingsovereenkomst** (VSO) aangeboden krijgt
- Op staande voet bent **ontslagen**
- Te maken krijgt met een **ontslagprocedure** via UWV of kantonrechter
- Uw werkgever de **transitievergoeding** niet wil betalen

## Soorten ontslag in Nederland

- **Ontslag met wederzijds goedvinden:** via een vaststellingsovereenkomst
- **Ontslag via UWV:** bij bedrijfseconomische redenen of langdurige ziekte
- **Ontslag via kantonrechter:** bij disfunctioneren, verstoorde arbeidsrelatie, etc.
- **Ontslag op staande voet:** bij ernstig verwijtbaar gedrag

## Transitievergoeding: waar heeft u recht op?

Vanaf dag 1 van uw arbeidsovereenkomst heeft u recht op transitievergoeding bij ontslag door de werkgever. De berekening: **1/3 maandsalaris per dienstjaar**. In 2025 is het maximum €94.000 bruto (of een jaarsalaris als dat hoger is).

## Vaststellingsovereenkomst: let hier op

Bij een VSO is het essentieel om te letten op:

- Hoogte van de **ontslagvergoeding** (minimaal de transitievergoeding)
- **Einddatum** en opzegtermijn (voor uw WW-rechten)
- **Concurrentiebeding** en relatiebeding
- **Finale kwijting** en getuigschrift

U heeft 14 dagen bedenktijd na ondertekening van een VSO.

## Onterecht ontslag aanvechten

Bent u het niet eens met uw ontslag? U kunt binnen **2 maanden** na het ontslag een verzoek indienen bij de kantonrechter om het ontslag te laten vernietigen of een billijke vergoeding te eisen.

## Kosten van een ontslag advocaat

Veel arbeidsrechtadvocaten bieden een gratis telefonisch consult aan. Bij een VSO zijn de advocaatkosten vaak onderdeel van de ontslagregeling — uw werkgever betaalt dan een bijdrage in uw juridische kosten (gemiddeld €750 - €1.500 excl. btw).`,
        sources: null,
        sources_count: 0,
    },
    {
        slug: 'huurgeschil-huurrecht-advocaat',
        title: 'Huurgeschil? Dit Zijn Uw Rechten als Huurder of Verhuurder',
        keyword: 'huurrecht advocaat',
        search_volume: 900,
        category: 'huurrecht',
        reading_time: 5,
        meta_title: 'Huurgeschil? Dit Zijn Uw Rechten als Huurder of Verhuurder',
        meta_description: 'Huurgeschil met uw verhuurder of huurder? Lees over huurbescherming, huurprijsverlaging, onderhoud en wanneer een advocaat nodig is.',
        content_markdown: `## Wanneer een huurrecht advocaat inschakelen?

Een huurrecht advocaat is aan te raden bij:

- **Dreigende ontruiming** of huuropzegging door de verhuurder
- Geschillen over **huurprijs** of servicekosten
- **Achterstallig onderhoud** dat de verhuurder weigert te verhelpen
- Overlast door buren of **illegale onderhuur**
- Problemen met de **huurovereenkomst**

## Huurbescherming in Nederland

Huurders van woonruimte genieten in Nederland vergaande **huurbescherming**. Uw verhuurder kan de huur alleen opzeggen op grond van:

- Slecht huurderschap (wanbetaling, overlast)
- Dringend eigen gebruik
- Renovatie of sloop (met herhuisvestingsplicht)
- Geldend bestemmingsplan

De huurder hoeft niet in te stemmen met opzegging — uiteindelijk beslist de rechter.

## Huurprijsverlaging aanvragen

Betaalt u te veel huur? U kunt een toets laten uitvoeren door de **Huurcommissie**. Als de huur hoger is dan het puntensysteem (WWS) toelaat, kunt u huurverlaging afdwingen.

## Gebreken en onderhoud

De verhuurder is verantwoordelijk voor groot onderhoud. Bij gebreken kunt u:

1. De verhuurder schriftelijk in gebreke stellen
2. Naar de Huurcommissie voor een tijdelijke huurverlaging
3. Naar de rechter voor een veroordeling tot herstel

## Kosten huurrecht advocaat

Een huurrecht advocaat rekent gemiddeld €150-€250 per uur. Bij een laag inkomen kunt u in aanmerking komen voor gesubsidieerde rechtsbijstand.`,
        sources: null,
        sources_count: 0,
    },
    {
        slug: 'verkeersboete-strafrecht-advocaat',
        title: 'Verkeersboete of Strafzaak? Wanneer een Advocaat Inschakelen',
        keyword: 'verkeersrecht advocaat',
        search_volume: 700,
        category: 'strafrecht',
        reading_time: 5,
        meta_title: 'Verkeersboete of Strafzaak? Wanneer een Advocaat Inschakelen',
        meta_description: 'Rijden onder invloed, rijbewijs ingenomen, of verkeersongeval? Lees wanneer u een strafrecht advocaat nodig heeft.',
        content_markdown: `## Wanneer een verkeersrecht advocaat?

Niet elke verkeersovertreding vereist een advocaat. Maar in deze situaties is juridische bijstand sterk aan te raden:

- **Rijden onder invloed** (alcohol of drugs)
- **Rijontzegging** of inname rijbewijs
- Verkeersongeval met **letsel of overlijden**
- **Doorrijden** na een ongeval
- Recidive (herhaling van overtredingen)

## Rijden onder invloed: straffen

- **Eerste overtreding (0,5-1,0‰):** boete €400-€1.000 + rijverbod
- **Hoog promillage (>1,3‰):** strafrechtelijke vervolging, rijontzegging, eventueel gevangenisstraf
- **Beginnend bestuurder (<0,2‰ toegestaan):** strengere normen

Naast de strafrechtelijke procedure kan het CBR een onderzoek naar de rijgeschiktheid opleggen.

## Rijbewijs ingenomen: wat nu?

Als de politie uw rijbewijs inneemt, kan uw advocaat een **klaagschrift** indienen bij de rechtbank om het rijbewijs terug te krijgen.

## Verkeersongeval met letsel

Bij een verkeersongeval met gewonden kunt u zowel strafrechtelijk als civielrechtelijk aansprakelijk zijn. Een gespecialiseerde advocaat kan u bijstaan in beide procedures.

## Kosten strafrecht advocaat

Bij een inkomen onder de grens kunt u een pro deo advocaat krijgen. Zonder toevoeging kost een strafrecht advocaat gemiddeld €150-€300 per uur.`,
        sources: null,
        sources_count: 0,
    },
    {
        slug: 'verblijfsvergunning-aanvragen-nederland',
        title: 'Verblijfsvergunning Aanvragen — Stappen, Kosten & Tips',
        keyword: 'verblijfsvergunning aanvragen',
        search_volume: 1200,
        category: 'immigratierecht',
        reading_time: 5,
        meta_title: 'Verblijfsvergunning Aanvragen — Stappen, Kosten & Tips',
        meta_description: 'Hoe vraagt u een verblijfsvergunning aan? Lees over soorten vergunningen, de procedure en kosten.',
        content_markdown: `## Soorten verblijfsvergunningen

Nederland kent verschillende verblijfsvergunningen:

- **Arbeid:** kennismigrant, arbeid in loondienst, zelfstandig ondernemer
- **Gezin:** gezinshereniging, gezinsvorming (partner naar NL halen)
- **Studie:** voor internationale studenten
- **Asiel:** voor vluchtelingen
- **Onbepaalde tijd:** na 5 jaar legaal verblijf

## Procedure verblijfsvergunning

1. **MVV aanvragen:** bij de ambassade in uw land
2. **Naar Nederland reizen:** met de MVV
3. **Verblijfsvergunning aanvragen:** bij de IND binnen 3 maanden
4. **Biometrie:** vingerafdrukken en pasfoto bij de IND
5. **Beslissing:** de IND beslist binnen 90 dagen

## Kosten

- **Arbeid (kennismigrant):** €345
- **Gezinshereniging:** €192 - €345
- **Studie:** €192
- **Naturalisatie:** €960

## Wanneer een immigratierecht advocaat?

Een advocaat is aan te raden bij:

- **Afwijzing** van uw aanvraag (bezwaar en beroep)
- Dreigende **uitzetting** of ongewenstverklaring
- Complexe gezinssituaties
- **Onbepaalde tijd** of naturalisatieaanvraag

## Bezwaar en beroep bij afwijzing

Als de IND uw aanvraag afwijst, kunt u binnen **4 weken bezwaar** maken. Als het bezwaar ook wordt afgewezen, kunt u in **beroep** bij de rechtbank.`,
        sources: null,
        sources_count: 0,
    },
    {
        slug: 'bedrijf-oprichten-juridische-vormen',
        title: 'Bedrijf Oprichten — BV, VOF of Eenmanszaak? Juridisch Advies',
        keyword: 'bedrijf oprichten bv',
        search_volume: 1000,
        category: 'ondernemingsrecht',
        reading_time: 5,
        meta_title: 'Bedrijf Oprichten — BV, VOF of Eenmanszaak? Juridisch Advies',
        meta_description: 'Welke rechtsvorm past bij uw bedrijf? Vergelijk BV, VOF en eenmanszaak. Kosten, stappen en juridisch advies.',
        content_markdown: `## Welke juridische vorm kiezen?

De keuze voor een rechtsvorm heeft grote gevolgen voor uw **aansprakelijkheid, belastingen en administratie**.

### Eenmanszaak
- **Voordelen:** simpel, goedkoop, zelfstandigenaftrek
- **Nadelen:** onbeperkte persoonlijke aansprakelijkheid
- **Geschikt voor:** freelancers, kleine dienstverleners

### VOF (vennootschap onder firma)
- **Voordelen:** eenvoudig, fiscale voordelen per vennoot
- **Nadelen:** hoofdelijke aansprakelijkheid van alle vennoten
- **Geschikt voor:** samenwerking tussen 2+ ondernemers

### BV (besloten vennootschap)
- **Voordelen:** beperkte aansprakelijkheid, professionele uitstraling, fiscaal voordelig bij winst > €50.000
- **Nadelen:** administratieve verplichtingen, notaris nodig
- **Geschikt voor:** groeiende bedrijven, consultants met hoog inkomen

## BV oprichten: stappen en kosten

1. **Naam en KVK-check:** controleer beschikbaarheid
2. **Notaris:** oprichtingsakte (kosten: €400-€800)
3. **KVK-inschrijving:** €75,09
4. **Bankrekening:** zakelijke rekening openen
5. **Aandelenkapitaal:** minimaal €0,01

## Wanneer een ondernemingsrecht advocaat?

Juridisch advies is essentieel bij:

- Opstellen van **aandeelhoudersovereenkomsten**
- **Fusies en overnames**
- Geschillen met **medevennoten of aandeelhouders**
- Due diligence en contracten`,
        sources: null,
        sources_count: 0,
    },
    {
        slug: 'erfenis-verdelen-erfrecht-advocaat',
        title: 'Erfenis Verdelen — Uw Rechten bij Nalatenschap & Testament',
        keyword: 'erfrecht advocaat',
        search_volume: 800,
        category: 'erfrecht',
        reading_time: 6,
        meta_title: 'Erfenis Verdelen — Uw Rechten bij Nalatenschap & Testament',
        meta_description: 'Wie erft wat? Lees over wettelijk erfrecht, testament, legitieme portie, erfbelasting en wanneer een advocaat inschakelen.',
        content_markdown: `## Wie erft wat zonder testament?

Als er geen testament is, geldt het **wettelijk erfrecht**. De volgorde:

1. **Echtgenoot/partner + kinderen:** ieder een gelijk deel
2. **Ouders + broers/zussen:** als er geen partner en kinderen zijn
3. **Grootouders:** als er geen ouders zijn

De langstlevende partner krijgt automatisch het vruchtgebruik van de woning en inboedel.

## Wettelijke verdeling

Bij de wettelijke verdeling krijgt de langstlevende partner **alle goederen**. De kinderen krijgen een vordering ter grootte van hun erfdeel.

## Legitieme portie: onterfd maar toch recht?

Kinderen die zijn onterfd via een testament, hebben recht op de **legitieme portie**: de helft van wat zij zonder testament zouden erven.

## Erfenis aanvaarden of verwerpen

- **Zuiver aanvaarden:** u erft alles, inclusief eventuele schulden
- **Beneficiair aanvaarden:** u aanvaardt onder voorbehoud
- **Verwerpen:** u ontvangt niets en bent niet aansprakelijk

**Tip:** kies bij twijfel altijd voor beneficiaire aanvaarding.

## Erfbelasting 2025

- **Partners:** vrijstelling €795.156, daarboven 10-20%
- **Kinderen:** vrijstelling €25.187, daarboven 10-20%
- **Overige erfgenamen:** vrijstelling €2.658, 30-40%

## Wanneer een erfrecht advocaat?

Bij geschillen over de verdeling, onterving, executeurschap of als de erfenis complex is.`,
        sources: null,
        sources_count: 0,
    },
    {
        slug: 'bestuursrecht-bezwaar-beroep-overheid',
        title: 'Bezwaar Maken Tegen de Overheid — Bestuursrecht Uitgelegd',
        keyword: 'bezwaar overheid',
        search_volume: 900,
        category: 'bestuursrecht',
        reading_time: 5,
        meta_title: 'Bezwaar Maken Tegen de Overheid — Bestuursrecht Uitgelegd',
        meta_description: 'Hoe maakt u bezwaar tegen de overheid? Lees over de procedure, beroep, voorlopige voorziening en kosten.',
        content_markdown: `## Wat is bestuursrecht?

Het bestuursrecht regelt de verhouding tussen burger en overheid. Denk aan besluiten over **vergunningen, uitkeringen, boetes, bestemmingsplannen** en handhaving.

## Bezwaar maken: hoe werkt het?

1. **Termijn:** u heeft 6 weken na het besluit om bezwaar te maken
2. **Bezwaarschrift:** schriftelijk bezwaar indienen bij het bestuursorgaan
3. **Hoorzitting:** u wordt uitgenodigd om uw bezwaar mondeling toe te lichten
4. **Beslissing:** het bestuursorgaan neemt een nieuwe beslissing op bezwaar

**Let op:** bezwaar maken schorst het besluit niet automatisch. Heeft u spoed? Vraag een voorlopige voorziening aan.

## Beroep bij de rechtbank

Als uw bezwaar wordt afgewezen, kunt u binnen **6 weken beroep** instellen bij de bestuursrechter. Daarna is eventueel hoger beroep mogelijk bij de Raad van State.

## Veelvoorkomende bestuursrechtelijke geschillen

- **WMO/Wlz:** afwijzing van zorgvoorzieningen
- **Omgevingsvergunning:** weigering van bouwvergunning
- **Bijstand/WW/WIA:** korting of stopzetting van uitkering
- **Handhaving:** dwangsom, bestuursdwang
- **Bestemmingsplan:** bezwaar tegen wijziging

## Kosten bestuursrecht advocaat

Bij een laag inkomen hebt u recht op een pro deo advocaat. Het griffierecht voor beroep is €189 (particulier) in 2025. Als u wint, moet de overheid uw proceskosten vergoeden.`,
        sources: null,
        sources_count: 0,
    },
    {
        slug: 'letselschade-claimen-schadevergoeding',
        title: 'Letselschade Claimen — Schadevergoeding, Procedure & Tips',
        keyword: 'letselschade claimen',
        search_volume: 2000,
        category: 'letselschade',
        reading_time: 6,
        meta_title: 'Letselschade Claimen — Schadevergoeding, Procedure & Tips',
        meta_description: 'Letsel door een ongeval? Lees hoe u schadevergoeding claimt en hoe een letselschade advocaat werkt (no cure no pay).',
        content_markdown: `## Wat is letselschade?

Letselschade is lichamelijke of psychische schade die u oploopt door toedoen van een ander. Dit kan het gevolg zijn van:

- **Verkeersongevallen** (auto, fiets, voetganger)
- **Arbeidsongevallen** en beroepsziekten
- **Medische fouten**
- **Geweld of mishandeling**
- **Gebrekkige producten**

## Welke schade kunt u claimen?

- **Materiële schade:** medische kosten, reiskosten, verlies inkomen, aanpassingen aan huis/auto
- **Immateriële schade (smartengeld):** vergoeding voor pijn, verdriet en gederfde levensvreugde
- **Toekomstige schade:** als u blijvend letsel heeft

## Procedure letselschadeclaim

1. **Aansprakelijkstelling:** de veroorzaker schriftelijk aansprakelijk stellen
2. **Erkenning aansprakelijkheid:** de verzekeraar erkent of betwist
3. **Medisch traject:** vaststelling van het letsel
4. **Schadeberekening:** alle schadeposten in kaart brengen
5. **Onderhandeling:** met de verzekeraar
6. **Rechtszaak:** als geen overeenstemming wordt bereikt

## Gemiddelde schadevergoedingen

- **Whiplash:** €5.000 - €50.000
- **Gebroken been:** €5.000 - €25.000
- **Hersenletsel:** €25.000 - €250.000+
- **Dwarslaesie:** €100.000 - €500.000+

## Kosten letselschade advocaat

De meeste letselschadeadvocaten werken op basis van **no cure, no pay** of op basis van een voorschot door de verzekeraar. U betaalt meestal geen kosten vooraf.

## Verjaring

Letselschadeclaims verjaren na **5 jaar** na de dag waarop u bekend bent geworden met de schade.`,
        sources: null,
        sources_count: 0,
    },
];

async function insertArticles() {
    for (const article of articles) {
        const { error } = await supabase
            .from('blog_articles')
            .upsert(
                { ...article, published_at: new Date().toISOString() },
                { onConflict: 'slug' }
            );
        
        if (error) {
            console.error(`❌ ${article.slug}: ${error.message}`);
        } else {
            console.log(`✅ ${article.title}`);
        }
    }
    console.log(`\nDone! ${articles.length} articles processed.`);
}

insertArticles();
