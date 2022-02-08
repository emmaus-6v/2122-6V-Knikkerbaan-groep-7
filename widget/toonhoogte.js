// Beginetje aan de class voor de toonhoogte

class Toonhoogte {
  x;
  y;
  toon;

  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
    this.toon = radio.value();
  }

  show() {
    noStroke();               // geen rand
    fill(255, 255, 255);      // wit
    textSize(20);
    // print toonhoogte in widget
    text(this.toon, this.x, this.y);
  }
}
