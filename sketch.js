var bulett,wall ; 
var speed,weight ; 

function setup() {
 var canvas =  createCanvas(500,400);
 //canvas.shapeColor = color(80,80,80);


  speed=random(45,60);
  weight=random(400,1500);

  bulett =  createSprite(50,200,40,10);
 
 wall = createSprite(400,200,40,80);
 wall.shapeColor = ""
}


function draw() {
  background(80,80,80);  

  bulett.velocityX = speed ; 

  if(wall.x - bulett.x < wall.width/2 + bulett.width/2) {
    bulett.velocityX = 0 ;
      var deformation = 0.5*weight*speed*speed /22500 ; 
      if(deformation > 180 )
      {
        bulett.shapeColor = "lightgreen"
      }
      if(deformation < 180 && deformation  > 100 ) 
      {
        bulett.shapeColor = "lightpink"
      }
      if(deformation < 100 ) 
      {
        bulett.shapeColor = "lightgreen"
      }
    } 
  drawSprites();
}