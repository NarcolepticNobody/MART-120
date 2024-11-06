var headX = 100
var headY = 100;
var headDirection = 1;

var rectX = 100;
var rectY = 200;
var rectDirection = 1;
var X = 100;
var Y = 100;
var squareX = 100;
var squareY = 10;
var squareDirection = 2;

var size = 22;
var count = 0;
var sizeDirection = -2;
var movement = 3;
var movement2 = 5;
var movement3 = 7;

function setup() {
  createCanvas(500, 600);
}

function draw() {
  background(11, 200, 900);
  fill(100,300, 0);
  
  //head
circle(headX, headY,200);
  fill(255);
  count++;
     if(count > 10)
    {
        sizeDirection *=-1;
        count = 400;
    }
  // headX+=headDirection;
  
   if(headX >= 400)
    {
       movement*=-1;
    }
    if(headX <= 5)
    {
        movement *= -1;
    }
     headX += movement;
  
  //torso
  rect(rectX,188,50,rectY);
  fill(255);
  
  // rectX+=rectDirection;
   if(rectX >= 450)
    {
       movement2 *= -1;
    }

  //   rectY += movement;
  if(rectX <= 0)
    {
       movement2 *= -1;
    }

     rectX += movement2;
 
  //left leg
  rect(200,X,45,190);
  fill(500,3,0);
  
  //right leg
  rect(250,380,X,190);
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
  triangle(X, 400, 250, 300,400, Y);
  //   rectX+=rectDirection;
   if(X >= 300)
    {
       movement3 *= -1;
    }

  //   rectY += movement;
  if(X < 0)
    {
       movement3 *= -1;
    }

     X += movement3;
 
  
  //left hand
   square(squareY,80,squareX,);
  
     
 
 
  
  //right hand
   square(450,150,50);
  
  //name
  textSize(32);
  text('Alexis Huotte', 300, 550);
  
  //avatar name
 fill(120);
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text('Shape Lady!', 10, 30);
 
  
}