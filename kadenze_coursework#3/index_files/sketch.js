//The political compass
//https://it.wikipedia.org/wiki/File:Political_Compass_yellow_LibRight.svg

var leftX = 312;
var rightX = 756;
var yBulb = 343;

var colorA = 255;
var colorB = 255;
var colorC = 255;

var eyeColor;
var blubble;
var isGrey = false;

function setup() {
    createCanvas(1024, 768);  
    stroke(0);
    strokeWeight(2); 
    
    eyeColor = color(colorA, colorB, colorC);
    blubble = color(255, 255, 255);
}
  
function draw() {

    if(isGrey){
        background(117, 117, 117)
        fill(117, 117, 117);
    }else{
        background(colorA, colorB, colorC);        
    }

    line(1024/2, 0, 1024/2, 768);
    line(0, 768/2, 1024, 768/2);

    fill(blubble);
    arc(312, 334, 200, 150, 0, PI);
    arc(312, 334, 200, 50, PI, 0);        
    
    //Populism is active
    if(isGrey){
        fill(117, 117, 117);
    }else{
        fill(eyeColor);
    }

    ellipse(leftX, yBulb, 40, 40);

    fill(blubble);
    arc(712, 334, 200, 150, 0, PI);
    arc(712, 334, 200, 50, PI, 0); 

    //Populism is active
    if(isGrey){
        fill(117, 117, 117);
    }else{
        fill(eyeColor);
    }
    ellipse(rightX, yBulb, 40, 40);

    velocityX = abs(pmouseX - mouseX)
    velocityY = abs(pmouseY - mouseY)

    //Stress spectre
    if (velocityX > 45) {
        blubble = color(255, 0, 0)
    }if (velocityY > 45) {
        blubble = color(255, 0, 0)
    }else{
        blubble = color(255, 255, 255);
    }

    yBulb = map(mouseY, 0, height, 339, 373)
    leftX = map(mouseX, 0, width, 272, 362, true)
    rightX = map(mouseX, 0, width, 662, 752, true)


    //variable color according to the political compass
    if(mouseX < width/2 && mouseY > height/2){
        colorA = map(mouseX, 0, width, 100, 255);
        colorB = map(mouseY, 0, width, 100, 255);
        colorC = map(mouseX, 0, width, 100, 255);
        eyeColor = color(colorA, colorB, colorC);  
    }else if(mouseX < width/2 && mouseY < height/2){
        colorA = map(mouseY, 0, width, 255, 100);
        colorB = map(mouseX, 0, width, 100, 255);
        colorC = map(mouseX, 0, width, 100, 255);
        eyeColor = color(colorA, colorB, colorC);
    }else if(mouseX > width/2 && mouseY > height/2){
        colorA = map(mouseX, 0, width, 100, 255);
        colorB = map(mouseX, 0, width, 100, 255);
        colorC = map(mouseX, 0, width, 255, 100);
        eyeColor = color(colorA, colorB, colorC);
    }
    else{
        colorA = map(mouseY, 0, width, 0, 255);
        colorB = map(mouseY, 0, width, 100, 255);
        colorC = map(mouseX, 0, width, 100, 255);
        eyeColor = color(colorA, colorB, colorC);
    }
}

function mousePressed() {
    //Activate populism
    isGrey = !isGrey;
}