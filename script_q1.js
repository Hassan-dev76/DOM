// chnage the value of heading 2
/*
let h2 = document.querySelector("h2");
console.dir(h2)


let change = h2.innerText = "Hi, DOM"
console.dir(change)

h2.innerHTML = h2.innerText + "Adding DOM"; // concatinate string (add two strings)

*/


//  Change inner text value of each div

let divs = document.querySelectorAll(".box")

// console.dir(divs)

// changing text of each div (simple method)

// First div
/*
divs[0].innerText = "Change First div"

// Second div

divs[1].innerText = "Change Second div"

// Third div

divs[2].innerText = "Change Third div"
*/
// Access and change the values using loop
let indx = 1;

for(div of divs){
    // console.dir(div.innerText);
    let v = div.innerText = `new unique value ${indx}`;
    console.dir(v)
    indx++;
}