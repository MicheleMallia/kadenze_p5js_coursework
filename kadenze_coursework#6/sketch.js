//Bonobo - Cirrus

var pieces, radius, fft, mapMouseX, mapMouseY, audio, analyzer, rms, diameter;
var colorPalette = ["#000", "rgba(22, 232, 232, 0.5)", "#00a6e0", "#002a38"];
var trigger = true;
var timer = 10;
var angle = 0;

function preload() {
  audio = loadSound("assets/audio/tensecond.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fft = new p5.FFT();
  analyzer = new p5.Amplitude();  
  audio.loop();    
  analyzer.setInput(audio);
  diameter = height/2;
}

function draw() {

  background(colorPalette[0]);
  noFill();

  if (trigger) {
    var dSin = 10 + (sin(angle + PI / 2) * diameter) / 2 + diameter / 2;
    var dCos = 10 + (cos(angle + PI / 2) * diameter) / 2 + diameter / 2;
    fft.analyze();
    rms = analyzer.getLevel();
    var bass = fft.getEnergy("bass");
    var treble = fft.getEnergy("treble");
    var mid = fft.getEnergy("mid");

    var mapMid = map(mid, 0, 255, -radius, radius);
    var scaleMid = map(mid, 0, 255, 1, 1.5);

    var mapTreble = map(treble, 0, 255, -radius, radius);
    var scaleTreble = map(treble, 0, 255, 1, 1.5);

    var mapbass = map(bass, 0, 255, -100, 300);
    var scalebass = map(bass, 0, 255, 0, 0.8);

    mapMouseX = map(mouseX, 0, width, 2, 8);
    mapMouseY = map(mouseY, 0, height, windowHeight / 4, windowHeight);

    pieces = mapMouseX;
    radius = mapMouseY;

    noFill();
    stroke(colorPalette[1]);
    ellipse(width / 2, height / 2, mapbass, mapbass);
    translate(windowWidth / 2, windowHeight / 2);

    strokeWeight(2);


    for (i = 0; i < pieces; i += 0.5) {

      rotate(TWO_PI / pieces);

      push();
      strokeWeight(0.5);
      stroke(colorPalette[2]);
      scale(scaleMid);
      line(mapMid, radius / 2, dSin, dCos);
      line(-mapMid, -radius / 2, dSin, dCos);
      pop();

      push();
      stroke(colorPalette[3]);
      scale(scaleTreble);
      line(mapTreble, radius / 2, radius, radius);
      line(-mapTreble, -radius / 2, radius, radius);
      pop();

    }    
  } else {
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(32);
    text("Press mouse", width / 2, height / 2);
    timer = 10;
    audio.stop();
  }

  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer--;
  }
  if (timer == 0) {
    trigger = false;
  }

  angle += 0.02;
}

function mousePressed() {
  if (audio.isPlaying() && trigger) {
    audio.stop();
  } else {
    audio.loop();
  }
  trigger = !trigger;
}