var headX = 250
var headY = 100;
var headDirection = 1;

var legX = 100;
var legY = 100;
var legDirection = 1;
var X = 100;
var Y = 100;


var size = 22;
var count = 0;
var sizeDirection = 2;
var movement = 13;


function setup() 
{
  createCanvas(500, 600);
  
}

function draw()
{
  background(11, 200, 900);
  fill(100,300, 0);

  //head
  
  
  
  //torso
  rect(225,188,50,200);
  
  
  
  
  //left leg
   rect(150,100,200, 400);
  legX+=legDirection;
  if( X >=300|| X <= 600); 
  legDirection = 1;
  
    
  
  
  //right leg
  rect(X, Y,100);
  fill(50,3,0);
  
  
  
  //left eye
   circle(240,100,30);
   fill(50,3,0);
  //right eye
   circle(280,100,30);
   rect(200,120,60,20);
  
 //bottom hair
  line(200, 60, 90, 300);
ellipse(120,250,200,60); 
  strokeWeight(5);
  point(200, 100);
  //top hair
  line(200, 20, 100, 200);
  //right arm
  ellipse(380,200,200,60);
  //right dot
  point(330, 100);
  //pelvis
  triangle(100, 400, 250, 300,400, 400);
  //left hand
   square(0,200,50);
  //right hand
   square(450,150,50);
  //name
  textSize(32);
  text('Alexis Huotte', 300, 550);
  //avatar name
  textSize(32);
    text('Shape Lady!', 10, 30);
   

 
  
}