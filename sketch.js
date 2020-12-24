
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground1;
var dustbin1;
var ball1;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new ground();
	dustbin1 = new dustbin(680,580,100,150);
	ball1 = new ball();


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
Engine.update(engine);
  background(250);
  ground1.display();
  ball1.display();
  dustbin1.display();
  drawSprites();
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		console.log(ball1);
		Matter.Body.applyForce(ball1.body, ball1.body.position,{x : 50, y : -50});
	}
}
