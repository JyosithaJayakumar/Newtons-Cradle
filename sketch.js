
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ground=new Ground(width/2,100,400,20)
bobDiameter=40;


startBobPositionX=width/2;
startBobPositionY=height/4+500
bob1 =new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
bob2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
bob3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
bob4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
bob5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);



var render=Render.create({ 
element:document.body,
engine: engine,
options:{
	width: 800,
	height:700,
	wireframes:false
}
});

rope1=new Rope(bob1.body,ground.body,-bobDiameter*2,0)
rope2=new Rope(bob2.body,ground.body,-bobDiameter*1,0)
rope3=new Rope(bob3.body,ground.body,0,0)
rope4=new Rope(bob4.body,ground.body,bobDiameter*1,0)
rope5=new Rope(bob5.body,ground.body,bobDiameter*2,0)

	Engine.run(engine);
}



function draw() {
  rectMode(CENTER);
  background(225);
  
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
ground.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
  drawSprites();
 
}


function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

  	}
}


function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	groundBodyOffset=constraint.pointB;
	
	groundBodyX=groundBodyPosition.x+groundBodyOffset.x
	groundBodyY=groundBodyPosition.y+groundBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, groundBodyX,groundBodyY);
}










