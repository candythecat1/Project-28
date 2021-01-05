
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,tree, tree_img
var girl, girl_img
var rock
var mango1, mango2, mango3, mango4, 
mango5, mango6, mango7, mango8, mango9, mango10

function preload()
{
tree_img = loadImage("sprites/tree.png");
girl_img = loadImage("sprites/girl.png");
	
}

function setup() {
	createCanvas(1000, 650);


	engine = Engine.create();
	world = engine.world;

	ground1 = new ground()
	stone1 = new stone(100,460,23);

	mango1 = new mango(600,290,34);
	mango2 = new mango(855,325,35);
	mango3 = new mango(670,260,35);
	mango4 = new mango(730,200,35);
	mango5 = new mango(710,320,36);
	mango6 = new mango(780,250,35);
	mango7 = new mango(825,170,33);
	mango8 = new mango(880,260,35);
	mango9 = new mango(940,220,35);
	mango10 = new mango(980,305,35);
	
	attach = new slingshot(stone1.body,{x:100, y:465})

	tree = createSprite(775,368);
	tree.addImage(tree_img);
	tree.scale = 0.42

	girl = createSprite(160,550);
	girl.addImage(girl_img);
	girl.scale = 0.125;




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  fill("black");
  textSize(18);

  detectCollision(stones, mango1)
  detectCollision(stones, mango2)
  detectCollision(stones, mango3)
  detectCollision(stones, mango4)
  detectCollision(stones, mango5)
  detectCollision(stones, mango6)
  detectCollision(stones, mango7)
  detectCollision(stones, mango8)
  detectCollision(stones, mango9)
  detectCollision(stones, mango10)

  drawSprites();
  stone1.display();
  ground1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
 
}


function mouseDragged(){
	Matter.Body.setPosition(stones.body,{x: mouseX,y: mouseY})
}
function mouseReleased(){
	attach.fly();
}

function detectCollision(stone,mango){
  if (stone.body.position.x-mango.body.position.x< mango.diameter + stone.diameter 
    && mango.body.position.x- stone.body.position.x< mango.diameter + stone.diameter 
    && mango.body.position.y - mango.body.position.y< mango.diameter + stone.diameter 
    && mango.body.position.y- mango.body.position.y < mango.diameter + stone.diameter ){
    Matter.Body.setStatic(mango.body, false);
    }

}

function keyPressed(){
  if (keyCode===32){
    Matter.Body.setPosition(stone.body,{x:100, y:465})
    attach.Launch(stone.body)
  }
  
}



