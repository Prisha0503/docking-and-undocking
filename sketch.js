var Iss,spacecraft,bg,issimg,scimg1,scimg2,scimg3,scimg4
var hasDocked=false

function preLoad(){
  bg=loadImage("spacebg.jpg")
  issimg=loadImage("iss.png")
  scimg1=loadImage("spacecraft1.png")
  scimg2=loadImage("spacecraft2.png")
  scimg3=loadImage("spacecraft3.png")
  scimg4=loadImage("spacecraft4.png")

}
function setup() {
  createCanvas(600,350);
  spacecraft=createSprite(285,240)
  //spacecraft.addImage(scimg1)
  spacecraft.scale=0.15
  Iss=createSprite(350,150)
Iss.addImage(issimg)
 Iss.scale=0.25
 
}

function draw() {
  background(bg);
  
  spacecraft.addImage(scimg1)

  if(!hasDocked){
    spacecraft.x=spacecraft.x+random (-1,1)

    if(keyDown(UP_ARROW)){
      spacecraft.y=spacecraft.y-2
    }
    if(keyDown(DOWN_ARROW)){
      spacecraft.y=spacecraft.y+2
    }
    if(keyDown(RIGHT_ARROW)){
      spacecraft.x=spacecraft.x+2
      spacecraft.addImage(scimg3)
    }
    if(keyDown(LEFT_ARROW)){
      spacecraft.x=spacecraft.x-2
     spacecraft.addImage(scimg4)
    }

  }
  if(spacecraft.y<=(Iss.y+70) && spacecraft.x<=(Iss.x-10)){
    hasDocked=true
    textSize(25)
    fill ("white")
    tex("docking Successful",200,300)
  }
  drawSprites();
}