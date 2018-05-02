//RYEKER'S NOTES FROM DAY 7
// const div = document.querySelector('div');
// const p = document.querySelector('p');
// const button = document.querySelector('.btn-default');
//
// div.addEventListener('mouseover', (e) => {
//   let newPTag = document.createElement('p'); //Create a new element
//   newPTag.textContent = "Hey there, guy/gal/friend/frienemy!!!"; //add some text content to that element
//   div.appendChild(newPTag); //add that element to another parent element
// });
//
// button.addEventListener('click', (e) => {
//   let newDiv = document.createElement('div'); //create a DIV
//   newDiv.innerHTML = '<h3 class="text-center">Whoa! You clicked the thing!</h3><p>Some other things you might be interested in....</p>'; //Add some HTML content to the DIV you made
//   div.insertBefore(newDiv, p); //Add you new DIV to a parent (const div), BEFORE a sibling node (const p).
// });

/*Write a program that converts temperatures. It should:

Ask your user to give you a scale (Celcius or Fahrenheit) and the tempurature they want to convert. So if they give you 90 Fahrenheit, they would want you to convert 90 degrees Fahrenheit to whatever that is in Celcius
Employ a function that accepts those two values as arguments: temperature and scale (either celcius or fahrenheit) and converts the tempurature they gave you to the opposite scale.
Display the temperature in an h3 with minimal styling.
From that point on, when the user clicks on the h3, run the function to convert the temperature back and forth between Celcius and Fahrenheit.
Display the converted temperature in the h3 each time it is changed. */

let gimmeTemp = prompt(
  'give me a temperature to convert for you in either Fahrenheit or Celcius.'
).split(' ');
console.log(typeof gimmeTemp); //object = array
console.log(gimmeTemp); // ["89", "f"]

let scale = gimmeTemp.splice(1, 1).toString(); //array, to string?
let numifyTemp = parseInt(gimmeTemp); //number

console.log(`should only get back 89 ${gimmeTemp}`); //["89"]
console.log(`should only be f ${scale}`); //["f"]
console.log(`scale should be a ${typeof scale}`);
console.log(typeof numifyTemp);
//so split answer using ' ', and should split what they give me by words

let cToF;
const h3 = document.querySelector('h3');

function maths(argTemp, argScale) {
  if (
    argScale === 'f' ||
    argScale === 'F' ||
    argScale === 'fahrenheit' ||
    argScale === 'Fahrenheit'
  ) {
    fToC = numifyTemp * 9 / 5 + 32; //converting from f to c
    console.log(`this should give back a conversion ${fToC}`);
    h3.textContent = `your temp in fahrenheit converts to ${fToC} celcius.`;
  } else if (
    argScale === 'c' ||
    argScale === 'C' ||
    argScale === 'celcius' ||
    argScale === 'Celcius'
  ) {
    cToF = (numifyTemp - 32) * 5 / 9; //converting from c to f
    console.log(`this should convert to f ${cToF}`);
    h3.textContent = `your temp in celcius converts to ${cToF} fahrenheit.`;
  } else {
    alert(
      'what planet is that temperature on?  I only understand Fahrenheit or Celcius.'
    );
  }
}
console.log(typeof cToF);
maths(numifyTemp, scale);
// div.addEventListener('mouseover', (e) => {
//   let newPTag = document.createElement('p'); //Create a new element
//   newPTag.textContent = "Hey there, guy/gal/friend/frienemy!!!"; //add some text content to that element
//   div.appendChild(newPTag); //add that element to another parent element
// });
// const button = document.querySelector('button');
// const container = document.querySelector('.container');
// const h1 = document.querySelctor('h1');
//
// button.addEventListener('click', e => {
//   alert('thanks for the click');
// });
//
// container.addEventListener('mouseenter', e => {
//   div.className = 'rebeccapurple';
// });
//
// h1.addEventListener('mouseup', e => {
//   h1.style.color = 'yellow'; //same thing as div.className, but this is better
// });
//loop through answer find F or C, and give to var a
//loop through answer and find number and give to var b
//then give those vars as parametersfunction (Num, Scale)
//then do if statement, and math. so if they give C, convert to f
//after the math grab the document stuff and change the h3.
//return function
