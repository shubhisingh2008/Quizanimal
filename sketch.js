var bg,bg2,form,system,code,security;
var lionimg,catimg,fishimg,horseimg,birdimg;
var lion,cat,fish,horse,bird;
var score=0;

function preload() {
  bg = loadImage("bg.jpg");
  bg2 = loadImage("bg2.jpg");

}

function setup() {
  createCanvas(1000,600);
  system = new System()
  security = new Security()


}

function draw() {
  background(bg);
  clues();
  security.display();

  //add text for the story
  fill("pink")
  textSize(18)
  text("Enter the zoo by answering these :",550,220)

  fill("pink")
  textSize(18)
  text("WHEN YOU SCORE ALL FIVE CORRECT ,",550,370)

  fill("pink")
  textSize(18)
  text("YOU WILL ENTER THE ZOO",550,400)

  fill("black")
  textSize(50)
  text("EVS",650,300)

  fill("pink")
  textSize(18)
  text("Enter the code in capital letters",570,500)

  // Add code to display score in the middle of the screen
  fill("black")
  textSize(40)
  text("score:"+score,600,200)

  // Add code to display the end screen
if(score === 5){
  clear()
  background(bg2)
  fill("black")
  textSize(40)
  text("WELOCOME TO THE ZOO",250,200)
}

  drawSprites()
}