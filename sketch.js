
let sketch; 

function setup() {
 sketch= createCanvas(700, 400);
sketch.parent("p5")
}

function draw() {
 
  stroke(random(255), random(255), random(255));
  strokeWeight(random(2, 20));

  point(random(width), random(height));


}