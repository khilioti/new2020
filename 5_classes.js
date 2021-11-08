class Person {
    name = 'uncnown name'
    static type = 'HUMAN'
    static #area = 'EARCH'
    #year = 1993

    constructor(name) {
        this.name = name
    }

    static printArea() {
        return Person.#area === 'EARCH' ? 'Земля' : 'Марс'
    }

    get age() {
        return new Date().getFullYear() - this.#year
    }

    set age(age) {
        if (age > 0) {
            this.#year = new Date().getFullYear() - age
        }
    }
}

const person = new Person('Denis')
console.log(person.name)
console.log(person.age)
person.age = 23
console.log(person.age)
console.log(Person.type)
console.log(Person.printArea())