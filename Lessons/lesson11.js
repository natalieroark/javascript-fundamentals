const myHouse = new Object()
//console.log(myHouse);
myHouse.foundation =`Concrete`;
myHouse.windowSize =`20`;
myHouse.doorColor =`White`;
myHouse.roofType = `Composite`;
//console.log(myHouse);
//console.log(myHouse.roofType);

const house = {
    foundationStyle : `Dirt`, 
    windowInchSize : `30"`,
    houseColor : `Tan`,
    roofTileType : `Shingle`
}
//console.log(house);
house.foundationStyle = `Concrete`;
house['houseColor'] = `Blue`
//console.log(house);

const somethingObj = {};
const str = `someString`;
const rand = Math.random();
const myObj = {};

somethingObj.type = `Lorem ipsum dolor sit anet`;
somethingObj["date issued"] = `Key has a space`;
somethingObj[str] = `Key is str variable`;
somethingObj[rand] = `Key is rand variable`;
somethingObj[myObj] = `Key is myObj variable`;
somethingObj[``] = `Key is an empty string`;
//console.log(somethingObj);
//console.log(somethingObj["date issued"]);
//console.log(somethingObj['']);

const alpha = Math.random();
const beta = `My beta`;
const cat = `My cat`;

const happy ={
    [cat] : `Some number`, 
    [beta] : `Just another string`
}
//console.log(happy);
//console.log(happy[`My cat`]);
//console.log(happy[cat]);

const showSomething = (obj, objName) => {
    let result = ""
    for (const key in obj) {
        if (Object.hasOwn(obj, key)) {
            result += `${objName}, ${key} = ${obj[key]}`;
         }
     }
     console.log(result);
}
//showSomething(somethingObj, "somethingObj")


function Person (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const peter = new Person  ('Peter', 'Parker');
const hal = new Person ('Hal', 'Jordan');

//console.log(peter);

hal.lastName = 'Smith';
//console.log(hal);

function Truck (make, model, year, color, owner){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.owner = owner;
}

const peterTruck = new Truck ('Chevy', 'Silverado', '2016', 'Black', 'Peter');
const halTruck = new Truck ('Ford','F150', '1985', 'White', 'Hal');
//console.log(peterTruck);
//console.log(halTruck);

const tempConvert = {
    fahrenheitToCelcius: function (fahrenheit){
        return ((fahrenheit - 32) * 5) / 9;
    }
    //celsiusToFahrenheit: function (celsius){
       // return (celsius * 9) / 5 + 32;
   // }
}
//console.log(tempConvert.fahrenheitToCelcius(33));
//console.log(tempConvert.celsiusToFahrenheit(33));

const watch = {
    displayType: 'Manual',
    displayTime: 'Printed',
    carried: 'Pocket',
    watchSound (){
        //console.log("The watch ticks per second.");
    }
}
//console.log(watch.displayType);
watch.watchSound();

const anotherObj = new Object();
const secondObj = {};

class Rectangle{
    #height
    #width
    constructor (height, width){
        this.#height = height;
        this.#width = width;
    }
    get height (){
        return this.#height;
    }
    get width (){
        return this.#width;
    }
    set height (height) {
        this.#height = height;
    }
    set width (width) {
        this.#width = width;
    }
    calculateArea (){
        return this.#height * this.#width;
    }
}
const myRectangle = new Rectangle (5, 25);
//console.log(myRectangle);
//console.log(myRectangle.height);
//console.log(myRectangle.width);
myRectangle.width = 20;
//console.log(myRectangle.width);
//console.log(myRectangle.calculateArea());

class Boat {
    constructor (color, engineType) {
        this.color = color;
        this.engineType = engineType;
    }
    move(){
        console.log(`Moving on the water using ${this.engineType}`);
    }
}
class Sailboat extends Boat {
    constructor (color, engineType, fuel){
        super(color, engineType);
        this.fuel = fuel;
    }
    explore (){
        console.log("Exploring the sea!");
    }
}
const myBoat = new Boat('Red', 'Outboard motor');
myBoat.move();

const mySailboat = new Sailboat('White', 'Sail', 'air');
mySailboat.explore();
mySailboat.move();
console.log(mySailboat.color);
