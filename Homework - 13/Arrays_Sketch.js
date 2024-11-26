//first rect
var x = 200;
var y = 200;
var diameter = 200;
var length = 95;

//bottom rect
var x1 = 150;
var y1 = 500;
var diameter1 = 200;
var length1 = 60;

//blue circle
var blueCircleX = 200;
var blueCircleY = 400;
var blueDiameter = 20;
var sizeDirection = -1;
var movement = 1;

//circle
var x2 = 600;
var y2 = 100;
var diameter2 = 200;
var length2 = 97;

//bottom right rect
var x3 = 600;
var y3 = 400;
var diameter3 = 30;
var length3 = 200;


//key movement
var s = 83;
var w = 87;
var a = 65;
var d = 68;
var mousex = 70;
var mousey = 7;

var myXs = [];
var myYs = [];
var myDiameters = [];
var movement = 10;
    


function setup() {
  createCanvas(800, 600);
  background(12,100,32);
 
}

// create a for loop here to create the circles
   for(var i = 0; i < 2; i++)
   {
// get all the random numbers to create a circles
myXs[i] = getRandomNumber(800);
myYs[i] = getRandomNumber(600);
myDiameters[i] = getRandomNumber(100);
          
}






// shapes
function draw() {
  rect(x, y, diameter,length);
  rect(x1, y1, diameter1, length1);
  fill(200,3,96);
  circle(x2, y2, diameter2,);
  fill(69,7)
  rect(x3, y3, diameter3, length3); 
  fill(6)
  circle(50, 50, diameter);
  fill(0233, 20, 29);
    circle(300, 200, diameter);
  fill(200,3,96);
  
//exit message
textSize(20);
text("EXIT", width-50,60)
  if(blueCircleX > width && blueCircleY > 10 && blueCircleY < 100)
  
{

//top border
rect(0,3,width,10);

//left border
rect(0,3,10,height);

//bottom border
rect(3,height-10,width-10);

//right upper border
rect(width-10,100,10,height-3);
}
  
  //blue circle
  circle(blueCircleX, blueCircleY, blueDiameter);
  if(x >= 800 || x <= 0)
    {
       movement *= -1;
    }

     x += movement;
  
  //check to see if character has left the exit
  
  
if(blueCircleX > width && BlueCircleY > 10 && blueCircleY < 100)
    {
        fill(0);
        stroke(5);
        textSize(30);
        text("You Are A Winner!", width/2-50, height/2-50);
    }
  //call createBorders function
createBorders()
  
function createBorders(thickness)
{

//top border
rect(0,3,width,10);

//left border
rect(0,3,10,height);

//bottom border
rect(3,height-10,width-10);

//right upper border
rect(width-10,100,10,height-3);
}  
  
  
   // call the function created
      controlCircle();

      ellipse(mousex, mousey, 15, 5);

      for(var i = 0; i < myXs.length; i++)
      {
        // concentric circle randomly using arrays
        ConcentricCircle(myXs[i], myYs[i], myDiameters[i], myDiameters[i]/5, 500, 120, 120, 120, 500, 120);
      }
 
  
  
}
 /* This function controls all the variables of the circle */
    function controlCircle()
    {
      if (blueCircleX >= 800) 
      {
        blueCircleY = 50;
      }
      
      if (blueCircleY >= 700) 
      {
        blueCircleY = 50;
      }

      if (keyIsDown(s)) 
      {
        blueCircleY += 10;
      } 
      else if (keyIsDown(w)) 
      {
       blueCircleY -= 10;
      }

      if (keyIsDown(d)) 
      {
        blueCircleX += 10;
      } 
      else if (keyIsDown(a)) 
      {
        blueCircleX -= 10;
      }
  
        // we call the function here.
        changeDiameter();

    }

//this function wont work?
function changeDiameter()
    {
        if (blueCircleX < 800) 
        {
            blueCircleX += 2;
        } 
        else if (blueCircleX >= 300) 
        {
            blueCircleX = 60;
        }

    }



 function getRandomNumber(number)
    {
        return Math.floor(Math.random()*number)+10;
    }

 // define ConcentricCircle function
    function ConcentricCircle(x,y, outer_diameter, inner_diameter, outer_red, outer_orange,outer_blue, inner_, inner_red, inner_blue)
    {
        fill(outer_red,outer_orange,outer_blue);
        circle(x,blueCircleX,outer_diameter);
        fill(inner_red, blueCircleY, inner_blue);
        circle(x,y,inner_diameter);
    }