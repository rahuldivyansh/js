console.log("hello from tut 24")

// Date and Time Objects

let today = new Date()
// console.log(today)

let otherDate = new Date('2003-4-3 04:54:08')
otherDate = new Date('June 13 1999')
otherDate = new Date('12/01/1999')
// console.log(otherDate)
let a = otherDate.getDay() // sun - 0, mon - 1, tue - 2 and so on
a = otherDate.getDate() 
a = otherDate.getSeconds() 
otherDate.setDate(4) 
a = otherDate.getDate() 
console.log(a)

