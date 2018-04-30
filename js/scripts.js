//***** Notes *****//
/*Functions BABY!
two types, named and anonymous Functions
use a named function to refer to it to make it run when YOU want
anonymous functions runs as soon as its called
"CALL a function. the function RETURNS a value."

*/

function sayHello(name, greeting) {
  //everything from start of line 10, to end bracket is function definition
  return `Hello, ${name}, ${greeting}!`;
}

let myGreeting = sayHello('Connie', "you're rad!");
alert(myGreeting);

//fuction expression is NOT hoisted.  only use when you need to run in ONE block
var logStuff = function(param) {};
//function declartion IS hoisted

/*as soon as browser starts reading code, it searches for var declorations, and functions
declaration. then goes back to line 1, and reads code line by line, and can run it because
it has a reference to the declared functions and variab;es */

/* Technically this is Day 6

Day 5 Notes Continued

Arrow Functions ES6
fat arrow functions are only ANONYMOUS, they cannot be named.
which means they have to be called IMMEDIATELY.*/

//FAT ARROW SKELETON, and empty set of paranethises OR the onyl one argument,
//and no parenthesis needed.
//eg
// arg1 => {
//}

() => {};

//things to know about fat arrow Functions
//1. no function keyword
//2. must have =>
//3. everything elese works just as a regular function

//eg

(thingToLog, thingToSay) => {
  console.log(thingToLog);
  alert(thingToSay);
};

//fat arrows functions are anonymous functions, and all callbacks are annoymous

thingToLog => {
  //
  return thingToLog;
};

//IS THE SAME AS BELOW
//IF FUNCTIONS ONLY JOB IS TO TAKE A VALUE, AND RETURN

thingToLog => thingToLog;

// //TAKEHOME (not gonna use fat arrow functions, yet. use named functions)
// On your day5 branch, write a function that calculates a dog's age.
//It should:
// Accept 1 argument (age of the dog in years).
// Return the age of the dog using the conversion rate of 1 year to 7 "dog" years.
// Alert the answer.

function dogAge(dogYears) {
  // parseInt(dogYears);
  return dogYears * 7;
}

let result = dogAge(10);
alert(dogYears);

// Now, write a function that tells you what a "lifetime supply" will be for any product. It should:
//
// Accept 2 arguments (age of person now, amount of product per day).
// Calculate the supply needed for the rest of the user's life, based on a constant max age of 80.
// Alert the answer in this format: "You will need x to last you until you're y.
// BONUS: write it to accept a dynamic max age.

let userAge = parseInt(prompt('how old are you?'));
let amountPerDay = prompt('how much do you use a day?');
function lifetimeSupply(userAge, amountPerDay) {
  let timeToEnjoy = 80 - userAge;
  return yearsLeft * 365 * amountPerDay;
}

lifetimeSupply(userAge, amountPerDay);
alert(`you will need all ${amountPerDay} to last you for ${yearsLeft} years`);
//**************
//Method vs Function

//Methods are a piece of code that can be written by javascript, or we can write our own.  They are tied to an object.
//1. a method is implicitly pass onto which the object it was called.
//eg. var string2 = "hello world";
//console.log(string2.length); //length is a method, and implicitly called on string
//eg dont have to go string2.length(string2);
//2.
