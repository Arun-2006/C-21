var fixedRect, movingRect,person;

function setup() {
  createCanvas(1200,800);
  // fixedRect = createSprite(600, 400, 50, 80);
  // fixedRect.shapeColor = "green";
  // fixedRect.debug = true;
  // movingRect = createSprite(400,200,80,30);
  // movingRect.shapeColor = "green";
  // movingRect.debug = true;
  car = createSprite(800,300,100,50)
  car.shapeColor = "blue"
  wall = createSprite(800,500,70,100)
  wall.shapeColor = "grey";

  // person=createSprite(600,500,20,50);
  // person2=createSprite(500,600,50,40)
  // person.shapeColor="red";
  // person2.shapeColor="white";

}

function draw() {
  background(0,0,0);  
  // movingRect.x = World.mouseX;
  // movingRect.y = World.mouseY;
  // car.x = World.mouseX;
  // car.y = World.mouseY;
  // person.x=World.mouseX;
  // person.y=World.mouseY;
  // isTouching(movingRect, fixedRect)
  // isTouching(car,wall)
 /* if(isTouching(car,wall) === true){
    text("The  car crashed", 300,200)
  }
  if(isTouching(movingRect,fixedRect)===true){
    background("pink")
  }
  if(isTouching(person,person2)===true)
  {
      background("green");
  }*/
  car.velocityY = -5
  wall.velocityY = +5
  bounceOff(car,wall);
 
  drawSprites();
}
function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
      return true
}
else {
  return false
}

}
function bounceOff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
  }
  if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
  } 
}