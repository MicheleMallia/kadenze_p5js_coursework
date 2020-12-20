let font;
let fontSize = 150;
let fontArray;
let i;


function preload() {
  font = loadFont('assets/font.ttf');
}

function setup() {
  createCanvas(800, 600);
  textFont(font);
  textSize(fontSize);
  grid();
}

function draw() {
  background(255, 0);
    
  //Top Left
  fill(231, 23, 233);
  strokeWeight(0);
  stroke(21, 45, 230); 
  drawLetter(0, 130, fontSize);

  //Top second
  fill(random(0,255), random(0,255), random(0,255), random(0,255));
  strokeWeight(1);
  stroke(234, 242, 7);
  drawLetter(220, 130, fontSize);

  //Top third
  fill(random(0,255), random(0,255), random(0,255));
  strokeWeight(1);
  stroke(224, 227, 70);
  drawLetter(400, 130, fontSize);

  //Top Right
  fill(random(0,255), random(0,255), random(0,255));
  strokeWeight(2);
  stroke(21, 45, 230); 
  drawLetter(610, 130, fontSize);

  //Mid Left
  fill(random(0,255), random(0,255), random(0,255));
  strokeWeight(1);
  stroke(140, 200, 102);  
  drawLetter(10, 330, fontSize);

  //Mid second
  fill(random(0,255), random(0,255), random(0,255));
  strokeWeight(2);
  stroke(21, 45, 230); 
  drawLetter(210, 330, fontSize);

  //Mid third
  fill(random(0,255), random(0,255), random(0,255));
  strokeWeight(1);
  stroke(21, 45, 230); 
  drawLetter(400, 330, fontSize);

  //Mid right
  fill(random(0,255), random(0,255), random(0,255));
  strokeWeight(1);
  stroke(224, 227, 70);
  drawLetter(610, 330, fontSize);


  //Bottom Left
  fill(random(0,255), random(0,255), random(0,255));
  strokeWeight(1);
  stroke(234, 242, 7);
  drawLetter(0, 530, fontSize);

  //Bottom second
  fill(random(0,255), random(0,255), random(0,255));
  strokeWeight(2);
  stroke(224, 227, 70);
  drawLetter(210, 530, fontSize);

  //Bottom third
  fill(random(0,255), random(0,255), random(0,255));
  strokeWeight(1);
  stroke(21, 45, 230);   
  drawLetter(400, 530, fontSize);

  //Bottom right
  fill(random(0,255), random(0,255), random(0,255));
  strokeWeight(2);
  stroke(234, 242, 7);
  drawLetter(610, 530, fontSize);
}


function drawLetter(x, y, fontSize) {


  fontArray = font.textToPoints("M", x, y, fontSize);

  for (let i = 0; i < fontArray.length; i++) {
    
    square(fontArray[i].x + 50, fontArray[i].y, 10)

  }
}

function grid() {

  fill(random(0,255), random(0,255), random(0,255));
  square(0, 0, 200); 
  fill(random(0,255), random(0,255), random(0,255));
  square(0, 200, 200);
  fill(random(0,255), random(0,255), random(0,255));
  square(0, 400, 200); 

  fill(random(0,255), random(0,255), random(0,255));
  square(200, 0, 200); 
  fill(random(0,255), random(0,255), random(0,255));
  square(200, 200, 200); 
  fill(random(0,255), random(0,255), random(0,255));
  square(200, 400, 200);

  fill(random(0,255), random(0,255), random(0,255));
  square(400, 0, 200); 
  fill(random(0,255), random(0,255), random(0,255));
  square(400, 200, 200);
  fill(random(0,255), random(0,255), random(0,255));
  square(400, 400, 200); 

  fill(random(0,255), random(0,255), random(0,255));
  square(600, 0, 200); 
  fill(random(0,255), random(0,255), random(0,255));
  square(600, 200, 200); 
  fill(random(0,255), random(0,255), random(0,255));
  square(600, 400, 200); 

}

function mousePressed() {
    grid();
}