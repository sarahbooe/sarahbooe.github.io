var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var gameState = "L1";
var img;
var img2;
var img3;
var img4;
var img5;
 function preload(){
   img=loadImage('https://sarahbooe.github.io/hungry.jpg');
   img2=loadImage('https://sarahbooe.github.io/eating.jpg');
   img3=loadImage('https://sarahbooe.github.io/full.jpg');
   img4=loadImage('https://sarahbooe.github.io/win.jpg');
   img5=loadImage('https://sarahbooe.github.io/baja.jpg');
 }
function setup() {
createCanvas(600,600);
textAlign(CENTER);
textSize(20);
}


function draw() {
background(220);
if(gameState =="L1"){
  levelOne();
}
if(gameState == "L2"){
  levelTwo();
}
if(gameState == "L3"){
  levelThree();
}
if(gameState == "youreFull"){
  youreFull();
}
text(("Score: " + score), width/2, 40);
}

function levelOne(){
  background(img);
  //background(220);
  text("Level 1", width/2, height-20);
  var disToBall= dist(ballx, bally, mouseX, mouseY);
  if(disToBall<ballSize/2){
  ballx=random(width);
  bally=random(height);
  score= score + 1;
}
if(score>9){
  gameState= "L2";
}
image(img5, ballx, bally, ballSize, ballSize);
}
function levelTwo(){
  background(img2);
 // background(200,100,0);
  text("Level 2", width/2, height-20);
  var disToBall = dist(ballx, bally, mouseX, mouseY);
  if(disToBall <ballSize/2){
    ballx=random(width);
    bally=random(height);
    score = score +1;
  }
  if(score>19){
    gameState = "L3";
  }
  image (img5, ballx, bally, ballSize, ballSize);
}
function levelThree(){
 background(img3);
//  background(200,100,2000)
  text("Level 3", width/2, height-20);
  var disToBall= dist(ballx, bally, mouseX, mouseY);
  if (disToBall <ballSize/2){
    ballx= random(width);
    bally= random(height);
    ballSize= ballSize -1;
    score= score +1;
  }
  if(score>29){
    gameState = "youreFull";
  }
  image(img5, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
}
function youreFull(){
  background(img4);
  text(("you're not hungry anymore!"), width/2, 60);
}
  
