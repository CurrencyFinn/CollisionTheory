class Particle {

    constructor (r,m, s, x, y, z) {

      //liniear motion // velocity [hec/s]
      this.m = m;
      this.position = new p5.Vector(x,y,z);
      let IntialV = Math.sqrt((3*kb*T)/(this.m*1.66E-27))/100;       // relation between kinetic energy and ideal gas law for a single particle
      this.velocity = p5.Vector.random3D()
      let magnitude = IntialV/this.velocity.mag()
      this.velocity.mult(magnitude)

      //angular motion
      this.anglePosition = new p5.Vector(0,0,0)
      this.anglurVelocity = p5.Vector.random3D()
      this.anglurVelocity.div(PI)
      this.s = s;
      this.r = r;
    }
  
    update () {
      this.position.add(this.velocity);
      this.anglePosition.add(this.anglurVelocity);
    }
  
    show () {
      noStroke();
      //stroke(0,255,0);    //see rotation
      push();
      angleMode(RADIANS); 
      translate(this.position.x, this.position.y, this.position.z)
      rotateX(this.anglePosition.x)
      rotateY(this.anglePosition.y)
      rotateZ(this.anglePosition.z)
      fill(this.s);
      sphere(this.r);
      pop();
    }

    collisions(other) {
      let distanceVect = p5.Vector.sub(other.position, this.position);

      let distanceVectMag = distanceVect.mag();

      let minDistance = this.r + other.r;

      
      let rotationalKEnergy = (1/2)*(2/5)*this.m*this.r**2*this.anglurVelocity.mag()**2+(1/2)*(2/5)*other.m*other.r**2*other.anglurVelocity.mag()**2;
      let linearKEnergy = 1/2*this.m*this.velocity.mag()**2+1/2*other.m*other.velocity.mag()**2;
      let totalEnergy = rotationalKEnergy + linearKEnergy;
      //console.log(totalEnergy)      // sometimes the particle is still stuck inside, mainly because dt is not infinity small, therefore a drastical change (before - after colliding) in the total energy change is not permitted.
      Elist.push(totalEnergy);
      if (distanceVectMag < minDistance) {
        if (linearKEnergy >= Eact) {
          this.reactionOccur(other);
        } else{
          this.paulieRep(other, linearKEnergy);
        }
      }
    }

    coulombAtrr() {
        
    }

    paulieRep(other, E) {

        // perfect elastic collision
        let distanceVect = p5.Vector.sub(other.position, this.position);
        let distanceVectMag = distanceVect.mag();
        let minDistance = this.r + other.r;

          //correction
          let distanceCorrection = (minDistance - distanceVectMag) / 2.0;
          let d = distanceVect.copy();
          let correctionVector = d.normalize().mult(distanceCorrection);
          other.position.add(correctionVector);
          this.position.sub(correctionVector);

          //collision     // has merely multiple collisions (still inside each other), no acceleration, no rotation, possibly also the linear velocities are wrong due to my lack of linear algebra
          let normal = this.position.copy().sub(other.position).normalize();
          let relativeVelocity = this.velocity.copy().sub(other.velocity);
          let dot = relativeVelocity.dot(normal);
          let impuls = -dot/(1/this.m+1/other.m);
          let vFinal1 = this.velocity.copy().sub(impuls/this.m);
          let vFinal2 = other.velocity.copy().add(impuls/other.m);
          let KFinal = 1/2*this.m*vFinal1.mag()**2+1/2*other.m*vFinal2.mag()**2;

          // checks if the linear kinetic energy after is smaller then the energy before with increasing measure of 10%, measure so the energy in the system does not shoot up (unrealistic).
          if (KFinal < 1.1*E) {
            this.velocity.sub(impuls/this.m);
            other.velocity.add(impuls/other.m); 
          }
    }

    reactionOccur (other) {

      // perfect inelastic collision
      let distanceVect = p5.Vector.sub(other.position, this.position);
      let distanceVectMag = distanceVect.mag();
      let minDistance = this.r + other.r;

        //correction
        let distanceCorrection = (minDistance - distanceVectMag) / 2.0;
        let d = distanceVect.copy();
        let correctionVector = d.normalize().mult(distanceCorrection);
        other.position.add(correctionVector);
        this.position.sub(correctionVector);

        //collision
        let velocityCM1 = this.velocity.copy();
        let velocityCM2 = other.velocity.copy();
        let vFinal= velocityCM1.mult(this.m).add(velocityCM2.mult(other.m)).div(this.m+other.m);
        
        // to correct for any faulty collisions a.k.a some particles went in other particles due to the complexicity of checking multiple particles
        if (vFinal.mag()< this.velocity.mag()) {
          this.velocity = vFinal;
          other.velocity = this.velocity;
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
  let Elist = [];
  const Eact = 1000; 
  const T = 500; // [K]
  const kb = 1.38E-23;
  
  function setup() {
    // can be used to randomize the particles, would need an itteration for every single particle
    let x = random(-250, 250);
    let y = random(-250, 250);
    let z = random(-250, 250);  
    createCanvas(windowWidth, windowHeight, WEBGL); //700*700*500 box
    // mass in u, also the radius of the particle does not relate to the dimensions of the box.
    p = new Particle(80,50,'red',0,0,0); //oxygen
    particles.push(p);
    p = new Particle(30,10,'black',random(-250, 250),random(-250, 250),random(-250, 250)); // carbon
    particles.push(p);
    p = new Particle(30,10,'black',random(-250, 250),random(-250, 250),random(-250, 250)); // carbon
  }
  
  function draw() {
    background(255);
    // reference frame the particles lay in, closed system.
    orbitControl(10,10);
    lights();
    push();
    stroke(0);       
    noFill();
    translate(0,0,0)
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
    console.log(Elist)
    Elist = [];
  }
  