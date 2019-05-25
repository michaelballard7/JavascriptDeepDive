let val;

const today = new Date()
var birthday = new Date('9-10-1990 11:48:00');
birthday = new Date('September 24 1972');

val = today
val = today.toString()
val = birthday
val = today.getMonth(); // returns the month
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getUTCDate()
val = today.getMilliseconds()

birthday.setMonth(6)
birthday.setDate(7)
birthday.setFullYear(1990)
birthday.setHours(1)
birthday.setMinutes(4)
birthday.setSeconds(7)


console.log(birthday)
