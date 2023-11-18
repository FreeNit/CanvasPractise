import utils from './utils.js';

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth - 30;
canvas.height = window.innerHeight - 30;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];

let gravity = 1;
let friction = 0.95;

// Event Listeners
addEventListener('mousemove', (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

addEventListener('resize', () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

// Objects
class Ball {
  constructor(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx; // -> velocity in X direction
    this.dy = dy; // -> velocity in Y direction
    this.radius = radius;
    this.color = color;
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.stroke();
    c.closePath();
  }

  update() {
    if (this.y + this.radius + this.dy >= canvas.height) {
      this.dy = -this.dy * friction;
    } else {
      this.dy += gravity;
    }

    if (
      this.x + this.radius + this.dx >= canvas.width ||
      this.x - this.radius < 0
    ) {
      this.dx = -this.dx;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }
}

// Implementation
const ballArray = [];
let ball;
function init() {
  ballArray.length = 0;

  for (let i = 0; i < 100; i++) {
    const radius = utils.randomIntFromRange(15, 30);
    let x = utils.randomIntFromRange(radius, canvas.width - radius);
    let y = utils.randomIntFromRange(0, canvas.height - radius);
    let dx = utils.randomIntFromRange(-2, 2);
    let dy = utils.randomIntFromRange(-2, 2);
    let color = utils.randomColor(colors);
    ballArray.push(new Ball(x, y, dx, dy, radius, color));
  }
}
// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < ballArray.length; i++) {
    ballArray[i].update();
  }
  // c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y);
  // objects.forEach(object => {
  //  object.update()
  // })
}

init();
animate();

addEventListener('click', () => {
  init();
});
