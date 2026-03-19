// Insert 10 new SEO blog articles into Supabase
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
    'https://wxdwpnuxxcpsfgjfmxax.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4ZHdwbnV4eGNwc2ZnamZteGF4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MTY3NTUwNywiZXhwIjoyMDg3MjUxNTA3fQ.CumPpLi_-YGK6CzOXMELc6bA9LlG0flKHh_wLrdnHJw'
);

const newArticles = [
    {
        slug: "hoeveel-kost-een-advocaat",
        title: "Hoeveel Kost een Advocaat? Tarieven & Kosten 2025",
        meta_title: "Hoeveel Kost een Advocaat? Tarieven per Uur 2025 | AdvocaatVinder",
        meta_description: "Wat kost een advocaat per uur in 2025? Overzicht van tarieven per rechtsgebied, vaste prijzen, en tips om kosten te besparen. Inclusief gesubsidieerde rechtsbijstand.",
        category: "Juridisch Advies",
        keyword: "kosten advocaat, tarieven advocaat, advocaat per uur",
        search_volume: "1200",
        reading_time: "7 min",
        content_markdown: `## Wat kost een advocaat in 2025?

Een van de meest gestelde vragen voor iedereen die juridische hulp nodig heeft: **hoeveel kost een advocaat?** De tarieven variëren sterk, afhankelijk van het rechtsgebied, de ervaring van de advocaat en de complexiteit van uw zaak.

### Gemiddelde uurtarieven per rechtsgebied

| Rechtsgebied | Uurtarief (excl. btw) | Uurtarief (incl. btw) |
|---|---|---|
| Familierecht | € 150 – € 250 | € 181 – € 302 |
| Arbeidsrecht | € 175 – € 300 | € 211 – € 363 |
| Strafrecht | € 150 – € 275 | € 181 – € 332 |
| Ondernemingsrecht | € 200 – € 400 | € 242 – € 484 |
| Vastgoedrecht | € 175 – € 350 | € 211 – € 423 |
| Letselschade | Vaak op no cure, no pay basis | Variabel |

### Factoren die de kosten beïnvloeden

De uiteindelijke kosten hangen af van meerdere factoren:

- **Ervaring**: Een gespecialiseerde advocaat met 20+ jaar ervaring is duurder dan een pas toegelaten advocaat
- **Kantoorgrootte**: Grote kantoren hebben hogere overheadkosten en rekenen doorgaans hogere tarieven
- **Complexiteit**: Hoe ingewikkelder de zaak, hoe meer uren er nodig zijn
- **Locatie**: Advocaten in de Randstad rekenen gemiddeld hogere tarieven dan in andere regio's
- **Spoedeisendheid**: Urgente zaken kunnen extra kosten meebrengen

### Vaste prijs of uurtarief?

Veel advocaten bieden tegenwoordig ook **vaste prijsafspraken** aan voor bepaalde diensten:

| Dienst | Vaste prijs indicatie |
|---|---|
| Echtscheiding (mediation) | € 1.500 – € 3.500 |
| Vaststellingsovereenkomst checken | € 350 – € 750 |
| Oprichten BV | € 500 – € 1.500 |
| Bezwaarschrift opstellen | € 300 – € 800 |
| Testament laten controleren | € 250 – € 500 |

### Bijkomende kosten

Naast het uurtarief kunnen er extra kosten zijn:

1. **Griffierecht** – Kosten voor het aanhangig maken van een zaak bij de rechter (€ 86 – € 2.277, afhankelijk van de zaak)
2. **Kantoorkosten** – Sommige advocaten rekenen een opslag van 5-10% voor kantoorkosten
3. **Reis- en parkeerkosten** – Bij bezoeken aan de rechtbank of andere locaties
4. **Kosten deskundigen** – Taxateurs, accountants of medisch adviseurs

### Gesubsidieerde rechtsbijstand (toevoeging)

Als u een laag inkomen heeft, kunt u mogelijk een **pro deo advocaat** krijgen via de Raad voor Rechtsbijstand. U betaalt dan alleen een eigen bijdrage:

| Inkomenscategorie (alleenstaand) | Eigen bijdrage |
|---|---|
| Tot € 21.800 | € 159 |
| € 21.800 – € 26.000 | € 366 |
| € 26.000 – € 30.000 | € 564 |
| € 30.000 – € 39.600 | € 886 |

### Tips om kosten te besparen

1. **Vraag altijd om een kostenraming** vooraf – Een goede advocaat geeft transparantie over de verwachte kosten
2. **Bereid gesprekken voor** – Stuur documenten vooraf en maak een overzicht van uw vragen
3. **Overweeg mediation** – Bij geschillen is mediation vaak goedkoper dan procederen
4. **Vergelijk meerdere advocaten** – Vraag bij minimaal 2-3 kantoren een offerte
5. **Maak gebruik van gratis intakegesprekken** – Veel advocaten bieden een gratis eerste gesprek

### Advocaat zoeken met duidelijke tarieven

Bij AdvocaatVinder kunt u eenvoudig advocaten in uw regio vergelijken. Filter op rechtsgebied en stad om de juiste advocaat te vinden die past bij uw budget en juridische behoefte.`
    },
    {
        slug: "wanneer-advocaat-nodig",
        title: "Wanneer Heb Ik een Advocaat Nodig? Compleet Overzicht",
        meta_title: "Wanneer Heb Ik een Advocaat Nodig? ✓ Overzicht per Situatie | AdvocaatVinder",
        meta_description: "Wanneer is een advocaat verplicht en wanneer is het verstandig? Lees per situatie wanneer u een advocaat nodig heeft en wanneer een jurist volstaat.",
        category: "Juridisch Advies",
        keyword: "advocaat nodig, wanneer advocaat",
        search_volume: "800",
        reading_time: "6 min",
        content_markdown: `## Wanneer heb ik een advocaat nodig?

Niet elke juridische kwestie vereist een advocaat. Soms kunt u zelf uw belangen behartigen, of is een jurist voldoende. Maar in veel gevallen is een advocaat **verplicht** of **zeer aan te raden**. Hieronder vindt u een compleet overzicht.

### Wanneer is een advocaat verplicht?

In de volgende situaties bent u wettelijk verplicht om een advocaat in te schakelen:

- **Echtscheiding** – Een verzoek tot echtscheiding moet altijd door een advocaat bij de rechtbank worden ingediend
- **Civiele zaken boven € 25.000** – Bij financiële geschillen boven dit bedrag is bijstand door een advocaat verplicht
- **Hoger beroep** – Bij het instellen van hoger beroep is een advocaat altijd vereist
- **Faillissement aanvragen** – Zowel het eigen faillissement als dat van een ander
- **Kort geding** – Bij spoedeisende zaken die een onmiddellijke uitspraak vereisen

### Wanneer is een advocaat aan te raden?

In deze situaties is een advocaat niet verplicht, maar wel sterk aanbevolen:

- **Strafzaken** – Bij verdenking van een misdrijf heeft u recht op bijstand. Een advocaat kent de procedures en kan uw rechten beschermen
- **Arbeidsconflicten** – Bij dreigend ontslag, een vaststellingsovereenkomst of een conflict met uw werkgever
- **Letselschade** – Na een ongeval of medische fout kan een gespecialiseerde advocaat een veel hogere schadevergoeding realiseren
- **Huurgeschillen** – Bij ernstige conflicten met uw verhuurder of huurder
- **Bestuursrecht** – Bij geschillen met de overheid (bezwaar tegen besluiten)

### Wanneer volstaat een jurist of mediator?

In de volgende situaties kunt u vaak zonder advocaat:

- **Kantonrechter** (claims tot € 25.000) – U mag zelf procederen
- **Bezwaarschriften bij de overheid** – Geen advocaat verplicht, maar in sommige gevallen wel raadzaam
- **Eenvoudige contracten** – Een jurist kan helpen bij het opstellen van standaardcontracten
- **Mediation** – Bij onderlinge geschillen waar beide partijen tot een oplossing willen komen

### Het verschil tussen een advocaat en jurist

| | Advocaat | Jurist |
|---|---|---|
| **Opleiding** | Universitair rechtenstudie + beroepsopleiding | Universitaire of HBO-rechtenstudie |
| **Beëdiging** | Door de rechtbank beëdigd | Niet beëdigd |
| **Toezicht** | Orde van Advocaten | Geen specifiek toezicht |
| **Procesbevoegdheid** | Mag procederen bij alle rechtbanken | Alleen bij kantonrechter |
| **Geheimhoudingsplicht** | Wettelijk verplicht | Contractueel |
| **Beroepsaansprakelijkheid** | Verplicht verzekerd | Niet altijd |

### Wat kunt u zelf doen?

Voordat u een advocaat inschakelt, kunt u:

1. **Het Juridisch Loket bellen** (0800-8020) – Gratis juridisch advies voor een eerste inventarisatie
2. **Uw rechtsbijstandsverzekering checken** – Mogelijk worden de kosten (deels) vergoed
3. **Informatie verzamelen** – Lees u in over uw rechten via betrouwbare bronnen
4. **Documentatie bewaren** – Bewaar alle relevante documenten, correspondentie en bewijs

### Een advocaat vinden

Als u tot de conclusie komt dat een advocaat nodig is, kunt u bij AdvocaatVinder eenvoudig zoeken naar een specialist in uw rechtsgebied en regio. Vergelijk advocaten op specialisatie en neem direct contact op.`
    },
    {
        slug: "pro-deo-advocaat-toevoeging",
        title: "Pro Deo Advocaat: Gratis Rechtsbijstand Aanvragen in 2025",
        meta_title: "Pro Deo Advocaat — Gratis Rechtsbijstand & Toevoeging Aanvragen | AdvocaatVinder",
        meta_description: "Hoe vraagt u een pro deo advocaat aan? Alles over gesubsidieerde rechtsbijstand, eigen bijdrage, inkomensgrenzen en het aanvraagproces via de Raad voor Rechtsbijstand.",
        category: "Juridisch Advies",
        keyword: "pro deo advocaat, toevoeging aanvragen, gesubsidieerde rechtsbijstand",
        search_volume: "2000",
        reading_time: "6 min",
        content_markdown: `## Wat is een pro deo advocaat?

Een **pro deo advocaat** is een advocaat die werkt op basis van gesubsidieerde rechtsbijstand. Dit betekent dat de overheid een groot deel van de advocaatkosten betaalt. U betaalt zelf alleen een **eigen bijdrage**, die afhankelijk is van uw inkomen.

### Wanneer komt u in aanmerking?

U kunt in aanmerking komen voor een pro deo advocaat als:

- Uw **verzamelinkomen** niet hoger is dan **€ 30.000** (alleenstaand) of **€ 42.400** (samenwonend/gehuwd)
- Uw **vermogen** onder de vrijstellingsgrens valt
- Uw zaak juridisch inhoudelijk is (niet bagatel)
- U geen rechtsbijstandsverzekering heeft die de kosten dekt

### Eigen bijdrage 2025

De eigen bijdrage hangt af van uw inkomen:

| Inkomen (alleenstaand) | Inkomen (samenwonend) | Eigen bijdrage |
|---|---|---|
| Tot € 21.800 | Tot € 30.800 | € 159 |
| € 21.800 – € 26.000 | € 30.800 – € 36.800 | € 366 |
| € 26.000 – € 30.000 | € 36.800 – € 42.400 | € 564 |

### Hoe vraagt u een toevoeging aan?

Het aanvragen van gesubsidieerde rechtsbijstand gaat in een aantal stappen:

1. **Zoek een advocaat** die bereid is op toevoegingsbasis te werken (niet alle advocaten doen dit)
2. **De advocaat dient de aanvraag in** bij de Raad voor Rechtsbijstand
3. **De Raad toetst** uw inkomen en vermogen op basis van gegevens van de Belastingdienst
4. **Bij toewijzing** betaalt u alleen de eigen bijdrage
5. **De advocaat ontvangt** een vergoeding van de overheid voor de rest

### Welke zaken komen in aanmerking?

Gesubsidieerde rechtsbijstand is beschikbaar voor de meeste rechtsgebieden:

- ✅ Familierecht (echtscheiding, alimentatie, omgang)
- ✅ Strafrecht (verdediging bij strafzaken)
- ✅ Arbeidsrecht (ontslagzaken, loonvorderingen)
- ✅ Huurrecht (huurdersgeschillen)
- ✅ Vreemdelingenrecht (asiel, verblijfsvergunning)
- ✅ Bestuursrecht (bezwaar tegen overheidsbeslissingen)
- ❌ Ondernemingsrecht (zakelijke geschillen)
- ❌ Zaken met een belang onder € 500

### Gratis juridisch advies

Voordat u een advocaat inschakelt, kunt u ook **gratis juridisch advies** krijgen bij:

- **Het Juridisch Loket** (0800-8020) – Gratis telefonisch advies en spreekuren
- **Rechtswinkels** – Gratis juridisch advies door rechtenstudenten onder begeleiding
- **Sociaal Raadslieden** – Bij gemeentelijke instanties
- **Nationale Adviesbalie** – Online juridisch advies

### Tips bij het zoeken naar een pro deo advocaat

1. **Niet alle advocaten werken op toevoeging** – Vraag dit direct bij het eerste contact
2. **Zoek een specialist** – Ook met een toevoeging kunt u kiezen voor een gespecialiseerde advocaat
3. **Kwaliteit is gelijk** – Een pro deo advocaat is net zo goed opgeleid als een betalende advocaat
4. **Bewaar uw documenten** – Houd uw inkomensgegevens en de zaakdocumenten bij de hand

### Pro deo advocaat vinden

Bij AdvocaatVinder kunt u zoeken naar advocaten die werken op basis van gesubsidieerde rechtsbijstand. Filter op rechtsgebied en stad om een geschikte advocaat te vinden.`
    },
    {
        slug: "letselschade-advocaat-schadevergoeding",
        title: "Letselschade Advocaat: Schadevergoeding Claimen na een Ongeval",
        meta_title: "Letselschade Advocaat — Schadevergoeding Claimen ✓ Gratis Intake | AdvocaatVinder",
        meta_description: "Letselschade opgelopen? Een letselschade advocaat helpt u bij het claimen van schadevergoeding. Lees over kosten, procedure, en soorten schadevergoeding.",
        category: "Letselschade",
        keyword: "letselschade advocaat, schadevergoeding, letselschade claimen",
        search_volume: "2400",
        reading_time: "7 min",
        content_markdown: `## Wat doet een letselschade advocaat?

Een **letselschade advocaat** is gespecialiseerd in het verhalen van schade die u heeft geleden door een ongeval, medische fout, arbeidsongeval of geweldsmisdrijf. De advocaat helpt u om een eerlijke **schadevergoeding** te krijgen van de aansprakelijke partij of diens verzekeraar.

### Wanneer heeft u een letselschade advocaat nodig?

U kunt een letselschade advocaat inschakelen bij:

- **Verkeersongevallen** – Auto-ongelukken, fietsongevallen, aanrijdingen als voetganger
- **Arbeidsongevallen** – Letsel opgelopen op het werk door onveilige omstandigheden
- **Medische fouten** – Verkeerde diagnose, operatiefouten, verkeerde medicatie
- **Geweldsmisdrijven** – Mishandeling, overval of ander geweld
- **Productaansprakelijkheid** – Letsel door een gebrekkig product
- **Hondenbeten** – De eigenaar is aansprakelijk voor schade door zijn/haar hond

### Welke schadevergoeding kunt u verwachten?

De hoogte van de schadevergoeding hangt af van de ernst van het letsel en de gevolgen:

| Schadepost | Voorbeeld |
|---|---|
| **Medische kosten** | Ziekenhuisopname, fysiotherapie, medicijnen |
| **Verlies van inkomen** | Loonschade bij arbeidsongeschiktheid |
| **Huishoudelijke hulp** | Vergoeding voor hulp in huis |
| **Smartengeld** | Vergoeding voor pijn, verdriet en gederfde levensvreugde |
| **Reiskosten** | Kosten voor bezoeken aan artsen en ziekenhuis |
| **Toekomstige schade** | Verwachte schade in de toekomst |

### Hoe werkt een letselschadezaak?

Het proces verloopt meestal in deze stappen:

1. **Gratis intakegesprek** – De advocaat beoordeelt uw zaak en de haalbaarheid
2. **Aansprakelijkstelling** – De tegenpartij wordt aansprakelijk gesteld
3. **Medische informatie verzamelen** – Alle medische dossiers worden opgevraagd
4. **Schadeberekening** – Alle schadeposten worden in kaart gebracht
5. **Onderhandeling** – De advocaat onderhandelt met de verzekeraar
6. **Schikking of procedure** – Bij akkoord volgt uitbetaling, anders een rechtszaak

### Kosten van een letselschade advocaat

De meeste letselschade advocaten werken op basis van **no cure, no pay** of op toevoegingsbasis:

- **No cure, no pay** – U betaalt alleen als er schadevergoeding wordt binnengehaald (meestal 15-25% van het bedrag)
- **Kosteloze rechtsbijstand** – Vaak betaalt de verzekeraar van de aansprakelijke partij de advocaatkosten
- **Pro deo** – Bij een laag inkomen kunt u in aanmerking komen voor gesubsidieerde rechtsbijstand

### Smartengeldgids: indicaties per letsel

| Letsel | Smartengeld indicatie |
|---|---|
| Whiplash (licht) | € 1.000 – € 5.000 |
| Gebroken been | € 2.000 – € 8.000 |
| Hersenletsel (licht) | € 5.000 – € 25.000 |
| Rughernia door ongeval | € 5.000 – € 20.000 |
| Blijvend invalide | € 25.000 – € 250.000+ |
| Overlijden (naasten) | € 12.500 – € 25.000 |

### Tips bij letselschade

1. **Meld het ongeval direct** – Bij politie en/of arbeidsinspectie
2. **Documenteer alles** – Maak foto's, bewaar bonnen, houd een dagboek bij
3. **Ga naar de huisarts** – Laat uw letsel medisch vastleggen
4. **Accepteer niet zomaar een aanbod** – Eerste aanbiedingen van verzekeraars zijn vaak te laag
5. **Schakel snel een advocaat in** – Hoe eerder, hoe beter voor de bewijsgaring
6. **Verjaring let op** – U heeft 5 jaar na het ongeval om een claim in te dienen

### Letselschade advocaat vinden

Bij AdvocaatVinder vindt u gespecialiseerde letselschade advocaten in uw regio die werken op no cure, no pay basis. De meeste bieden een gratis eerste gesprek aan.`
    },
    {
        slug: "arbeidsrecht-advocaat-ontslag",
        title: "Arbeidsrecht Advocaat: Alles over Ontslag, Rechten & Vergoedingen",
        meta_title: "Arbeidsrecht Advocaat — Ontslag, Rechten & Vergoedingen 2025 | AdvocaatVinder",
        meta_description: "Ontslagen of dreigt ontslag? Een arbeidsrecht advocaat helpt met vaststellingsovereenkomst, transitievergoeding, en uw rechten. Lees alles over arbeidsrecht.",
        category: "Arbeidsrecht",
        keyword: "arbeidsrecht advocaat, ontslag rechten, vaststellingsovereenkomst",
        search_volume: "1000",
        reading_time: "8 min",
        content_markdown: `## Wanneer heeft u een arbeidsrecht advocaat nodig?

Een **arbeidsrecht advocaat** is uw specialist wanneer er problemen ontstaan op het werk. Of het nu gaat om een dreigend ontslag, een conflict met uw werkgever, of het controleren van een vaststellingsovereenkomst – een goede arbeidsrechtadvocaat beschermt uw rechten en belangen.

### Veelvoorkomende arbeidsrechtzaken

Een arbeidsrecht advocaat kan u bijstaan bij:

- **Ontslag** – Controle van de ontslaggronden en procedures
- **Vaststellingsovereenkomst (VSO)** – Onderhandeling over de voorwaarden
- **Transitievergoeding** – Berekening en aanspraak
- **Concurrentiebeding** – Beoordeling van de geldigheid
- **Loonvordering** – Als uw werkgever niet (volledig) betaalt
- **Arbeidsconflict** – Bemiddeling bij een verstoorde arbeidsverhouding
- **Ziekte en re-integratie** – Uw rechten bij langdurige ziekte

### Transitievergoeding 2025

U heeft recht op een transitievergoeding als uw werkgever het dienstverband beëindigt:

**Berekening:** 1/3 bruto maandsalaris per dienstjaar

| Dienstjaren | Salaris € 3.000/mnd | Salaris € 4.500/mnd |
|---|---|---|
| 3 jaar | € 3.000 | € 4.500 |
| 5 jaar | € 5.000 | € 7.500 |
| 10 jaar | € 10.000 | € 15.000 |
| 15 jaar | € 15.000 | € 22.500 |
| 20 jaar | € 20.000 | € 30.000 |

Maximum transitievergoeding 2025: **€ 94.000** of één jaarsalaris (als dat hoger is).

### Vaststellingsovereenkomst: 5 punten om op te letten

Als uw werkgever u een vaststellingsovereenkomst aanbiedt, let dan op:

1. **Ontslagvergoeding** – Is het bedrag minimaal gelijk aan de transitievergoeding? Een goede advocaat onderhandelt vaak een hogere vergoeding
2. **Einddatum** – Is de fictieve opzegtermijn correct verwerkt? Dit is belangrijk voor uw WW-recht
3. **Concurrentiebeding** – Wordt dit vervallen verklaard of beperkt?
4. **Eindafrekening** – Zijn vakantiedagen, vakantiegeld en andere emolumenten correct verwerkt?
5. **Getuigschrift** – Is een positief getuigschrift opgenomen?

### Ontslagbescherming

In Nederland geniet u als werknemer ontslagbescherming. Uw werkgever kan u niet zomaar ontslaan:

| Ontslaggrond | Procedure | Duur |
|---|---|---|
| Bedrijfseconomisch | Via UWV | 4-8 weken |
| Langdurige arbeidsongeschiktheid | Via UWV | Na 2 jaar ziekte |
| Disfunctioneren | Via kantonrechter | 4-12 weken |
| Verstoorde arbeidsverhouding | Via kantonrechter | 4-12 weken |
| Wederzijds goedvinden | Vaststellingsovereenkomst | 1-4 weken |

### Rechten bij ontslag

Bij ontslag heeft u altijd recht op:

- ✅ Transitievergoeding (bij initiatief werkgever)
- ✅ WW-uitkering (mits u aan de voorwaarden voldoet)
- ✅ Uitbetaling vakantiedagen en vakantiegeld
- ✅ Correcte eindafrekening
- ✅ Eindgetuigschrift
- ✅ 14 dagen bedenktijd bij een vaststellingsovereenkomst

### Kosten arbeidsrecht advocaat

De kosten variëren per situatie:

- **VSO laten controleren:** € 350 – € 750 (vaak vaste prijs)
- **Onderhandeling voeren:** € 1.000 – € 3.000
- **Ontslagprocedure:** € 2.000 – € 10.000
- **Op toevoeging (pro deo):** Eigen bijdrage vanaf € 159

**Tip:** Veel werkgevers vergoeden de advocaatkosten van de werknemer als onderdeel van de ontslagregeling. Een goede advocaat onderhandelt dit mee.

### Arbeidsrecht advocaat vinden

Bij AdvocaatVinder vindt u gespecialiseerde arbeidsrecht advocaten in uw regio. Veel bieden een gratis eerste adviesgesprek aan. Vergelijk en kies de advocaat die het beste bij uw situatie past.`
    },
    {
        slug: "strafrecht-advocaat-verdachte",
        title: "Strafrecht Advocaat: Verdacht? Uw Rechten bij Politie en Justitie",
        meta_title: "Strafrecht Advocaat — Verdacht? Ken Uw Rechten ✓ | AdvocaatVinder",
        meta_description: "Verdacht van een strafbaar feit? Een strafrecht advocaat beschermt uw rechten. Lees over uw rechten bij arrestatie, verhoor, en de strafrechtelijke procedure.",
        category: "Strafrecht",
        keyword: "strafrecht advocaat, verdachte rechten, strafrechtadvocaat",
        search_volume: "900",
        reading_time: "7 min",
        content_markdown: `## Wanneer heeft u een strafrecht advocaat nodig?

Als u verdacht wordt van een strafbaar feit, is het inschakelen van een **strafrecht advocaat** cruciaal. Of het nu gaat om een verkeersovertreding, een geweldsdelict of een financieel-economisch misdrijf – een gespecialiseerde strafrechtadvocaat kent de procedures en beschermt uw rechten vanaf het eerste moment.

### Uw rechten als verdachte

Als verdachte heeft u belangrijke rechten. Ken deze rechten:

- **Recht op een advocaat** – U heeft recht op bijstand van een advocaat bij het politieverhoor
- **Zwijgrecht** – U bent niet verplicht om vragen te beantwoorden
- **Recht op informatie** – U moet geïnformeerd worden over de verdenkingen
- **Recht op vertaling** – Als u de Nederlandse taal niet voldoende beheerst
- **Recht op medische bijstand** – Als u medische hulp nodig heeft
- **Recht op contact** – U mag iemand op de hoogte stellen van uw aanhouding

### Het strafproces stap voor stap

| Fase | Wat gebeurt er | Uw rechten |
|---|---|---|
| **Aanhouding** | Politie houdt u aan | Recht op advocaat, zwijgrecht |
| **Verhoor** | Politie stelt vragen | Advocaat aanwezig, zwijgrecht |
| **Inverzekeringstelling** | Max. 3 dagen vast | Voorgeleiding bij rechter-commissaris |
| **Bewaring** | Max. 14 dagen | Voorgeleid bij rechter-commissaris |
| **Gevangenhouding** | Max. 90 dagen | Elke 30 dagen toetsing |
| **Dagvaarding** | Oproep voor zitting | Voorbereiding verdediging |
| **Zitting** | Rechtszaak | Recht op verdediging |
| **Vonnis** | Uitspraak rechter | Recht op hoger beroep |

### Veelvoorkomende strafzaken

Een strafrecht advocaat kan u bijstaan bij uiteenlopende zaken:

- **Verkeerszaken** – Rijden onder invloed, doorrijden na een ongeval, snelheidsovertreding
- **Geweldsdelicten** – Mishandeling, bedreiging, huiselijk geweld
- **Vermogensdelicten** – Diefstal, inbraak, oplichting, fraude
- **Drugsdelicten** – Bezit, handel, productie van verdovende middelen
- **Zedendelicten** – Aanranding, verkrachting, online kindermisbruik beeldmateriaal
- **Financieel-economische delicten** – Witwassen, belastingfraude, valsheid in geschrifte
- **Cybercrime** – Hacking, identiteitsfraude, online oplichting

### Mogelijke straffen

| Straf | Omschrijving |
|---|---|
| **Geldboete** | Van € 450 tot € 900.000 |
| **Taakstraf** | Werkstraf of leerstraf (max. 240 uur) |
| **Gevangenisstraf** | Voorwaardelijk of onvoorwaardelijk |
| **Rijontzegging** | Ontzegging van de rijbevoegdheid |
| **Strafblad** | Aantekening in het Justitieel Documentatie Systeem |

### Kosten strafrecht advocaat

De kosten hangen af van de ernst van de zaak:

- **Eenvoudige zaak** (kantonrechter): € 500 – € 2.000
- **Politierechter**: € 1.000 – € 3.000
- **Meervoudige kamer**: € 3.000 – € 15.000+
- **Hoger beroep**: € 5.000 – € 25.000+
- **Pro deo**: Eigen bijdrage vanaf € 159

### Piketadvocaat

Bij aanhouding wordt u een **piketadvocaat** toegewezen als u zelf geen advocaat heeft. Deze advocaat:

- Is gratis bij de eerste consultatie
- Geeft advies vóór het eerste verhoor
- Kan bij het verhoor aanwezig zijn
- Is een gecertificeerde strafrechtadvocaat

### Tips bij aanhouding

1. **Bel direct een advocaat** – Of maak gebruik van de piketadvocaat
2. **Maak gebruik van uw zwijgrecht** – Verklaar niets zonder overleg met uw advocaat
3. **Blijf rustig** – Medewerking aan identificatie is verplicht, verklaren niet
4. **Teken niets** zonder uw advocaat geraadpleegd te hebben
5. **Vraag om een kopie** van het proces-verbaal

### Strafrecht advocaat vinden

Bij AdvocaatVinder vindt u ervaren strafrechtadvocaten in uw regio. Veel strafrechtadvocaten zijn 24/7 bereikbaar voor urgente zaken. Zoek direct een specialist bij u in de buurt.`
    },
    {
        slug: "huurrecht-advocaat-huurgeschil",
        title: "Huurrecht Advocaat: Hulp bij Huurgeschillen & Huurproblemen",
        meta_title: "Huurrecht Advocaat — Huurgeschillen, Huurverhoging & Rechten | AdvocaatVinder",
        meta_description: "Problemen met uw verhuurder of huurder? Een huurrecht advocaat helpt bij huurgeschillen, onterechte huurverhoging, achterstallig onderhoud en huisuitzetting.",
        category: "Huurrecht",
        keyword: "huurrecht advocaat, huurgeschil, huurrecht",
        search_volume: "700",
        reading_time: "6 min",
        content_markdown: `## Wanneer heeft u een huurrecht advocaat nodig?

Huurgeschillen komen veel voor in Nederland. Of u nu huurder of verhuurder bent, een **huurrecht advocaat** kan u helpen wanneer de situatie vastloopt. Hieronder vindt u de meest voorkomende situaties en uw rechten.

### Veelvoorkomende huurgeschillen

Een huurrecht advocaat kan u bijstaan bij:

- **Onterechte huurverhoging** – Uw verhuurder verhoogt de huur boven het wettelijk maximum
- **Achterstallig onderhoud** – De verhuurder weigert noodzakelijke reparaties uit te voeren
- **Huisuitzetting** – U wordt geconfronteerd met een ontruimingsprocedure
- **Overlast** – Problemen met buren die via de verhuurder opgelost moeten worden
- **Servicekosten** – Onterechte of te hoge servicekosten
- **Medehuurderschap** – Vragen over wie huurder is na overlijden of uit elkaar gaan
- **Onderhuur** – Problemen rondom onderverhuur van de woning

### Rechten van huurders

Als huurder in Nederland heeft u sterke wettelijke bescherming:

- ✅ **Huurbescherming** – De verhuurder kan niet zomaar het huurcontract opzeggen
- ✅ **Maximale huurverhoging** – De jaarlijkse huurverhoging is wettelijk gemaximeerd
- ✅ **Recht op onderhoud** – De verhuurder is verplicht de woning in goede staat te houden
- ✅ **Privacyrecht** – De verhuurder mag niet zomaar de woning betreden
- ✅ **Huurcommissie** – U kunt geschillen voorleggen aan de Huurcommissie

### Huurverhoging 2025

De maximale huurverhoging is wettelijk vastgesteld:

| Type woning | Maximale verhoging 2025 |
|---|---|
| Sociale huurwoning (inkomen tot € 52.753) | 5,8% |
| Sociale huurwoning (inkomen boven € 52.753) | € 100 per maand |
| Vrije sector | 4,1% (wettelijk maximum) |

### Procedure bij de Huurcommissie

Bij geschillen over de huurprijs of onderhoud kunt u terecht bij de **Huurcommissie**:

1. **Contact verhuurder** – Probeer eerst het geschil onderling op te lossen
2. **Verzoek indienen** – Dien een verzoek in bij de Huurcommissie (€ 25 leges)
3. **Onderzoek** – De Huurcommissie onderzoekt de zaak (eventueel met inspectie)
4. **Uitspraak** – De Huurcommissie doet een uitspraak
5. **Bindend of niet** – De uitspraak is bindend, tenzij een partij binnen 8 weken naar de rechter stapt

### Tips voor huurders

1. **Leg alles schriftelijk vast** – Stuur klachten altijd per e-mail of brief
2. **Bewaar bewijsmateriaal** – Foto's van gebreken, kopieën van correspondentie
3. **Ken uw rechten** – Laat de huurprijs checken via de puntentelling
4. **Schakel op tijd hulp in** – Wacht niet te lang als de situatie escaleert
5. **Juridisch Loket** – Bel gratis 0800-8020 voor een eerste advies

### Kosten huurrecht advocaat

Huurzaken worden door de kantonrechter behandeld, wat betekent dat een advocaat niet altijd verplicht is. Toch is het in veel gevallen verstandig:

- **Adviesgesprek**: € 100 – € 250
- **Huurcommissie procedure**: € 500 – € 1.500
- **Kantonrechter**: € 1.000 – € 3.000
- **Pro deo**: Eigen bijdrage vanaf € 159

### Huurrecht advocaat vinden

Bij AdvocaatVinder vindt u gespecialiseerde huurrecht advocaten in uw regio. Vergelijk advocaten op ervaring en specialisatie en neem direct contact op.`
    },
    {
        slug: "verschil-advocaat-jurist",
        title: "Verschil Advocaat en Jurist: Wie Heeft U Nodig?",
        meta_title: "Verschil Advocaat en Jurist — Wie Heeft U Nodig? ✓ Uitleg | AdvocaatVinder",
        meta_description: "Wat is het verschil tussen een advocaat en een jurist? Lees wanneer u een advocaat nodig heeft en wanneer een jurist volstaat. Inclusief kostenverergelijking.",
        category: "Juridisch Advies",
        keyword: "verschil advocaat jurist, advocaat of jurist",
        search_volume: "500",
        reading_time: "5 min",
        content_markdown: `## Wat is het verschil tussen een advocaat en een jurist?

Veel mensen gebruiken de termen **advocaat** en **jurist** door elkaar, maar er zijn belangrijke verschillen. Het kiezen van de juiste juridische professional kan u geld besparen én betere resultaten opleveren.

### De belangrijkste verschillen

| | Advocaat | Jurist |
|---|---|---|
| **Titel** | Beschermde titel (Mr.) | Niet beschermd |
| **Opleiding** | WO Rechten + 3 jaar beroepsopleiding | WO of HBO Rechten |
| **Beëdiging** | Beëdigd door de rechtbank | Niet beëdigd |
| **Toezicht** | Nederlandse Orde van Advocaten | Geen wettelijk toezicht |
| **Geheimhouding** | Wettelijk verschoningsrecht | Geen wettelijk verschoningsrecht |
| **Procederen** | Bij alle rechtbanken | Alleen bij kantonrechter |
| **Verzekering** | Verplichte beroepsaansprakelijkheid | Niet verplicht |
| **Kosten** | € 150 – € 400/uur | € 75 – € 200/uur |

### Wanneer moet u een advocaat kiezen?

U heeft een advocaat nodig als:

- **Procederen bij de rechtbank** nodig is (behalve kantonrechter)
- U **verdacht** wordt in een strafzaak
- U een **echtscheiding** wilt aanvragen
- Het gaat om zaken boven **€ 25.000**
- U **hoger beroep** wilt instellen
- U een **faillissement** wilt aanvragen
- Geheimhouding (verschoningsrecht) belangrijk is

### Wanneer volstaat een jurist?

Een jurist kan vaak helpen bij:

- **Contracten opstellen** of controleren
- **Juridisch advies** voor eenvoudige kwesties
- **Kantonrechtzaken** (huur, arbeid tot € 25.000)
- **Bezwaarschriften** bij de overheid
- **Incasso's** bij openstaande rekeningen
- **Mediation** bij geschillen

### Andere juridische beroepen

Naast advocaten en juristen zijn er meer juridische beroepen:

| Beroep | Wanneer inschakelen |
|---|---|
| **Notaris** | Koopakten, testamenten, oprichting BV, huwelijkse voorwaarden |
| **Mediator** | Bij geschillen waar beide partijen een oplossing willen |
| **Deurwaarder** | Bij het innen van vorderingen en het uitvoeren van vonnissen |
| **Belastingadviseur** | Bij fiscale vraagstukken en belastingaangiftes |

### Kostenvergelijking

Een jurist is gemiddeld goedkoper, maar kan niet alles:

| Dienst | Advocaat | Jurist |
|---|---|---|
| Contract opstellen | € 500 – € 1.500 | € 250 – € 750 |
| Bezwaarschrift | € 500 – € 1.500 | € 250 – € 800 |
| Ontslagzaak | € 2.000 – € 10.000 | Beperkt |
| Echtscheiding | € 1.500 – € 10.000 | Niet mogelijk |
| Strafzaak | € 1.000 – € 25.000 | Niet mogelijk |

### Tips bij het kiezen

1. **Bepaal eerst uw situatie** – Is een advocaat verplicht of niet?
2. **Vraag meerdere offertes** – Vergelijk zowel advocaten als juristen
3. **Check de specialisatie** – Kies altijd een specialist in uw rechtsgebied
4. **Lees reviews** – Bekijk ervaringen van eerdere cliënten
5. **Gratis intakegesprek** – Veel advocaten bieden dit aan

### De juiste specialist vinden

Bij AdvocaatVinder kunt u zoeken naar gespecialiseerde advocaten in alle rechtsgebieden. Filter op stad en specialisatie om de perfecte match te vinden.`
    },
    {
        slug: "gratis-juridisch-advies-nederland",
        title: "Gratis Juridisch Advies: Waar Kunt U Terecht in Nederland?",
        meta_title: "Gratis Juridisch Advies Nederland — 8 Opties voor Gratis Rechtshulp | AdvocaatVinder",
        meta_description: "Zoekt u gratis juridisch advies? Ontdek 8 manieren om gratis rechtshulp te krijgen in Nederland: Juridisch Loket, rechtswinkels, gratis spreekuren en meer.",
        category: "Juridisch Advies",
        keyword: "gratis juridisch advies, gratis advocaat, gratis rechtshulp",
        search_volume: "3000",
        reading_time: "5 min",
        content_markdown: `## Gratis juridisch advies in Nederland

Juridische problemen kunnen stressvol en kostbaar zijn. Gelukkig zijn er in Nederland diverse mogelijkheden om **gratis juridisch advies** te krijgen. Hieronder vindt u een compleet overzicht van alle opties.

### 1. Het Juridisch Loket (gratis)

Het **Juridisch Loket** is dé plek voor gratis juridisch advies in Nederland:

- **Telefonisch**: Bel gratis **0800-8020** (maandag–vrijdag, 9:00–17:00)
- **Op locatie**: Bezoek een van de 30 vestigingen door het hele land
- **Online**: Chat of stel uw vraag via juridischloket.nl
- **Voor wie**: Iedereen, maar met name gericht op mensen met een lager inkomen

### 2. Rechtswinkels (gratis)

**Rechtswinkels** zijn organisaties waar rechtenstudenten onder begeleiding van juristen gratis juridisch advies geven:

- Aanwezig in veel steden (Amsterdam, Rotterdam, Utrecht, etc.)
- Geschikt voor een eerste beoordeling van uw zaak
- Inloopspreekuren op vaste avonden
- Te vinden via rechtswinkel.nl

### 3. Gratis advocaat spreekuur

Veel advocatenkantoren bieden een **gratis inloopspreekuur** aan:

- Eerste adviesgesprek van 15-30 minuten
- Geschikt voor een eerste inschatting van uw kansen
- Geen kosten, geen verplichtingen
- Zoek op "gratis spreekuur advocaat" + uw stad

### 4. Sociaal Raadslieden (gratis)

Via uw gemeente kunt u terecht bij **Sociaal Raadslieden**:

- Gratis hulp bij juridische en financiële vragen
- Ondersteuning bij formulieren en procedures
- Beschikbaar in de meeste gemeenten
- Vraag bij uw gemeentehuis naar de mogelijkheden

### 5. Nationale Adviesbalie (gratis)

De **Nationale Adviesbalie** biedt gratis juridisch advies:

- Telefonisch advies via 0800-1815
- Doorverwijzing naar advocaten en mediators in uw regio
- Onafhankelijk en objectief advies
- Online via nab.nl

### 6. Vakbond juridisch advies

Als u lid bent van een **vakbond**, heeft u vaak recht op gratis juridisch advies:

- Arbeidsrechtelijke kwesties
- Bijstand bij ontslagprocedures
- Hulp bij CAO-geschillen
- Vaak inclusief procesvertegenwoordiging

### 7. Rechtsbijstandsverzekering

Controleer of u een **rechtsbijstandsverzekering** heeft:

- Veel mensen hebben dit zonder het te weten (bijvoorbeeld via DAS of ARAG)
- Vaak onderdeel van een woonverzekeringspakket
- Dekt juridisch advies en proceskosten
- Check uw polisvoorwaarden of bel uw verzekeraar

### 8. Online juridisch advies

Diverse websites bieden gratis juridisch advies:

- **Rijksoverheid.nl** – Informatie over uw rechten per onderwerp
- **Rechtspraak.nl** – Informatie over juridische procedures
- **Eersterechtshulp.nl** – Wegwijzer voor gratis rechtshulp

### Wanneer is gratis advies niet genoeg?

Gratis hulp is waardevol voor een eerste beoordeling, maar u heeft een betaalde advocaat nodig als:

- Uw zaak **complex** is (meerdere partijen, hoge bedragen)
- U moet **procederen** bij de rechtbank
- Er sprake is van **spoed** (kort geding, strafrechtelijke aanhouding)
- De tegenpartij een advocaat heeft ingeschakeld
- Er veel op het spel staat (uw woning, kinderen, vrijheid)

### Gesubsidieerde rechtsbijstand

Als uw inkomen laag is, kunt u een **pro deo advocaat** krijgen. De overheid betaalt het grootste deel, u betaalt alleen een eigen bijdrage (vanaf € 159). Lees meer in ons artikel over pro deo advocaten.

### Advocaat vinden wanneer nodig

Komt u na het gratis advies tot de conclusie dat u een advocaat nodig heeft? Bij AdvocaatVinder vindt u eenvoudig een specialist in uw regio. Vergelijk advocaten op ervaring en neem direct contact op.`
    },
    {
        slug: "advocaat-kiezen-tips",
        title: "De Juiste Advocaat Kiezen: 7 Tips voor de Beste Keuze",
        meta_title: "Advocaat Kiezen — 7 Tips voor het Vinden van de Beste Advocaat | AdvocaatVinder",
        meta_description: "Hoe kiest u de juiste advocaat? 7 praktische tips voor het vinden van een goede advocaat: specialisatie, kosten, reviews, en meer.",
        category: "Juridisch Advies",
        keyword: "advocaat kiezen, goede advocaat vinden, beste advocaat",
        search_volume: "400",
        reading_time: "5 min",
        content_markdown: `## Hoe kiest u de juiste advocaat?

Het kiezen van een advocaat is een belangrijke beslissing. De juiste advocaat kan het verschil maken tussen winnen en verliezen. Met deze **7 tips** vindt u de advocaat die het beste bij uw zaak past.

### Tip 1: Kies een specialist

Kies altijd een advocaat die gespecialiseerd is in het rechtsgebied van uw zaak:

- Een **familierecht advocaat** voor echtscheidingen en alimentatie
- Een **arbeidsrecht advocaat** voor ontslagzaken
- Een **strafrecht advocaat** als u verdacht wordt
- Een **letselschade advocaat** na een ongeval

Een specialist kent de nieuwste jurisprudentie en heeft ervaring met vergelijkbare zaken.

### Tip 2: Vergelijk meerdere advocaten

Vraag bij minimaal **2-3 advocaten** een offerte of intakegesprek aan:

- Vergelijk tarieven en werkwijze
- Let op de klik en communicatiestijl
- Vraag naar ervaring met vergelijkbare zaken
- Vergelijk de voorgestelde aanpak

### Tip 3: Let op de kosten

Maak duidelijke afspraken over de kosten:

- Vraag naar het **uurtarief** of een **vaste prijs**
- Vraag om een **kostenraming** voor uw zaak
- Informeer naar bijkomende kosten (griffierecht, kantoortoeslag)
- Vraag of er mogelijkheid is voor **gesubsidieerde rechtsbijstand**

### Tip 4: Check reviews en referenties

Doe onderzoek naar de reputatie van de advocaat:

- Lees **online reviews** op Google, Trustpilot of andere platforms
- Vraag de advocaat om **referenties** van eerdere cliënten
- Check de **inschrijving** bij de Nederlandse Orde van Advocaten
- Zoek naar eventuele **tuchtrechtelijke uitspraken**

### Tip 5: Beoordeel de communicatie

Goede communicatie is essentieel:

- Reageert de advocaat snel op uw vragen?
- Legt de advocaat zaken begrijpelijk uit (niet te veel juridisch jargon)?
- Voelt u zich gehoord en serieus genomen?
- Is de advocaat bereikbaar wanneer u dat nodig heeft?

### Tip 6: Maak gebruik van gratis intakegesprekken

Veel advocaten bieden een **gratis eerste gesprek** aan:

- Dit is een ideale gelegenheid om de advocaat te leren kennen
- U kunt uw zaak voorleggen en een eerste inschatting krijgen
- Er zijn geen kosten of verplichtingen aan verbonden
- Gebruik dit moment om vragen te stellen over werkwijze en kosten

### Tip 7: Controleer de registratie

Elk advocaat in Nederland moet ingeschreven zijn bij de **Nederlandse Orde van Advocaten**:

- Check via zoekeenadvocaat.nl of de advocaat geregistreerd is
- Controleer in welke rechtsgebieden de advocaat is ingeschreven
- Bekijk of er tuchtrechtelijke maatregelen zijn opgelegd
- Een geregistreerde advocaat is verplicht verzekerd en staat onder toezicht

### Checklist voor het kiezen van een advocaat

| Criterium | ✅ Check |
|---|---|
| Gespecialiseerd in uw rechtsgebied | |
| Transparant over kosten | |
| Goede reviews/referenties | |
| Snelle en duidelijke communicatie | |
| Ingeschreven bij de NOvA | |
| Ervaring met vergelijkbare zaken | |
| Gratis intakegesprek aangeboden | |

### Advocaat vinden en vergelijken

Bij AdvocaatVinder kunt u advocaten zoeken, vergelijken en direct contact opnemen. Filter op specialisatie en stad om de ideale advocaat voor uw zaak te vinden.`
    }
];

async function main() {
    console.log('Inserting 10 new SEO blog articles...\n');
    
    for (const article of newArticles) {
        const { error } = await supabase
            .from('blog_articles')
            .upsert({
                ...article,
                published_at: new Date().toISOString()
            }, { onConflict: 'slug' });
        
        if (error) {
            console.log(`❌ Error inserting ${article.slug}:`, error.message);
        } else {
            console.log(`✅ Inserted: ${article.slug} (${article.content_markdown.length} chars)`);
        }
    }
    
    // Verify count
    const { data, error } = await supabase
        .from('blog_articles')
        .select('slug, title')
        .order('published_at', { ascending: false });
    
    console.log(`\nTotal articles in database: ${data?.length || 0}`);
    data?.forEach(a => console.log(`  - ${a.slug}: ${a.title}`));
    console.log('\nDone!');
}

main();
