// if var is a variable in global space, any mutations down the chain will mutate interval

// if let maintains its own scope

// let and const have block level Scope
// var has a function level scope

// The highest scope is the global scope
var a = 1
let b = 2
const c = 3

console.log('Global scope ',a,b,c);


function test(){
    // inside a function creates a new scope
    // this scope is limited to the functions execution context
    var a = 5
    let b = 6
    const c = 7
    console.log('Function / local scope ',a,b,c);
}

test();

if(true){
    // here I have block level scope
    // this is scope inside a block of execution context
    var a = 9;
    let b = 10;
    const c = 8;

    console.log("Block Scope", a,b,c,)

}
