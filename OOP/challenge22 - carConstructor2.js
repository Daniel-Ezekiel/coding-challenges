'use strict';

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

const Car = {
  init(make, speed) {
    this.make = make;
    this.speed = speed;
  },

  get speedUS() {
    return `${this.speed / 1.6} mi/h`;
  },

  set speedUS(speed) {
    console.log(`New speed in mi/h is ${(this.speed /= 1.6)}`);
    return (this.speed *= 1.6);
  },

  accelerate() {
    return (this.speed += 10);
  },

  brake() {
    return (this.speed -= 5);
  },
};

// const bmw = new Car('BMW', 120);
// const merc = new Car('Mercedes', 95);

const ford = Object.create(Car);
ford.init('Ford', 120);
