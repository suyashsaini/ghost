var ghost;
var door;

var ghostImage,doorImage;

function preload() {

  ghostImage=loadImage("ghost-standing.png");
  doorImage=loadImage("door.png");

  
  
}

function setup() {

createCanvas(400,400);
  
ghost=createSprite(280,190,10,70);
  door=createSprite(370,20,10,10);
  
  


ghost.addImage(ghostImage);
  ghost.scale=0.5;
  door.addImage(doorImage);
  door.scale=0.5


}

function draw() {

background(180);

if(keyDown("w")){
ghost.velocityX=0;
 ghost.velocityY=+2; 

}

 
if(keyDown("s")){
ghost.velocityX=0;
 ghost.velocityY=-2;
} 

if(keyDown("a")){
ghost.velocityX=-2;
 ghost.velocityY=0;
}

if(keyDown("d")){
ghost.velocityX=+2;
 ghost.velocityY=0;
}
  
drawSprites();
}

