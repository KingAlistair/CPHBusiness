export class Person {
    constructor(firstName, hobby) {
        this.firstName = firstName,
        this.hobby = hobby
    }

    greet() {
        console.log('Hi, my name is ' + this.firstName + ' and I like ' + this.hobby);
    }
}


