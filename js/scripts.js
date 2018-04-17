let usersAge = prompt(
  'I have to ask your age using the Date Object method. What is your birthdate (mm/dd/yyyy)?'
);
let convertAge = new Date(userAge);
let ageInYears = new Date() - convertAge;
let makeNum = parseInt(ageInYears);
