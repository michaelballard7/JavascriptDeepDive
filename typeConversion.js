
let val;

// number to string
val = 5;
val = String(val);
val = String(4+4);

// convert a boolean to a String
val = String(true);

// date to String
val = String(new Date());

// array to String
val = String([1,2,3,4])

// I can also use toString()
val = (5).toString();
val = (true).toString();

// string to a number
val = '5'
val = Number(val)
val = Number(true) // will return 1
val = Number(false) // will return 0
val = Number(null) // will return 0
val = Number("hello") // will retun NaN

val = parseInt('100') // return 100 as an interval
val = parseFloat('100') // returns 100 as a float


//Output
console.log(val)
console.log(typeof val)
// console.log(val.length)
console.log(val.toFixed(2))
