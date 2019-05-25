
const numbers = [1,2,3,4];
const numbers2 = [7,8,9,10]
const num = new Array();

let fruits = ['Apple', 'Bannana', 'Strawberry'];

const mixed = [22,'mixed',true,{a:1, b:2}, new Date()];

let val;

// get array length
val = numbers.length

// check if is array
val = Array.isArray(numbers);

// retrieve a single value
val = numbers[2]

// Insert into Array at position
numbers[2] = 100

// find the index of a value
val = numbers.indexOf(100);

// mutating an Array at end
numbers.push(2303);

// mutating the array at beginning
numbers.unshift(101);

// mutating by removing from the end
numbers.pop();

// mutating an array from the front
numbers.shift();

// splicing values from an Array
numbers.splice(0,1);

// reverse
numbers.reverse();

// Concatenate the array
val = numbers.concat(numbers2)

// Sort an array in ascending order:
val = numbers.sort(function(x,y){
    return x - y;
})

// Sort an array in descending order:
val = numbers.sort(function(x,y){
    return y - x
})

console.log(numbers);
// find method on an array with callback
function under50(num){
    return num < 50; // returns the first number it finds
}

val = numbers.find(under50)



console.log(val);
