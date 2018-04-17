//****** Day 3 Notes ******//
//String interpolation aka Concatonation
//Old Boring ES5 Way
// alert('Hello, ' + variableName + '!');
// //ES6 Way
// alert(`Hello, ${variableName}!`); /*checkout the back ticks!!!*/

//for loops

for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 0; i < 10 || i < 15; i++) {
  console.log(i);
}

//example of Logical Not
for (let i = 0; i < 10 || i < 15; i++) {
  if (!(i % 2 === 0)) console.log(i);
}

//equals and not equals
for (let i = 0; i < 10 || i < 15; i++) {
  if (!(i % 2 === 0)) console.log(i);
}

/*
Declare a var and set it equal to any string.
Declare a second var and call new String() on the same string (this will create an instance of a JS string object.)
Use the logical operators and a third var to determine if they are strictly equal.
Now use the logical operators and a fourth var to determine if they are loosely equal.
Why did you get the result you got?
*/

let favBook = 'Perks of Being a Wallflower';
let stringify = new String(favBook);
let huh = favBook == stringify;
let what = favBook === stringify;
console.log(huh);
console.log(what);
//favbook is a String, which is a primative type
//stringify is an object
//so, strictly equals === asks do the types match? no. Checks for VALUE AND TYPE.
//and loosely equals is == asks if the value is true, yes. Only checks for VALUE  both vars values are 'Perks of Being a Wallflower'.

//Truthy and Falsy
// if you check the value strictly, it may not always be "true" or "false"
//eg, capture a users input, and to makes sure they actually answered, you can check if .then(function(response) {
//the string is '', which is falsy.

var yourName = prompt("what's your name?");
//by default, an empty string '' is false, so using the Logical Not is saying
//if the user didn't enter an answer, and the there's an empty string, we're saying
//it is true that the user didnt enter an answer. and if they did give an answer, then log will print false.
console.log(!yourName);

//when you check strictly check objects, its not comparing the key: values, its pointing to where the objects
//is stored in memory.  So it will always comeback false.

let obj1 = {
  name: "Ryeker";
};

let obj2 = {
  name: "Ryeker";
};

console.log(obj1 === obj2);
//false, because obj1 and obj2 are ALWAYS comparing where the objects are in memory.
//so the values will never equate.

//MATHMATICAL OPERATORS
//NaN is an object that represents Not A Number. But NaN is ACTUALLY a number;
//below typeof is a number, because NaN is a Number.
console.log(typeof('three' * 15));
//you can use isNaN
//isNaN is a way to check whether the value from the user is a Number
//return true because it IS a number
console.log(isNaN('three' * 15));

let someNum = prompt('give me a number!!!');
alert (isNaN((parseInt(someNum) / 2)));
//isNaN is making sure its a number;
//if user puts in a string, isNaN is true because it's true that a string is not a Number
//if user puts in a number, isNaN is false because it's false that the number is not a number

//ASSIGNMENT OPERATORS
let someNum = prompt("gimme a number");
someNum = parseInt(someNum); //must set to a variable to retain as a number
console.log(someNum += 42);
console.log(someNum -= 42);
console.log(someNum *= 42);
console.log(someNum /= 42);

//CONTROL FLOW: if else statements
