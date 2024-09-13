const canvas = document.querySelector("#draw");

const ctx = canvas.getContext("2d");

// Resizing the canvas to the window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.border = "2px solid black";

ctx.strokeStyle = "#BADA55"; // color of the line
ctx.lineJoin = "round"; // how the line should join
ctx.lineCap = "round"; // how the line should end
ctx.lineWidth = 100; // width of the line

// we need a logic to know when the user is actually drawing on canvas
// we can do this by setting a flag to true when the user clicks on the canvas

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
    if (!isDrawing) return; // stop the function from running when they are not moused down
    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    // start from
    ctx.moveTo(lastX, lastY);
    // go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++;
    if (hue >= 360) {
        hue = 0;
    }
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    }
    if (direction) { ctx.lineWidth++; }
    else {ctx.lineWidth--;}
}

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
