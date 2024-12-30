// Change the class naame (Use of Attribute)

/*
let para = document.querySelector("p")
console.log(para.getAttribute("class"))
console.log(para.setAttribute("class", "newClass")) // changing value (set attribute)
*/



// let div = document.querySelector("div")

// div.style.backgroundColor = "green"
// div.style.fontSize = "25px";
// console.dir(div)
// div.innerText = "Hello";

// div.style.visibility = "hidden"

// --------------------------------

// Adds and remove elements
// for adding and removing element first we need to create element

let newBtn = document.createElement("button")
newBtn.innerText = "Click Me!"
console.log(newBtn)

/*
let div = document.querySelector("div");
// div.append(newBtn)  // add button inside div in end
// div.prepend(newBtn)  // add button inside div in start
// div.before(newBtn);     // add button before starting div (use before)
// div.after(newBtn);     // add button after div end (use after)
*/


// add button after paragraph tag
/*
let p = document.querySelector("p")
p.after(newBtn)
*/
/*

let heading = document.createElement("h1")
heading.innerHTML = "<i> Hi, I am new!</i>"

// let div = document.querySelector("div")
// div.before(heading)

// document.querySelector("body").prepend(heading)
*/

// ** Delete ** 
/*
let para = document.querySelector("p")
para.remove(); */

// ** apendchild and removechild

var newDiv = document.createElement('div'); // Create a new div element
var parentElement = document.getElementById('parent'); // This is a div that have id = parent consider at parent div
console.log(parentElement)
parentElement.appendChild(newDiv); // Append the new div as a child of the parent element


// remove child

var parentElement = document.getElementById('parent'); // Get the parent element
var childToRemove = document.getElementById('child'); // Get the child element to remove
parentElement.removeChild(childToRemove); // Remove the specified child from the parent
