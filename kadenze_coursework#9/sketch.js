var canvas, table, img, h1, h2, title;
var total_cases = 0;

function preload() {
  table = loadTable("assets/covid.csv", "csv", "header");
  img = loadImage("assets/it.png");
}

function setup() {
  canvas = createCanvas(600, 600);
  canvas.position(0, 200);
  textSize(20)
  image(img, 0, 0);
  title = createElement('h1', 'Covid-19 Italy')
  h1 = createElement('h1');
  h2 = createElement('h2', 'Total cases: '+ total_cases);
}

function draw() {
  
  if (frameCount < table.getRowCount()) {
    var tableRow = table.getRow(frameCount - 1);
    var lng = tableRow.getString("long");
    var lat = tableRow.getString("lat");
    var diam = tableRow.getString("totale_casi");
    var date = tableRow.getString("data");
    date = split(date, "T");
    h1.html(date[0]);
    if(lng != "" && lat != "" && diam != "0"){
      var x = map( lng, 7, 19, 50, width-60);
      var y = map( lat, 36, 47, height+25,  0);
      total_cases += int(diam)
      h2.html('Total cases: ' + total_cases);
      diam = map(tableRow.getNum("totale_casi"), 1, 1000, 1, 25);
      circle( x, y, diam );
    } 
  }
}