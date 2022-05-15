var bg,bgImg;
var balloon,balloonImg;
function preload () {
bgImg = loadImage("assets/bg.png");
balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png");
}

function setup () {
canvas = createCanvas(1000,1000);
bg = createSprite(50,200);
bg.addImage(bgImg);
bg.scale = 2.5;


balloon = createSprite(100,150);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.5;
} 

function draw () {
background("black");

if (keyDown("space")) {
  balloon.velocityY =- 4; 
}
balloon.velocityY = balloon.velocityY +0.5;
drawSprites();


}