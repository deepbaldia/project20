var speed=0;
var weight=0;



    function setup(){
        car=createSprite(10,200,20,20);
        wall=createSprite(370,200,10,200);
	speed=(Math.round(random(55,90)));
	weight=Math.round(random(400,15000));
    }


function draw(){
  background("green")
        
  car.velocityX= speed;

  if(wall.x-car.x<(car.width+wall.width)/2)
  {
car.velocityX=0;

var deformation=0.5*weight*speed*speed/22509;
if(deformation>180)
{
car.shapeColor=color(255,0,0);
}
if(deformation<180&&deformation>100)
{
car.shapeColor=color(230,230,0);
}
if(deformation>100)
{
car.shapeColor=color(0,255,0);
}
  }
  drawSprites();
 }


