function setup(){
    createCanvas(1024, 768);
    background(0);
    stroke(0,0,0,0);
}

function draw() {

    fill("#6a7c6a");
    triangle(263, 0, 0, 306, 0 , 0);

    fill("#997967");
    triangle(210, 0, 0, 222, 0 , 0);

    fill("#849a87");
    triangle(151, 0, 0, 142, 0 , 0);

    fill("#636760");
    triangle(43, 0, 0, 58, 0 , 0);
    
    fill("#839c83");
    rect(0, 301, 117, 406);

    fill("#749478");
    rect(113, 198, 153, 521);

    fill("#7e9f8e");
    quad(272, 662, 270, 303, 653, 299, 648, 665);

    fill(141, 151, 119, 150);
    ellipse(525, 520, 231, 293);
    
    fill("#dcc59b");
    ellipse(418, 502, 273);

    fill("#8aa892");
    ellipse(446, 435, 158, 186);

    fill("#789f93");
    rect(651, 200, 213, 541);

    fill("#647d67");
    triangle(436, 768, 412, 696, 1024, 768);

    fill("#697b66");
    quad(828, 766, 842, 242, 1024, 202, 1024, 768);
    
    fill("#303923");
    triangle(362, 246, 504, 10, 656, 246);
    
    fill(123, 168, 140, 220);
    triangle(246, 302, 388, 52, 508, 302);
}