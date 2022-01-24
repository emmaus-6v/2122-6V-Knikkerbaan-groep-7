/* Beschrijf de tabellen die je nodig hebt*/

CREATE TABLE runs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  stamp DATETIME NOT NULL
);

CREATE TABLE sensorData (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  run INTEGER NOT NULL,
  stamp DATETIME NOT NULL,
  aantalKnikkers INTEGER
);

CREATE TABLE instellingen (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  run INTEGER NOT NULL,
  stamp DATETIME NOT NULL,
  wachttijdPoort INTEGER NOT NULL
  /* toonhoogte STRING -> ik wil dat je het kan zeggen low of high en dat het dan doorvoert bij de arduino of de toon hoog of laag is maar hoe refereer ik daarnaar? */ 
);


/* Indien je standaard wat gegevens in de database wilt,
   voeg hieronder dan INSERT regels to */

   /* moet je aanpassen! */
   
INSERT INTO runs (stamp) VALUES (CURRENT_TIMESTAMP);
INSERT INTO sensorData (run, stamp, aantalKnikkers) VALUES (1, CURRENT_TIMESTAMP, 3);
INSERT INTO instellingen (run, stamp, wachttijdPoort, ) VALUES (1, CURRENT_TIMESTAMP, 15);
