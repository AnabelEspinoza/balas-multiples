const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, backgroundImg;
var canvas, angle, tower, ground, cannon;
var cannonBall;
var balls = [];
/*var arr1=[1,2,3];

var arr3=[1,2,'hola'];
var arr4=[[1,2],[3,4]];
console.log(arr4);
console.log(arr4[0][1]);*/



/*var arr=['nombre','apellido','edad'];
console.log("arreglo origina " + arr);

//Agrega elementos al final de nuestra matriz o arreglo
arr.push('Hola');
arr.push('soy');
arr.push('tu ');
arr.push('profesora');
console.log(arr);
/////POP
arr.pop();
arr.pop();
arr.pop();
arr.pop();
arr.pop();
arr.pop();
arr.pop();
console.log(arr);*/


function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  angleMode(DEGREES);
  angle = 15;

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, { isStatic: true });
  World.add(world, tower);
  cannon = new Cannon(180, 110, 130, 100, angle);
  //cannonBall = new CannonBall(cannon.x, cannon.y);
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);

  push();
  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width * 2, 1);
  pop();

  push();
  imageMode(CENTER);
  image(towerImage, tower.position.x, tower.position.y, 160, 310);
  pop();

  cannon.display();
  //cannonBall.display();
  for (var i=0; i < balls.length/*5*/;  i++){
    showCannonBalls(balls[i],i);
  }
}


function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    //cannonBall.shoot();
    balls[balls.length/*5*/-1].shoot();
  }
}

function keyPressed(){
  if (keyCode === DOWN_ARROW) {
    var cannonBall = new CannonBall(cannon.x, cannon.y);
    balls.push(cannonBall);
    console.log(balls);
  }
}

function showCannonBalls(ball) {
  if (ball) {
    ball.display();
  }
}

