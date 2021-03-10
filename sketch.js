
var PLAY = 1;
var END = 0;
var gameState = 1;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage,gameoverImage;
var FoodGroup, obstacleGroup
var score
var ground;
var survivaltime=0;
var score;
var geo;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  gameoverImage=loadImage("gameover.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
   
  FoodGroup= new Group()
  obstacleGroup= new Group()
  
  score = 0;
  
}

 

 
function setup() {
  
 monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  
ground=createSprite(400,350,900,10)
  ground.velocityX=-4;
  
}


function draw() {
background("lightblue ");
 
  textSize(20);
  fill("white"); 
  text("score:"+score,280 ,50)
 
 
  ground.x=ground.width/2;
  console.log(ground.x);
   
  if(keyWentDown("space")){
    monkey.velocityY=-15;
  }
 monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground)
 
  if(World.frameCount%200===0){
    fruits()
 }
   
  if(World.frameCount%200===0){
    stones()
 }
  
 
   
  
  if (gameState === PLAY){
    
    
     
  textSize(20);
  fill("black");
     survivaltime=Math.ceil(frameCount/12)
  text("Survival Time : " +survivaltime,20,50);
  
    
    if(monkey.isTouching(FoodGroup)){
     FoodGroup.destroyEach()
    score=score+5
    
      }
    if (obstacleGroup.isTouching(monkey)){
       gameState = END;
       
     }
     
     }
  
    else if(gameState==END){
    
      survivaltime=0;
     monkey.destroy();
   FoodGroup .destroyEach();
   obstacleGroup.destroyEach();
     obstacleGroup.setVelocityXEach(0);
     FoodGroup.setVelocityXEach(0);
      
 
      geo=createSprite(200,200,10,10);
      geo.addImage(gameoverImage)
      geo.scale=0.1
        }


      
  
  
 
  drawSprites();


function fruits(){
  banana=createSprite(670,Math.round(random(170,220)),10,10)
  banana.addImage(bananaImage)
  banana.scale=0.1
  banana.velocityX=-5
  FoodGroup.add(banana)
}

function stones(){
  obstacle=createSprite(400,320,5,5)
  obstacle.addImage(obstaceImage)
  obstacle.velocityX=-6;
  obstacle.scale=0.2  
  obstacleGroup.add(obstacle)
}






}