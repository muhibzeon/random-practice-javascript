'use strict';

const bookings = [];

const flightDetails = (
  name,
  passengerNum = 1,
  totalPrice = 199 * passengerNum
) => {
  const booking = {
    name,
    passengerNum,
    totalPrice,
  };

  console.log(booking);
  bookings.push(booking);
};

flightDetails('LH10', undefined, 123);

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');

  return [first.toUpperCase(), ...others].join(' ');
};

const oneWord = function (str) {
  const val = 'Mango';
  return str.replace(/is/g, val).toLowerCase();
};

const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformer String: ${fn(str)} `);

  console.log(`Transformed By: ${fn.name}`);
};

transformer('JavaScript is the best', upperFirstWord);

transformer('JavaScript is the best', oneWord);

const greet = greeting => name => console.log(`${greeting} ${name}`);

greet('hello')('World!');

const travel = {
  airline: 'lufthansa',
  iataCode: 'LH',
  bookings: [],

  book: function (flightNum, name) {
    // console.log(
    //   `${name} has booked the flight ${this.iataCode}${flightNum} on airlines ${this.airline}`
    // );

    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name,
    });
  },
};

travel.book(234, 'Muhib');
travel.book(747, 'John');
//console.log(travel);

const euroWings = {
  name: 'EuroWings',
  iataCode: 'EU',
  bookings: [],
};

const book = travel.book;

//doesn't work. because this doesn't know where to point
//book(191, 'Calkin');

book.call(euroWings, 567, 'Rebecca');
book.call(euroWings, 231, 'Monica');
console.log(euroWings);

//bind() method
const bookEW = book.bind(euroWings);
bookEW(235, 'Ross');
bookEW(454, 'Joey Bishop');

const bookLT = book.bind(travel);
bookLT(987, 'Chandler Bing');
console.log(travel);
console.log(euroWings);

//with event listener
travel.plane = 300;
travel.buyPlane = function () {
  console.log(this);

  this.plane++;

  console.log(this.plane);
};

document
  .querySelector('.buy')
  .addEventListener('click', travel.buyPlane.bind(travel));

//partial applicaiton
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); //first parameter is the this keyword

console.log(addVAT(100));
console.log(addVAT(300));

const addTaxRate = function (rate) {
  return value => {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
