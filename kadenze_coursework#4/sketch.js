let images = [];
let numImgs = 4;
let song, myFont, paused, fft, waveform;
let isPause = false;
let count = 0;
let r = 0;


function preload() {

  for (var i = 0; i < numImgs; i++) {
    imgName = "assets/img/" + i + ".jpg";
    images[i] = loadImage(imgName);
  }
  paused = loadImage("assets/img/paused.png");
  song = loadSound("assets/sound/radio.mp3");
  myFont = loadFont("assets/font/radiohead.ttf");
}

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
    isPause = true;
    r = 0;
  } else {
    song.play();
    isPause = false;
  }

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  paused.resize(windowWidth, windowHeight);
  song.play();
  button = createButton('toggle');
  button.mousePressed(toggleSong);
  fill('#FFFFFF');

  textFont(myFont);
  textAlign(CENTER, TOP);
  strokeWeight(5);


  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
}

function draw() {

  background(220);


  if (!isPause) {
    if (r >= numImgs) {
      r = 0;
    }
    images[r].resize(windowWidth, windowHeight);
    image(images[r], 0, 0);

  } else {
    image(paused, 0, 0);
    fill('#404040');
    text('Paused', windowWidth / 2, 50);
  }

  if (r == 0 && !isPause) {
    textSize(166);
    noStroke();
    fill('#FFFFFF');
    text('2+2=5', windowWidth / 2, 50);
  } else if (r == 1 && !isPause) {
    textSize(76);
    stroke(0);
    fill('#ff3838');
    text('Is my favourite song', windowWidth / 2, 50);
  } else if (r == 2 && !isPause) {
    textSize(76);
    stroke(255, 204, 100);
    fill('#4238ff');
    text('I love Radiohead', windowWidth / 2, 50);
  } else if (r == 3 && !isPause) {
    textSize(76);
    stroke('#ffeb36');
    fill('#3bff7c');
    text('<3', windowWidth / 2, 50);
  }


  let spectrum = fft.analyze();

  beginShape();
  stroke('black');
  fill('white');
  for (i = 0; i < spectrum.length; i++) {
    vertex(i, map(spectrum[i], 0, 255, windowHeight, 0));
  }
  endShape();

}

function mouseClicked() {
  if (isPause) {
    r = r;
  } else {
    r++;
  }
}