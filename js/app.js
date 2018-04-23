//Prompts your user for their name.
//Next, ask the user's favorite color. (Provide the user with the basic 10 colors as options
//i.e. red, orange, yellow, green, blue, pink, purple, black, white, and grey).
//Depending on the color, write 9 different responses for the possible answers.
//Include the user's name in the response message.
alert('re-do of take home 3: Colors');
let choices = prompt(
  'what is your fave color, choose from these classics: red, orange, yellow, green, blue, pink, purple, black, white, or grey'
);
let usersChoice = choices.toLowerCase();
switch (usersChoice) {
  case 'red':
    alert('red. nice.');
    break;
  case 'orange':
    alert('orange. nice.');
    break;
  case 'yellow':
    alert('yellow. nice.');
    break;
  case 'green':
    alert('red. nice.');
    break;
  case 'blue':
    alert('blue. nice.');
    break;
  case 'pink':
    alert('pink. nice.');
    break;
  case 'purple':
    alert('purple. nice.');
    break;
  case 'black':
    alert('black. nice.');
    break;
  case 'white':
    alert('white. nice.');
    break;
  case 'grey':
    alert('grey. nice.');
    break;
  default:
    alert('your color palette is too sophistcated for me.');
}
alert('day 4 take home');
//On the day4 branch of your take-home repository, write a program that:
//
// Creates an array of things you need or want to do this weekend by collecting three todos from the user.
// Using a for loop, change the items in the array by adding days they should be completed to each index.
// Using a while loop, find the task that will take the longest and log it to the console.
// Using a do while loop, add the string 'done' to all the tasks other than the one that will take the longest
// Finally, alert all the tasks that are marked done in the todo array.
let a1 = prompt('what do you want to do this weekend?');
let a2 = prompt('what else?');
let a3 = prompt('and one more thing to do?');

let todo = [];
todo.push(a1, a2, a3);
console.log(todo);

let days = [' friday', ' saturday', ' sunday'];

for (var i = 0; i < todo.length; i++) {
  for (var i = 0; i < days.length; i++) {
    let when = todo[i] + days[i];
    console.log(when);
  }
}

//length of answer will make believe how long the task will take.
// let a1T = a1.length;
// let a2T = a2.length;
// let a3T = a3.length;
let a1T = a1.length;
let a2T = a2.length;
let a3T = a3.length;

console.log(a1T, a2T, a3T);

var mostTime;
console.log(typeof mostTime);
while (a1T || a2T || a3T > 0) {
  if (a3T > a2T && a1T) {
    alert(`${a3} will take the longest. do it first. get it out of the way.`);
    mostTime = a3;
    break;
  } else if (a1T > a2T && a3T) {
    alert(`${a1} will take this longest. just get it out of the way.`);
    mostTime = a1;
    break;
  } else if (a2T > a3T && a2T) {
    alert(`${a2} will take this longest. but you got this.`);
    mostTime = a2;
    break;
  }
}
// //do/while - loops through a block of code once, and then repeats the loop while a specified condition is true
// // do {
// //     code block to be executed
// // }
// // while (condition);
//
// //do {
// //  add done to items in todo array
// //}
// //while {
// //  while item < mostTime
// //}
let text = '';
let z = 0;
do {
  text += 'done ' + todo[z];
  z++;
} while (todo[z].length < mostTime.length);
console.log(text);
