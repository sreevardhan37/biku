
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var options={
	 isStatic:false,
	 restitution:0.3,
	 friction:0.5,
	 dencity:1.2
}
var ball,ground,pixele1,pixele2,pixele3;




function preload()
{
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball=creatSprite(20,20);
  pixele1 =creatSprite(20,200);
  pixele2 =creatSprite(20,100);
  pixele3 =creatSprite(20,100);
  ground=creatSprite(20,300);
  drawSprites();
 
}

function keyPressed(){
if (keycode===UP_ARROW) {

     Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});

     }


}












