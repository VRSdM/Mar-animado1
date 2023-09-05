var mar, barco, marimg, barcoimg
function preload(){
marimg=loadImage("sea.png");
barcoimg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(400,400);
  mar = createSprite(400,200);
mar.addImage(marimg);
barco = createSprite(130,200,30,30);
barco.addAnimation("navio",barcoimg);
barco.scale=0.25;
mar.scale=0.3;
mar.velocityX=-5;
}

function draw() {
  background("blue");
    drawSprites();
    mar.velocityX=-3;
 if (mar.x <0){
  mar.x = mar.width/2;
 }
}
