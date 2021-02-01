const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
   backgroundImg = loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(1250,1200);

  
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(240,525,1650,20);

  
  //box1 = new Block(700,100,70,70)
  box2 = new Block(590,100,70,70)
  box3 = new Block(590,100,70,70)
  box4 = new Block(590,100,70,70)
  box5 = new Block(590,100,70,70)
  box6 = new Block(590,100,70,70)
  box7 = new Block(590,100,70,70)
  box8 = new Block(590,100,70,70)

  box9 = new Block(690,100,70,70)
  box10= new Block(690,100,70,70)
  box11= new Block(690,100,70,70)
  box12= new Block(690,100,70,70)
  box13= new Block(690,100,70,70)
  box14= new Block(690,100,70,70)

  box15= new Block(790,100,70,70)
  box16= new Block(790,100,70,70)
  box17= new Block(790,100,70,70)
  box18= new Block(790,100,70,70)
  box19= new Block(790,100,70,70)
  box20= new Block(790,100,70,70)

  hero1 = new Hero(250,280,200)

  rope1 = new Fly(hero1.body,{x:250,y:50})

  monster1 = new Monster(950,350,100)

}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);


  

  ground.display()
 
  //box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()

  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()

  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()

  hero1.display()
  
  rope1.display()

  monster1.display()
 


}

function mouseDragged(){
Matter.Body.setPosition(hero1.body,{x:mouseX, y:mouseY})
}

