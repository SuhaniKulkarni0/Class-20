var frect, mrect

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  frect = createSprite(300,350,50,50);
  frect.shapeColor = "yellow";
  frect.debug = true;
  mrect = createSprite(700,200,60,60);
  mrect.shapeColor = "blue"
  mrect.debug = true;
}

function draw() {
  background("black");  
  drawSprites();
  mrect.x = mouseX;
  mrect.y = mouseY;


  if(mrect.x-frect.x <= mrect.width/2+frect.width/2 &&
    frect.x-mrect.x <= mrect.width/2+frect.width/2 &&
    mrect.y-frect.y <= mrect.width/2+frect.width/2 &&
    frect.y -mrect.y <= mrect.width/2+frect.width/2){
    frect.shapeColor = "red";
    mrect.shapeColor = "red";
  }
  else{
    frect.shapeColor = "green";
    mrect.shapeColor = "green";
  }
}