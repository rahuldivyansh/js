// Type conversion and type coercion
// console.log('Hello from tut4.js')

// let myVar
// myVar = 99
// console.log(myVar + ' Is of type '+ (typeof myVar))

// myVar = String(myVar)                  // Converting number into string
// console.log(myVar, typeof myVar)

// let boolVar = true
// console.log(boolVar, typeof boolVar)
// boolVar = String(boolVar)               // Converting boolean into string
// console.log(boolVar, typeof boolVar)

// let date = new Date()
// console.log(date , typeof date)
// date = String(date)
// console.log(date , typeof date)

// let arr = [1,2,3]
// console.log(arr+ ' Length is '+ arr.length +' '+ typeof arr)
// arr = String(arr)
// console.log(arr+ ' Length is '+ arr.length +' '+ typeof arr)

// The length in array is the number of elements whereas the length in string is the total characters including commas
// var.toString() works also the same as String(var) with difference being that we can't use toString with undefined or null values

// let num = Number("1232fana")
// console.log(num)    // as 1232fana is not a number so NaN is printed
// let num1 = Number(true)
// console.log(num1)


// We also have parseInt and parseFloat. The difference between Number(var) and parseInt(var) is that parseint converts decimal string into integer whereas number keeps the decimal values

// We have var.toFixed(value) which gives the decimal point numbers equal to value





// Type Coercion
let num = 22
let string = ' 34'
console.log(num + string)   // number gets converted to string and gets concatenated

