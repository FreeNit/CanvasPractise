import utils from './utils.js';

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];

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
class Circle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  }

  update() {
    this.draw();
  }
}

// Implementation
let objects;
let circle1;
let circle2;
function init() {
  objects = [];
  circle1 = new Circle(300, 300, 100, '#002b49');
  circle2 = new Circle(undefined, undefined, 30, 'red');

  for (let i = 0; i < 400; i++) {
    // objects.push()
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);

  circle1.update();
  circle2.x = mouse.x;
  circle2.y = mouse.y;
  circle2.update();

  if (
    utils.distance(circle1.x, circle1.x, circle2.x, circle2.y) <
    circle1.radius + circle2.radius
  ) {
    circle1.color = 'tomato';
  } else {
    circle1.color = '#002b49';
  }

  // c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y);
  // objects.forEach(object => {
  //  object.update()
  // })
}

init();
animate();
