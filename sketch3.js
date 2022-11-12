  function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL); //700*700*500 box
  }
  
  function draw() {
    background(0);
    orbitControl(10,10);
    lights();
    stroke(255);       
    noFill();
    box(500,500);
    
  }
  