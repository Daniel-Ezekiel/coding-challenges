'use strict';

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

class CarCl {
  constructor(make, currentSpeed) {
    this.make = make;
    this.currentSpeed = currentSpeed;
  }

  accelerate() {
    this.currentSpeed += 10;
    return this;
  }

  brake() {
    this.currentSpeed -= 5;
    console.log(`Braking to ${this.currentSpeed}`);
    return this;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, currentSpeed, charge) {
    super(make, currentSpeed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    if (this.#charge < chargeTo) this.#charge = chargeTo;
    console.log(`Charged to ${this.#charge}`);
    return this;
  }

  accelerate() {
    super.accelerate();
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.currentSpeed}, with a charge of ${
        this.#charge
      }%.`
    );

    return this;
  }
}

const rivian = Object.create(EVCl);
rivian.init('Rivian', 120, 23);
rivian.chargeBattery(53).accelerate().brake().accelerate().accelerate().brake();
