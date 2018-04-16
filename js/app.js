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
