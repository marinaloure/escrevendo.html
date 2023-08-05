function setup() {
    createCanvas(600, 600);
    background("white");
  }
  
  function draw() {
    
    stroke("green");
    fill("red");
  
    //console.log(mouselspressed);
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35, );
    }
  }