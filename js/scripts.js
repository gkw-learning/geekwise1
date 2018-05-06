// intro lesson from https://www.youtube.com/watch?v=hM9h1wN4rfU
//Create DIV element
// let div = document.createElement('DIV'); //usinh div as a test, and seeing what happens when div is all caps
// // Add height to element
// div.style.height = '100vh';
// // Append element to the DOM
// document.body.appendChild(div);
// // Add an event listener
// div.addEventListener('mousemove', function(e) {
//   console.log(e);
//   var x = event.clientX; //x coordinates from mousemove
//   var y = event.clientY; //y coordinates from mousemove
//   div.textContent = x + ', ' + y;
//   div.style.backgroundColor = 'rgb(' + x + ', ' + y + ', 100)';
// });

//Refctor code - make the above code more felxible and functional

// Create DIV Element
function fullScreen(element) {
  let newElement = document.createElement(element);
  newElement.style.height = '100vh';
  document.body.appendChild(newElement);
  return newElement;
}

// create a new function to pass to the event addEventListener

function input(inputType, DOMElement, callback) {
  DOMElement.addEventListener(inputType, function(e) {
    var x = event.clientX; //x coordinates from mousemove
    var y = event.clientY; //y coordinates from mousemove
    callback(DOMElement, x, y);
  });
}

function output(element, x, y) {
  element.textContent = x + ', ' + y;
  element.style.backgroundColor = 'rgb(' + x + ', ' + y + ', 100)';
}

input('mousemove', fullScreen('DIV'), output);
