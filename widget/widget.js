

// globale variabelen
var aantalKnikkersBoven = 0;    // aantal knikkers dat bovenin is binnengekomen
var wachttijd = 15;             // wachttijd voor het poortje in seconden
const UPDATE_INTERVAL = 5000;   // tijd in milliseconden tussen het door widget opvragen van gegevens
var button;
var teller;
var wachttijdInput;


/**
 * setup
 * de code in deze functie wordt eenmaal uitgevoerd,
 * als p5js wordt gestart
 */
function setup() {
  // Maak het canvas van je widget
  createCanvas(300, 600);

  teller = new Teller(280, 30);

  // maak een button en stel deze in

  button = createButton('Verstuur');
  button.position = (200,575);
  button.mouseClicked(stuurNieuweInstellingen);

  //invoerveld
  wachttijdInput = createInput();
  wachttijdInput.position = (255, 70);
  wachttijdInput.size(50);



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
      line(250, 70, 100, 90); // 2e lijn rechs boven naar links beneden

      // 2 banen als opvangbak onder pinnetjes
      line(10, 210, 130, 230); // links
      line(290, 210, 170, 230); // rechts

      // 2 banen als divider van de balletjes
      line(150, 260, 100, 280); // links
      line(150, 260, 200, 280); // rechts

      // 2 banen als opvangbak onderin
      line(10, 550, 130, 570); // links
      line(290, 550, 170, 570); // rechts

      // pinnetjes als cirkels
      noStroke();               // geen rand
      fill(200, 200, 200);
      ellipse(100, 150, 10, 10);


  // veranderende gegevens
  teller.show(); 

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
  request.open('GET', '/api/set/instellingen?wachtijd=' + wachtijdInput.value(), true)

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