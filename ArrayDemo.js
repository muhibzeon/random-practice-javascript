const year = function (element) {

    return 2037 - element;

}
const byears = [1990, 1978, 2010, 1965];
const age = year(byears[0]);
const age1 = year(byears[2]);
console.log(age);
console.log(age1);

const ages = [year(byears[0]), year(byears[2]), year(byears[byears.length - 1])];
console.log(ages);

//Add elements

const friends = ['Ross', 'Monica', 'Rachel', 'Chandler'];
friends.push('Pheobe');
console.log(friends);

friends.unshift('Joey');
console.log(friends);

//remove elements
friends.pop('Joey');
console.log(friends);

friends.shift();
console.log(friends);

//check element in an array
console.log(friends.includes('Rachel'));

//A code for calculating tips
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}
const bills = [120, 355, 280];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];

console.log(bills, '=>', tips);