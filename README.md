# CollisionTheory

Description: 

Collision theory is a principle of chemistry used to predict the rates of chemical reactions. 
This simulation visualizes the occurrence of such a collision following the principal rules of collision theory.

Run: 
in the setup function particles can be added, this by calling the particle class (constructor). There are six parameters; r,m, s, x, y, z. Where r is the radius, m is the mass [u], s is the colour [in string format], x,y and z are the positions in the cartesian coordinate system. Moreover, T can be varied in the constants, this is the temperature of the system [K]. Finally, the activation energy (for all reaction) can be set. Around the box can be mapped using orbital control.
Note: mouse pad is preferred for zooming in.

///////////////////// Setup: //////////////////////
Reaction Volume:

The space of our universe (as of now) is 4 dimensional; x,y,z,t. All these 4 dimensions are displayed during the simulation. 
Vectors of position, velocity (as a function of position and time) and their changes due to momentum change upon collision. 
A particle is randomly positioned in a volume of 500X500X500 (pixels). An atom, particle, molecule is assumed to be a symmetric hard sphere over the full surface.
Space not filled with any particle, is pure vacuum. The system [the "box" volume] is closed. Meaning that the energy inside the system can not be exchanged with the outside.
Therefore, when a particle encounters the wall a perfect elastic collision occurs, where magnitude of mass of the wall goes to infinity (potential energy at the wall is infinity).
Inversing the direction of the velocity vector. No fields, or forces work on the system, such as gravity. The system is at a constant temperature. 

Particle behaviour:

The particle is a sphere, and therefore has a radius [r], and is measured. The particle, has a mass, assumed that the density over the particle is homogeneous. 
Therefore, the centre of mass lays at the origin of the particle. A colour can be given to particle, for instance trough CPK colouring strategy. 
The particle is a gas and behaves ideally.

As mentioned before, the particle is positioned at the random x,y,z coordinates in the volume, put into a vector.
The particle receives three random unit vectors with magnitudes [0,1] in all directions (x,y,z), for its velocity. 
The magnitude of this velocity vector is calculated combining kinetic theory, ideal gas law, constant of Boltzmann.
Note: To visualize the collision the magnitude of velocity is divided by 100 [to hec/s].

Although not necessary for collision theory (see discussion), the particle has a angular, position and velocity.
Note: not taken in account (yet) into the collision of the particles. 

For a reaction to occur, also known as a successful collision, a typical energy must reach, that of changing to the transition state. 
This energy is the so-called energy of activation. In collision theory this activation energy is only reached by the translation degrees of freedom of the particle.
This we express as the (linear) kinetic energy of that particle, while mass is a constant for the particles (they don't react after already reacting). 
The (linear) kinetic energy is only dependent on the magnitude of the velocity vector of that particle. Then this kinetic energy is equal or larger than the activation energy (a constant).
A reaction occurs, this is visualized as a perfect inelastic collision. The centre of mass changes its position, and therefore also the centre of velocity changes its origin and object.
On the contrary, if the velocity is to low and therefore the kinetic energy is lower than the activation energy for that reaction, no reaction occurs.
Moreover, the particles do not move trough each other (no tunnelling this time), but they collide mainly due to repellent forces (Pauli repulsion).
In (my) collision theory this is seen as a perfect elastic collision, their momentum is interchanged. 

////////////////////////////////////////////////

Discussion: 
If the person reading this, not already thinks this is odd, then it would be a wise idea to follow a course on chemical bonding. 
For instance, position of electrons, or the probability to find an electron is rather important for a chemical bond, use of density clouds for electrons could be useful here. 
Moreover, following the standards of collision theory, entropic behaviour of the particle (vibration and rotation) does not affect the reaction rate.
Although, from a perspective of having two balls, spinning them, and hitting them on one another, do have a different change on the final velocity vectors then nonrotating bodies.
Therefore, there is a setup for possibly adding rotational degrees of freedom in the system (they can be shown by commenting out the 27: NoStroke();, activating line 28).
On the contrary, it totally depends on what reference frame is looked at. Perhaps the electrons are fully stational with respect to the core or visa versa (then approximations can be made).
Moreover, do particles do not attract each other in a sort of manner, there must be some sort of attracting force between them intramolecular and intramolecular forces.
Pauli repulsion happens not only at the core, but also at distance from the core and to what extent can a particle penetrate that barrier (lets stay away from quantum mechanics).

Lack of knowledge:
There are a lot of approximations made during this visualization (some that experts may easily spot), for instance there is no black body radiation between particles. 
This all to simplify the computational power JS can handle and my brains. I wanted to visualize the concept that can be (rather easily) calculated by crunching equations and numbers.
Moreover, my knowledge about linear algebra has increased by thus from 0 to something. So the concept of the elastic collision equations could be strongly wrong.
However, they have been tested by making 1 particle very heavy (approx. infinity) and the other relatively light, therefore the velocity vector of the light particle inverses.
While finding angles to use polar coordinates, are relatively difficult with the program (headings of vectors). Besides, to save me some work I neglected the rotation in the colliding aspect as previously mentioned. More checks on dimensions, for instance the kinetic energy is not really in joule. 
Finally, I have experience with JavaScript (using p5js), but more experience using C/C++ and Python.

Bugs:
When colliding the velocity of bother particles are equalled, somewhat making the particle moving in the same direction. 
However, if a particle pushed the "bonded" particles away, or moves trough their "bond", the bond gets enlarged, rather the position gets changed, but their velocities do not change.
This is because the collided particles are not made-up in one new position vector and velocity vector.
The energy in the system does not stay constant, this invokes the first law of thermodynamics. Most probably this occurs when the particles are inside of each other,
while we can not have a dt going to infinity in (this) computer program. There are lines for correction, but still the kinetic energy increases. 
This has been limited by introducing the if statement; that after the collision the kinetic energy must be smaller then 1.1*[kinetic energy before the collision], else the collision did not happen, and gets iterated again in the next frame. The same happened for a collision upon reaching the occurrence of the reaction. The particle combined particle velocity should up.  The same iteration has been done as the previous with kinetic energy, but now with the velocity (as the dependency is only on velocity). 
Lastly, something surprising happens, unintentionally, when a high velocity particle reacts on a coding it can shoot of another already bounded particle of the body. Creating a sort of equilibrium

Upcoming updates:
* Activation energy differing between molecules
* After collision creating list element [should improve distancing of bond]. 

Sources:
https://www.plasmaphysics.org.uk/collision3d.htm
https://www2.msm.ctw.utwente.nl/sluding/PAPERS/coll2p.pdf
https://www.euclideanspace.com/physics/dynamics/collision/threed/index.html
https://en.wikipedia.org/wiki/Equipartition_theorem
https://p5js.org/
https://www.lehman.edu/faculty/anchordoqui/chapter15.pdf
https://exploratoria.github.io/exhibits/mechanics/elastic-collisions-in-3d/
Lectures by a fellow Limburger.
