<<<<<<< HEAD
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
=======
let firstName = prompt(
  "Not so fast.  Before you enter, I need some info.  What's your name, kid?"
);

let lastName = prompt("Relax, relax. It's not a test.  What's your last name?");

let dob = prompt(
  "OK, you passed the test.  One more thing, what's your birthdate? (MM/DD/YYYY)"
);

let convert = new Date(dob);

let wisdomPoints = new Date() - convert;
//not real years because leap
let toYears = wisdomPoints / 31536000000;

let doubleCheck = confirm('hold on, you were born on ' + convert + '????');

if (doubleCheck === true) {
  alert(
    "Woohoo! We've been awaiting your return! I can't believe you've gained " +
      toYears +
      ' wisdom points!'
  );
} else {
  alert('My mistake, we thought you were the one. Nevermind.');
}

console.log(firstName);
alert(lastName);
alert(convert);
>>>>>>> cf50a724109290d4846c61241bfa640893c4bc34
