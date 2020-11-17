
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,ground,ball,wall1,wall2,wall3,wall1Sprite,wall2Sprite,wall3Sprite


function setup() {
  createCanvas(800,700);
  engine=Engine.create();
  world=engine.world;
  wall1Sprite=createSprite(600,650,200,20)
	wall2Sprite=createSprite(700,600,20,100)
	wall3Sprite=createSprite(500,600,20,100)
	wall1Sprite.shapeColor="white"
	wall2Sprite.shapeColor="white"
	wall3Sprite.shapeColor="white"
	wall1 = Bodies.rectangle(600,650,200,20,{isStatic:true});
	wall3 = Bodies.rectangle(700,600,20,100,{isStatic:true});
	wall2 = Bodies.rectangle(500,600,20,100,{isStatic:true});
  var ground_option={
    isStatic:true
  }
  ground=Bodies.rectangle(200,650,200,20,ground_option)
  World.add(world,ground);
  var ball_options={
    restitution:1
  }
  ball=Bodies.circle(200,630,20,ball_options);
  World.add(world,ball);
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,700,20)

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  drawSprites();
  keyPressed();
  
}
function keyPressed(){

if   (keyCode === UP_ARROW){
	Matter.body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
}
}

