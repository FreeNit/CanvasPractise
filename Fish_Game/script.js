// -> Canvas setup
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 500;

let score = 0;
let gameFrame = 0;
ctx.font = '50px Georgia';

// -> Mouse Interactivity
let canvasPosition = canvas.getBoundingClientRect();

const mouse = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  click: false,
};

canvas.addEventListener('mousedown', (event) => {
  mouse.x = event.x - canvasPosition.left;
  mouse.y = event.y - canvasPosition.top;
});

// -> Player
class Player {
  constructor() {
    this.x = canvas.width / 2; // initial X player position
    this.y = canvas.height / 2; // initial Y player position
    this.radius = 50;
    this.angle = 0;
    this.frameX = 0;
    this.frameY = 0;
    this.frame = 0;
    this.spriteWidth = 498;
    this.spriteHeight = 327;
  }

  // Update player position: compare current mouse position and current player position
  update() {
    const dx = this.x - mouse.x; // distance x
    const dy = this.y - mouse.y; // distance Y

    if (mouse.x !== this.x) {
      this.x -= dx / 30;
    }
    if (mouse.y !== this.y) {
      this.y -= dy / 30;
    }
  }
}
// -> Bubbles
// -> Animation Loop
