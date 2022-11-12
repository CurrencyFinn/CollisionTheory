class Particle {

    constructor (r,m, s, x, y, z) {
      this.position = new p5.Vector(x,y,z)
      this.velocity = p5.Vector.random3D();
      this.velocity.mult(7)
      this.s = s
      this.r = r
      this.m = m
    }
  
    update () {
      this.position.add(this.velocity);
    }
  
    show () {
      noStroke();
      push()
      translate(this.position.x, this.position.y, this.position.z)
      fill(this.s)
      sphere(this.r);
      pop()
    }

    collisions(other) {
      let distanceVect = p5.Vector.sub(other.position, this.position);

      let distanceVectMag = distanceVect.mag();

      let minDistance = this.r + other.r;

      if (distanceVectMag < minDistance) {
        let distanceCorrection = (minDistance - distanceVectMag) / 2.0;
        let d = distanceVect.copy()
        let correctionVector = d.normalize().mult(distanceCorrection);
        other.position.add(correctionVector);
        this.position.sub(correctionVector);

      }
    }
    border () {
      if (this.position.x > 1/2*500 - this.r) {
        this.position.x = 1/2*500 - this.r;
        this.velocity.x *= -1;
      }  else if (this.position.y > 1/2*500 - this.r) {
        this.position.y = 1/2*500 - this.r;
        this.velocity.y *= -1;
      }  else if (this.position.x < -1/2*500 + this.r) {
        this.position.x = -1/2*500 + this.r;
        this.velocity.x *= -1;
      }  else if (this.position.y < -1/2*500 + this.r) {
        this.position.y = -1/2*500 + this.r;
        this.velocity.y *= -1;
      }  else if (this.position.z > 250 - this.r) {
        this.position.z = 250 - this.r;
        this.velocity.z *= -1;
      } else if (this.position.z < -250 + this.r) {
        this.position.z = -250 + this.r;
        this.velocity.z *= -1;
      }
    }

}
  
  let p;
  let particles = [];
  
  function setup() {
    var x = random(-1/2*500, 1/2*500);
    var y = random(-1/2*500, 1/2*500);
    var z = random(-250, 250)    
    createCanvas(windowWidth, windowHeight, WEBGL); //700*700*500 box
    p = new Particle(80,10,'red',x,y,z); //oxygen
    particles.push(p);
    p = new Particle(30,10,'black',x,y,z); // carbon
    particles.push(p);
  }
  
  function draw() {
    background(255);
    orbitControl(10,10);
    lights();
    push();
    stroke(0);       
    noFill();
    box(500,500);
    pop();
    for (let i =0; i<particles.length; i++) {
      particles[i].update();
      particles[i].show();
      particles[i].border();
      for (let j =i+1; j<(particles.length); j++) {
        particles[i].collisions(particles[j])
      }
    }
  }
  