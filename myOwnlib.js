function bounceOff(object1,fixedRect){
    if (object1.x - fixedRect.x < fixedRect.width/2 +object1.width/2
      && fixedRect.x - object1.x < fixedRect.width/2 + object1.width/2) {
        object1.velocityX = object1.velocityX * (-1);
        fixedRect.velocityX = fixedRect.velocityX * (-1);
        
  }
  if (object1.y - fixedRect.y < fixedRect.height/2 + object1.height/2
    && fixedRect.y - object1.y < fixedRect.height/2 + object1.height/2){
    object1.velocityY = object1.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }
  }