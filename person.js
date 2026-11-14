export class Person{

    #birthday;
    constructor(firstName, lastName, birthday) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.#birthday = birthday;
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }

    get birthday(){
        return this.#birthday;
    }

    getAge(){
        const [month, day, year] = this.#birthday.split('-').map(Number);
        const birthDate = new Date(year, month -1, day);
        const today = new Date();

        let age = today.getFullYear() - birthDate.getFullYear();

        if (today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
            age--;
        }

        if (age % 10 === 1 && age % 100 !== 11) {
            return `${age} год`;
        } else if ((age % 10 === 2 || age % 10 === 3 || age % 10 === 4) && age % 100 !== 12 && age % 100 !== 13 && age % 100 !== 14){
            return `${age} года`;
        } else {
            return `${age} лет`
        }
    }
}