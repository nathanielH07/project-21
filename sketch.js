var wall,thickness,bullet,speed,weight;

function setup() {
  createCanvas(1200, 400);
thickness = random(22,83);
speed = random(223,321);
weight = random(30,52);

wall = createSprite(1100,200,thickness,height/2);
wall.shapeColor = "grey";

bullet = createSprite(30,200,40,10);
bullet.shapeColor = "white";
bullet.velocityX = speed;
}


function draw() {
  background(0);

  if(hasCollided(bullet,wall)){
bullet.velocityX = 0;
var damage = 0.5 *weight* speed* speed/(thickness *thickness *thickness);
if(damage>10){
wall.shapeColor = color(255,0,0);
}  
if(damage<10){
wall.shapeColor = color(0,255,0);
}
}
  drawSprites();
 
}
function hasCollided(lbullet, lwall){
bulletRightEdge = lbullet.x +lbullet.width;
wallLeftEdge = lwall.x;
if (bulletRightEdge>=wallLeftEdge) {
	return true
}
return false
}