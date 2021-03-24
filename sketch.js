var player1
var player2
var scoring
var player1j,player2j
var background

function preload(){
player1 = loadImage("red w ball.png")
player2 = loadImage("bluewball.png")
scoring = loadImage("scoring.png")
player1j = loadImage("redjumping.png")
player2j = loadImage("bluejumping.png")
backgroundimg = loadImage("bkgimg.jpg")
}

function setup() {
canvas = createCanvas(displayWidth - 20, displayHeight-30);
player = createSprite(400,600,50,50)
player.addImage(player1)

player22 = createSprite(900,500,50,50)
player22.addImage(player2)
player22.scale = 3
}


function draw() {
  background(backgroundimg);  

  if(keyDown(UP_ARROW)){
    player.velocity = 5
  }
  
  drawSprites();
}