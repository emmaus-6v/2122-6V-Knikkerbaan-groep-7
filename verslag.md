# Verslag eindopdracht 6V
### Gemaakt door *Sena Boyraz*, *Sharon de Hoog*, *Maayke Huijnen*, *Carlijn Pelk* en *Maureen Yeung*

---

## Inleiding
In het vakgebied van informatica wordt heel veel projectmatig gewerkt. Bij deze opdracht hebben we gewerkt aan een interactieve knikkerbaan die verbonden is met een zelfgemaakte webserver. Wij hebben hierbij de kennis en vaardigheden die we bij het vak informatica hebben opgedaan toegepast en geïntergreerd. Als resultaat ons Music Box.



## Features
Beschrijf hier de eigenschappen van jullie knikkerbaan (gebruik gerust plaatjes) kijk in map fotos naar KnikkerBaan.png . De eerste paar zijn voorgegeven:

### feature 1: Opvangen van knikkers
De knikkerbaan kan knikkers bovenin correct opvangen. De binnenkomende knikkers worden geteld en een poortje bepaalt of knikkers worden doorrollen of worden tegengehouden.

### feature 2: Doorgeven van gegevens aan server
De knikkerbaan zendt de hoeveelheid getelde knikkers naar een server die de gegevens opslaat in een database. Deze server kan per 'run' (d.w.z. een nieuwe keer aangaan) gegevens bijhouden.

### feature 3: Widget wisselt info uit met knikkerbaan
In de browser kan met een URL een widget worden geladen. Deze geeft de knikkerbaan schematisch weer in een frame van 800x400px. De getelde knikkers en toonhoogte worden hierin getoond. Of je een lage of hoge toon wilt horen bij het langskomen van een knikker kan hierin worden gekozen. De knikkerbaan kan deze keuze gemaakt via de server ontvangen en zijn werking erop aanpassen.

### feature 4: Interactieve toonhoogte
Via onze webwidget kan jij zelf interactief invloed hebben op de knikkerbaan! Door aan te geven of jij een hoge of lage toon wilt horen in de widget, verandert de toonhoogte van de buzzers aangesloten op de knikkerbaan.


### feature 5 en 6: Sensor en buzzer geluiden
Op de kikkerbaan staan sensoren aangesloten. Wanneer een knikker langs de sensor beweegt, wordt het aantal getelde knikkers verhoogd. Hierdoor gaat de buzzer af. Vandaar de naam MusicBox! 


### feature 6: Webwidget
Door de server op de starten zie jij een digitale versie van onze knikkerbaan. 

### feauture 7: Servo
De poort kan open en dicht staan. Na elke 15 seconden verandert de status van de poort, wat gekoppeld zit aan de servo op de knikkerbaan bord. De servo roteert 90 graden waardoor er knikkers wel/niet doorgelaten worden, afhankelijk van de status van de poort.

## Evaluaties van scrumplanningen:
We hebben vooraf niet een exacte planning gemaakt, maar de opdracht per week aangekeken. Dit was achteraf niet de beste keuze, aangezien we uiteindelijk in de knoop raakten doordat we de week voor de deadline nog met veel problemen (niet werkende code) zaten, terwijl we  die week het ook erg druk hadden met school. 

### week 43 (25 okt - 31 okt)
Scrumplanning gemaakt

### week 44 (1 nov - 7 nov) 
Brainstormen over ons idee voor de knikkerbaan

Schets van de knikkerbaan maken

### week 45 (8 nov - 14 nov)
Idee knikkerbaan uitwerken en schets maken

### week 46 (15 nov - 21 nov)

### week 47 (22 nov - 28 nov)

### week 48 (29 nov - 5 dec)

### week 49 (6 dec - 12 dec)

### week 50 (13 dec - 19 dec)
Begin design WebWidget

Alles van video's Cammeraat ingevoegd

### week 51 (20 dec - 26 dec)
Vordering in de WebWidget

### week 52 (27 dec - 2 jan)
Basis design WebWidget af

### week 1 (3 jan - 9 jan)

### week 2 (10 jan - 16 jan)

### week 3 (17 jan - 23 jan)
verven van de plank en alles op maat zagen

### week 4 (24 jan - 30 jan)
WebWidget verbeterd

details toevoegen op de plank en alles monteren

### week 5 (31 jan - 6 feb)
Constructor toonhoogte maken

toonhoogte in database zetten

plank af, alles gemonteerd zover het kon

Inleiding verslag

Servo maken

### week 6 (7 feb - 13 feb)
Keuzmenu toonhoogte: laag/hoog maken

verbeteren constructor toonhoogte

Servo verbeteren

Buzzer maken

### week 7 (14 feb - 20 feb)
Widget afgemaakt 

Teller A maken

Teller A verbeteren

### week 8 (21 feb - 27 feb)

### week 9 (28 feb - 6 mrt)
Buzzer verbeteren

Arduino teller B

Arduino teller C

Servo aanpassen


## Technische verantwoording
Geef hier bijvoorbeeld de volgende informatie, maar voel je vrij er informatie aan toe te voegen.

De Arduino werkt op de volgende manier: 
Servo; Elke 15 seconden roteert de servo doordat de status van de poort verandert.
Teller; Wanneer de kinkker langs de sensoren komt wordt dat doorgegeven aan de arduino, waardoor hij optelt hoeveel knikkers er langs zijn gekomen.
Sensor voor de buzzer; de sensor geeft door dat er een knikker langs komt en dan geeft het door dat de buzzer aan moet gaan.

De knikkerbaan en de widget wisselen de volgende data met elkaar uit: De hoeveelheid knikkers die langs komen, de wachttijd en of er een lage of hoge toonhoogte wordt afgespeeld.

We hebben dat in een database opgenomen via de naam toonhoogte, deze wordt ingevuld door de string laag of hoog dat aangeklikt wordt op onze website. De reden dat we voor toonhoogte hebben gekozen is omdat dit ook de vraag is die we hebben gesteld en dat dit de buzzer een geluid laat maken. We hebben ook voor toonhoogte gekozen, dat we dit gebruiken in onze knikkerbaan, omdat Sharon veel met muziek heeft en we dachten dat dit ook leuk was om in de knikkerbaan te verwerken. 

Uitdagingen die we tegenkwamen: De arduino was vooral voor ons een grote uitdaging, dit hebben wij uiteindelijk wel goed gemaakt door de tijd die wij hebben gekregen. Wij kregen in het begin steeds een foutmelding, de servo die niet meewerkte en daarna werkte de 2e sensor steeds niet terwijl alles goed door wordt gestuurd.



## Reflectie op opdracht
#### --Sena Boyraz--
Het is geen geheim dat ik niet de grootste informatica fan ben, toch had ik enigzins plezier in het maken van deze opdracht. Maayke en ik hebben de knikkerbaan voor onze rekening genomen. Het was wel wat moeilijker dan we hadden verwacht, maar wie zou kunnen raden dat verven, zagen en boren daadwerkelijk therapeutisch zou zijn. Dankzij deze opdracht ga ik na mijn examens een pottenbakkencursus volgen. Het leerpuntje wat ik meeneem uit deze ervaring is zeker dat ik moet werken aan mijn communicatie vaardigheden. Ik dacht altijd een uitstekende communicator te zijn, maar deze opdracht heeft mij geleerd dat alleen gezellig zijn niet genoeg is voor een samenwerking. We hebben het uiteindelijk wel opgelost gelukkig. Dit zal vast niet de laatste keer zijn dat ik een groepsproject heb, dus voor de volgende keer neem ik plannen en het maken van duidelijke afspraken als focuspunt. 

#### --Sharon de Hoog--
Dit project heeft mij veel geleerd, hoewel ik in het begin niet begreep wat een knikkerbaan te maken had met code. Ik heb veel hulp gekregen door de video's, later kreeg ik het zelf door een had ik een deel van de widget gemaakt. Er waren een paar fouten in de samenwerking, dit kwam vooral door de communicatie tussen iedereen. Later zijn we er uit gekomen en hebben we het project toch nog af kunnen maken. Het project was moeilijk om aan te beginnen maar uiteindelijk toch wel grappig om te doen.

#### --Maayke Huijnen--
Bij deze opdracht waren er veel opstart problemen omdat we niet wisten waar we moesten beginnnen. Het design van de baan was al snel gemaakt. Na het starten van het project en de eerste dingen werkende krijgen werd er een duidelijk taakverdeling gemaakt. Sena en ik gingen het bord helemaal maken. Een grote taak dan dat we eerst hadden verwacht. Ik moet eerlijk toegeven dat Sena zeker meer tijd na school heeft besteed aan het bord maar vanwege medische redenen en het feit dat ik vaak na school naar het ziekenhuis moest was dit voor mij niet mogelijk. De samenwerkingen liep op sommige momenten wat stroef maar uiteindelijk zijn we eruit gekomen. Ik had zelf liever meer tijd besteed aan deze opdracht maar door de eerder genoemde redenen was dit simpel weg niet mogelijk. Ik heb veel van dit project geleerd en geloof me wanneer ik zeg dat ik voor dit project echt nog niet kon boren. 

#### --Carlijn Pelk--
Tijdens deze opdracht hebben we veel geleerd. Zo was dit de eerste keer dat we moesten werken met verschillende code talen die met elkaar moeten comminuceren. Daarnaast hebben we geleerd taken te verdelen om er zo voor te zorgen dat alles gedaan werd. Tenslotte was het voor ons allemaal nieuw om met zo een grote groep samen te werken, wat enkele complicaties met zich mee bracht maar uiteindelijk erg leervol was. Omdat dit soort samenwerking nieuw was, waren hierin nog wel wat verbeterpuntjes. Daarnaast was het voor ons moeilijk om te beginnen met de opdracht omdat we niet zo goed wisten hoe te beginnen, maar toen we eenmaal begonnen, werd alles duidelijker. Overal was het erg leervol.

#### --Maureen Yeung--
De knikkerbaan was naast een lastige opdracht ook een leerproces. Het project was ingewikkeld en de Arduino had er vaker niet zin in dan wel. Maar vooral de samenwerking was niet soepel verlopen, door gebrek aan communicatie. Daarnaast was er vooraf niet een exacte planning gemaakt, maar slechts een schets van hoe we de periode zouden gaan vorm geven wat toentertijd een goed idee leek zodat we vrije keuzes konden maken maar dit heeft ons juist later tegengewerkt. Een goede planning is al het halve werk en daarom is dat dan ook wat ik uit dit project mee zal nemen.



## Slot
Het is duidelijk dat we allemaal dezelfde mening delen over wat beter kon. Wat we ook weten is dat we veel tijd en energie in dit project hebben gestoken. We zijn blij dat we het afhebben en kunnen niet wachten om de knikker door ons werk te zien rollen. Het is misschien niet het meest perfecte project, maar het is wel ons project en we zijn er trots op. 
