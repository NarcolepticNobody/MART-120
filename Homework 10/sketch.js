function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(11, 200, 900);
  fill(100,300, 0);
  //head
  circle(250,100,175)
  fill(199, 14, 50);
  //torso
  rect(225,188,50,200);
  //left leg
  rect(200,380,45,190);
  //right leg
  rect(250,380,45,190);
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