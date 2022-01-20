var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["64af8c28-6711-412d-b76b-ba488298dad2","d6cc4b69-66e0-4500-99d1-39d3526bb6b1","bb259d40-f079-4f13-a5c9-e8a1107dff13","4a39c0c2-dfeb-4551-b501-02a9783f18aa","9403a43b-f978-4b1d-b918-998969e6c14d","d0248bcb-7ba7-484c-9ff5-3e3ad003a072","98bd89ba-503b-4a8c-9028-c5b16805eab1","f1ec05a4-d732-4f5b-bc90-f2e73122e0c6","a13e922e-828e-42d0-a57c-3580694f5dad","a3e0bcef-3e1d-442a-b294-b8112e8a8d1d","4b850be7-40f2-4715-95c6-275c82d3ce8d","17635112-1ab7-435e-99e9-e68f087fbc12","bda54e11-c224-40f2-98f9-666bab4ef9c4","2cc12b8e-9a40-4e21-9e0c-ed40434a39d5","5e822039-da21-499b-8e0e-097b4ca7537b"],"propsByKey":{"64af8c28-6711-412d-b76b-ba488298dad2":{"name":"ship","sourceUrl":null,"frameSize":{"x":398,"y":298},"frameCount":1,"looping":true,"frameDelay":12,"version":"Cve4cQXBzjjNyyVa40ME6wOIfncVGe8Q","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":298},"rootRelativePath":"assets/64af8c28-6711-412d-b76b-ba488298dad2.png"},"d6cc4b69-66e0-4500-99d1-39d3526bb6b1":{"name":"alien","sourceUrl":null,"frameSize":{"x":49,"y":49},"frameCount":1,"looping":true,"frameDelay":12,"version":"QRNgyv8CX5BaQ9eS933SYoTGzbX.mVm2","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":49,"y":49},"rootRelativePath":"assets/d6cc4b69-66e0-4500-99d1-39d3526bb6b1.png"},"bb259d40-f079-4f13-a5c9-e8a1107dff13":{"name":"space","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"fH7eEjf2W7JANa8.PlJJdkGOX8SplQde","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/bb259d40-f079-4f13-a5c9-e8a1107dff13.png"},"4a39c0c2-dfeb-4551-b501-02a9783f18aa":{"name":"powerupRed1","sourceUrl":"assets/api/v1/animation-library/gamelab/PxdctBAoH0Dk5waypvVop.CJ8s20QPrs/category_video_games/powerupRed.png","frameSize":{"x":34,"y":33},"frameCount":1,"looping":true,"frameDelay":2,"version":"PxdctBAoH0Dk5waypvVop.CJ8s20QPrs","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":34,"y":33},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PxdctBAoH0Dk5waypvVop.CJ8s20QPrs/category_video_games/powerupRed.png"},"9403a43b-f978-4b1d-b918-998969e6c14d":{"name":"powerupRed2","sourceUrl":"assets/api/v1/animation-library/gamelab/PxdctBAoH0Dk5waypvVop.CJ8s20QPrs/category_video_games/powerupRed.png","frameSize":{"x":34,"y":33},"frameCount":1,"looping":true,"frameDelay":2,"version":"PxdctBAoH0Dk5waypvVop.CJ8s20QPrs","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":34,"y":33},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PxdctBAoH0Dk5waypvVop.CJ8s20QPrs/category_video_games/powerupRed.png"},"d0248bcb-7ba7-484c-9ff5-3e3ad003a072":{"name":"powerupRed3","sourceUrl":"assets/api/v1/animation-library/gamelab/PxdctBAoH0Dk5waypvVop.CJ8s20QPrs/category_video_games/powerupRed.png","frameSize":{"x":34,"y":33},"frameCount":1,"looping":true,"frameDelay":2,"version":"PxdctBAoH0Dk5waypvVop.CJ8s20QPrs","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":34,"y":33},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PxdctBAoH0Dk5waypvVop.CJ8s20QPrs/category_video_games/powerupRed.png"},"98bd89ba-503b-4a8c-9028-c5b16805eab1":{"name":"powerupRed4","sourceUrl":"assets/api/v1/animation-library/gamelab/PxdctBAoH0Dk5waypvVop.CJ8s20QPrs/category_video_games/powerupRed.png","frameSize":{"x":34,"y":33},"frameCount":1,"looping":true,"frameDelay":2,"version":"PxdctBAoH0Dk5waypvVop.CJ8s20QPrs","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":34,"y":33},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PxdctBAoH0Dk5waypvVop.CJ8s20QPrs/category_video_games/powerupRed.png"},"f1ec05a4-d732-4f5b-bc90-f2e73122e0c6":{"name":"powerupRed5","sourceUrl":"assets/api/v1/animation-library/gamelab/PxdctBAoH0Dk5waypvVop.CJ8s20QPrs/category_video_games/powerupRed.png","frameSize":{"x":34,"y":33},"frameCount":1,"looping":true,"frameDelay":2,"version":"PxdctBAoH0Dk5waypvVop.CJ8s20QPrs","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":34,"y":33},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PxdctBAoH0Dk5waypvVop.CJ8s20QPrs/category_video_games/powerupRed.png"},"a13e922e-828e-42d0-a57c-3580694f5dad":{"name":"powerupRed6","sourceUrl":"assets/api/v1/animation-library/gamelab/PxdctBAoH0Dk5waypvVop.CJ8s20QPrs/category_video_games/powerupRed.png","frameSize":{"x":34,"y":33},"frameCount":1,"looping":true,"frameDelay":2,"version":"PxdctBAoH0Dk5waypvVop.CJ8s20QPrs","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":34,"y":33},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PxdctBAoH0Dk5waypvVop.CJ8s20QPrs/category_video_games/powerupRed.png"},"a3e0bcef-3e1d-442a-b294-b8112e8a8d1d":{"name":"gradient_23_1","sourceUrl":"assets/api/v1/animation-library/gamelab/ISE_IJMV70UcL_QP6r8mHALHaOwKuOba/category_backgrounds/gradient_23.png","frameSize":{"x":400,"y":350},"frameCount":1,"looping":true,"frameDelay":2,"version":"ISE_IJMV70UcL_QP6r8mHALHaOwKuOba","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":350},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ISE_IJMV70UcL_QP6r8mHALHaOwKuOba/category_backgrounds/gradient_23.png"},"4b850be7-40f2-4715-95c6-275c82d3ce8d":{"name":"alien2","sourceUrl":null,"frameSize":{"x":49,"y":49},"frameCount":1,"looping":true,"frameDelay":12,"version":"9jxLunDhgC8VBvT7rQ6sbm5zuP.P58j4","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":49,"y":49},"rootRelativePath":"assets/4b850be7-40f2-4715-95c6-275c82d3ce8d.png"},"17635112-1ab7-435e-99e9-e68f087fbc12":{"name":"alien3","sourceUrl":null,"frameSize":{"x":49,"y":49},"frameCount":1,"looping":true,"frameDelay":12,"version":"niyViWY8iDF8YT0HkqPFkvb8pA1TMWYH","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":49,"y":49},"rootRelativePath":"assets/17635112-1ab7-435e-99e9-e68f087fbc12.png"},"bda54e11-c224-40f2-98f9-666bab4ef9c4":{"name":"alien4","sourceUrl":null,"frameSize":{"x":49,"y":49},"frameCount":1,"looping":true,"frameDelay":12,"version":"izA3W2astw3Amv6v46zkZmnkmbN1Zspa","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":49,"y":49},"rootRelativePath":"assets/bda54e11-c224-40f2-98f9-666bab4ef9c4.png"},"2cc12b8e-9a40-4e21-9e0c-ed40434a39d5":{"name":"alien5","sourceUrl":null,"frameSize":{"x":49,"y":49},"frameCount":1,"looping":true,"frameDelay":12,"version":"o.b_3RMzF8Sxx7L3nhNMVK4OXmSrtpSY","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":49,"y":49},"rootRelativePath":"assets/2cc12b8e-9a40-4e21-9e0c-ed40434a39d5.png"},"5e822039-da21-499b-8e0e-097b4ca7537b":{"name":"Laser","sourceUrl":null,"frameSize":{"x":49,"y":81},"frameCount":1,"looping":true,"frameDelay":12,"version":"PLSIYJfnmtreXXJrrX9p.0.LlK1xjY.u","loadedFromSource":true,"saved":true,"sourceSize":{"x":49,"y":81},"rootRelativePath":"assets/5e822039-da21-499b-8e0e-097b4ca7537b.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var ship = createSprite(200,330);
ship.setAnimation("ship");
ship.scale = 0.25;

var alien = createSprite(200,100);
alien.setAnimation("alien");

var alien2 = createSprite(50,100);
alien2.setAnimation("alien2");
alien2.visible = false;

var alien3 = createSprite(125,100);
alien3.setAnimation("alien3");
alien3.visible = false;

var alien4 = createSprite(275,100);
alien4.setAnimation("alien4");
alien4.visible = false;

var alien5 = createSprite(350,100);
alien5.setAnimation("alien5");
alien5.visible = false;

var laser = createSprite(450,450);
laser.setAnimation("powerupRed1");
laser.scale = 0.4;

var score = 0;

var lives = 3;

var level = 0;

var bg = createSprite(200,200);
bg.setAnimation("space");

var endbg = createSprite(200,200);
endbg.setAnimation("gradient_23_1");
endbg.scale = 2;

var gamegoing;

function draw() {
  
  gameStart();
  
  createEdgeSprites();
  
  ship.collide(edges);
  
 if (gamegoing == true) {
   endbg.visible = false;
  if (keyWentDown("space")) {
   laser.x = ship.x;
   laser.y = ship.y -40;
   laser.velocityY = -5;
  }

     
  if (laser.isTouching(alien)) {
    alien.x = randomNumber(40,360);
    alien.y = randomNumber(140,40);
    score++;
  }
  
  if (alien.isTouching(ship)||alien.isTouching(bottomEdge)) {
    lives--;
    alien.x = randomNumber(40,360);
    alien.y = randomNumber(140,40);
  }
 
  if (score >= 10) {
    level = 1;
    alien.velocityY = 6;
    alien2.visible = true;
    alien2.velocityY = 6;
    if (laser.isTouching(alien2)) {
      score++;
      alien2.x = randomNumber(40,160);
      alien2.y = randomNumber(140,40);
    }
    if (alien2.isTouching(ship)||alien2.isTouching(bottomEdge)) {
      alien2.x = randomNumber(40,160);
      alien2.y = randomNumber(140,40);
      lives--;
    }
    if (keyDown(RIGHT_ARROW)) {
      ship.x = ship.x +6;
  }
     if (keyDown(LEFT_ARROW)) {
    ship.x = ship.x -6;
  }
  }
  
  if (score >= 25) {
    level = 2;
    alien.velocityY = 7;
    alien3.visible = true;
    alien3.velocityY = 6;
    if (laser.isTouching(alien3)) {
      score++;
      alien3.x = randomNumber(160,360);
      alien3.y = randomNumber(140,40);
    }
    if (alien3.isTouching(ship)||alien3.isTouching(bottomEdge)) {
      alien3.x = randomNumber(160,360);
      alien3.y = randomNumber(140,40);
      lives--;
    }
     if (keyDown(RIGHT_ARROW)) {
      ship.x = ship.x +7;
  }
     if (keyDown(LEFT_ARROW)) {
    ship.x = ship.x -7;
  }
  }
  
  if (score >= 50) {
    level = 3;
    alien.velocityY = 8;
    alien4.visible = true;
    alien4.velocityY = 6;
    if (laser.isTouching(alien4)) {
      score++;
      alien4.x = randomNumber(40,160);
      alien4.y = randomNumber(140,40);
    }
    if (alien4.isTouching(ship)||alien4.isTouching(bottomEdge)) {
      alien4.x = randomNumber(40,160);
      alien4.y = randomNumber(140,40);
      lives--;
    }
     if (keyDown(RIGHT_ARROW)) {
      ship.x = ship.x +8;
  }
     if (keyDown(LEFT_ARROW)) {
      ship.x = ship.x -8;
  }
  }
  
  if (score >= 75) {
    level = 4;
    alien.velocityY = 9;
    alien5.visible = true;
    alien5.velocityY = 6;
    if (laser.isTouching(alien5)) {
      score++;
      alien5.x = randomNumber(160,360);
      alien5.y = randomNumber(140,40);
    }
    if (alien5.isTouching(ship)||alien5.isTouching(bottomEdge)) {
      alien5.x = randomNumber(160,360);
      alien5.y = randomNumber(140,40);
      lives--;
    }
     if (keyDown(RIGHT_ARROW)) {
      ship.x = ship.x +9;
  }
     if (keyDown(LEFT_ARROW)) {
      ship.x = ship.x -9;
  }
  }
  
  if (score >= 100) {
    level = 3;
    alien.velocityY = 10;
     if (keyDown(RIGHT_ARROW)) {
      ship.x = ship.x +10;
  }
     if (keyDown(LEFT_ARROW)) {
      ship.x = ship.x -10;
  }
  }
}
 
 if (gamegoing == false) {
   endbg.visible = true;
 }
 
  if (keyDown("P")) {
  alien.setVelocity(0,0);
  gamegoing = false;
 }
 
  if (keyWentDown("R")) {
    lives = 3;
    score = 0;
    level = 0;
    alien.velocityY = 5;
    ship.x = 200;
    ship.y = 330;
     if (keyDown(RIGHT_ARROW)) {
      ship.x = ship.x +5;
  }
  
      if (keyDown(LEFT_ARROW)) {
       ship.x = ship.x -5;
  }
  } 
 
  drawSprites();
  
  gameEnded();
  
  textSize(15);
  fill("white");
  text ("SCORE:", 5, 20);
  text(score,70,20);
  text("LIVES:", 330, 20);
  text(lives, 385,20);
  textSize(12.5);
  text("Lvl.", 5,390);
  text(level,35,390);
  
  bg.depth = 2;
  laser.depth = 2.1;
  alien.depth = 2.2;
  alien2.depth = 2.3;
  alien3.depth = 2.4;
  alien4.depth = 2.5;
  alien5.depth = 2.6;
  ship.depth = 2.7;
  endbg.depth = 4;
}

function gameStart() {
  gamegoing = true;
 if (keyDown("right")) {
     ship.x = ship.x +5;
 }
  
 if (keyDown("left")) {
     ship.x = ship.x -5;
 }
 alien.velocityY = 5;
}

function gameEnded() {
  gamegoing = false;
   if (lives == 0) {
    alien.setVelocity(0,0);
    alien2.setVelocity(0,0);
    alien3.setVelocity(0,0);
    alien4.setVelocity(0,0);
    alien5.setVelocity(0,0);
    textSize(25);
    fill("white");
    text("Game Over", 135,200);
    textSize(15);
    text("Press R to restart",142,250);
   }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
