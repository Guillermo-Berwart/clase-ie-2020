function setup() {
  createCanvas(600, 400);

}

function draw() {
 
  stroke(random(255), random(255), random(255));
  strokeWeight(random(2, 20));

  point(random(width), random(height));


}