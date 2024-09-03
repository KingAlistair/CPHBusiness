export class Car {
    constructor(make, model, year) {
        this.make = make,
        this.model = model,
        this.year = year,
        this.isRunning = false
    }

    getCar() {
        return 'Make: ' + this.make + ' Model: ' + this.model + ' Year: ' + this.year
    }

    start() {
        this.isRunning = true

        return 'The ' + this.make + ' ' + this.model + ' has started!'
    }

    stop() {
        this.isRunning = false

        return 'The ' + this.make + ' ' + this.model + ' has stopped!'
    }
}