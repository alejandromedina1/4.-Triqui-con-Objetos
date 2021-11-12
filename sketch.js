let matrix = [];
let clicks = 0;
function setup() {
  createCanvas(400, 400);
  for (let index = 0; index < 9; index++) {
    matrix.push(new Array(9));
  }
}

function draw() {
  background(220);
  for (let row = 0; row < 3; row++) {
    for (let column = 0; column < 3; column++) {
      rect(row*100+50,column*100+50,100,100);
      textSize(80);
    }
  }
}

function mousePressed(){
  for (let row = 0; row < 3; row++) {
    for (let column = 0; column < 3; column++) {
      if ( row*100+50 < mouseX && mouseX < (row+1)*100+50 &&
      column*100+50 < mouseY && mouseY < (column+1)*100+50 ) {
        clicks ++;
        if (!(clicks&1) === true) {
        }
        if (!(clicks&1) === false) {
        }
        console.log(clicks);
      }
    }
  }
}
