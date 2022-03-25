const obj1 = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const obj2 = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi1 = this.mass / this.height ** 2;
    return this.bmi1;
  },
};
const jo = obj1.calcBMI();
const ma = obj2.calcBMI();
if (jo > ma) {
  console.log(
    `${obj1.fullName}'s BMI (${jo}) is larger than ${obj2.fullName}'s BMI (${ma})'`
  );
} else {
  console.log(
    `${obj2.fullName}'s BMI (${ma}) is larger than ${obj1.fullName}'s BMI (${jo})'`
  );
}
console.log("");
