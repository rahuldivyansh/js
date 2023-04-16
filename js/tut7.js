console.log('Hello from tut7.js')

// Array and Objects in js

// let arr = [1,2,'rahul',4]
// let arr1 = new Array(1,'home',3,4,5)

// let value = arr.indexOf('rahul')
// console.log(value)
// arr[3] = 'whu'

// //push - pop, unshift - shift
// arr1.splice(1,1)    // Remove 1 element starting from 1st index. so output arr = [1,3,4,5] 
// arr1.splice(1,0, 'divyansh') // Inserts divyansh at index 2(one after index 1)
// arr1.splice(3,1, 'Hello')    // Replaces element at index 3 with 'Hello'
// console.log(arr1)

// arr.reverse()       // Array gets reversed permanently
// console.log(arr)

// arr = arr.concat(arr1)

// // OBJECTS
// let obj = {
//     name : 'Divyansh',
//     marks : [1,2,3],
//     isHandsome : true,
//     'any key' : 'any value'
// }
// console.log(obj)
// console.log(obj.name)
// console.log(obj.isHandsome)

//  FOR EACH LOOP   
// let array = [1,2,3,4]
// array.forEach(function (element){
//     console.log(element)
// })

// let myObj = {
//     name : 'Divyansh',
//     age : 21,
//     cgpa : 8.6,
//     handsome : true
// }

// for(let key in myObj){
//     console.log(`The value of ${key} is ${myObj[key]}`)
// }

// console.log(myObj['name']) 

let array1 = [1,'Rahul', true, 'get out fomo']
array1.forEach(function (element, indexwa, array){
    console.log(`Index ${indexwa} - ${element} `)
})
