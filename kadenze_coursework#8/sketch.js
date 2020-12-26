let myCircle = [];
let colRandR, colRandG, colRandB, colRandA;

function setup() {
  createCanvas(600, 600);

  for (var i = 0; i < 4; i++) {

    myCircle[i] = new Circle(150, 150, 1, 2, 255, 255, 255, 255);

  }
}

function draw() {
  background(50);

  for (var i = 0; i < myCircle.length; i++) {
    myCircle[i].render();
    myCircle[i].update();
  }
}

function mousePressed() {

  let xRand = random(1, 10);
  let yRand = random(1, 10);
  colRandR = random(0, 255);
  colRandG = random(0, 255);
  colRandB = random(0, 255);
  colRandA = random(0, 255);
  myCircle.push(new Circle(150, 150, xRand, yRand, colRandR, colRandG, colRandB, colRandA));
}

class Circle {
  constructor(x, y, xSpeed, ySpeed, r, g, b, a) {
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }

  update() {
    this.x += this.xSpeed;
    if (this.x < 0 || this.x > width) {
      this.xSpeed *= -1;
    }

    this.y += this.ySpeed;
    if (this.y < 0 || this.y > height) {
      this.ySpeed *= -1;
    }
  }

  render() {
    fill(this.r, this.g, this.b, this.a);
    circle(this.x, this.y, 50);
  }
  
}