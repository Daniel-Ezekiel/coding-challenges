'use strict';

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

const Car = function (make, currentSpeed) {
  this.make = make;
  this.currentSpeed = currentSpeed;
};

Car.prototype.accelerate = function () {
  this.currentSpeed += 20;
  console.log(
    `${this.make} is going at ${this.currentSpeed}, with a charge of ${this.charge}%.`
  );
};

Car.prototype.brake = function () {
  this.currentSpeed -= 5;
  console.log(
    `${this.make} is going at ${this.currentSpeed}, with a charge of ${this.charge}%.`
  );
};

const EV = function (make, currentSpeed, charge) {
  Car.call(this, make, currentSpeed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  console.log(`This car is charged to ${this.charge}%`);
  // return this.charge;
};
EV.prototype.accelerate = function () {
  this.charge -= 1;
  console.log(
    `${this.make} is going at ${this.currentSpeed}, with a charge of ${this.charge}%.`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
tesla.accelerate();
tesla.brake();
