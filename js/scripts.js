//************* this **********
/*
the word 'this' is tired to a function.
depends on callstack
in all cases when we're not talking about a fat arrow
depends on fuction call.
the condition that
*/

// function nameMe(name) {
//   console.log(this);
//   alert(name);
// }
//
// nameMe('ryeker'); //this is what is called, and determins what 'this'

//every function has a 'this'. 'this' is determined at the call site. by default 'this' is bound
//to window object.  except for in fat arrow functions =>

//why use 'this'?
//when you define a function, you want that function to get reused a lot to stay DRY
//so everytime you want to re-use the functions, but what if you call the same functions more than once
//all in different contexts to do different things.
//read about global context on mdn
//but first lets understand the callstack
//the callstack is part of the browser that keeps track of the order functions are called, but
//not exactly in that order.
//the callstack is the source of truth to show where each function was called, even though may execture differently
//each function call starts at the bottom of the stack, then add the next function on top, hence STACKING
//
//bind method
//bind takes two arguments, the context and data if you want to pass data in

//!!!! 4 different ways to bind 'this'
//1.
//2. using call() or apply() (second call in apply is an array) the whole points is to bind 'this' to something

// function nameMe(firstName, lastName) {
//   console.log(this.name, firstName, lastName;);
//
// }
// nameMe.call(myUser, 'ryeker', 'herndon'); //when binding call, arg1 is a reference to what 'this' is
//
// nameMe('ryeker');
//
// const myUser = {
//   name: 'ryker herndon',
//   password: '2345',
//   lastLoggedIn: newDate();
// };

function productCreator() {
  console.log(this.price, this.productName);
}
const dataValue = {
  productName: 'rubber duckie',
  price: 12.99,
  description: 'great for bathtime',
  method: productCreator
};

dataValue.method();

//3. apply() - with apply it is 'this' as first argument, and and array [] of arguments as the second argument
//eg of an array of arguments: [myUser.name, myUser.password]
//nameMe.apply(myUser, [myUser.name, myUser.password])
//Note call() and apply() are both explicit because its like, hardcoded
//4. Implicit way
//make an object,

//this is a keyword that binds to the functions, that can be bound in different ways depending on what you want to do.

//ARROW FUNCTIONS and 'this'
//lexical context is just fancy talk for scope
//whatever called the =>, 'this' will be called on that function

  const div = document.querySelector('div');
  div.addEventListner('mouseover', (e) => {
    console.log(this);
  })
}
