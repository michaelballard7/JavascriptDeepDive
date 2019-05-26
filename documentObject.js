/*

The document object represents your web page.

If you want to access any element in an HTML page, you always start with accessing the document object.

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


*/
