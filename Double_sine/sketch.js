let colorData = {
  fore:220,
  back:20,
  accent:0,
  accent2:0
}
dots = []
const linecount = 100//130
let linecol





function setup() {
  pixelDensity(1)
  frameRate(40)
  colorData.accent2 = color(255,0,255)
  colorData.accent = color(0,255,255)
  createCanvas(windowWidth,windowHeight)
  cx = windowWidth/2
  cy = windowHeight/2
  outerBound = min(windowHeight/2, windowWidth/2)*0.9
  for(let i = 0;i<linecount;i++){
    dots.push(new dot(i))
  }

}

function draw() {
  translate(cx,cy)
  background(colorData.back)
  //print(dots)
  print(min(windowWidth,windowHeight))
  dots.forEach((e) =>{
    linecol = lerpColor(colorData.accent,colorData.accent2,map(e.i,0,linecount,0,1))
    e.update()
    e.render(linecol)
  })
}

class dot{
  constructor(i){
    this.i = i
    this.px = map(i,0,linecount,-cx*1.2,cx*1.2)
    this.x = this.px
    this.y = map(sin(this.x),-1,1,-cy*0.9,cy*0.9)
  }
  update(){
    this.x = this.px + sin(frameCount/10)*100
    this.y = map(sin(this.x/100),-1,1,-cy*0.9,cy*0.9)
  }
  render(color){
    strokeWeight(10)
    stroke(color)
    line(this.px,this.y,this.x,sin(this.x/100)*100)
  }
}