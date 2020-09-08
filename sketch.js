
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	childIMG = loadImage("boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   child = createSprite(200,520,10,10)
   child.addImage("child",childIMG)
   child.scale = 0.10

   ground1 = new Ground(400,660,800,120)
   tree1 = new Tree(600,400,400)
   mango1 = new Mango(500,400,0,0)
   mango2 = new Mango(550,270,0,0)
   mango3 = new Mango(700,400,0,0)
   mango4 = new Mango(600,350,0,0)
   mango5 = new Mango(690,300,0,0)
   mango6 = new Mango(500,330,0,0)
   mango7 = new Mango(630,270,0,0)
   mango8 = new Mango(770,380,0,0)

   stone1 = new Stone(145,460,10,10);
   launcher1 = new Launcher(stone1.body,{x:145,y:460})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(137,208);
  ground1.display();  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  stone1.display();
  launcher1.display();
  tree1.display();
  
  
  drawSprites();

  detectcollision(stone1,mango1)
  detectcollision(stone1,mango2)
  detectcollision(stone1,mango3)
  detectcollision(stone1,mango4)
  detectcollision(stone1,mango5)
  detectcollision(stone1,mango6)
  detectcollision(stone1,mango7)
  detectcollision(stone1,mango8)

 
}

function detectcollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<-lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed() {
	if (keyCode == 32) {
		Matter.Body.setPosition(stone1.body, {x:235, y:420})
		launcher1.attach(stone1.body);
	}
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher1.fly();
}



