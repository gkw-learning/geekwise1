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
