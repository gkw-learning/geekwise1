// let myString = new String('hello world');
// console.log(Object.getPrototypeOf(myString));
//what is a prototype in javascript.
//to understand that ^^^ first, have to understand inheritance
//javascript  has prototypal inheritance

// const user = ['ryan', '1235'];
//
// Array.prototype.sayPurple = 'purple';
// console.log(user.sayPurple);
// console.log(Object.getPrototypeOf(user));

//constructor functions!!!!! yay!!!????
//its just a type of function
//constructor function should always have the first letter capitalized.
//and whatever you name the function should be the object you're building
//so if we're building a user, we should call the function User.
//or if we're bulding a shopping cart object, then call the function Cart.
function User(firstName, lastName, password, signUpDate) {
  this.firstName = firstName;
  //^^^^^^^key :   ^^^^^^value <<<<firstName is the argument
  //or below is another example
  this.fullName = firstName + lastName;
  this.password = password;
}

//below we're calling the function with new User, passing in the arguments, and storing the function call in let firstUser
let firstUser = new User('ryeker', 'herndon', '2344', '5/7/18');
console.log(firstUser);
//create a new prototype to construct an object
//name, due date, and priority
//and buld a function that creates a new user
