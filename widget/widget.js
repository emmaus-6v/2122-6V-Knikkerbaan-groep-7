

// globale variabelen
var aantalKnikkersBoven = 0;    // aantal knikkers dat bovenin is binnengekomen
var wachttijd = 15;             // wachttijd voor het poortje in seconden
const UPDATE_INTERVAL = 5000;   // tijd in milliseconden tussen het door widget opvragen van gegevens
var button;
var teller;
var toonhoogteLinks;
var toonhoogteRechts;
var wachttijdInput;
var toonhoogteLinksInput;
var toonhoogteRechtsInput;

// globale variabelen tekenen widget
var uiterstLinksY = 10;
var uiterstRechtsY = 290;
var middenY = 150;

//radio button
let radio;


/**
 * setup
 * de code in deze functie wordt eenmaal uitgevoerd,
 * als p5js wordt gestart
 */
function setup() {
  // Maak het canvas van je widget
  createCanvas(300, 600);

  teller = new Teller(280, 30);

  /*
  toonhoogteLinks = new ToonhoogteLinks(30, 280);
  toonhoogteRechts = new ToonhoogteRechts(230, 280);
  */

  // maak een button en stel deze in
    // button 1 wachttijd
  button = createButton('Verstuur');
  button.position(200,575);
  button.mouseClicked(stuurNieuweInstellingen);


    radio = createRadio();
    radio.option('laag');
    radio.option('hoog');
    radio.style('width', '120px');
    radio.position(200, 600);
    //textAlign(CENTER);
    //fill(255, 0, 0);
  
  // om de ... milliseconden wordt 'vraagSensorData' uitgevoerd
  setInterval(vraagSensorData, UPDATE_INTERVAL);
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  
  // schrijf hieronder de code van je widget
  // hieronder wordt schematisch een knikkerbaan getekend

  // achtergrond: zwart
  background(50, 50, 50);

  // strepen als baan
  stroke(200, 200, 200);
  strokeWeight(10);
  
      // 2 banen boven pinnetjes
      line(50, 20, 200, 50); // bovenste lijn links boven naar rechts beneden
      line(uiterstRechtsY, 70, 100, 90); // 2e lijn rechs boven naar links beneden

      // 2 banen als opvangbak onder pinnetjes
      line(uiterstLinksY, 210, middenY - 20, 230); // links
      line(uiterstRechtsY, 210, middenY + 20, 230); // rechts

      // 2 banen als divider van de balletjes
      line(middenY, 260, 100, 280); // links
      line(middenY, 260, 200, 280); // rechts

      // 2 banen als opvangbak onder de divider
      line(uiterstLinksY, 320, middenY - 40, 360); // links
      line(uiterstRechtsY, 320, middenY + 40, 360); // rechts

      // 2 banen uit elkaar lopend
      line(middenY - 10, 390, uiterstLinksY + 40, 440); // links
      line(middenY + 10, 390, uiterstRechtsY - 40, 440); // rechts

      // 2 banen als opvangbak onderin
      line(uiterstLinksY, 550, middenY - 20, 570); // links
      line(uiterstRechtsY, 550, middenY + 20, 570); // rechts

      // pinnetjes als cirkels
      noStroke();               // geen rand
      fill(200, 200, 200);
      ellipse(100, 150, 10, 10);

    // radio button
    let val = radio.value();
    text(val, width / 2, height / 2);


  // veranderende gegevens
  teller.show();
  /*
  toonhoogteLinks.show();
  toonhoogteRechts.show(); */

  // tekst ter verduidelijking
  noStroke();               // geen rand
  fill(255, 255, 255);      // wit
  textSize(14);
  text("Aantal knikkers:", 175, 27); // print aantal knikkers bovenin. net iets lager dan cijfer
  text("Toonhoogte:", 10, 260);
  text("Toonhoogte:", 210, 260);
}


// stuurt een verzoek aan de server dat alle
// sensordata opvraagt
function vraagSensorData() {
  var request = new XMLHttpRequest();

  // maak een http-verzoek
  request.open('GET', '/api/get/sensordata', true)

  // wat uitvoeren als het antwoord teruggegeven wordt?
  request.onload = function () {
    var data = JSON.parse(request.response);

    if (request.status == 200) {
      console.log("Dit geeft de server terug:" + data);
      teller.aantal = data.aantalKnikkers;
    }
    else {
      console.log("server reageert niet zoals gehoopt");
      console.log(request.response);
    }
  }

  // verstuur het request
  request.send()
}


// stuurt een http-verzoek aan de server met de
// nieuwe instellingen
function stuurNieuweInstellingen() {
  var request = new XMLHttpRequest();

  // maak een http-verzoek
  request.open('GET', '/api/set/instellingen?wachtijd=' + wachtijdInput.value() + toonhoogteLinksInput.value() + toonhoogteRechtsInput.value(), true)

  // wat uitvoeren als het antwoord teruggegeven wordt?
  request.onload = function () {
    if (request.status == 200) {
      console.log("server accepteerde instellingen");
    }

    else {
      console.log("server reageert niet zoals gehoopt");
      console.log(request.response);
    }
  }

  // verstuur het request
  request.send()
}