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
