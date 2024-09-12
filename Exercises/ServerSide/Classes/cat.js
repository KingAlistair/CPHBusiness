export class Cat {
    constructor(name, color, breed){
        this.name = name,
        this.color = color,
        this.breed = breed
    }
    getCat() {
        return this.name + ' ' + this.color + ' ' + this.breed
    }

    changeName(name) {
        this.name = name
    }
}