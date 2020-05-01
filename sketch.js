var car,wall;
var speed,weight,deformation;


function setup() {
  createCanvas(1600,400);
  
  speed=random(55,90);
  weight=random(400,1500)

  car=createSprite(50,200,50,50);
  car.shapeColor="white";

  wall=createSprite(1400,200,60,200);
  wall.shapeColor="grey";
}

function draw() {
  background(0);

  
  
  car.velocityX=speed;

if(isTouching(car,wall)&&deformation===(0.5*weight*speed*speed/22500)<100)

{

car.shapeColor="green";
}
else{
car.shapeColor="white";

}
if(isTouching(car,wall)&&deformation===(0.5*weight*speed*speed/22500)>100&&deformation===(0.5*weight*speed*speed/22500)<180)

{

car.shapeColor="yellow";
}
else{
car.shapeColor="white";

}
if(isTouching(car,wall)&&deformation===(0.5*weight*speed*speed/22500)>180){

car.shapeColor="red";
}
else{
car.shapeColor="white";

}



  drawSprites();
}
function isTouching(object1,object2)
{
  if (object1.x - object2.x < object2.width/2 + object1.width/2 
    && object2.x - object1.x < object2.width/2 + object1.width/2 
    && object1.y - object2.y < object2.height/2 +object1.height/2 
    && object2.y - object1.y < object2.height/2 + object1.height/2) 
    { 
     return true; 
      }
      else{
        return false;
      }
}