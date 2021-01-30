
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball,roof,chain;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 = new Ball(150,100,20);
	ball2 = new Ball(400,300,20);
	ball3 = new Ball(450,300,20);
	ball4 = new Ball(500,300,20);
	ball5 = new Ball(550,300,20);
	
    roof = new Roof(450,100,300,30);

    //chain = new Chain(ball.body,roof.body,-ballDiameter*2,0);
    rope1 = new Rope(ball1.body,{x:350,y:100});
    rope2 = new Rope(ball2.body,{x:400,y:100});
    rope3 = new Rope(ball3.body,{x:450,y:100});     
    rope4 = new Rope(ball4.body,{x:500,y:100});
    rope5 = new Rope(ball5.body,{x:550,y:100});


	Engine.run(engine);
  
}


function draw() {
  background(225);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(20)
  text("Dragged the ball",120,120)
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();


  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
  }

