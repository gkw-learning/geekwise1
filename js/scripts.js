//***** Notes *****//
//javascript is considered loosely typed
//6 data types: "String", Number, Boolean, Undefined, Null
//input fields always return a string.
//eg when user types a 22 number in the input field, it will be converted to a '22' string
//primitive string is only a sentance, and cant be change or manipulated by js.
//object string ""
//how to tell if something is primitive
var myName = 'Crystal';
console.log(typeof myName);
//consloe.log will print "string". the lowercase "s" means its primitive
//now let's force a object String
var myName = 'Crystal';
myName = new String(myName);
console.log(typeof myName);
//console will pring "object"
//a third way to tell type of
var myName = 'Crystal';
myName = new String(myName);
console.log(myName);
//console will print an object
//
//console will use the method, toUpperCase()
var myName = 'Crystal';
myName = new String(myName);
console.log(myName.toUpperCase()); //the method changes the object back into a primitive
//
var myName = 1034;
console.log(myName);
//
var myName = 1034;
myName = new Number(myName);
console.log(typeof myName);
//
var myAge = 28;
myAge = new Number(myAge);
console.log('this is my age ' + myAge);

var myName = 'Crystal';
// myName = new String(myName);
console.log(myName.toUpperCase());
//***** Booleans *****//
//****** Undefined *****//
var test;
console.log(test);
//prints undefined
//if you receive undefined
//1. where were you expecting that value to come from??? which variable?
//2. where is it actually defined, if it actually is?
//
//****** Null *****//
//null is the absence of a value
//eg it doesn't exist. how sad.
//we use it as a developer to set a value BACK to Null
//eg check for string, != a string, check if it's null
//****** Block *****//
//like a function has block code
//objects has it's own block
//general rules
//{
//a block is enclosed with curly braces.
//blocks create scope.
//}
//****** var *****/
//var test; //declared
//test = "now this is defined";
//one reason to do this is when you expect feedback from user, you dont know what the feedback is, so you declare a placeholder
//in the above example, var test is the placeholder.
console.log(myName2);
var myName2 = 'Crystal'; //prints Undefined because javascript hoists the declartion, but doesn't hoist the definition.

//****** let *****/
//let variables are NOT hoisted
//blocked scoped. so they're basically trapped inside of the block. aka the let will stay that in the block value no matter what
console.log(myName3);
let myName3 = 'CrystalX'; //prints name as error because nothing is hoisted

let myName4 = 'Crystal'; //declared and defined.
console.log(myName4, 'one');
{
  let myName4 = 'Bob';
  console.log(myName4, 'two');
}
console.log(myName4, 'three');

//****** const *****/
//const will not let you re-assign a variable. Constant.
const myName5 = 'CrystalX';
console.log(myName5, 'one');

myName5 = 'BobX'; //will throw error because can't re-defined myName5 because it's already declared using const.
console.log(myName5, 'two');

console.log(myName5, 'three');

//****** Object Oriented Language *****//
//everything in javascript is an object, except the 5 data types/objects
//eg even block of codes and global scopes are object

let birthday = '11/21/1929';
let rightNow = new Date(birthday);

alert(rightNow);

//****** Alert and Confrim *****//
//alert throws up an alert, duh;
//confirm asks for an answer which gives you boolean, true or false depending on user's answer
//prompt has a input field to for user's answer. capture the answer using a variable.
const userStory = prompt('tell me about your day');
console.log(userStory);
