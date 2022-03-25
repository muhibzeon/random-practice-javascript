var dhaka = {
  firstName: "JahangirNagar",
  age: 300,
  isFemale: false,
  type: "MegaCity",
  dob: new Date(2000, 01, 25).toJSON,
  address: {
    position: "middle",
    postCode: 1200,
  },
};

console.log(dhaka);
console.log(dhaka.address);
console.log(dhaka.address.postCode);
console.log(Object.values(dhaka));
console.log(Object.keys(dhaka));

let names = ["Telles", "Joey", "Chandler"];
console.log(names[1]);

console.log();
names.forEach((element) => {
  console.log(element);
});
console.log("Hello Live server");
