"use strict";
const tempCalculate = function (t1, t2) {
  const t3 = t1.concat(t2);

  console.log(t3);

  let max = t3[0];
  let min = t3[0];

  for (let i = 0; i < t3.length; i++) {
    if (t3[i] > max) {
      max = t3[i];
    }
    if (t3[i] < min) {
      min = t3[i];
    }
  }
  console.log(max, min);

  return max - min;
};
const result = tempCalculate([-4, 23, 12, 17], [0, 11, -12, 9, -2]);
console.log(result);
