// console.log('Hello from console')
// Variable in javascript
// var, let and const

// var name = "Divyansh"
// var marks = 99
// var what
// console.log(name,marks,what)

// Variable rules
// 1. cannot start with numbers, 
// 2. cannot start with letter, _ or $
// 3. are case sensitive
// Generally _ at start is used for private varibles
// var is the oldest. const  and let are used now

// const value cannot be changed
// const should be initialized at creation

// let has a block scope whereas var has global scope
// var city = 'Delhi'
// {
//     let city = 'Dehradun'
//     console.log('Block scope let ',city)
// }
// console.log('Global scope var ',city)

// use let and const and much as possible and avoid using var.. 
// ..as it creates global scope and can create confusions and bugs

// If we create a const array then we can add values to it to change it but we can't reassign an new array to it. for ex
// const array = [1,2,3,4]     
// array.push(5)               // This will work 
// array = [6,7,8,8]           // This will give TypeError and invalid assignment to const array


/* Programming case types 

1. camelCase    - Used because if we type the first letters of words of a variable or function,etc the will be suggested faster
2. kebab-case
3. snake_case
4. PascalCase - Generally used to define class or file names

*/

