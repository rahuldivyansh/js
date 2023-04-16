console.log('Welcome to tut 20')
// Go to storage -> Local Storage for locally stored key value pairs
// Go to storage -> Session Storage for key value pairs stored in session

localStorage.setItem('Name', 'Harry')
localStorage.setItem('Name2', 'Divyansh')

console.log(window.localStorage.Name)
console.log(window.localStorage.Name2)

let name = localStorage.getItem('Name')
console.log(name)

// Clear a particular key
localStorage.removeItem('Name')

// localStorage.clear()    // clear the entire local storage

// Array ko string me convert krke store ke deta hai isliye hame JSON.stringify ka use karna pdta hai to keep array intact. Aur access krte waqt JSON.parse use krna pdta hai to get values in array format.

let impArray = ['aloo', 'bhindi', 'pyaz']
localStorage.setItem('Sabzi', JSON.stringify(impArray)) //Parsing array into json and then storing it

let sabzi = JSON.parse(localStorage.getItem('Sabzi'))   //Parsing back to array and then printing it
console.log(sabzi)

// same exact methods go with session storage difference being that session gets cleared when browser is closed but local remains there.