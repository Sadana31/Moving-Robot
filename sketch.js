//creates the body and neck heights
var bodyHeight = 60;
var neckHeight = 70;
var x=20;
var y=300;
var radius = 40;

//creates the easing
var easing = 0.08;

function setup(){
 createCanvas(400,400);
  //gives the weight of the line
  strokeWeight(5);
  ellipseMode(RADIUS);
}
function draw(){
  background("yellow");
  
  textSize();
  text("PRESS THE MOUSE TO SEE THE ROBOT MOVE!",70,20);
  
  //noves the robot with the mouse
  var targetX=mouseX;
  x=x+(targetX-x)*easing;
  
  //changes the heights if mouse if pressed
  if(mouseIsPressed){
    neckHeight = 10;
    bodyHeight= 160;
  }
  else{
    neckHeight = 70;
    bodyHeight = 160;
  }
  var neckY=y-bodyHeight-neckHeight;
  
  //creates the neck
  stroke(30);
  line(x+7,y-bodyHeight,x +9,neckY);
  
  noStroke();
  //creates the legs
  fill("red");
  rect(x+10,y-40,neckY,33);
  rect(x-40,y-40,33,neckY);
  //creates the hand
  fill("blue");
  rect(x-80,150,x-18,20);
  
  //creates the body
  fill("green");
  rect(x-45,y-bodyHeight,90,bodyHeight);
      
  //creates the face
  fill("purple");
  ellipse(x+7,neckY,radius,radius);
  
  //creates the eyes
  fill("white");
  ellipse(x+30,neckY-16,10,10);
  ellipse(x,neckY-16,10,10);

  fill("black");
  ellipse(x,neckY -10,7,7);
  ellipse(x + 30,neckY -10,7,7);
  
  //creates the nose and mouth
  rect(x+10,neckY,7,7);  
  rect(x-10, neckY +15,50,2);
  
  
  
}