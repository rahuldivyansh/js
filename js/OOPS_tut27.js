console.log('Hello from tut 27')

let car = {
    name : 'Maruti 800',
    topSpeed : 102,
    run : function (){
        console.log("The car is running")
    }
}
// console.log(car.name)
// console.log(car.topSpeed)
// console.log(car.run())

function generalCar(givenName, givenSpeed){
    this.name = givenName
    this.topSpeed = givenSpeed
    this.run = function(){
        console.log(`${this.name} is running`)
    }
}

car1 = new generalCar('Mercedes', 230)
car2 = new generalCar('Harrier', 160)
car1.run()
car2.run()