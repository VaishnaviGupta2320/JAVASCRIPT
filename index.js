//    ways to print in javascript

//  alert("me");
// document.write("this is document write");
// console.log("Hello World!");

// javascript console api(application programming interface)

// console.log("Hello World!");
// console.error("This is an error");
// console.warn("this is a warning");
// console.clear();
// console.assert(4==6);

// javascript variables

var num1 = 28;
var num2 = 56;
console.log(num1 + num2);

// datatypes in javascript

var n1 = 26;
var str1 = "This is a string";
var str2 = 'this is also a string';
// object type i.e key value pair
var marks = {
    ravi: 45,
    shubham: 67,
    vaishnavi: 99
}
console.log(marks);

// booleans

var a = true;
var b = false;

// undefined

var un;
console.log(un);
// it will print indefined

var n = null;
console.log(n);

// 1)primitive datatypes->undefined, null, number, string, boolean, symbol
// 2)reference datatypes->arrays and object

// arrays

var arr = [1, 2, "string", 3, 4];
console.log(arr);

// functions in javascript

function Avg(a, b) {
    return (a + b) / 2;
}
c1 = Avg(4, 6);
c2 = Avg(10, 20);
console.log(c1, c2);

// for each loop

var a = [1, 2, 3, 4, 5];
a.forEach(function (element) {
    console.log(element);
})

const ab = 0;
// we cannot chnage value for const variable

// while loop

let j = 0;
while (j < arr.length) {
    console.log(j);
    j++;
}

// do while loop
let j1 = 10;
do {

    console.log(arr[j1]);
    j1++;
} while (j1 < arr.length);

// array methods

let arr1 = ["fan", "camera", 45, null, true];
console.log(arr1.length);
// arr1.pop(); to remove last element
// arr1.push("Vaishnavi"); add element
// arr1.shift();start array from second or next element from starting
// arr1.unshift("Vaishnavi"); add unshift element at the front
console.log(arr1);
arr1.toString();
arr1.sort();

// string method

let string = "Vaishnavi is a good girl";
console.log(string.length);
console.log(string.indexOf("good"));
console.log(string.lastIndexOf('a'));
console.log(string.slice(1, 7));
d = string.replace("Vaishnavi", "Rishu");
console.log(d, string);

// date function

let mydate = new Date();
console.log(mydate);
console.log(mydate.getTime());
console.log(mydate.getFullYear());
console.log(mydate.getDay());
console.log(mydate.getMinutes());


// DOM manipulation

// let ele=document.getElementById('click');
// console.log(ele);
// get element with that particular id name

// let elemclass=document.getElementsByClassName("container");
// console.log(elemclass);
// get element with that class

// elemClass[0].style.background="yellow";
// we can directly add style as well through javascript

// elemclass[0].classList.add("bg-primary");
// to add new class

// console.log(ele.innerHTML);
// to print inner html
// console.log(ele.innerText);
// to print inner text of html

// console.log(elemclass[0].innerHTML);
// console.log(elemclass[0].innerText);

tn = document.getElementsByTagName('button')
console.log(tn);

// to display all element with that particular tag name

createdElement = document.createElement('p');
createdElement.innerText = "This is a paragraph";
tn[0].appendChild(createdElement);

// to add more text or element within particular tag

createdElement1 = document.createElement('b');
createdElement1.innerText = "This is a bold";
tn[0].replaceChild(createdElement1, createdElement);

// to replace createdelement with createdelement.....

console.log(document.location);
console.log(document.links);
console.log(document.title);
console.log(document.images);
console.log(document.scripts);

// selecting using query

sel = document.querySelector('.container');
console.log(sel);

// it will return first element of class 
sel = document.querySelectorAll('.container');
console.log(sel);

// it will return all element of class

// events in javascript

function clicked() {
    console.log("the button was clicked")
}

window.onload = function () {
    console.log("the document is loaded")
}

click.addEventListener('click', function () {
    console.log("clicked on button")
})

click.addEventListener('mouseover', function () {
    console.log("Mouse on button")
})

click.addEventListener('mouseout', function () {
    console.log("mouse out of button")
})

// arrow function

// function sum1(a,b)
// {
//     return a+b;
// }

// sum1 =(a,b)=>{
//     return a+b;
// }

// we can declare sum1 function with 2nd method which is known as arrow functions

// settomeout and setinterval

log = () => {
    console.log("Log");
}

// setTimeout(log,2000);
// setInterval(log,2000);

// if we want to stop this than we can give suntax as follow

clr = setInterval(log, 2000);
clearInterval(clr);

// javascript localstorage

// localStorage.setItem('name', 'Vaishnavi')

// JSON- JavaScript Object Notation  and it only support double quotes

obj={name:"Vaishnavi", length:1}
jso=JSON.stringify(obj);
console.log(typeof jso)
console.log(jso);
parsed=JSON.parse('{"name":"Vaishnavi","lengthg":1}')
console.log(parsed);