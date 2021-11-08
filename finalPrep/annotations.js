// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Beard
//this is a function with 5 parameters
function buildABear(name, age, fur, clothes, specialPower) {
  //declare a variable of greeting and assign it to a value of a string with the name parameter interpolated in
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  //declare a variable of demographics and assign it to the name and age parameters using an array
  var demographics = [name, age];
  //declare a variable of powerSaying and assign it to a string that is concatenated with the specialPower parameter.
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  //declare a variable that is assigned to an object with 6 key value pairs.
  var builtBear = {
    basicInfo: demographics,//key is basicInfo, value is demographics parameter
    clothes: clothes,// key is clothes, value is clothes parameter
    exterior: fur,// key is exterior, value is fur parameter
    cost: 49.99, //key is cost and value is a floating point
    sayings: [greeting, powerSaying, "Goodnight my friend!"],//key is sayings and value is an array and a string
    isCuddly: true,//key is isCuddly and value is a boolean
  };
//when function is called, it will return the builtBear object
  return builtBear
}
//invoke the buildABear function with name = "Fluffy", age = 4, fur = "brown", clothes =
// array of pants, jorts, and tanktop, specialPower = "give you nightmares"
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
//invoke the buildABear function with name = "Sleepy", age = 2, fur = "purple", clothes =
// an array of pajamas and sleeping cap, specialPower = "sleeping in"
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
//this is a function fizzBuzz with the parameters num1, num2, range
function fizzBuzz(num1, num2, range) {
  // this is a for loop that will iterate from 0 until it reaches the range parameter and then return false
  for (var i = 0; i <= range; i++) {
    //if the remainder of i divided by num1 is equal to 0, AND if remainder of i
    // divided by num2 is equal to 0, then
    if (i % num1 === 0 && i % num2 === 0) {
        //then log "fizzBuzz"
      console.log('fizzbuzz');
      // otherwise, if remainder of i divided by num1 equals 0, then
    } else if (i % num1 === 0) {
      // then log "fizz"
      console.log('fizz');
      //otherwise, if remainder of i divided by num2 equals 0, then
    } else if (i % num2 === 0) {
      //then log "buzz"
      console.log('buzz');
      //if none of the above are true, just log the value of i
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(3, 5, 100);// this will log "fizz"
fizzbuzz(5, 8, 400);// this will log "buzz"
