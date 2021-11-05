/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog
class Dog {
}

var dogOne = new Dog();
var dogTwo = new Dog();
console.log(dogOne);
console.log(dogTwo);

// Prompt 2: Snack
class Snack {
}

var snackOne = new Snack();
var snackTwo = new Snack();
console.log(snackOne);
console.log(snackTwo);

// Prompt 3: Shirt
class Shirt {
}

var shirtOne = new Shirt();
var shirtTwo = new Shirt();
console.log(shirtOne);
console.log(shirtTwo);

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog
class Dog1 {
  constructor() {
    this.name = "Spot";
    this.gender = "boy";
    this.color = "black";
  }
}

var dogThree = new Dog1();
console.log(dogThree);

// Prompt 2: Snack
class Snack1 {
  constructor() {
    this.amount = "1 bag";
    this.calories = 100;
    this.brand = "Smart Popcorn";
  }
}

var snackThree = new Snack1();
console.log(snackThree);

// Prompt 3: Shirt
class Shirt1 {
  constructor() {
    this.color = "white";
    this.size = "large";
    this.brand = "Target";
  }
}

var shirtThree = new Shirt1();
console.log(shirtThree);

//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog

class Dog2 {
  constructor(name, gender, color) {
    this.name = name;
    this.gender = gender;
    this.color = color;
  }
}

var dogFour = new Dog2("Spot", "boy", "black");
console.log(dogFour);

// Prompt 2: Snack

class Snack2 {
  constructor(amount, calories, brand) {
    this.amount = amount;
    this.calories = calories;
    this.brand = brand;
  }
}

var snackFour = new Snack2("1 bag", 100, "Smart Popcorn");
console.log(snackFour);

// Prompt 3: Shirt
class Shirt2 {
  constructor(color, size, brand) {
    this.color = color;
    this.size = size;
    this.brand = brand;
  }
}

var shirtFour = new Shirt2("white", "large", "Target");
console.log(shirtFour);
