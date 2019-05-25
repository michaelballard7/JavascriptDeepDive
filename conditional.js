
// if(something){
//     do something
//
// } else {
//     do something else
// }

const id = 7

// // equal to:
// if(id == 7){
//     console.log("Correct")
// } else {
//     console.log('Incorrect')
// }
//
//
// // not equal to
//
// if (id != 101){
//     console.log('Correct')
// } else {
//     console.log('Incorrect')
// }
//
//
// // Equal to value & type
// if (id === 100){
//     console.log('Correct')
// } else {
//     console.log('Incorrect')
// }
//
// // Not Equal to value & type
// if (id !== 100){
//     console.log('Correct')
// } else {
//     console.log('Incorrect')
// }

// if (id){
//     console.log(`The ID is ${id}`)
// } else {
//     console.log("No id avaliable")
// }

// if (typeof id !== 'undefined'){
//     console.log(`The ID is ${id} `)
// } else {
//     console.log('No id')
// }

// logical operators:
const name = "Michael"
const age = 33

// AND &&
if(age > 0 && age < 7){
    console.log(`${name}`)
} else if (age >= 13 && age <=19){
    console.log(`${name} is a teenager`)
} else {
    console.log(`${name} is an adult`)
}

// or ||
if(age < 16 || age > 65){
    console.log("You can enter the circus")
}

// Ternary Operator
console.log(age === 33 ? true : false)
