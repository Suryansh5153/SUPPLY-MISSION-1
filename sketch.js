var helicopterIMG, helicopterSprite, packageSprite,packageIMG, container1Sprite, constainer2Sprite, container3Sprite;
var packageBody,ground, container1, constainer2, container3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	container1Sprite=createSprite(330, height-85, 10,75);
	container1Sprite.shapeColor="red";

	container2Sprite=createSprite(400, height-45, 150,10);
	container2Sprite.shapeColor="red";

	container3Sprite=createSprite(470, height-85, 10,75);
	container3Sprite.shapeColor="red";


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	 
	container1 = Bodies.rectangle(345, height-100, 10, 75 , {isStatic:true} );
	World.add(world, container1);

	container2 = Bodies.rectangle(415, height-60, 150, 10 , {isStatic:true} );
	World.add(world, container2);

	container3 = Bodies.rectangle(485, height-100, 10, 75 , {isStatic:true} );
	World.add(world, container3);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);
    
  }
}



