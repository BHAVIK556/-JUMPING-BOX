var canvas;
var music;
var s1,s2,s3,s4;
var box;
var b,b2,b3,b4
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    
    //create 4 different s1
    
    s1=createSprite(100,580,170,20)
    s1.shapeColor=("red")
    s2=createSprite(300,580,170,20)
    s2.shapeColor=("yellow")
    s3=createSprite(500,580,170,20)
    s3.shapeColor=("blue")
    s4=createSprite(700,580,170,20)
    s4.shapeColor=("green")
    //create box sprite and give velocity
box=createSprite(400,400,20,20)
box.x = Math.round(random(20,720));
    box.velocityY=4;
    box.velocityX=2
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    b=createSprite(0,300,20,900)
    b.visible=false
    b2=createSprite(800,400,20,900)
    b2.visible=false
    b3=createSprite(300,0,1000,20)
    b3.visible=false
    b4=createSprite(300,600,1000,20)
    b4.visible=false
    box.bounceOff(b)
    box.bounceOff(b2)
    box.bounceOff(b3)
    box.bounceOff(b4)
    
    //add condition to check if box touching surface and make 
    if(s1.isTouching(box) && box.bounceOff(s1)) {
        box.shapeColor=("red")
        music.play()
      }
           if(s4.isTouching(box) && box.bounceOff(s4)) {
        box.shapeColor=("green")
        music.play()
           }
      if(s3.isTouching(box) && box.bounceOff(s3)) {
        box.shapeColor=("blue")
        music.play()
      }
      if (s2.isTouching(box)) {
        box.shapeColor=rgb(255,128,0)
        box.velocityX=0
        box.velocityY=0
        music.stop();
        }
        
    drawSprites();
}

function key() {




}