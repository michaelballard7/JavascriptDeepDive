/*

The document object represents your web page.

If you want to access any element in an HTML page, you always start with accessing the document object.

The DOM is forms a tree which is composed of nodes/elements to be created by the browser

JS code is used to manipulate the DOM

The DOM is object oriented as each node has its own set of properties and methods to be changed, added or removed

Finding html elements:

document.getElementById(id) ->	Find an element by element id
document.getElementsByTagName(name) ->	Find elements by tag name
document.getElementsByClassName(name) ->	Find elements by class name

Changing HTML elements:

element.innerHTML =  new html content -->	Change the inner HTML of an element
element.attribute = new value -->	Change the attribute value of an HTML element
element.style.property = new style -->	Change the style of an HTML element

element.setAttribute(attribute, value) -->	Change the attribute value of an HTML element


Adding and deleting Elements:

document.createElement(element) -->	Create an HTML element
document.removeChild(element) -->	Remove an HTML element
document.appendChild(element) -->	Add an HTML element
document.replaceChild(new, old) -->	Replace an HTML element
document.write(text) -->	Write into the HTML output stream

Adding Event Handlers:

document.getElementById(id).<event> = function(){code} -->	Adding event handler code to an onclick event

DoM Structures:

-

-

*/

// var paragraphs = document.getElementsByTagName("P");

let val;

// // return all elements on the page
// val = document.all;
// val = document.all[0];
// val = document.all.length;
//
// // access the head element
// val = document.head;
//
// // access the body elememnt
// val = document.body;
//
// // access the doctype
// val = document.doctype;
//
// // access the page url
// val = document.URL;
//
// // find the charachter encoding
// val = document.characterSet;
//
// // find the contentType, most likely html
// val = document.contentType;
//
// // to retrieve all forms, will return an html collection of all forms
// val = document.forms
// val = document.forms[0]
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;
//
// // to retrieve all links
// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList;
// val = document.links[0].classList[0];
//
// // retrieve images
// val = document.images;
//
// // retrieve scripts
// val = document.scripts;
//
// val = document.scripts[0].getAttribute('src');
//
// // convert an html collection to arrayObject to use helpful methods ie forEach
// let scripts = document.scripts
//
// let scriptsArray = Array.from(scripts) // converts
//
// val = scriptsArray.forEach(function(script){
//
//     // console.log(script.getAttribute('src')) // get a attribute for each iterable element
//
// })
//
// // document selectors
// val=document.getElementById('task-title')
//
// // select attributes of an element
// val = document.getElementById('task-title').id;
//
// // change styling with selectors, mostly used with events
// // should define main styling with css or sass
// val = document.getElementById('task-title').style.background = "Orange";
// val = document.getElementById('task-title').style.color = "White";
//
// val = "";
//
// // change content
// val = document.getElementById('task-title').textContent = 'Task List';  // changes text of an element
//
// val = document.getElementById('task-title').innerText = 'My Tasks' // changes text of an element as well
//
// // insert html into the dom, used with fetching alot to compose html from json iterations
// val = document.getElementById('task-title').innerHTML = "<span style='color:red'>Task List</span>";
//
// // Query Selector,  a single element seletor, allows me to select with custom queries, will return the first item if multiple
//
// val = document.querySelector('#task-title');
// val = document.querySelector('.card-title');
// val = document.querySelector('h5');
//
//
// // target items if multiple
// val = document.querySelector('li').style.color = 'red'
// val = document.querySelector('ul li').style.color = 'blue'
// // use sudo classes, i need to explore these, used for situtions like odd even divs do this do that
// val = document.querySelector('li:last-child').style.color = 'green'
// val = document.querySelector('li:nth-child(3)').style.color = 'yellow';
// val = document.querySelector('li:nth-child(4)').textContent = 'Hello World';
// val = document.querySelector('li:nth-child(even)').style.background = 'lightgrey';
//
//
//
// // GET A COLLECTION OF Elements
// val = document.getElementsByClassName('collection-item');
// val = val[0].style.color = 'red'
// val = val[0].textContent = 'hello michael'

// const items = document.getElementsByClassName('collection-item')
//
// console.log(items)
// console.log(items[0])
//
// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
//
// console.log(listItems);
//
// items[0].style.color = 'red';

// var lis = document.getElementsByTagName('li');
// lis[0].style.color = 'red';
// var helloElement = lis[3].textContent = 'hello';
// console.log("hello element: " + helloElement)
//
// // convert an html collection into an array
// lis = Array.from(lis);
//
// var reversed = lis.reverse()
//
// reversed.forEach(function(li, index){
//     console.log(li.textContent, index)
//     console.log(li.className, index)
//     li.textContent = `${index}: Hello`;
//
//
// })

// query selector all returns a node list which allows certain array methods like forEach

const items = document.querySelectorAll('ul.collection li.collection-item') // returns a nodelist


items.forEach(function(item, index){
    item.textContent = `${index}: Hello`
})

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index){
    li.style.background = '#ccc';
})

// for loop even works on an html collection
for(let i=0; i<liEven.length; i++){
    liEven[i].style.background = "lightblue";
}
