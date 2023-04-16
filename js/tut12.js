console.log("Hello from tut 12")

// let a = document
// a = document.links
// a = document.forms[0]
// a = document.images

// Fetch all links containing a text form a given page
a = document.links
let str = 'hi'
a = Array.from(a)   // This forms an array using elements in a

a.forEach(function (element){
    if (element.contains(str))
        console.log(element)
});