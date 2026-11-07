var img;
var initials ='sb'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 'white'; // off white background
var lastscreenshot=61; // last screenshot never taken

let myStringA = "-----";
let size=25
let myStringB = "miku";


function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://sarahbooe.github.io/face2.png');
 // img2 = loadImage('https://sarahbooe.github.io/face2.png');
}

function setup() {
createCanvas(600, 600);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
   
    strokeWeight(01);
    line(mouseX, mouseY, pmouseX, pmouseY);
    stroke('black');
    
  } else if (toolChoice == '2') { // second tool

    strokeWeight(3);
    line(mouseX, mouseY, pmouseX, pmouseY);
    strokeWeight(1);
    stroke('black');
  } else if (toolChoice == '3') { // third tool

    strokeWeight(5);
    line(mouseX, mouseY, pmouseX, pmouseY);
    stroke('rgba(150, 150, 150, 0.25)')
  } else if (toolChoice == '4') {

   noStroke();
   fill('black');
    ellipse(mouseX, mouseY, 3, 3);
  } else if (key == '5') { // this tool calls a function
    stroke('rgba(150, 150, 150, 0.009)');
    strokeWeight(30);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
    
 // make testbox do something!
 //   line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '6') {

    stroke('rgba(0, 0, 255, 0.005)');
    strokeWeight(20);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '0') {

   stroke('white');
strokeWeight(30);
line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '8') {

    textSize(random(5, 15));
  fill('rgba(9,211,203, 0.5)')
  noStroke();
  text(myStringB, mouseX, mouseY);
  } else if (toolChoice == '9') {
  
    fill('black');
    noStroke();
    text(myStringA, mouseX, mouseY);
  //} else if (toolChoice == '0') {
   // stroke(0, 0);
   // fill(random(255), random(255), random(255), random(255));
   // rect(mouseX, mouseY, 200, 150);
  } else if (toolChoice == '7') { // g places the image we pre-loaded
    image(img, mouseX, mouseY, 50, 50);
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
