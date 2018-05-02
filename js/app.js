// BONUS: If you are bored by all that, write a function that checks if a given string is a palindrome.

//all prompts are string types by default, so isNaN will always be true because 3 is really '3'
//parseInt turns strings into numbers
let userNum;

function squareUp() {
  userNum = prompt('gimme a number');

  while (isNaN(userNum) === true) {
    alert('NaN is ' + isNaN(userNum));
    userNum = prompt('try again, idiot');
  }
  let squared = userNum ** 2;
  alert(squared);
}

squareUp();

//excersice 2
// In a second function, capitalize the first letter of a string and add a period (.) to the end of the string if it doesn't already end with a period
let userAnimal;
// let capFirst;

function faveAnimal() {
  userAnimal = prompt(`what's your favorite animal?`);
  let capFirst = userAnimal.charAt(0).toUpperCase() + userAnimal.slice(1);
  let sentence = capFirst.split('');
  let period = '.';
  if (capFirst[capFirst.length - 1] !== period) {
    let combine = capFirst.concat(period);
    alert(`fixed that for you: ${combine}`);
  } else {
    alert(
      `you may not know what a number is, but you know punctuation. proud of you, my little ${capFirst}`
    );
  }
}

faveAnimal();

//exercise 3
// Create a string that will flip the position of the first and second half of a string. For example, the string “abcdef” would be returned as “defabc”. Hint: use substring.

function flipDaScript() {
  let string = prompt('what city are you from?'); //fresno
  let splitEm = string.split(''); //f, r, e, s, n, o
  let half = Math.round(string.length / 2); //3
  let removeFirstHalf = splitEm.splice(0, half);
  let combineEm = splitEm.concat(removeFirstHalf); //s,n,o,f,r,e
  let joinEm = combineEm.join('');
  alert(`wrong. now you're from ${joinEm}.`);
}

flipDaScript();

// BONUS: If you are bored by all that, write a function that checks if a given string is a palindrome.

function p() {
  string = prompt('give me a palindrom. eg tacocat');
  splitEm = string.split('');
  reverseEm = splitEm.reverse();
  joinEm = reverseEm.join('');
  if (string === joinEm) {
    alert(`${joinEm}. classic palindrome.`);
  } else {
    alert(`boooo. ${joinEm} ain't a palindrome.`);
  }
}

p();
