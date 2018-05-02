// ***** Notes *****//
// Querying the DOM
//
// let blueDivs = document.getElementsByClassName('blue'); //comes back as array. ELEMENTS will always be an array
// console.log(blueDivs[0]);
// //getElementsByClassName
// //always give all elements
// //always gives back an array]);
//
// let h1 = document.getElementsByTagName('h1'); //
// console.log(h1[0].clientTop);
//
// let para = document.getElementById('para'); //only returns id, rember id is for javascript. should stop using it to style
//
// let queryBlues = document.querySelectorAll('div'); //go back and checkout  querySelector and querySelectorAll
// console.log(queryBlues);
//
// /*
// Let's try it out!
//
// Create a function that queries the DOM for the body tag using all of these methods. Log the results to your console.
// The function should take 2 arguments: the DOM selector method the user wants to employ and the name of the DOM selector to be searched for.
// */
//
// function findBody() {
//   let body = document.getElementsByTagName('body');
//   console.log(body[0]); //
//   let body = document.getElementsByClassName('bodyClass');
//   console.log((body[0]));
//   let bodyId = document.getElementById('bodyId')
// }
//
// findBody();
//
// function queryDom(element, method) {
//   let elementToQuery = document.method(element);
//   console.log(elementToQuery);
// }
//
// let el = prompt('give me an element');
// let method - prompt('give me a method');
// queryDom(el, method);
// event listeners
// event listeners allow you to perform certain functionality only when user performs specific action
// first class functions. this means functions can be given as a paramter, what is known as a
// CALLBACK FUNCTION!!!!
//
// const button = document.querySelector('btn-danger');
// //first argument is always the string name of the event you want to listen for
// //the second argument is going to be a callback function
// //CALLBACK FUNCTION is what happens when the whatever is clicked
// //callback functions are run asynchronous
// button.addEventListener('click', e => {
//   console.log(e.target);
// });

/*
Let's Try It!
On your day6 branch, create a basic HTML mockup with a button, a div with some height and background color, and an h1 with some text
Create event listeners for each:
For the button, alert the user with a message when they click it.
For the div, change the color of the background when their mouse goes into the div.
For the h1, change the color of the text the user releases their mouse.
Not Tough Enough? Try redirecting the user's browser to facebook when the click anywhere on the page.
*/

const button = document.querySelector('button');
const container = document.querySelector('.container');
const h1 = document.querySelctor('h1');

button.addEventListener('click', e => {
  alert('thanks for the click');
});

container.addEventListener('mouseenter', e => {
  div.className = 'rebeccapurple';
});

h1.addEventListener('mouseup', e => {
  h1.style.color = 'yellow'; //same thing as div.className, but this is better
});

//DAY 7 NOTES!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
