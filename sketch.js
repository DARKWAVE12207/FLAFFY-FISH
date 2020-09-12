var bone,fish,fork,pencil,cup,brush,water;
var b,f,fo,p,r,t,s=0,uw,g,c,d,q,h
var play=1,end=0
var gamestate=play

function preload(){
  bone=loadImage("b.png")
  fish=loadImage("f.png")
   fork=loadImage("fo.png")
   pencil=loadImage("p.png")
   cup=loadImage("r.png")
   brush=loadImage("t.png")
   water=loadImage("uw.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
uw = createSprite(200,0, width,height);
uw.addImage(water);
uw.scale = 4; f = createSprite(40, 190);
f.addImage(fish);
f.scale = 0.5;
//f.debug = true
f.setCollider("circle",0,0,30)
g = createGroup();
c = createGroup();
d = createGroup();
q = createGroup();
h = createGroup();
fo = createSprite(210, 390);
fo.addImage(fork);
p = createSprite(290, 50);
p.addImage(pencil);
r = createSprite(320, 340);
r.addImage(cup);
t = createSprite(150, 320);
t.addImage(brush);
var s= 0;
var play =1
var end =0
var gamestate = play 
}


function draw() {
  background("white");
 edges= createEdgeSprites();
f.collide(edges[3]);
    
  drawSprites();
  textSize(20)
  fill("black")
  text("score"+s,300,20 )
  if (gamestate== play) {
    uw.velocityX = -3;  
  s= s+ Math.round(frameCount /300)
 
  
    if (keyDown("space")|| touches.length<0) {
    f.velocityY = -4;
      touches=[]
    //playSound("sound://category_pop/bamboo_pop_v2_notification4.mp3");
  }

  f.velocityY = f.velocityY +0.5;
 t.velocityX = -3 ;
  r.velocityX = -3;
  p.velocityX = -3;
  fo.velocityX = -3;
  if (uw.x<0) {
  uw.x=width/2
    
  }

f.collide(edges[2]);
A();
S();
P();
K();
Z();
if (f.isTouching(g)||f.isTouching(h)||f.isTouching(c)||f.isTouching(d)||f.isTouching(q)) {
gamestate= end;
   // playSound("sound://category_accent/puzzle_game_accent_a_05.mp3");

}

}
else if(gamestate == end){
  uw.velocityX = 0
  f.velocityY = 0
  g.setVelocityXEach(0)
  h.setVelocityXEach(0)
  c.setVelocityXEach(0)
  d.setVelocityXEach(0)
  q.setVelocityXEach(0)
}
}

function A() {
  if (frameCount%80==0) {
    b = createSprite(180, Math.round(random(80,300)));
    b.addImage(bone);
    b.velocityX = -3;
    g.add(b)
    //b.debug= true
    b.setCollider("rectangle",0,0,10,100)
  }
}
function S() {
  if (frameCount%100==0) {
    var fo = createSprite(180,Math.round(random(80,300)));
    fo.addImage(fork);
    fo.velocityX = -3;
  c.add(fo)
 // fo.debug= true
    
  }
}
function P() {
  if (frameCount%120==0) {
    var t = createSprite(180, Math.round(random(80,300)));
    t.addImage(brush);
    t.velocityX = -3;
    d.add(t)
    //t.debug= true
    t.setCollider("rectangle",0,0,10,100)
  }
}
function K() {
  if (frameCount%140==0) {
    var p = createSprite(180, Math.round(random(80,300)));
    p.addImage(pencil);
    p.velocityX = -3;
    q.add(p)
   // p.debug= true
    p.setCollider("rectangle",0,0,10,80)
  }
}
function Z() {
  if (frameCount%160==0) {
    var r = createSprite(180, Math.round(random(80,300)));
    r.addImage(cup);
    r.velocityX = -3;
    h.add(r)
     //r.debug= true
    r.setCollider("rectangle",0,0,50,80)
  }
}





