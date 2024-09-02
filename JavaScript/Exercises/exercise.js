import { Cat } from "./cat.js";

console.log('Functions and objects -----------------------------------------')

function getName(firstName, lastName) {
    console.log(firstName + ' ' + lastName);
    return firstName + ' ' + lastName;
};

getName('Billy', 'the boy')

function calculateArea(width, height) {
    console.log('Area is: ' + width * height)
    return width * height;
};

calculateArea(10, 50);

function calculateDistance(speed, time) {
    let distance = speed * time
    console.log('You have traveled ' + distance + ' km.')
    return distance;
};

calculateDistance(160, 2);


const calculator = {
    name: 'Dani',
    getName: getName('Tony', 'Small'),
    getArea: calculateArea(140, 120),
    getDistance: calculateDistance(200, 5),
}

console.log(calculator);

console.log('Exercise class-----------------------------------------')

const cat1 = new Cat('Lily', 'Orange', 'Persian')

console.log(cat1.getCat());
cat1.changeName('Lilliana');
console.log(cat1.getCat());

console.log('Exercise car-----------------------------------------')

