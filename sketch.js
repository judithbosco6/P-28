const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var mango1,mango2,mango3,mango4,mango5;
var stone;
var tree;
var ground;
var boy;
function preload()
{
	var boy=loadImage("images/boy.png");
}

function setup() {
	createCanvas(800, 700);
	image(boy, 200,155,20,20);
	engine = Engine.create();
	world = engine.world;

  stone=new Stone(50,155,radius);
	
  //create rest of objects
  mango1=new Mango(45,200);
  mango3=new Mango(45,200);
  mango4=new Mango(45,200);
  mango5=new Mango(45,200);
  tree=new Tree(400,100);
  ground=new Ground(400,680,800,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  stone.display();
  tree.dipslay();
  boy.display();

  mango1.display();
  mango2.display();
  mango3.diaplay();
  mango4.display();
  mango5.display();
  boy.display();

  detectCollision();

  detectollision(stone, mango1);
  detectollision(stone, mango2);
  detectollision(stone, mango3);
  detectollision(stone, mango4);
  detectollision(stone, mango5);

  ground.display();
  
  drawSprites();
}


function detectCollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
    if(distance<=lmango.r+lstone.r)
    {
      Matter.Body.setStatic(lmango.body,false)
    }
}

function keyPressed(){
  if (keyCode===32){
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420})
    launcherObject.attach(stoneObj.body);
  }
}





