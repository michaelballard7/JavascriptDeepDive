
// https://www.w3schools.com/jsref/obj_window.asp  for docs on

// the window is the global object inside the client browser
// inside the window object resides the DOM
// client side js uses V8 engine as does node, but interacts with the window object

// The Window interface represents a window containing a DOM document; the document property points to the DOM document loaded in that window.

// The Window interface is home to a variety of functions, namespaces, objects, and constructors which are not necessarily directly associated with the concept of a user interface window. However, the Window interface is a suitable place to include these items that need to be globally available

// Node and Chrome both use the V8 engine, but in diferent environments

// WINDOW METHODS / Objects / Properties:

// most used window method is console.log
window.console.log("123s");

// Alert - alerts the user with a popup box
window.alert('Hello World')

// Prompt - takes in user input
const input = prompt()
alert(input)

Confirm- used to confirm user choice, like a delete
if(confirm("Are you sure you want to leave?")){
    console.log("Data has been removed");
}else {
    console.log("Continue playing then")
}


let val;

// outer window height and width
val = window.outerHeight;
val = window.outerWidth;

// inner window height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll points to figure where I am interms of scrolling
val = window.scrollY; // vertical scroll
val = window.scrollX; // horizontal scroll


// HISTORY OBJECT - allows me to get my browser history:
// window.history.go(-1) // take me back in history

val = window.history.length;

console.log(val)
