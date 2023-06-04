function setup() {
  createCanvas(400,400);
 var box 
 box = createSprite(200,200,30,30);
}

function draw(){
  background(400);

  if(keyIsDown(RIGHT_ARROW))
  {
    background("red");
  }
    // escribir el código para cambiar el color del fondo 
    // rojo cuando se presiona RIGHT_ARROW (tecla de flecha derecha)
    
    
  
    if (keyIsDown(LEFT_ARROW)) 
    {
      background("blue");
      
    }
   
      if (keyIsDown(UP_ARROW)) 
    {
      background("yellow");
     
    }
  
    if (keyIsDown(DOWN_ARROW)) 
    {
      background("green");
    }
    
    drawSprites();
  
} 



