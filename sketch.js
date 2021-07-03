var PLAY = 1;
var END = 0;
var gameState = PLAY;
var canvas,bgImage;
var gameState;
var player;
var Dora,Dora2,bg1,bg2,bg3,bg4,bg5;
function preload(){
Dora_img1 = loadAnimation("img/D.png","img/D2.png");
bgImage = loadImage("img/sprite_1.png")
}

function setup() {
  createCanvas(200,200);
  bgSprite = createSprite(800,200,1000,800);
  bgSprite.addImage(bgImage);
  bgSprite.velocityX = -3;

  dora = createSprite(100,280,10,10);
  dora.scale = 0.3;
  dora.addAnimation("Running",Dora_img1);
 
}

function draw() {
  background("white");  

  if(bgSprite.x < 200){
    bgSprite.x = bgSprite.width/2
}

  drawSprites();
}