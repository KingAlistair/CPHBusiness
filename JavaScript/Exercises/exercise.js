import { Cat } from './cat.js';
import { Car } from './car.js';
import { topicSeperator } from './topicSeperator.js';

topicSeperator('Functions and objects');

function getName(firstName, lastName) {
    console.log(firstName + ' ' + lastName);
    return firstName + ' ' + lastName;
};

getName('Billy', 'the boy');

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
};

console.log(calculator);

topicSeperator('Exercise class');

const cat1 = new Cat('Lily', 'Orange', 'Persian');

console.log(cat1.getCat());
cat1.changeName('Lilliana');
console.log(cat1.getCat());

topicSeperator('Exercise car');

const car1 = new Car('Opel', 'Astra', 1999);
const car2 = new Car('Ford', 'Focus', 2005);

console.log(car1.getCar());

console.log(car2.start());
console.log(car2.stop());

topicSeperator('Exercise arrays');

let names = ['Tibor', 'Kálmán', 'Eszter', 'Barna'];

console.log(names[0]);
console.log(names.indexOf('Kálmán'));
console.log(names.indexOf('Névtelen'));

names.push('Vince');
console.log(names);

const firstThreeNames = names.slice(0, 3);

console.log(firstThreeNames);

const object1 = {
    firstName: 'Finn',
    lastName: 'The Human',
    email: 'finn@thuman.com'
};

const object2 = {
    firstName: 'Jake',
    lastName: 'The Dog',
    email: 'jake@t.dog.com'
};

const objects = [object1, object2];

console.log(objects);
console.log(objects[0].email);

topicSeperator('Exercise arrays & objects (Student Grades Management)');

const student = {
    name: 'Joey',
    id: 1,
    grade: []
};

function addGrade(student, grade) {
    student.grade.push(grade);

    return student;
};

console.log(addGrade(student, 12));
