

const trader = {
    firstName: 'Michael',
    lastName: 'Ballard',
    age: 29,
    email: "michael@example.com",
    webpage: "michaelaballard.com",
    brokerID: '1244',
    assetsClasses: ["equity","commodites","real estate"],
    address: {
        city:"Brooklyn",
        state:"NY"
    },
    getBirthYear: function(){
        return 2019 - this.age
    }
}


// iterating through array of objects
const tearSheet = [
    {ticker:"TWLO", returns: 2.34, profit: 7000000},
    {ticker: "ZEN", returns:3.43, profit:437000},
    {ticker: "WMT", returns:.7, profit:123555}
]


for(let i = 0; i < tearSheet.length; i++){
    console.log(tearSheet[i].returns)
}
let val;

val = trader

// retrieve a specific value
val = trader.firstName; // most used
val = trader['firstName']; // can do it this way

val = trader.getBirthYear()

val = trader.assetsClasses[0] // return a specific element from an array

console.log(val)
