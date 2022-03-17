let socket;
let player2;

function setup() {
  createCanvas(1400, 700);
  noCursor();
  rectMode(CORNER);

  player2 = {
    x: 200,
    y: 200
  }

  socket = io.connect("http://192.168.1.154:3030");
  socket.on("paddle", otherPaddles);
}

function otherPaddles(data) {
  console.log(data);
  player2 = data;
}

function draw() {
  background(220);

  var data = {
    x: mouseX,
    y: mouseY
  }
  socket.emit("paddle", data);

  noStroke();
  fill(255);
  rect(min(mouseX,1375), min(mouseY,600), 25, 100);

  fill(100, 0, 255);
  rect(min(player2.x,1375), min(player2.y,600), 25, 100);
}
