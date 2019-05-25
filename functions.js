
// Function declarations in JS:

function greet(firstName = 'John', lastName='Doe'){
    //console.log('Hello');
    // if (typeof firstName === 'undefined'){
    //     firstName = 'John'
    // }
    // if (typeof lastName === 'undefined'){
    //     lastName = 'Doe'
    // }
    return 'Hello ' + firstName + ' ' + lastName
}

// console.log(greet("Michael", "Ballard"));


// Function expression, where I put a function as a variable:

// expression vs declaration dont make much of a difference,
// however, hoisting and closures does give advantages expression

const square = (x)=> {
    return x*x;
};

console.log(square(4));

// IMMEDIATELEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
// I can make a function an expression by putting it into parens
(function(name){
    console.log(`Hello ${name} your IIFE Ran..`);
})("michael");

// PROPERTY MEHTHODS:
// when a function is inside an object its called a method
const toDo = {
    add: function(){
        'Add to do..'
    },

    edit: function(id){
        console.log(`Edit to do ${id}`)
    }
}
toDo.add()

toDo.edit(7)

toDo.delete = (id)=> {
    console.log(`Delete item ${id}`)
}
toDo.delete(7)
