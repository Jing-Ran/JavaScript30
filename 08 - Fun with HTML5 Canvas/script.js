const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

// Size up the canvas to be exact with of the window. The default is 800 * 800
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Basic setup
// When you draw on something, there needs to be a color. 
// strokeStyle sets the style for the shape's outlines.
ctx.strokeStyle = '#BADA55';
// Sets the appearance of the corners where lines meet
ctx.lineJoin = 'round';
// Sets th appearance of the ends of lines
ctx.lineCap = 'round';
// Sets width of lines
ctx.lineWidth = 30;
// Sets compositing operation
// ctx.globalCompositeOperation = 'multiply';

// When mouse clicks down is actual drawing - set to true;
// When mouse clicks up, letting go with the button - set to false
// To figure out user is drawing or just moving the mouse
let isDrawing = false;
// When start drawing, lastX and lastY will be the starting point
// When finish drawing, they will be the ending point
let lastX = 0;
let lastY = 0;
// Set up line colors
let hue = 0;
// Control line width: when direction is true, the line is building up;
let direction = true;

// draw function is going to be called when moving the mouse on top of the canvas
function draw(e) {
  // Stop the fn from running when mouse is not down
  if (!isDrawing) return;

  // Before drawing
  // Set stroke color/style
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;


  // Drawing
  // Nothing will be drawn until stroke() method is called
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++; // Increament hue, so the color is changing
  // Optional step: when hue is over 360, the color will start over
  if (hue >= 360) hue = 0;

  // Increment line width
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;

  // When mouse down, change the starting point of a line to mouse point (e point)
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);

canvas.addEventListener('mouseup', (e) => {
  isDrawing = false;

  // When mouse up, get the current line's end point (e point),
  // and store it to lastX and lastY, when next drawing starts, 
  // the draw() fn will use this point
});
canvas.addEventListener('mouseout', () => isDrawing = false);



