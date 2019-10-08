
{let totalPts = 100;
let steps = totalPts + 3;

function setup() {
  createCanvas(1400, 700);
  stroke(255, 255, 102);
  strokeWeight(3)
  frameRate(1.5);
}

function draw() {
  background(0, 0, 102);
  let rand = 20;
  for (let i = 2; i < steps; i++) {
    point((width / steps) * i, height / 2 + random(-rand, rand));
    rand += random(-100, 110);}}
  }

//  {let totalPts = 200;
// let steps = totalPts + 1;

// function setup() {
//   createCanvas(720, 1400);
//   stroke(255, 255, 102);
//   strokeWeight(7)
//   frameRate(2);
// } 