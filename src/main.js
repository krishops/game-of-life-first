import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function makeGrid(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}


let grid;
let cols;
let rows;
let resolution = 10;

function setup() {
  createCanvas(600, 400);
  cols = width / resolution;
  rows = height / resolution;
  grid = makeGrid(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = floor(random(2));
    }
  }
}

function draw() {
  background(0);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * resolution;
      let y = j * resolution;
      if (grid[i][j] === 1) {
        fill(255);
        rect(x,y,resolution,resolution);
      }
    }
  }
}











// var bw = 400;
// var bh = 400;

// var p = 10;

// var cw = bw +(p*2) +1;
// var ch = bh + (p*2) +1;

// var canvas = $('<canvas/>').attr({width: cw, height: ch}).append('body');

// var context = canvas.get(0).getContext("2d");

// function drawBoard() {
//   for (var x = 0; x <= bw; x += 40) {
//     context.moveTo(0.5 + x + p, p);
//     context.lineTo(0.5 + x + p, bh + p );
//   }

//   for (var x = 0; x <= bh; x += 40) {
//     context.moveTo(p, 0.5 + x + p);
//     context.lineTo(bw + p, 0.5 + x + p);
// }

// context.strokeStyle = "black";
// context.stroke();
// }

// drawBoard();



// $(document).ready(function() {
  
// });