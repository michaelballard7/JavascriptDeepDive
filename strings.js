
const firstName = "Michael"
const lastName = "Ballard"
const age = 28
var stringy = "Hello My Name is ";
let tags = "Consumer,Internet,Energy"

let val;

// concatenation:
val = firstName + " " + lastName;

// appending:
val = "Michael";
val += " Ballard";

// string interpolation:
val = `Hello my name is ${firstName} ${lastName}. I am ${age} years old`;

// escaping chars
val = 'That\'s awesome, I can\'t';

// length property, no need for parens
val = firstName.length;

// concatenation via concat
val = firstName.concat(" ",lastName);

// change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// index a string for a char
val = firstName[0];

// check a value in an index
val = firstName.indexOf("M");

// locate a char at an index
val = firstName.charAt('2');

// get last char of a string
val = firstName.charAt(firstName.length - 1);

// get a substring
val = firstName.substr(0,2);

// slice a String, mostly used with arrays
val = firstName.slice(0,4);

// split a string into an array
val = tags.split(",");

// replace contents of a string
stringy = stringy.replace("Hello", "Hola");

// check to see if a string includes a char
inc = stringy.includes("Michael"))




console.log(val);
