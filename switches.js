
// use switches in scenarios where I have a lot of different cases
// especially if I have to use a lot of else if clauses

const color = 'red'

switch (color) {
    case 'red':
        console.log("The color is red")
        break;
    case 'blue':
        console.log("The color is blue")
        break;
    default:
        console.log('Color is not red or blue')
        break;

}



let day;

switch(new Date().getDate()){
    case 0:
    day = 'Sunday';
    break;

    case 1:
    day = 'Monday';
    break;

    case 2:
    day = 'Tuesday';
    break;

    case 3:
    day = 'Wednesday';
    break;

    case 4:
    day = 'Thursday';
    break;

    case 5:
    day = 'Friday';
    break;

    case 6:
    day = 'Saturday';
    break;
}

console.log(`Today is ${day}`);
