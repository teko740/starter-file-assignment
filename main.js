//EXAMINE THE DOCUMENT OBJECT//

//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
// //document.title =  DOM Manipulation Project;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
// //document.all[10].textContent = 'New DOM Layout';
//console.log(document.forms[0]);
//console.log(document.links);
//console.log(document.images);

// GETELEMENTBYID //

// console.log(document.getElementById('main-heading'));
var mainheading = document.getElementById('main-heading');
console.log(mainheading);
mainheading.textContent = 'New DOM Layout';

// document.getElementById("main-heading").classList.add("#5cb85c");
document.body.style.backgroundColor = "#5cb85c"


//console.log(document.getElementByID('para1'));
var para1 = document.getElementById('para1');
console.log(para1);
para1.textContent = 'The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.'

//console.log(document.getElementByID('para2'));
var para1 = document.getElementById('para2');
console.log(para2);
para1.textContent = 'The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.'

//console.log(document.getElementById('btn'));
var btn = document.getElementById('btn').addEventListener('click', buttonClick);
function buttonClick(){
console.log('Button clicked');
document.getElementById('para4').textContent = 'The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.'
}

// GETELEMENTSBYCLASSNAME //
var card = document.getElementsByClassName('card-body');
// for (var i = 0; i < x.length; i++) {
//    card[i].classList.add('bg-danger')
// }
console.log(card);
console.log(card[0]);
card[0].style.backgroundColor = '#d9534f'

var card = document.getElementsByClassName('card-body');
// for (var i = 0; i < x.length; i++) {
//    card[i].classList.add('bg-primary')
// }
console.log(card);
console.log(card[1]);
card[1].style.backgroundColor = '#0275d8'

var card = document.getElementsByClassName('card-body');
// for (var i = 0; i < x.length; i++) {
//    card[i].classList.add('bg-warning')
// }
console.log(card);
console.log(card[2]);
card[2].style.backgroundColor = '#ffeb3b'

var card = document.getElementsByClassName('card-body');
// for (var i = 0; i < x.length; i++) {
//    card[i].classList.add('bg-success')
// }
console.log(card);
console.log(card[3]);
card[3].style.backgroundColor = '#4caf50'

var card = document.getElementsByClassName('card-body');
// for (var i = 0; i < x.length; i++) {
//    card[i].classList.add('bg-dark')
// }
console.log(card);
console.log(card[4]);
card[4].style.backgroundColor = '#000000'