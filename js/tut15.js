console.log('Hello from tut15.js')

// DOM Traversing
// let a = document.querySelector('.container')
// console.log(a)
// console.log(a.childNodes)   // this includes text and comments also
// console.log(a.children)     // this doesn't

// Adding elements to html file (tut16.js)
let element = document.createElement('div')

element.className = 'child'
element.setAttribute('Title','myTitle')
element.innerText = 'Hello sir'
let sel = document.querySelector('div.container')

sel.appendChild(element)


console.log(element)
console.log(sel)

// Replace an element

let element2 = document.createElement('h3')
element2.id = 'element2Id'
element2.innerHTML = 'This is replaced element'

element.replaceWith(element2)

// Quick quiz - create an heading element with text as "go to google" and create a tag outside it with href = "https://www.google.com"

let element3 = document.createElement('a')
element3.innerText = 'Go to google'
element3.setAttribute('href','https://www.google.com')
let sel2 = document.querySelector('div.container')

sel2.appendChild(element3)