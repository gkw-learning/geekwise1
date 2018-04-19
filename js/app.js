let userAge = prompt(
  'I have to ask your age using the Date Object method. What is your birthdate (mm/dd/yyyy)?'
);

let makeDate = new Date(userAge);
//doing a math operation converts to number because loosely typed
let yearsOld = (new Date() - makeDate) / 31536000000;

console.log(typeof userAge);
console.log(typeof makeDate);
console.log(typeof yearsOld);
console.log(yearsOld);

if (yearsOld < 80 && yearsOld > 18) {
  alert('Ah, under 80. Not quite a super senior, but getting there.');
  let userOpinion = prompt('do you like the star wars? yes or no.');
  if (userOpinion === 'yes') {
    alert('nerd');
  } else {
    alert('unpopular opinion');
  }
} else if (yearsOld < 18) {
  alert(`only ${yearsOld} years old? SCRAM!`);
} else {
  alert(`good on you for surving ${yearsOld} years.`);
}
/*************************/
alert('NEW GAME TIME. aka actual take home.');

let userName = prompt(
  "its time to tell me your fave color, first what's your name?"
);

let x = prompt(
  `thanks, ${userName}. So, what's your fave color? Red, Orange, Yellow, Green, Blue, Pink, Purple, Black, White, or Grey`
);

let y = x.toLowerCase();
if (
  y === 'red' ||
  'orange' ||
  'yellow' ||
  'green' ||
  'blue' ||
  'pink' ||
  'purple' ||
  'black' ||
  'white' ||
  'green'
) {
  alert(`${y}. nice`);
} else {
  alert('cool, i hate colors too.');
}
