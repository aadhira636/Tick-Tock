var hr,mn,sc;

function setup() {
  createCanvas(800,500);
  angleMode(DEGREES);
}

function draw() {

  background("black");  
  hr = hour();
  mn = minute();
  sc = second();
  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360);
  
  translate(400,250);
  rotate(-90);

  push();
  stroke("blue");
  strokeWeight(5);
  rotate(scAngle)
  line(0,0,60,0);
  pop();

  push();
  stroke("red");
  strokeWeight(5);
  rotate(mnAngle)
  line(0,0,90,0);
  pop();

  push();
  stroke("green");
  strokeWeight(5);
  rotate(hrAngle)
  line(0,0,60,0);
  pop();

  noFill();

  stroke("blue");
  arc(0,0,250,250,0,scAngle);

  stroke("red");
  arc(0,0,280,280,0,mnAngle);

  stroke("green");
  arc(0,0,300,300,0,hrAngle);


  drawSprites();
}