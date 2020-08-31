var Car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);


speed = random(55,90);
weigth = random(400,1500);

car = createSprite(50,200,50,30);
car.velocityX = speed;
car.shapeColor = "cyan";

wall = createSprite(1500,200,60,height/2);
wall.shapeColor = (80,80,80);

}


function draw() {
  background(0,0,0);  

  change();

  drawSprites();
}

function change(){
  if(wall.x-car.x < (car.width + wall.width)/2){
    car.velocityX = 0;
    var d = 0.5 *weight *speed *speed/22509;
    if (d > 180){
       car.shapeColor =color(225,225,0);
    }
    if (d < 180 && d > 100){
       car.shapeColor = color(0,128,0);
    }
    if (d < 100 ){
       car.shapeColor = color(225,0,0);
    }

  }
}


