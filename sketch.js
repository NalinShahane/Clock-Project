function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(200,200);
  rotate(-90);
  
//variables for clock
  let hrs = hour();
  let mins = minute();
  let sec = second();

//   strokeWeight(50);
//   stroke('cyan');
//   noFill();
//   ellipse(200,200,300,300)
  

  //maping seconds
  strokeWeight(5)
  stroke('purple');
  noFill();
  let endSec = map(sec,0,60,0,360);
  arc(0,0,300,300, 0 , endSec);  
  
  //maping mins
  strokeWeight(5)
  stroke('Yellow');
  noFill();
  let endMin = map(mins,0,60,0,360);
  arc(0,0,280,280, 0 , endMin); 

  //maping Hrs
  strokeWeight(5)
  stroke('blue');
  noFill();
  let endHrs = map(hrs % 12,0,12,0,360);
  arc(0,0,260,260, 0 , endHrs); 
  
  push()
  rotate(endSec);
  stroke('purple');
  strokeWeight(3);
  line(0,0,100,0);
  pop();
 
  
  push()
  rotate(endMin);
  stroke('Yellow');
  strokeWeight(6);
  line(0,0,80,0);
  pop();
  
  push()
  rotate(endHrs);
  stroke('blue');
  strokeWeight(6);
  line(0,0,60,0);
  pop();
  

  stroke('red');
  strokeWeight(5)
  point(0,0);
  
  
}