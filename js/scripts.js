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

//Switch Statement compared to an if Statement

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
//Switch Statement from Christa
var numOfProjects = prompt(“How many projects do you have? You can choose a number 0-2.“);

switch(parseInt(numOfProjects)) {
 case 0:
     alert(“You won’t have a projects section on your page”);
     break;
    case 1:
     alert(“You’ll only have one showing”);
     break;
    case 2:
   alert(“You’ll only have one showing”);
        break;
 default:
   alert(’You didn\‘t follow the rules.’);
}


//TERNAREIS
Condition ? expression 1 : expression 2;
let yourAge = prompt('how old are you');
(parseInt(yourAge))>= 18 ? alert('you can buy a lottery ticket') : alert("you cant buy a lottery ticket");
//arrays
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


//shift -------------
let arr= ["bo", "chelsea", "quinn"];
arr.shift();

console.log(arr); //removes bo

//slice -----------------

//(beginArg, endArg), beginArg=where we want the copy to start, endArg=the item you want to STOP at, and includes the previous item.
let arr= ["bo", "chelsea", "quinn"];
//arguments are optional in slice, but will give you an exact copy of the original array
let bestEver = arr.slice();
//must set to new var if using no args. so now arr and bestEver are two dif copies of same array
//arg3 is what you want to add. if dont want to add anything, put a 0
console.log(arr);
