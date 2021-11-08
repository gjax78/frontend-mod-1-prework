// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = "Geena";
var specialAbility = "will sleep anywhere!";

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var greeting = heroName + " says Zzzz!";
var catchPhrase = "She'll steal your blankets and pillow... She  + ${specialAbility}";

// Declare two variables - power AND energy - set to integers
var power = 100;
var energy = .01;

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy
var fullPower = power * 500;
var fullEnergy = energy + 150;

// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = true;
identityConcealed = false;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings
var archEnemies = ["morning people", "people with ADHD", "excited humans"];
var sideKicks = ["pillow", "blankets", "California king bed", "nighttime"];

// Print the first sidekick to your console
console.log(sideKicks[0]);
// Print the last archEnemy to the console
console.log(archEnemies[2]);
// Write some code to add a new archEnemy to the archEnemies array
var newArchEnemy = archEnemies.push("energetic people");
// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies);
// Remove the first sidekick from the sidekicks array
var removeFirstSidekick = sideKicks.shift();
// Print the sidekicks array to console to ensure you removed the first sidekick
console.log(sideKicks);

// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.
var dangerLevel = 54;
var saveTheDay = "Once again, I have stopped this town from the face of evil!";
var badExcuse = "My toes are hurting... I can't.";

function assessSituation(dangerLevel, saveTheDay, badExcuse) {
  if (dangerLevel > 50) {
    console.log(badExcuse);
  } else if (dangerLevel >= 10 && dangerLevel <= 50) {
    console.log(saveTheDay);
  } else if (dangerLevel < 10) {
    console.log("Meh. Hard Pass.");
  }
}

assessSituation(13, saveTheDay, badExcuse);

//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';
// assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
assessSituation(99, announcement, excuse);
//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
assessSituation(21, announcement, excuse);
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."
assessSituation(3, announcement, excuse); 
// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)
var scaryMonster = {
  name: "Boogity Woogity",
  smell: "Boogers",
  weight: 12.5,
  citiesDestroyed:["Austin", "Denver", "Hanoi", "Beijing", "Hong Kong"],
  luckyNumbers: [12, 16, 3, 6],
  address: {
    number: 45,
    street: "Green Oogie",
    state: "California",
    zip: 70615
  }
}

// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name
//   - superpower
//   - age
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50

class SuperHero {
  constructor(name, superPower, age) {
    this.name = name;
    this.superPower = superPower;
    this.age = age;
    this.archNemesis = "The Syntax Error";
    this.powerLevel = 100;
    this.energyLevel = 50;
}

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class
  sayName(){
    console.log(this.name);
  }
    maximizeEnergy(){
      this.energyLevel = 1000;
    }

    gainPower(number) {
      this.powerLevel = this.powerLevel + number;
    }
}

var firstHero = new SuperHero("Geena", "Super sleeper", 28);
var secondHero = new SuperHero("Tom", "Flying", 13);

firstHero.gainPower(9)
firstHero.maximizeEnergy()
console.log(firstHero);
// Reflection
// What parts were most difficult about this exerise?
// I definitely needed to refer to my notes to grasp all of the vocab and syntax.
// It's also difficult to take what you've learned and apply them to actual directions.
// I got caught up when I got to the function part because the directions asked for
//arguments when I thought they should be parameters and then I kind of spiraled and
//questioned what I actually knew/what I didn't know. From there, I tried to just
//pseudocode in my mind and start with the smaller things I knew how to do, so I created
//some skeletons and it got a bit easier from there.

// What parts felt most comfortable to you?
// I was definitely cruuuising by up until the function section. Accessing items in
//an array by their index, declaring variables, re-assiging variables, data types,
// concatenation and interpolation all feel comfortable.
// What skills do you need to continue to practice before starting Mod 1?
// I need to practice functions and objects a bit more to go about them quicker.
//I will keep trying to time myself like this exercise as well.
