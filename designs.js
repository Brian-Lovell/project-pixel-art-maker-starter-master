// Select color input
var color_input = document.getElementById('colorPicker');
// Select size input
var canvas_height = document.getElementById('inputHeight');
var canvas_width = document.getElementById('inputWidth');

// When size is submitted by the user, call makeGrid()
var submit_button = document.getElementById('submitButton');
submit_button.addEventListener("click", makeGrid);


function makeGrid
