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
