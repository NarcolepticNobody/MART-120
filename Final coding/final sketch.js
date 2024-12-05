var upperMouthX = 150;
var upperMouthY = 190;
var lowerMouthZ = 150;
var lowerMouthP = 270;
var movement = 3;
var movement2 = 1;
var movement3 = 2;
var count = 0;
var sizeDirection = -2;
var leftEye = 100;
var rightEye = 600;
var eyeDirection = 5;
var X = 200;
var Y = 200;
//key codes for each letter
var w = 87;
var s = 83;
var a = 65;
var d = 68;


function setup() {
  createCanvas(700, 600);
}

function draw() {
  background(11000, 200, 900);
  fill(300,1005,30);
  

//upper mouth
  //dark rect
rect(150, 200,400,upperMouthY);
  fill(200);
  //grey rect
  rect(150, 200,400,190);
  fill(100);
  //mouth movement
      count++;
     if(count > 10)
    {
        sizeDirection *=-3;
        count = 400;
    }
  
  // upper mouth Direction;
  
   if(upperMouthX >= 300)
    {
       movement*=-1;
    }
    if(upperMouthX <= 5)
    {
        movement *= -1;
    }
     upperMouthY += movement;
    count++;
     if(count > 10)
    {
        sizeDirection *=-1;
        count = 400;
    }
 //lower mouth movement  
//yellow
  rect(lowerMouthZ, 200,400,100);

  fill(900);
  //mouth movement
      count++;
     if(count < 10)
    {
        sizeDirection *=-1;
        count = 400;
    }
  
  // upper mouth Direction;
  
   if(lowerMouthZ >= 500)
    {
       movement*=-1;
    }
    if(lowerMouthZ <= 5)
    {
        movement *= 1;
    }
     lowerMouthP += movement;
    count++;
     if(count > 10)
    {
        sizeDirection *=-1;
        count = 400;
    }
 
  
  
//eyes  
  fill(0,0,0);
  circle(leftEye,100,100);
  circle(rightEye,100,100);
   count++;
     if(count > 10)
    {
        sizeDirection *=-1;
        count = 400;
    }
  
  // leftEye=eyeDirection;
  
   if(leftEye >= 200)
    {
       movement*=-1;
    }
    if(leftEye <= 5)
    {
        movement *= -1;
    }
     leftEye += movement;
    count++;
     if(count > 10)
    {
        sizeDirection *=-1;
        count = 400;
    }
  
  // leftEye=eyeDirection;
  
   if(rightEye >= 200)
    {
       movement2*=-1;
    }
    if(rightEye <= 5)
    {
        movement2 *= -1;
    }
     rightEye += movement;


  
}