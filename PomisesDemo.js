let promisedemo = new Promise((resolve, reject), () => {
  const a = 3;
  if (a === 3) {
    resolve("Success");
  } else {
    reject("Failure");
  }
});

promisedemo
  .then((message) => {
    console.log("This is a then Message " + message);
  })
  .catch((message) => {
    console.log("Thius is inside catch " + message);
  });
