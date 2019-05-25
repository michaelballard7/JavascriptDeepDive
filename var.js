// variable can come  as var, let or const:

// var name = 'Michael';
// console.log(name);
// var greeting = "Bien";
// console.log(greeting +" "+ name);

// letters, numbers and special chars make up variable names
// variables can start with special chars, just not numbers:

// var _name = 'Michael too';

// Multi Word vars should be cameled case, snake case, or pascal:

// var firstName = "Michael " // Camel Case
// var last_name = "Ballard" // Snake Case
// var FullName = firstName + last_name // Pascal case

// using let:
// let name
// name = "michael"
// console.log(name)
// name = "Michael Ballard"
// console.log(name)

// using CONST, must contain a value & are not reassignable:
// const name = "michael";
// console.log(name)

const person = {
    name: 'Mika',
    age: 28
}

person.name ='Sarah'

const number = [1,2,3,4,5]
number.push(5)

console.log(person, number)
