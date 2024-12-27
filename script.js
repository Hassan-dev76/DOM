// console.log(window);
// console.dir(window.document)

// console.log(document.body);
// console.dir(document.body);

// console.log(document.head);
// console.log(document.body.style.background="Grey")

/*
let heading = document.getElementById("heading") // h1
console.dir(heading)
console.dir(typeof(heading));

let paragraph = document.getElementsByClassName("paragraph")
console.dir(paragraph)

let parahs = document.getElementsByTagName("p")
console.dir(parahs)*/


// using Query Selector for tags


/*
let firstEl = document.querySelector("p")  // query selector return first element
console.dir(firstEl)

let firstEl2 = document.querySelector("form") // query selector return first element
console.dir(firstEl2); */

// using query selector for class and id

/*
let query_class = document.querySelectorAll(".header2")
console.dir(query_class)


let query_id = document.querySelector("#second-div")
console.dir(query_id)*/

// *** Properties ***

// Find Tags Name

/* let for_tag = document.querySelector("#changeTextBtn")
console.log("Tag name");
console.dir(for_tag);
console.dir(for_tag.tagName);*/

// *** innerHTML ***

let access_div = document.querySelector("div")
console.dir(access_div)

// access HTML 

console.dir(access_div.innerHTML)

// access Text

console.dir(access_div.innerText)

// access comment

console.dir(access_div.COMMENT_NODE)

// change the content or set the value 
// By the help of innerHTML we can also change the HTML 

/*console.dir(access_div.innerText = "\n My name is Hassan")

let change_html = access_div.innerHTML = "<div> <br> Changed div </div>"
let change_html = access_div.innerHTML = "<i> <br> Changed div </i>"  // div is replace to italic tag <i></i>

console.dir(change_html)

console.dir(access_div.innerHTML)
console.dir(access_div.innerText)
*/
