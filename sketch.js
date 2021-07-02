var tower , towerImg ;
var ghost , ghostImg ;

var doorImg , doorsGroup;
var climberImg , climbersGroup;

var gameState=1;



function preload (){
  towerImg=loadImage("tower.png");
  doorImg=loadImage("door.png");
  climberImg=loadImage("climber.png");
  
  ghostImg=loadAnimation("ghost-jumping.png","ghost-standing.png");
}


function setup(){
  createCanvas(600,600);
  tower=createSprite(300,300)
  tower.addImage("moving",towerImg);
  tower.velocityY=1;
  
  doorsGroup = new Group();
  climbersGroup = new Group();
  
  ghost=createSprite(200,200,50,50);
  ghost.addAnimation("ghost",ghostImg);
  ghost.scale=0.5;
  
  
  
}

function draw(){
  background(0);
  
if (gameState===1)  {
  
  if(tower.y>400){
    tower.y=300;
  }
  
  if(keyDown("left_arrow")){
    ghost.x=ghost.x-3;
  }
  
  if(keyDown("right_arrow")){
    ghost.x=ghost.x+3;
  }
  
  if(keyDown("space")){
    ghost.velocityY = -5;
  }
  
  ghost.velocityY = ghost.velocityY+0.8;

  if(climbersGroup.isTouching(ghost)){
    ghost.velocityY=0;
    
  }
  
  if(ghost.y>600){
    ghost.destroy();
    gameState=0;
  }
  spawndoors();               
  drawSprites();
}
  
  if(gameState===0){
   stroke("yellow") ;            
   fill("yellow") ;
   textSize(30);
   text("GAME OVER ", 230,250);
  }
  
}


 function spawndoors(){
   if(frameCount%240===0){
   var door=createSprite(200,-50) 
    door.addImage("door",doorImg);
    door.x=Math.round(random(120,400));
    door.velocityY=1;
    door.lifetime=800; 
    doorsGroup.add(door);
    
     
     
  var climber=createSprite(200,10) 
    climber.addImage("climber",climberImg);
    climber.x=door.x;
    climber.velocityY=1;
    climber.lifetime=800; 
    climbersGroup.add(climber);    
    
    ghost.depth=climber.depth+1; 
     
  }
}












































