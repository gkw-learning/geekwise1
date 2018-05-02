let cToF;
const theH3 = document.querySelector('h3');
let gimmeTemp = prompt(
  'give me a temperature to convert for you in either Fahrenheit or Celcius.'
).split(' ');
let scale = gimmeTemp.splice(1, 1).toString(); //array, to string?
let numifyTemp = parseInt(gimmeTemp); //number

function maths(argTemp, argScale) {
  if (
    argScale === 'f' ||
    argScale === 'F' ||
    argScale === 'fahrenheit' ||
    argScale === 'Fahrenheit'
  ) {
    fToC = (numifyTemp - 32) * 5 / 9; //converting from f to c
    theH3.textContent = `your temp in fahrenheit converts to ${fToC} celcius.`;
    theH3.addEventListener('mouseover', e => {
      theH3.textContent = `in case you forgot, we're converting from ${numifyTemp} ${scale}`; //add some text content
    });
  } else if (
    argScale === 'c' ||
    argScale === 'C' ||
    argScale === 'celcius' ||
    argScale === 'Celcius'
  ) {
    cToF = numifyTemp * 9 / 5 + 32; //converting from c to f
    theH3.textContent = `your temp in celcius converts to ${cToF} fahrenheit.`;
    theH3.addEventListener('mouseover', e => {
      theH3.textContent = `in case you forgot, we're converting from ${numifyTemp} ${scale}`; //add some text content
    });
  } else {
    alert(
      'what planet is that temperature on?  I only understand Fahrenheit or Celcius.'
    );
  }
}
maths(numifyTemp, scale);
