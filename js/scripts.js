let cToF;
const theH3 = document.querySelector('h3');
let gimmeTemp = prompt(
  'give me a temperature to convert for you in either Fahrenheit or Celcius. the format can be 30 F, or 10 c, or 20 Celcius, etc.'
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
/******************** ryeker's solution ********************/
// /*
// 1. Ask your user to give you a scale (Celcius or Fahrenheit) and the tempurature they want to convert. So if they give you 90 Fahrenheit, they would want you to convert 90 degrees Fahrenheit to whatever that is in Celcius
// */
// const h3 = document.querySelector('#temp');
// let scale = prompt("What scale (C or F) do you want to use?", "F or C");
// let temp = prompt("How hot is it?", "99");
// /*
// 2. Employ a function that accepts those two values as arguments: temperature and scale (either celcius or fahrenheit) and converts the tempurature they gave you to the opposite scale.
// */
// function convertTemp(scale, temp) {
//   scale = scale.toLowerCase();
//   let returnVal;
//   let oppositeVal = scale === 'c' ? 'Fahrenheit' : 'Celcius';
//   temp = parseInt(temp);
//   if(!isNaN(temp)) {
//     returnVal = scale === 'c' ? (1.8 * temp) + 32 : (5 / 9) * (temp - 32);
//     /*
//     3. Display the temperature in an h3 with minimal styling.
//     */
//     h3.innerText = `Your temperature is ${returnVal} ${oppositeVal}`;
//   } else {
//     scale = prompt("What scale (C or F) do you want to use?", "F or C");
//     temp = prompt("How hot is it?", "99");
//     convertTemp(scale, temp);
//   }
// }
//
// convertTemp(scale, temp);
//
// /*
// 4. From that point on, when the user clicks on the h3, run the function to convert the temperature back and forth between Celcius and Fahrenheit.
// Display the converted temperature in the h3 each time it is changed.
// */
// h3.addEventListener('click', (e) => {
//   let valueArr = e.target.innerText.split(' ');
//   scale = valueArr[valueArr.length - 1] === 'Celcius' ? 'C' : 'F';
//   temp = valueArr[valueArr.length - 2];
//   convertTemp(scale, temp);
// });
