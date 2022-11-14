# CollisionTheory

Description: 

Collision theory is a principle of chemistry used to predict the rates of chemical reactions. 
This simulation visualizes the occurence of such a collision following the principle rules of collision theory.

Setup:
Reaction Volume:

The space of our universe (as of now) is 4 dimensional; x,y,z,t. All these 4 dimensions are displayed during the simulation. 
Vectors of position, velocity (as a function of position and time) and their changes due to momentum change upon collision. 
A particle is randomly positioned in a volume of 500X500X500 (pixels). An atom, particle, molecule is assumed to be a symetric hard sphere over the full surface.
Space not filled with any particle, is pure vacuum. The system [the "box" volume] is closed. Meaning that the energy inside the system can not be exchanged with the oustide.
Therefore, when a particle comes in contact with the wall a perfect elastic collision occurs, where magnitude of mass of the wall goes to infinity (potential energy at the wall is infinity).
Inversing the direction of the velocity vector. No fields, or forces work on the system, such as gravity. The system is at a constant temperature. 

Particle behaviour:

The particle is a sphere, and therefore has a radius [r], and is measured. The particle, has a mass, assumed that the density over the particle is homogenuous. 
Therefore, the center of mass lays at the origin of the particle. A color can be given to particle, for instance trough CPK coloring strategy. 
The particle is a gas and behavious ideally.

As mentioned before, the particle is positioned at the random x,y,z coordinates in the volume, put into a vector.
The particle recieves three random unit vectors with magnitudes [0,1] in all directions (x,y,z), for its velocity. 
The magnitude of this velocity vector is calculated combining kinetic theory, ideal gas law, constant of Boltzmann.
Note: To visualize the collision the magnitude of velocity is divided by 100 [to hec/s].

Although not neccesary for collision theory (see discussion), the particle has a angular, position and velocity.
Note: not taken in account (yet) into the collision of the particles. 

For a reaction to occur, also known as a succesful collision, a typical energy has to reached, that of changing to the transition state. 
This energy is the so-called energy of activation. In collision theory this activation energy is only reached by the translation degrees of freedom of the particle.
This we express as the (liniear) kinetic energy of that particle, while mass is a constant for the particles (they don't react after already reacting). 
The (liniear) kinetic energy is only dependent on the magnitude of the velocity vector of that particle. Then this kinetic energy is equal or larger then the activation energy (a constant).
An reaction occurs, this is visualized as a perfect inelastic collision. The center of mass changes its position, and therefore also the center of velocity changes its origin and object.
On the contrary, if the velocity is to low and therefore the kinetic energy is lower than the activation energy for that reaction, no reaction occurs.
Moreover, the particles dont move trough each other (no tunneling this time), but they collide mainly due to repellent forces (paulli repulsion).
In (my) collision theory this is seen as a perfect elasticic collision, their momentum is interchanged. 

Discussion: 
If the person reading this, not already thinks this is odd, then it would be a wise idea to follow a course on chemical bonding. 
For instance, position of electrons, or the probability to find an electron is rather important for a chemical bond, use of density clouds for electrons could be useful here. 
Moreover, follwing the standards of collision theory, entropic behaviour of the particle (vibration and rotation) do not effect the reaction rate.
Although, from a perspective of having two balls, spinning them, and hitting them on oneanother, do have a different change on the final velocity vectors then non rotating bodies.
Therefore, there is a setup for possibly adding rotational degrees of freedrom in the system (they can be shown by commenting out the 27:NoStroke();, activating line 28).
On the contrary, it totally depends on what reference frame is looked at. Perhaps the electrons are fully stational with respect to the core or visa versa (then approximations can be made).
Moreover, do particles not attract each other in a sort of manner, there must be some sort of attracting force between them intramolecular and intramolecular forces.
Pauli repulssion happends not only at the core, but also at distance from the core and to what extent can a particle penetrate that barrier (lets stay away from quantum mechanics).

Lack of knowledge:
There are a lot of approximations made during this visualization, for instance their is no black body radition between particles. 
This all to simplify the computational power JS can handle and my brains. I wanted to visualize the concept that can be (rather easily) calculated by crunching equations and numbers.
Moreover, my knowledge about liniear algebra has increased by thus from 0 to something. So the concept of the elastic collision equations could be stronlgy wrong.
However, they have been tested by making 1 particle very heavy (approx. infinity) and the other relatvily light, therefore the velocity vector of the light partilce inverses.
While finding angles to use polar coordinates, are relatively difficult with the program (headings of vectors). Besides, to save me some work I neglected the rotation in the colliding aspect as previously mentioned.
Finally, I have experience with Js (using p5js), but more experience using C/C++ and Pyhon.

Bugs:
When collding the velocity of bother particles are equalled, somewhat making the particle maving in the same direction. 
However if a particle pushed the "bonded" particles away, or moves trough their "bond", the bond gets enlarged, rather the position gets changed, but their velocities do not change.
This is because the collided particles are not madeup in one new position and velocity vector.



Sources:
https://www.plasmaphysics.org.uk/collision3d.htm
https://www2.msm.ctw.utwente.nl/sluding/PAPERS/coll2p.pdf
https://www.euclideanspace.com/physics/dynamics/collision/threed/index.html
https://en.wikipedia.org/wiki/Equipartition_theorem
https://p5js.org/
https://www.lehman.edu/faculty/anchordoqui/chapter15.pdf
https://exploratoria.github.io/exhibits/mechanics/elastic-collisions-in-3d/
Lectures by a fellow Limburger.

