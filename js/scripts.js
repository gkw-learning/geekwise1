// feilds
let emailArr;
var yourEmail;
while (true) {
  //user input
  var yourEmail = prompt('What is your email?');
  emailArr = yourEmail.split('');
  if (!emailArr.includes('@')) {
    var yourEmail = prompt('That was not a valid email. Please try again.');
  } else if (!emailArr.includes('.')) {
    var yourEmail = prompt('That was not a valid email. Please try again.');
  } else {
    alert('Thanks for providing a valid email.');
  }
}

//SWITCH compared to an if Statement

//Some Sudo Code
switch(NumOfProjects) {
  case 0:
    //dont show any;
    break;
  case 1:
    //have 1 spot
    break;
  Default: //Save for last. works like a break statement, eg if user doesnt put anything
    //This comes last and usually exits the switch because there
    //was an error.
}
//SWITCH Statement from Christa
var numOfProjects = prompt('How many projects do you have? You can choose a number 0-2.');

switch(parseInt(numOfProjects)) {
 case 0:
     alert('You won’t have a projects section on your page');
     break;
    case 1:
     alert('You’ll only have one showing');
     break;
    case 2:
   alert('You’ll only have one showing');
        break;
 default:
   alert(`You didn\‘t follow the rules.`);
}


//TERNAREIS
Condition ? expression 1 : expression 2;
let yourAge = prompt('how old are you');
(parseInt(yourAge))>= 18 ? alert('you can buy a lottery ticket') : alert("you cant buy a lottery ticket");

//ARRAYS
let cars = ["jeep", "subaru", "honda"];
console.log(cars[1]); //because subaru is index 1
console.log(cars.legnth); //3, how many items are in the arrays
console.log(cars[1].length); //tells length of string in index 1
cars.push("bmw"); //adds bmw to the end
console.log(cars); //adds bmw to the end

let removedCar = cars.pop() //pops the last one off
console.log(cars);
console.log("i am removedCars " + removedCar); //see no bmw

cars.unshift("chevy");
console.log("i am unshift " + cars);
//SPLICE -----------
//splice can remove an element, or remove and element and replace it with new element, or just add element
//1, is the index, 0 is the count. as in count
cars.splice(1, 0, "red", "green"); //so at index 1, we're adding "red", "green", and 0 means how many items to remove


//isArray ----------- might use when dealing with data I didnt create
let arr= ["bo", "chelsea", "quinn"];
Array.isArray(arr);

//***************************************************************************************//
//                                In Class Try Outs                                      //
//***************************************************************************************//
// Your favorite movie of 2017
// Your lucky number
// Whether or not you are a Star Wars fan (using a Boolean)
// The year you graduated high school
// console.log the var and the length of the array.

let tmi = ['wonder woman', 33, true, 2001];
console.log(tmi);
console.log(tmi.length); //4

alert(`day 4 'try it out 2'`);

// In your scripts.js file, create 5 arrays, each with one of your
//top 5 movies' title and the main character's name
//
// Add all of these arrays to a final array named favoriteMovies
// Create an array with just the titles of your favorite movies and alert it
// Create another array with your favorite and least favorite of the top 5 and console.log it.
// Check the length of your favoriteMovies array by alerting it.

let f1 = [' Back to the Future', ' Marty McFly'];
let f2 = [' Shaun of the Dead', ' Shaun'];
let f3 = [' Napolean Dynamite', ' Napolean'];
let f4 = [' Matrix', ' Neo'];
let f5 = [' Edward Scissorhands', ' Edward'];

let faveMovies = [];
faveMovies.push(f1, f2, f3, f4, f5);

let titles = [];
titles.push(
  faveMovies[0][0],
  faveMovies[1][0],
  faveMovies[2][0],
  faveMovies[3][0],
  faveMovies[4][0]
);
alert(titles);

let bigFaveLittleFave = [];
bigFaveLittleFave.push(titles.splice(0,1), titles.splice(3,1));

console.log(bigFaveLittleFave, 'big fave lil after push and splice');

// alert(faveMovies.length)

/*  LOOPS */
// Now, using your faveMovies array:
// Write a for loop to iterate over the array
// Find your favorite movie by searching for the title in the loop
// Once the program finds your favorite movie, have it alert the title and year it was made
// There is much more you can do with arrays. Read more about array methods here.

let foundValue = null;
for (var i = 0; i <= bigFaveLittleFave.length && foundValue !== null ; i++) {
  //can't do strict comparions to an entire array
  console.log(bigFaveLittleFave[i][0][0], bigFaveLittleFave[0][0][0], 'individual biglittle[0][0]');
  if(bigFaveLittleFave[i][0][0] === bigFaveLittleFave[0][0][0]) {
    alert(`found it!, you like ${bigFaveLittleFave[i]} !`);
    foundValue = null;
    // break;
  }
  else {
    alert(`sorry, couldnt figure out which is your fave.`)
  }
}

//***************************************************************************************//
//                                   Notes on Loops                                      //
//***************************************************************************************//
/*
for of loop and fo in loop is better for objects
for of loop, you need to know what you're looking for and an object.
in other words, the thing you're looking for must be an array or object
for in loop is only for objects.
use 'break;' only in
