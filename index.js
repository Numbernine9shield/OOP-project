import {Worker} from './worker.js'

const workers = [
    new Worker('Александр', 'Петров', '05-15-1998', 'Frontend Developer'),
    new Worker('Дмитрий', 'Соколов', '11-22-2002', 'Backend Developer'),
    new Worker('Максим', 'Иванов', '03-10-1995', 'UI/UX Designer'),
    new Worker('Артем', 'Кузнецов', '08-17-2002', 'Project Manager'),
    new Worker('Никита', 'Морозов', '11-05-2005', 'QA Engineer'),
]

function addRate() {
    workers.forEach(worker => {
        worker.rate = 1100;
    })
}

addRate();

function addDaysNew() {

    workers.forEach(worker => {
        worker.addDays(7);
        worker.addDays(7);
    })

    workers[0].addDays(10);
    workers[1].addDays(15);
    workers[2].addDays(20);
    workers[3].addDays(6);
    workers[4].addDays(2);
}

addDaysNew();

function showSalary() {
    workers.forEach(worker => {
        console.log(`${worker.getFullName()} - ${worker.getSalary()} рублей.`)
    })
}

showSalary();

Worker.whoWorkedMore(...workers);
Worker.whoIsYounger(...workers);










