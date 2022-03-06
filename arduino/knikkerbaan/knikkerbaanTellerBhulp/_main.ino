#include <Arduino_JSON.h>

KnikkerPoort poortBoven = KnikkerPoort();
WiFiCommunicator wifi = WiFiCommunicator(WIFI_NETWERK, WIFI_WACHTWOORD, SERVER_DOMEINNAAM);
Teller tellerA = Teller(TELLER_A_PIN);
Teller tellerB = Teller(TELLER_B_PIN); // voor teller B

int serverContactInterval = 3;                // na 3 seconden beweegt de servo weer
unsigned long tijdVoorContactMetServer = 0;
unsigned long tijdOmBuzzerUitTeZetten = 0;
int vorigeAantalknikkers = 0;
int vorigeAantalknikkersB = 0;
int toonBuzzer = 500; // standaart een toonhoogte op 1000, zodat als contact niet goed toch een toon
int toonOntvangen;

void setup() {
  Serial.begin(9600);
  pinMode(BUZZERPIN, OUTPUT);
//  pinMode(BUZZERPINB, OUTPUT);
  poortBoven.begin(BOVEN_POORT_PIN, 90, 20);

  wifi.begin();

  wifi.stuurVerzoek("/api/set/nieuwerun", "");

  poortBoven.open();
}


void loop() {
// laat de teller A detecteren:
  tellerA.update();
  if (vorigeAantalknikkers < tellerA.getAantal()) {
    // digitalWrite(BUZZERPIN, HIGH);
    tone(BUZZERPIN, toonBuzzer, 250);
    Serial.println("zet de buzzer aan");
    
//laat de teller B detecteren:
    tellerB.update();
    if (vorigeAantalknikkersB = tellerB.getAantal()) {
      // digitalWrite(BUZZERPIN, HIGH);
      tone(BUZZERPIN, toonBuzzer, 250);
      Serial.println("zet de buzzer aan");

    }
    vorigeAantalknikkers = tellerA.getAantal();
    vorigeAantalknikkersB = tellerB.getAantal();


    // pauzeer de knikkerbaan als het tijd is voor contact met server
    if (millis() > tijdVoorContactMetServer && poortBoven.getOpen()) {
      Serial.println("de poort sluit");
      poortBoven.sluit();
    }

    // knikkerbaan is leeggelopen, er zijn geen sensors dit iets moeten meten
    // nu is het tijd om contact te leggen met de server:
    if (millis() > tijdVoorContactMetServer + LEEGLOOP_TIJD) {
      Serial.println("Nu zouden we met de server moeten praten");
      Serial.print("Er zijn nu zoveel knikkers geteld: ");
      Serial.println(tellerA.getAantal());

      // intellingen ophalen door Arduino > filmpje
      String data = "knikkers=";
      data += tellerA.getAantal();

      wifi.stuurVerzoek("/api/set/sensordata", data.c_str());

      String serverAntwoord = wifi.stuurVerzoek("/api/get/instellingen", "");
      Serial.println(serverAntwoord);

      JSONVar ontvangenInstellingen = JSON.parse(serverAntwoord);

      if (JSON.typeof(ontvangenInstellingen != "undefined")){
        toonOntvangen = (int)ontvangenInstellingen["toonhoogte"];
      }
      else {
        Serial.println("FOUT: geen serverAntwoord");
      }

       // server communucatie afgerond

      // zorgen voor verandering in toonhoogte bij ontvangen info
      if (toonOntvangen = "hoog"){
        toonBuzzer = 1000; 
      }
      else{
        toonBuzzer = 300;
      }



      // bereken de nieuwe tijd waarop er weer met de server gecommuniceerd moet worden
      tijdVoorContactMetServer = millis() + (unsigned long)serverContactInterval * 1000;
      // en zet nu het poortje weer open:
      poortBoven.open();
      Serial.println("de poort gaat weer open");

    }
  }  }
