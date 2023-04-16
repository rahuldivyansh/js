console.log("This is tutorial 31")

class Employee{
    constructor(givenName, givenAge){
        this.name = givenName
        this.age = givenAge
    }
    slogan(){
        return `My name is ${this.name} and I am ${this.age} years old.`
    }

    // We can't use this keyword in static method
    static add(a, b){
        return a+b
    }
}

rahul = new Employee("Rahul", 56)
console.log(rahul)
console.log(rahul.slogan());
console.log(Employee.add(4,7));     // As static method is called without an object, we call it with class name.

class Programmer extends Employee{
    constructor(givenName, givenAge, favoriteLanguage){
        super(givenName, givenAge);
        this.language = favoriteLanguage
    }

    favLang(){
        return `The favorite language of ${this.name} is ${this.language}`
    }
}

let divyansh = new Programmer("Divyansh", 21, "Java")
console.log(divyansh.favLang())