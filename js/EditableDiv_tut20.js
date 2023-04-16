console.log("Hello");
/*
    You have to create a div and inject it into the page which contains a heading.
    Whenever someone clicks on the div, it should be converted into an editable item.
    Whenever user clicks away, Save the note into the local storage.
*/
// let sel = document.getElementsByTagName('div')
// console.log(typeof sel)

// Create a div element
let divElem = document.createElement("div");

let text;

let val = localStorage.getItem("text");
if (val == null) {
  // Add text to that div element
  text = document.createTextNode("This is my element. Click to edit it");
} else {
  text = document.createTextNode(val);
}

// Append the text node in the div element
divElem.appendChild(text);

// Set some attributes on that div element
divElem.setAttribute("class", "elem");
divElem.setAttribute("id", "elem");
divElem.setAttribute(
  "style",
  "border : 2px solid black; width : 154px; margin: 34px; padding: 23px"
);

// Get the first element with class = 'container'
let container = document.querySelector(".container");
// Get the first element with id = 'myFirst'
let first = document.getElementById("myFirst");

// Inserting the element (divElem) before the element with id = 'myFirst'
container.insertBefore(divElem, first);

// console.log(divElem,container,first)

// Add event listener to the divElem element
divElem.addEventListener("click", function () {
  let noOfTextAreas = document.getElementsByClassName("textarea").length;
  if (noOfTextAreas == 0) {
    // elem is the id of the element divElem.
    let html = elem.innerHTML; // html get the string value = 'This is my element. Click to edit it.'

    divElem.innerHTML = `<textarea class = 'textarea' id = 'textarea' rows = '3'>${html}  `;
  }

  let textarea = document.getElementById("textarea");
  textarea.addEventListener("blur", function () {
    elem.innerHTML = textarea.value;
    localStorage.setItem("text", textarea.value);
  });
});

divElem.addEventListener;

