//x and y for character
var x = 190;
var y = 100;
//key codes for each letter
var w = 87;
var s = 83;
var a = 65;
var d = 68;

//x and y for shape
var shapeX = 0;
var shapeY = 100;
var shapeZ = 100;
var shapeP = 90;
var shapeZSpeed;
var shapePSpeed;
var shapeXSpeed;
var shapeYSpeed;
var characterY = 50;
var characterX = 50;
var movement = 13;


//create a shape when mouse is clicked
var mousex = 0;
var mousey = 0;
function setup()
{

createCanvas (800, 700);
  
//random speed when it starts
shapeXSpeed = Math.floor(Math.random() * Math.floor(Math.random() * 1))  + 1;
shapeYSpeed = Math.floor(Math.random() * Math.floor(Math.random() * 1))  + 1; 
  
  
shapeZSpeed = Math.floor(Math.random() * Math.floor(Math.random() * 1))  + 1;  
shapePSpeed = Math.floor(Math.random() * Math.floor(Math.random() * 1))  + 1; 


}

function draw()
{
background(120,45,78);
stroke(0);
fill(0);
  


//top boarder
rect(0,3,width,10);

//left boarder
rect(0,3,10,height);

//bottom boarder
rect(3,height-10,width-10);

//right upper boarder
rect(width-10,100,10,height-3);
 

//exit message
textSize(20);
text("EXIT", width-50,60)

//character
fill(23,40,123);
circle(characterX,characterY,60);

//handle the keys
if(keyIsDown(w))
{
characterY -= 5;
}
if(keyIsDown(s))
{
characterY += 5;
}
if(keyIsDown(a))
{
characterX -= 5;
}
if(keyIsDown(d))
{
characterX += 5;
}

fill(13,145,14);

//draw shape 
circle(shapeX, shapeY, 50);
  if(shapeY >= 700 || shapeY <=0) 
  {
   movement*=-1
  }
  shapeY += movement;
 
  
  fill(900,600,20)
  //draw shape 2
circle(shapeP, shapeZ, 50);
  shapeP += shapePSpeed;
  shapeZ += shapeZSpeed;
  
  if(shapeP >= 700 || shapeP <=0) 
  {
   movement*=-1
  }
 

  
//teal rectangle1
fill(90,400,6000)
rect(100,50,50,350);
  
//teal rectangle2
rect(10,500,400,50);  
  
//blue rectangle3
fill(9,10,900)
rect(0700,20,90,390);
  
//purple rectangle4
fill(96,10,900)
rect(250,100,60,390);
  

  

//get a random speed when it first starts
shapeXSpeed = Math.floor(Math.random() * Math.floor(Math.random() * 5))  + 1;
shapeYSpeed = Math.floor(Math.random() * Math.floor(Math.random() * 5))  + 1;

//move the shape 
shapeX += shapeXSpeed;
shapeY +=shapeYSpeed;

//check to see if shape has gone out of bounds
if(shapeY > width)
{
shapeY = 60;

}
if(shapeX < 12)
{
  
shapeX > width;

}
if(shapeX > height)
{
shapeX = 0;

}
if(shapeX < 0)
{
shapeX = width;

}

//check to see if character has left the exit
if(characterX > width && characterY > width-10)
    {
        fill(0);
        stroke(5);
        textSize(30);
        text("You Are A Winner!", width/2-50, height/2-50);
    }


}