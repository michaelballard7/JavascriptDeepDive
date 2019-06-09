// Mouse EVENT LISTENER TYPES:
const clearbtn = document.querySelector('.clear-tasks');

const card = document.querySelector('.card');

const heading = document.querySelector('h5');


// click event definition
clearbtn.addEventListener('click', runEvent)

// Double click event
clearbtn.addEventListener('dblclick',runEvent)

// MOUSE DOWN Event
clearbtn.addEventListener('mousedown', runEvent)

// MOUSE UP Event
clearbtn.addEventListener('mouseup', runEvent)

// MOUSE ENTER Event
clearbtn.addEventListener('mouseenter', runEvent)

// MOUSE LEAVE Event
clearbtn.addEventListener('mouseleave', runEvent)

// MOUSE MOVE EVENT
card.addEventListener('mousemove', runEvent)

// mouse out event
card.addEventListener('mouseout', runEvent)

// Create an event Handler callback
function runEvent(e){
    console.log('EVENT TYPE: ',e.type)

    heading.textContent = `MouseX ${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`
}
