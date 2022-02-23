

// globale variabelen
var aantalKnikkersBoven = 0;    // aantal knikkers dat bovenin is binnengekomen
var wachttijd = 5000;             // wachttijd voor het poortje in seconden
const UPDATE_INTERVAL = 5000;   // tijd in milliseconden tussen het door widget opvragen van gegevens
var button;
var teller;
var toonhoogte;
var wachttijdInput;
var toonhoogteInput;

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
  createCanvas(300, 650);

  teller = new Teller(280, 30);

  /*
  toonhoogteLinks = new ToonhoogteLinks(30, 280);
  toonhoogteRechts = new ToonhoogteRechts(230, 280);
  */

  // maak een button en stel deze in
    // button 1 wachttijd
    
  button = createButton('Verstuur');
  button.position(20,620);
  button.mouseClicked(stuurNieuweInstellingen);
  
  noStroke();               // geen rand
  fill(255, 255, 255);      // wit
  textSize(14);

    radio = createRadio();
    radio.option('laag');
    radio.option('hoog');
    //radio.style('width', '120px');
    radio.position(100, 620);
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
        line(uiterstLinksY, 300, middenY - 40, 340); // links
        line(uiterstRechtsY, 300, middenY + 40, 340); // rechts
  
  
        // 2 banen uit elkaar lopend
        line(middenY - 10, 350, uiterstLinksY + 40, 400); // links
        line(middenY + 10, 350, uiterstRechtsY - 40, 400); // rechts
  
  
        // 2 banen als opvangbak 
        line(uiterstLinksY, 420, middenY - 40, 460); // links
        line(uiterstRechtsY, 420, middenY + 40, 460); // rechts
  
  
        // 2 banen uit elkaar lopend
        line(middenY - 10,470, uiterstLinksY + 40, 520); // links
        line(middenY + 10, 470, uiterstRechtsY - 40, 520); // rechts
  
  
        // 2 banen als opvangbak onderin
        line(uiterstLinksY, 550, middenY - 20, 570); // links
        line(uiterstRechtsY, 550, middenY + 20, 570); // rechts
  
  
        // pinnetjes als cirkels
        noStroke();               // geen rand
        fill(200, 200, 200);
        ellipse(100, 150, 10, 10);
        ellipse(110, 170, 10, 10);
        ellipse(80, 120, 10, 10);
        ellipse(70, 140, 10, 10);
        ellipse(100, 180, 10, 10);
        ellipse(40, 190, 10, 10);
        ellipse(50, 160, 10, 10);
        ellipse(100, 110, 10, 10);
        ellipse(40, 110, 10, 10);
        ellipse(80, 180, 10, 10);
      
        ellipse(200, 150, 10, 10);
        ellipse(210, 170, 10, 10);
        ellipse(180, 120, 10, 10);
        ellipse(170, 140, 10, 10);
        ellipse(200, 180, 10, 10);
        ellipse(140, 190, 10, 10);
        ellipse(150, 160, 10, 10);
        ellipse(200, 110, 10, 10);
        ellipse(140, 110, 10, 10);
        ellipse(180, 180, 10, 10);
        
    // streep onderin boven keuze menu
    stroke(250, 50, 50);
    strokeWeight(4);
    line(uiterstLinksY, 600, uiterstRechtsY, 600);


  // veranderende gegevens
  teller.show();

  // tekst ter verduidelijking
  noStroke();               // geen rand
  fill(255, 255, 255);      // wit
  textSize(14);
  text("Aantal knikkers:", 175, 27); // print aantal knikkers bovenin. net iets lager dan cijfer
  text("Toonhoogte:", width / 2 - 40, height / 2 - 20);
  //text("Toonhoogte:", 210, 260);

  // radio button
  toonhoogteInput = radio.selected();
  //background(val);
  text(toonhoogteInput, width / 2 - 20, height / 2);
  
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
  request.send();
}


// stuurt een http-verzoek aan de server met de
// nieuwe instellingen
function stuurNieuweInstellingen() {
  var request = new XMLHttpRequest();

  // maak een http-verzoek
  request.open('GET', '/api/set/instellingen?toonhoogte=' + toonhoogteInput, true);

    //toonhoogteLinksInput.value() + toonhoogteRechtsInput.value()

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
  request.send();
}