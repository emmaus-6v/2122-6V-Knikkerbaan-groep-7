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

void setup() {
  Serial.begin(9600);
  pinMode(BUZZERPIN, OUTPUT);
//  pinMode(BUZZERPINB, OUTPUT);
  poortBoven.begin(BOVEN_POORT_PIN, 90, 20);

  //wifi.begin();

  //wifi.stuurVerzoek("/api/set/nieuwerun", "");

  poortBoven.open();
}


void loop() {
// laat de teller A detecteren:
  tellerA.update();
  if (vorigeAantalknikkers < tellerA.getAantal()) {
    // digitalWrite(BUZZERPIN, HIGH);
    tone(BUZZERPIN, 1000, 250);
    Serial.println("zet de buzzer aan");
    
//laat de teller B detecteren:
    tellerB.update();
    if (vorigeAantalknikkersB = tellerB.getAantal()) {
      // digitalWrite(BUZZERPIN, HIGH);
      tone(BUZZERPIN, 200, 250);
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


      // bereken de nieuwe tijd waarop er weer met de server gecommuniceerd moet worden
      tijdVoorContactMetServer = millis() + (unsigned long)serverContactInterval * 1000;
      // en zet nu het poortje weer open:
      poortBoven.open();
      Serial.println("de poort gaat weer open");

    }
  }  }
