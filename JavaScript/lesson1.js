const cat1 = {
    name: 'Cirmos',
    color: 'Grey',
    getNameAndColor: function() {
        return this.name + ' ' + this.color
    }
}

console.log(cat1)
cat1.species = 'Street'
console.log(cat1)
console.log(cat1.getNameAndColor())

const person = {
    firstName: 'Joe', lastname: 'Bull'
};

const {firstName, lastName} = person;