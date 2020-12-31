
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var rope1;
var bob1,bob2,bob3,bob4,bob5;




function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,200,400,30);
	
	bob1 = new Bob(380,400);
	bob2 = new Bob(420,400);
	bob3 = new Bob(460,400);
	bob4 = new Bob(340,400);
	bob5 = new Bob(300,400);

	rope1 = new Rope(bob1.body,roof.body,-20*2,0);

    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  //rope1.display();
 
}



