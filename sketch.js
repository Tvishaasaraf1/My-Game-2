function preload(){
  bg = loadImage("path.png")
  playerImg = loadAnimation("jake1.png","jake2.png","jake3.png","jake4.PNG","jake5.png")
  diamondImg = loadImage("diamond.png")
  ghostImg = loadImage("ghost.png")
}


function setup() {
  createCanvas(800,650);
  Player = createSprite(400, 550, 50, 50);
  Player.addAnimation("running",playerImg)
}

function draw() {
  background(bg); 
   Player.x = mouseX
   if(frameCount%60===0){
     diamond = createSprite(random(100,700),0)
     diamond.addImage(diamondImg)
     diamond.velocityY = 3
     diamond.scale = 0.1
   }
   if(frameCount%100===0){
    ghost = createSprite(random(100,700),0)
    ghost.addImage(ghostImg)
    ghost.velocityY = 5
    ghost.scale = 0.3
  }
  drawSprites();
}