

var bg1
var snow
var sf
function preload(){
  bg = loadImage("snow3.jpg")
  sf = loadImage("snow5.webp");
}
function setup() {

  createCanvas(800,400);
  bg1= createSprite(400, 200, 50, 50);
  bg1.addImage("snow1.jpg",bg)
 
}


function draw() {
  background(255,255,255);  
  if(frameCount % 50 === 0)
  {
    snow = createSprite(400, 10, 20, 20);
    snow.velocityY = 1
    snow.addImage(sf)
    snow.scale = 0.1
    var rand = Math.round(random(100,400));
    snow.x = rand;
  }
  drawSprites();
}