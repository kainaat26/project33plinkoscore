const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles = []
var plinko = []
var division = []

var score = 0
var turn = 0
var particle;
var gamestate = "start"
function preload(){

}

function setup() {
  createCanvas(499,600);
    engine = Engine.create();
    world = engine.world;

    
  ground1 = new Ground(250,600,480,20);

  for(var k = 7;k <=width; k = k + 80){
    division.push(new Division(k, height - 30/2,10,600));
  }
  

  for(var j = 40;j <=width; j=j+50)
  {
    plinko.push(new Plinko(j,50));
  }

  for (var j = 15; j <=width-10; j=j+50)
  {
    plinko.push(new Plinko(j,100));
  } 

  for (var j = 40; j <=width-10; j=j+50)
  {
    plinko.push(new Plinko(j,150));
  } 

  for (var j = 15; j <=width-10; j=j+50)
  {
    plinko.push(new Plinko(j,200));
  } 


}

function draw() {
  background("grey");  
  textSize(20)
 text("Score : "+score,20,30);
 text (500,30,320);
 text (300,110,320);
 text (100,190,320);
 text (100,270,320);
 text (300,350,320);
 text (500,430,320);
  Engine.update(engine);

  ground1.display();

  for (var k = 0 ;k < division.length;k++) {
    division[k].display()
  }


  for (var j = 0 ;j < plinko.length;j++) {
    plinko[j].display()
  }

  console.log(mouseX,mouseY);
  if(particle!=null){

    particle.display()
  
    if(particle.body.position.y>550){
      if(particle.body.position.x>160 && particle.body.position.x<325){
        score=score+100
        particle=null
        if(turn>=5) gamestate = "end"
      }
    
  
    else if(particle.body.position.x>80 && particle.body.position.x<168
    || particle.body.position.x>325 && particle.body.position.x<377){
      score=score+300
       particle=null
      if(turn>=5) gamestate = "end"
    }
  
  
    else if(particle.body.position.x>1 && particle.body.position.x<86
    ||particle.body.position.x>405 && particle.body.position.x<490){
     score=score+500
     particle=null
       if(turn>=5) gamestate = "end"
     }
  
  }
  }

if(turn >=5){
  gamestate = "end"
  textSize(50)
  text("gameover",200,300)
}
  
  //if(frameCount%60===0){
  //  particle.push(new Particle(random(width/2-10,width/2+10),mouseX,10));
   // }
  
 // for (var a = 0; a < particle.length; a++){
//
  //  particle[a].display()
//}
}
function keyPressed(){
  if(keyCode == DOWN_ARROW){
  if(gamestate!== "end")
  {
    turn++;
    particle= new Particle(mouseX,10,10);
  }
}
}