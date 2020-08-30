const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon;
var polygon1;
var score = 0;

function preload(){
polygon1 = loadImage("polygon.png")
}



function setup() {
  createCanvas(1000,500);
  engine = Engine.create();
    world = engine.world;


    polygon = Bodies.circle(100,200,50)
    World.add(world,polygon)

    slingShot = new SlingShot(polygon,{x:100,y:200})


    //Level 1
    block1 = new Box(290,430,50,50)
    block2 = new Box(340,430,50,50)
    block3 = new Box(390,430,50,50)
    block4 = new Box(440,430,50,50)
    block5 = new Box(490,430,50,50)
    block6 = new Box(540,430,50,50)
    block7 = new Box(590,430,50,50)

    //Level 2
    block8 = new Box(340,380,50,50)
    block9 = new Box(390,380,50,50)
    block10 = new Box(440,380,50,50)
    block11 = new Box(490,380,50,50)
    block12 = new Box(540,380,50,50)

    //Level 3
    block13 = new Box(390,330,50,50)
    block14 = new Box(440,330,50,50)
    block15 = new Box(490,330,50,50)

    //TOP
    block16 = new Box(440,280,50,50)

    //Level 1/Base2
    block17 = new Box(690,190,50,50)
    block18 = new Box(740,190,50,50)
    block19 = new Box(790,190,50,50)
    block20 = new Box(840,190,50,50)
    block21 = new Box(890,190,50,50)

    //Level 2/Base2
    block22 = new Box(740,140,50,50)
    block23 = new Box(790,140,50,50)
    block24 = new Box(840,140,50,50)

    //Level 3/Base2
    block25 = new Box(790,90,50,50)

  
    //Base
    Ground1 = new Ground(450,450,400,20)
    Ground2 = new Ground(800,250,300,20)
  
  



}

function draw() {
  background(55,43,43);

  noStroke();
  textSize(35)
  fill("white")
  text("Score  " + score, width-300, 50)

  Engine.update(engine);  
  block1.display();
  block1.score();
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();
  block6.display();
  block6.score();
  block7.display();
  block7.score();
  block8.display();
  block8.score();
  block9.display();
  block9.score();
  block10.display();
  block10.score();
  block11.display();
  block11.score();
  block12.display();
  block12.score();
  block13.display();
  block13.score();
  block14.display();
  block14.score();
  block15.display();
  block15.score();
  block16.display();
  block16.score();
  block17.display();
  block17.score();
  block18.display();
  block18.score();
  block19.display();
  block19.score();
  block20.display();
  block20.score();
  block21.display();
  block21.score();
  block22.display();
  block22.score();
  block23.display();
  block23.score();
  block24.display();
  block24.score();
  block25.display();
  block25.score();
  imageMode(CENTER)
  image(polygon1,polygon.position.x,polygon.position.y,50,50)
  slingShot.display();
  Ground1.display();
  Ground2.display();
  drawSprites();
}


function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
  }

function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(this.polygon)
  }
}
