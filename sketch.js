function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  const s = 100;

  rect(0, 0, s, s);
  rect(0, height - s, s, s);
  rect(width - s, 0, s, s);
  rect(width - s, height - s, s, s);

  push();
  textSize(80);
  textAlign("center");
  fill("red");
  text("Nicola", width / 2, height / 2);
  pop();

  let facepositionvertical = height / 2 - 20;
  let faceSize = 80;
  let faceX = width / 2 + 170;
  let faceY = facepositionvertical;

  fill(0);
  ellipse(faceX - 20, faceY - 10, 10, 10);
  ellipse(faceX + 20, faceY - 10, 10, 10);

  noFill();
  strokeWeight(3);
  arc(faceX, faceY + 10, 40, 20, 0, PI);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
