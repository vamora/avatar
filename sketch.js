let pupilX;
let pupilY;

let angleEarFull
let img;
function preload(){
  img = loadImage('fish3.png');
}

function setup() {
  createCanvas(400, 400);
  background(161, 247, 228);
  angleMode(DEGREES);
  frameRate(30);
  
  let pupilX = map(mouseX, 0, 400, -2, 2);
  let pupilY = map(mouseY, 0, 400, -2, 2);
  
  drawHead();
  drawEarCut();
  drawEarFull(angleEarFull);
  drawFill();
  drawEyes();
  //drawFish();
  //drawNose();
  // drawLeftPupil();
  // drawRightPupil();
  
}

function draw() {
  background(161, 247, 228);
  console.log(frameCount);

  
  //pupils rotate to follow cursor
  pupilX = map(mouseX, 0, 400, -2, 2);
  pupilY = map(mouseY, 0, 400, -2, 2);
  
  // drawMoon();
  drawHead();
  drawEarCut();
  drawEarFull();
  drawFill();
  drawEyes();
  drawNose();
  drawLeftPupil();
  drawRightPupil();
  //drawFish(mouseX, mouseY);
  
   image(img, mouseX, mouseY, 150, 150);
  


}


function drawHead(){
  noStroke();
  fill(255);
  beginShape();
  vertex(width * .20, height * .30);
  vertex(width * .80, height * .30);
  vertex(width * .80, height * .65);
  vertex(width * .50, height * .80);
  vertex(width * .20, height * .65);
  vertex(width * .20, height * .30);
  endShape();
}

function drawEarCut(){
  noStroke();
  beginShape();
  fill(0);
  vertex(width * .20, height * .30);
  vertex(width * .20, height * .20);
  vertex(width * .30, height * .20);
  vertex(width * .40, height * .30);
  vertex(width * .20, height * .30);
  endShape();
}

function drawEarFull(){
  noStroke();
  beginShape();
  fill(0);
  vertex(width * .60, height * .30);
  vertex(width * .80, height * .10);
  vertex(width * .80, height * .30);
  vertex(width * .60, height * .30);
  endShape();
}

function drawFill(){
  // draw left black fill
  noStroke();
  beginShape();
  fill(0);
  vertex(width * .20, height * .65);
  vertex(width * .20, height * .30);
  vertex(width * .50, height * .30);
  vertex(width * .425, height * .475);
  vertex(width * .20, height * .65);
  endShape();
  // draw right black fill
  beginShape();
  fill(0);
  vertex(width * .80, height * .65);
  vertex(width * .80, height * .30);
  vertex(width * .50, height * .30);
  vertex(width * .575, height * .475);
  vertex(width * .80, height * .65);
  endShape();
}

function drawEyes(){
  fill(255, 234, 158);
  stroke(0);
  strokeWeight(4);
  // draw left eye
  circle(width * .375, height * .50, width * .125);
  // draw right eye
  circle(width * .625, height * .50, width * .125);
}

function drawNose(){
  beginShape();
  stroke(255, 206, 211);
  fill(255, 206, 211);
  vertex(width * .475, height * .625);
  vertex(width * .525, height * .625);
  vertex(width * .50, height * .65);
  vertex(width * .475, height * .625);
  endShape();
}

function drawLeftPupil(xPos, yPos, rotation){
  fill(0);
  stroke(0);
  push();
  ellipseMode(CENTER);
  circle(width * .375 + pupilX, height * .50 + pupilY, width * .08);
  pop();
 
}

function drawRightPupil(){
  fill(0);
  stroke(0);
  push();
  ellipseMode(CENTER);
  circle(width * .625 + pupilX, height * .50 + pupilY, width * .08);
  pop();
}

function drawFish(){
  fill(255);
  noStroke(0);
  beginShape();
  vertex(width * .05, height * .05);
  vertex(width * .05, height * .15);
  vertex(width * .10, height * .10);
  vertex(width * .05, height * .05);
  endShape();
  beginShape();
  vertex(width * .10, height * .10);
  vertex(width * .18, height * .05);
  vertex(width * .25, height * .10);
  vertex(width * .18, height * .15);
  vertex(width * .10, height * .10);
  endShape();
  //fill(255, 0, 0);
  fill(161, 247, 228);
  circle(width * .20, height * .095, 12);
  //triangle(30, 75, 58, 20, 86, 75);
}


//Final_Update Included image so pupils can follow fish. 