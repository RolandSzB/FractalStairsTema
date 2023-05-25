function setup() {
  createCanvas(600, 500);
}
function draw() {
  angle = PI / 8;
  translate(width / 2, height);
  treeBranch(180, 5);
}
function treeBranch(length, x) {
  noFill();
  rect(0, 0, -length, -length);
  translate(x, -length);
  if (length > 10) {
    push();
    rotate(-angle);
    treeBranch(length * 0.75);
    pop();
  }
}
