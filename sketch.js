var fixedRect, movingRect,object1,object2,object3,object4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  object1 = createSprite(100,600,30,30);
  object2 = createSprite(200,300,30,30);

  object1.shapeColor= "green";
  object2.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
bounceOff(movingRect,fixedRect)
 


 
  drawSprites();
}
