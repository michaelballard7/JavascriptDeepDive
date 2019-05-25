
// primitive data types are stored directly on the stack

// reference data types are accessed by reference, objects are stored on the healp

// references have a pointer to a location in memory

// primitive in js [string, number, boolean, Null, Undefined, Symbols]

// all variables are undefined by default

// reference types Arrays, Object literal, Functions, Dates and anything else

// in js data types are associate with actual values and not references themselves

// Primitives:

const name = "Michael Doe"; //string

const age = 28; // number

const hasKids = true; // bool

const car = null; // object

let test; // undefined

const sym = Symbol()



// Reference types - returned as objects

const hobbies = ["Coding", "Music","Women"] // array

const cities = {first:"NYC", second:"Baltimore", third:"Bost"} // object

const today = new Date() // date object

console.log(typeof today)
