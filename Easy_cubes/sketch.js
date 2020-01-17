
//================================================
xeasing = 0.9
zeasing = 0.9
xspeed = 0.001
zspeed = 0.001
cubeCount = 6
cubeSizeMin = 20
cubeSizeMax = 500
changeSquare = false
rotLimit = 30
//================================================


centrex = 0
centrez = 0
xval = 0
zval = 0
pinxPos = 0
pinyPos = 0
pin = false
cx = 0
cy = 0
function setup() {
  smooth()
  cx = windowWidth/2
  cy = windowHeight/2
  createCanvas(windowWidth,windowHeight,WEBGL)
}

function draw(){
  if(changeSquare){
  centrex += xval// 0.000
  centrez += zval//0.002
  }else{
    centrex += xspeed
    centrez += zspeed
  }
  background(10)
  fill(0,255,255,20)//noFill()
  stroke(220)
  strokeWeight(1)
  recBoxDraw(0,centrex,centrez)
  if(pin){
    push()
    stroke(0)
    fill(255)
    ellipse(pinxPos-cx,pinyPos-cy,5,5)
    pop()
  }
  push()
  noFill()
  stroke(255)
  if(changeSquare){
    rect(10-cx,10-cy,102,102)
  }
    pop()
  
}

function drawBox(size,xrot,zrot){
  rotateX(xrot)
  rotateZ(zrot)
  box(size)
  rotateZ(-zrot)
  rotateX(-xrot)
}
function recBoxDraw(count,xrot,zrot){
  count +=1
  drawBox(((((cubeSizeMax-cubeSizeMin)/cubeCount)*count)+cubeSizeMin),xrot,zrot)
  if(cubeCount>count){
    recBoxDraw(count,xrot*xeasing,zrot*zeasing)
  }
}
function mouseClicked(){
  if(mouseX>10 & mouseX<110 & mouseY>10 & mouseY<110 & changeSquare){
    pinxPos = mouseX
    xval = map(pinxPos,10,110,0.001,0.01)
    pinyPos = mouseY
    zval = map(pinyPos,10,110,0.001,0.01)
    print(pinxPos,pinyPos)
    pin = true
  }else{
    pin=false
  }
  print(pin)
}