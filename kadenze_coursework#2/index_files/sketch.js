// The Soft Moon - Primal Eyes

function setup() {
    createCanvas(windowWidth, windowHeight);  
    noFill();
}
  
function draw() {
    background(0);
    stroke(250, 60);

    // The eye
    for(var x = 20; x <= width-600; x += 100){
        for(var y = 20; y <= height-200; y+=20){
            ellipse(width/2, height/2, x, y);
        }
    }

    //Corner bottom left
    for (var i = 0; i < width; i+=10){
        line(0, i, i, height);
    }

    //Corner top right
    for (var j = width; j > height; j-=10){
        line(width, j-height, j, height/j);
    }
}

// Primal Eyes is a track from one of my favorite bands, the Soft Moon band, 
// a darkwave group from Los Angeles. In this drawing I wanted to represent the dark nature
// of this piece by inserting an elliptical figure that could represent an eye and the contours 
// of todays in the corners. The dark color of the design perfectly refines with the tones 
// of this wonderful track.