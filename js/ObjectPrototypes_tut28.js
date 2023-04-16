console.log("hello from tut 28")

let obj = {
    name : 'Divyansh',
    age : 21
}
console.log(obj)    // This contains a object which is made on top of object prototype(definition) pre built in javascript.

function myObj(givenName){
    this.name = givenName
}

myObj.prototype.getName = function() {
    return this.name
}


let obj2 = new myObj("Harsh")
console.log(obj2)   // This contains object made from myObj function so it has prototype - myObj () but that is made on object defined in javascript so prototype chaining happens.
