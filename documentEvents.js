// select an element to add a listener

// task_delete = document.querySelector('.clear-tasks')

// task_delete.addEventListener('click',function(e){
//     e.preventDefault();
//     console.log("Hello World");
// })

// I can also passed named helper callbacks to events

// onClick = (e)=>{
//     console.log('Clicked');
// }
// task_delete.addEventListener('click',onClick)


// using the event object
// task_delete.addEventListener('click',onClick)


// function onClick(e){
//     let val;
//     val = e
//     console.log(val)
// }

// the target is the element the event happened on
// function onClick(e){
//     let val;
//     val = e.target
//     val = val.className
//
//
//
//
//     val = e.timeStamp; // returns the timestamp
//
//     // return coordinates relative to the window
//     val = e.clientY; // returns the number of pixels from the top
//
//     val = e.clientX; // returns the number of pixels from the left
//
//     // get coordinates relative to the element
//     val = e.offsetX;
//     val = e.offsetY;
//
//     val = e.target.innerText = "Hello Tiffany"
//
//     console.log(val)
// }

// EVENT LISTENER TYPES:
const clearbtn = document.querySelector('.clear-tasks');

const card = document.querySelector('.card');

const heading = document.querySelector('h5');


// click event definition
// clearbtn.addEventListener('click', runEvent)

// Double click event
// clearbtn.addEventListener('dblclick',runEvent)

// MOUSE DOWN Event
// clearbtn.addEventListener('mousedown', runEvent)

// MOUSE UP Event
// clearbtn.addEventListener('mouseup', runEvent)

// MOUSE ENTER Event
// clearbtn.addEventListener('mouseenter', runEvent)

// MOUSE LEAVE Event
// clearbtn.addEventListener('mouseleave', runEvent)

// MOUSE MOVE EVENT
// card.addEventListener('mousemove', runEvent)

// mouse out event
// card.addEventListener('mouseout', runEvent)

// Create an event Handler callback
// function runEvent(e){
//     console.log('EVENT TYPE: ',e.type)
//
//     heading.textContent = `MouseX ${e.offsetX} MouseY: ${e.offsetY}`;
//
//     document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`
// }
