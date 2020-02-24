 var mrect,frect;
function setup() {
  createCanvas(1200,800);



 mrect = createSprite(400, 200, 100, 50);
 
 frect = createSprite(200,200,50,100);
 
 frect.shapeColor = "cyan";
 mrect.shapeColor = "cyan";
}

function draw() {
  background(100,30,50);
  mrect.x = World.mouseX;
  mrect.y = World.mouseY;
   
  if(mrect.x-frect.x < mrect.width/2+frect.width/2&&
    frect.x-mrect.x < frect.width/2+mrect.width/2&&mrect.y-frect.y <
    mrect.height/2+frect.height/2&&mrect.y-frect.y <
    mrect.height/2+frect.height/2&&frect.y-mrect.y <
    frect.height/2+mrect.height/2){
    frect.shapeColor = "red";
    mrect.shapeColor = "red";
  }
  else{
    frect.shapeColor = "cyan";
    mrect.shapeColor = "cyan";
  }

  drawSprites();
}