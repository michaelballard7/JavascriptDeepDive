
// Use a for loop when I know how many iterations
// Use a while loop when its unclear how many iterations to execute

// For LOOP:
for (let i = 0; i < 10; i++){
    if(i === 2){
        console.log('2 is my favorite number')
        continue; // skips to the next iteration
    }

    if(i === 5){
        console.log("Stops the loop")
        break;
    }
    console.log(`${i} times ahead of you`)
}

// WHILE Loop:

let i = 0;

while(i < 10){
    console.log(`Number ${i}`)
    i++;
}

// DO WHile LOOP:
// Always runs at least once no matter what

let i = 0

do {
    console.log('Do Number ' + i );
    i++;
} while (i < 10)


// instantiate an array for iteration:
const cars = ["Ford", "Honda", "BMW"];

// iteration over arrays with FOR:
for (let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}

// iteration over arrays with forEach
cars.forEach(function(car, index, array){
    console.log(car, index);
    // console.log(array);
});

// iteration over a collection of objects with MAP
const users = [
    {id:1, name:'Michael'},
    {id:2, name:'Tiffany'},
    {id:3, name:'Lawrence'},
    {id:4, name:'Malachi'},
];
const ids = users.map(function(user){
    return user.id
})

console.log(ids);

// Iterating over objects with the forIn loop:
const user = {
    firstName : "Michael",
    lastName :"Ballard",
    age : 28
}

for(let x in user){
    console.log(x, user[x])
}
