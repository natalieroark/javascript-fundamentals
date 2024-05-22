const days_of_week=['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
//console.log(days_of_week);

// Array using keyword- Array (Not Recommended)
const values=new Array(1,2,3,4,5,6,7,8,9)

const mixture=['Tues', 12, false];
//console.log(mixture);

function getDay(dayIndex){
    const day=days_of_week[dayIndex];
    console.log(day)
}
//getDay(6);

const changeElement=(newElement, indexNum) => {
    days_of_week[indexNum]=newElement;
    console.log(`New array: ${days_of_week}`);
}
//changeElement('Monday', 1);
//changeElement('Sunday', 0);

const arraySize=days_of_week.length;
//console.log(arraySize);
//console.log(days_of_week.length);
//console.log([0,1,2,3,4,5,6].length);

const loopArray=() => {
    for (item of days_of_week) {
        console.log(item);
    }
}
//loopArray();

const loopArray2 =() => {
    for (i=0; i<values.length; i++){
        console.log(values[i]);
    }
}
//loopArray2();

function forEachLoop(){
    mixture.forEach(function countElement(element){
        console.log(element);
    })
}
//forEachLoop();

const fruits=['apple', 'banana', 'strawberry', 'grapes', 'orange'];

const joinFruits=() => {
    const joinedFruits=fruits.join(' + ')
    console.log(joinedFruits)
}
//joinFruits();

//onsole.log(fruits.slice(0, 3));
//console.log(fruits);

//console.log(fruits.pop());
//console.log(fruits);

const newFruitList=fruits.push ('durian', 'dragonfruit');
//console.log(newFruitList);
//console.log(fruits)

//console.log(fruits.reverse());

console.log(fruits.shift());
console.log(fruits.shift());
console.log(fruits);