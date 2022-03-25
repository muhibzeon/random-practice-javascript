const zeon = {
    firstName: 'Calkin',
    lastName: 'Derby',
    birthYear: 1991,
    job: 'Student',
    salary: 'broke',
    hobby: 'Lying about',
    hasLicense: false,


    calcAge: function () {
        console.log(this);
        return 2037 - this.birthYear;
    },

    getSummery: function () {
        return `${this.firstName} is ${this.calcAge()} years old ${this.job} and he has ${this.hasLicense ? 'a' : 'no'} driver's License`;
    }
};

// const interestedIn = prompt('What do you want to know about zeon? choose among firtsName, lastName, job, salary, hobby');

// if (zeon[interestedIn]) {
//     console.log(zeon[interestedIn])
// } else {
//     console.log('Wrong Insertion!!!Choose something else')
// }

zeon.location = 'Germany';
zeon['Twitter'] = 'lardidardida';
//console.log(zeon);

console.log(zeon.calcAge());
//console.log(zeon['calcAge'](1989));


console.log(zeon.getSummery());
