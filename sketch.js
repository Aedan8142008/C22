const Engine= Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//namespace - 

var engine,world, ground;//for our game
var ball;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  var ground_options ={
               isStatic:true 
             }

  ground = Bodies.rectangle(200,390,400,20,ground_options);//sq object
  World.add(world,ground);

var ball_options ={
  restitution:1
}

  ball=Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);

  console.log(ground.type);
  console.log(ground.position.x);
  console.log(ground.position.y);
  

  //obj1{ }
  //object.attributename
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}