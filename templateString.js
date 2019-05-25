
const name = "Michael";
const age = 30;
const job = "Web Developer";
const city = "NYC";

function hello(){
    return 'Hello'
}

let html;

// without template strings
html = '<ul> <li>Name: ' + name +'</li> <li>Age: '+ age +'</li><li>Job: '+job+ '</li> </ul>';


// multi line concatention no templateString
html = '<ul>'+
        ' <li>Name: ' + name +'</li>' +
        ' <li>Age: ' + age +'</li>' +
        ' <li>Job: ' + job +'</li>' +
        ' <li>City: ' + city +'</li>' +
        '</ul>';

// with template  strings
html = `
    <ul>
        <li>Name: ${name} </li>
        <li>Age: ${age} </li>
        <li>Job: ${job} </li>
        <li>City: ${city} </li>
        <li>${2 + 2} </li>
        <li>${hello()} </li>
        <li>${age > 30 ? 'Over 30' : 'Under 30'} </li>
    </ul>
`;


// render to page
document.body.innerHTML = html
