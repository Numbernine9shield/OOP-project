import {Person} from "./person.js";

export class Worker extends Person{

    #rate = 1000;
    #days = 0;

    constructor(firstName, lastName, birthday, position) {
        super(firstName, lastName, birthday);
        this.position = position;
    }

    get rate(){
        return this.#rate;
    }

    set rate(value){
        if (value >= 1000){
            this.#rate = Number(value);
        } else {
            console.log('Ставка должна быть не менее 1000!')
        }
    }

    addDays(countDays){
        const today = new Date();
        const dayInMonth = new Date(today.getFullYear(), today.getMonth()+1, 0).getDate();

        if (countDays>0 && countDays + this.#days <= dayInMonth){
            this.#days += countDays;
        }
    }

    get days(){
        return this.#days;
    }

    getSalary(){
        if (this.birthday.split('-').map(Number)[0] === new Date().getMonth() + 1){
            return this.#rate * this.#days + this.#rate*this.#days*0.1;
        }
        return this.#rate * this.#days;
    }

    static whoWorkedMore(...workers){
        let maxDays = 0;

        workers.forEach(worker => {
            if (worker.#days > maxDays){
                maxDays = worker.#days;
            }
        })

        const bestWorker =  workers.filter(worker => worker.#days === maxDays);

        bestWorker.forEach(worker => {
            console.log(`Больше всех отработал ${worker.getFullName()}. Количество отработанных дней ${worker.#days}`)
        })
    }

    static whoIsYounger(...workers){
        let minAge = Infinity;

        workers.forEach(worker => {
            if (parseInt(worker.getAge()) < minAge){
                minAge = parseInt(worker.getAge());
            }
        })

        const youngWorkers = workers.filter(worker => parseInt(worker.getAge()) === minAge);

        youngWorkers.forEach(worker => {
            console.log(`${worker.getFullName()} - ${worker.getAge()}`)
        })
    }
}

