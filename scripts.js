function setup() {
  createCanvas(600, 500);
}
function draw() {
  angle = PI / 14;
  translate(width / 1.5, height / 2);
  treeBranch(180, 1);
}
function treeBranch(length, x) {
  noFill();
  rect(0, 0, -length, -length);
  translate(-length, x);
  if (length > 10) {
    push();
    rotate(-angle);
    treeBranch(length * 0.96);
    pop();
  }
}
