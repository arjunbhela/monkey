
var bananaimg
var monkey
var surv = 0
var score = 0
var obstacleimg
var obstaclegroup
var background1
var running
var runningimg
var backgroundd
var invground
var PLAY =1
var END =0
var sadmonkey
var bangroup
var gameState = PLAY
function preload()  {
died = loadAnimation("Monkey_01.png");
background1=loadImage("jungle.jpg");
bananaimg = loadImage("banana.png");
obstacleimg = loadImage("stone.png");
runningimg=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");

}
function setup() {
createCanvas(700, 700);
backgroundd = createSprite(350,250,10,10);
backgroundd.addImage("background",background1);
backgroundd.scale = 1.4;
backgroundd.velocityX = -2;
running = createSprite(200,515,1,20);
running.addAnimation("run",runningimg);
running.addAnimation("dead",died)
running.scale = 0.1;
invground = createSprite(350,550,800,10);
invground.visible = false;
obstaclegroup = new Group()
bangroup = new Group()
}

function draw() {

background(220);
running.collide(invground);

if (gameState === PLAY)  {

surv=Math.ceil(World.frameCount/World.frameRate);


switch(score){
  case 10: nning.scale = 0.12;
    break;
    case 20: running.scale = 0.14;
    break;
  case 30: running.scale = 0.16;
    break;
    case 40: running.scale = 0.18;
    break;
default: break;
}
if (keyDown("space")&&running.y > 510) {
running.velocityY = -20
 }

running.velocityY = running.velocityY + 1;



if (backgroundd.x < 0) {
backgroundd.x =backgroundd.width/2;
 }
if (running.isTouching(obstaclegroup)) {
gameState = END
}


if (running.isTouching(bangroup)) {
score = score+2;
bangroup.destroyEach();
}
if (backgroundd.x < 0) {
backgroundd.x =backgroundd.width/2;
 }
}
else 
if (gameState === END) {
obstaclegroup.setVelocityXEach(0);
bangroup.setVelocityXEach(0);
backgroundd.velocityX = 0
running.velocityY = 0;
obstaclegroup.setLifetimeEach(-1);
bangroup.setLifetimeEach(-1);
running.changeAnimation("dead",died);
running.scale = 0.05;
}
spawnBanana();
spawnRock();
drawSprites();
stroke("white");
textSize(20);
fill("white");
text("Survival time: "+surv, 540,50)


if (gameState === END) {
stroke("white");
textSize(30);
fill("white");
text("Gameover! Your final score:"+score, 225,350)
text("Your survival time:"+surv, 300,400)
 }
stroke("white");
textSize(20);
fill("white");
text("Score: "+score, 375,50)


}

function spawnBanana() {
if (frameCount % 150===0) {
var ban = createSprite(760,random(380,500),10,10)
ban.velocityX = -3;
ban.addImage("ban",bananaimg)
ban.scale = 0.07;
ban.lifetime = 350;
bangroup.add(ban);
}
}

function spawnRock() {
if (frameCount % 230===0) {
var rock = createSprite(760,520,10,10)
rock.velocityX = -3;
rock.addImage("rock",obstacleimg);
rock.scale = 0.1;
rock.lifetime = 350;
obstaclegroup.add(rock);
}
}