function setup(){
 createCanvas(600,400)
}


function draw(){
  //red background
  background(190,174,212);
  //ellipse with blue border, green inside
  stroke(0,0,255);
if(mouseX > 300){
  fill(0,255,0);
}
else{
  fill(0,0,255);
}
//thicker border
  strokeWeight(5);
 ellipse(50,50,50,50);
}
