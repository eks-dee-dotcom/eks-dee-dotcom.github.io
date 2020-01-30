
//======================================
arcCount = 150
speed = 1
arcMaxOpen = 1
arcMinOpen = 45
circleEdge = 100*2
arcSize = 150*2
lineWidth = 3
//======================================

arcs = []


function setup() {
  createCanvas(windowWidth,windowHeight)
  cx = windowWidth/2
  cy = windowHeight/2
  angleMode(DEGREES)
  for(let i = 0; i<arcCount; i++){
    arcs.push(new entity(i))
  }
  noFill()
  stroke(220)
  strokeWeight(lineWidth)
}

function draw(){
  translate(cx,cy)
  background(20)
  arcs.forEach((e) => {
    e.update()
    e.render()
  })
}

class entity{
  constructor(i){
    this.i = i
    this.phase = 360/arcCount*i
    this.renderAngle = 360/arcCount*i
    this.renderDist = -circleEdge
    this.x = sin(this.renderAngle)*this.renderDist
    this.y = cos(this.renderAngle)*this.renderDist
    this.startAngle = 0
    this.endAngle = 0
  }
  update(){
    this.phase += speed
    this.startAngle = map(sin(this.phase)*180,-180,180,180-arcMaxOpen+90-(this.i*(360/arcCount)),180-arcMinOpen+90-(this.i*(360/arcCount)))
    this.endAngle =   map(sin(this.phase)*180,-180,180,-180+arcMaxOpen+90-(this.i*(360/arcCount)),-180+arcMinOpen+90-(this.i*(360/arcCount)))
  }
  render(){
    arc(this.x,this.y,arcSize,arcSize,this.startAngle,this.endAngle)
  }
}
