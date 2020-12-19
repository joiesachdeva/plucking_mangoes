
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,boy_img;


function preload()
{
	boy_img=loadImage("boy.png");
	
}

function setup() {
	createCanvas(1300, 900);


	engine = Engine.create();
	world = engine.world;
	
	
	boy=createSprite(100,800,80,100);
	boy.addImage(boy_img);
	boy.scale=0.1;

	




	//Create the Bodies Here.
    
	stone = new Stone(50,700,50);
	
	mango1 = new Mango(1100,360,40);
	mango2 = new Mango(1170,350,40);

	tree = new Tree(1050,580);
	slingshot = new SlingShot(stone.body,{x:50, y:700});
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  stone.display();
  mango1.display();
  mango2.display();
  tree.display();
  slingshot.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);

  drawSprites();
 
}

function mouseDragged(){
    
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
   
}


function mouseReleased(){
    slingshot.fly();
}


function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance<=lmango.r+lstone.r){
		Matter.body.setStatic(lmango.body,false);
	}
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body, {x:50, y:700})
		slingshot.attach(stone.body);
	}
}

