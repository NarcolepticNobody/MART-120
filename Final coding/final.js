var headX = 200
var headY = 100;
var headDirection = 1;

var rectX = 0;
var rectY = 600;
var rectDirection = 1;
var X = 100;
var Y = 100;
var squareX = 100;
var squareY = 10;
var squareDirection = 2;
var circleX = 350;
var circleY = 350;
var size = 22;
var count = 0;
var sizeDirection = -3;
var movement = 1;
var movement2 = 5;
var movement3 = 7;


function setup() {
  createCanvas(500, 600);
}

function draw() {
  background(255,0);
  
  fill(190,300, 0,20,30);
  
  //head
circle(headX, headY,100);
  fill(6);
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
  rect(188,rectX,50,rectY);
  fill(25,5,200,365,900);
  stroke(4)
  circle(circleY,circleY,30)
   count++;
     if(count > 450)
    {
        sizeDirection *=9;
        count = 400;
    }
  
  
   if(circleX >= 400)
    {
       movement*=-1;
    }
    if(circleX <= 5)
    {
        movement *= -1;
    }
     circleY += movement;
  
  // rectX+=rectDirection;
   if(rectX >= 450)
    {
       movement2 *= -1;
    }

  //   rectX += movement;
  if(rectX <= 0)
    {
       movement2 *= -1;
    }

     rectX += movement2;
 
  //left red rectangle
  rect(600,X,100,Y);
  fill(600,30,0,90,30);
  
  //right leg
  rect(X,50,60,Y);
  fill(50,300,0);
  
  //left eye
   circle(240,100,30);
   fill(50,3,0);
  
  //right eye
   circle(150,30,30);
   fill(600);
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
   rect(200,120,60,20);
  
 //bottom hair
  
ellipse(120,250,233,60); 

  //white circle above face
  circle(200, 20, 100);
  
  //white rectangle
  rect(20,200,200,100);
  //black circle low
  fill(1000)
  stroke(4)
  circle(circleX,circleY,30)
   count++;
     if(count > 450)
    {
        sizeDirection *=9;
        count = 400;
    }
  
  
   if(circleX >= 400)
    {
       movement*=-1;
    }
    if(circleX <= 5)
    {
        movement *= -1;
    }
     circleY += movement;
  
   //black circle low horizontal
  fill(1000,6,4,3,30)
  stroke(4)
  circle(circleY,circleY,30)
   count++;
     if(count > 450)
    {
        sizeDirection *=9;
        count = 400;
    }
  
  
   if(circleX >= 400)
    {
       movement*=-1;
    }
    if(circleX <= 5)
    {
        movement *= -1;
    }
     circleY += movement;
  
  //triangle 
 
   triangle(X, 400,100,100, 400, 500);
  
  
   if(X >= 300)
    {
       movement *= -1;
    }

  //   rectY += movement;
  if(X < 60)
    {
       movement *= -1;
    }

     X += movement;
 
  
 
  
     
 
 
  
  //right hand
   square(450,150,400,30);
  
    
  //square
  fill(1000)
  square(120,350,65)

  textSize(32);
  text('Alexis Huotte', 150, 550);
  textSize(32);
    text('Organized Chaos!', 100, 30);
 
  

 
  
}