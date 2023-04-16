// STRING FUNCTIONS IN JS

console.log('Hello from tut6.js')

// let str = 'Hello baccho '+ 'kaise ho tumlog'
// console.log(str)
// console.log(str.length)

// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// console.log(str.indexOf('baccho'))
// console.log(str.indexOf('bhak'))

// console.log(str.lastIndexOf('a'))
// console.log(str.charAt(10))

// console.log(str.endsWith('tumlog'))

// console.log(str.includes('tumlog'))

// console.log(str.substring(0,5))

// console.log(str.substring(-6))  // This returns the entire string
// console.log(str.slice(-6))      // This returns the last 6 characters of the string

// imp
// console.log(str.split(' ')) // cuts the string into array whereever it finds the parameter passed in split's parameter

// console.log(str.replace('Hello', 'Hi'))  // Replaces the first instance only

// console.log(str.replaceAll(' ', ','))  // Replaces all occurences



// TEMPLATE LITERALS IN JS

let fruit1 = 'Orange'
let fruit2 = 'Mango'
let name = 'Divyansh'

let statement = `Hello ${name} <h1> This is a h1 heading </h1> <p> you like ${fruit1} and 
                ${fruit2} </p> \ ` 

console.log(statement)      // This just prints the statement's value

document.body.innerHTML = statement     // This executes the html code inside the string

/* The back tick when used to define strings instead of single or double quotes, it offers features such as :
    - variable printing without concatinating using +
    - Multi line strings
    - html inside string which can be applied to the page as html code
*/

