console.info("Day 5");

const fs = require("fs");
const path = require("path");

const stepsTxtFile = fs.readFileSync(
  path.resolve(__dirname, "input-steps.txt"),
  "utf8"
);

const stepsDemoTxtFile = fs.readFileSync(
  path.resolve(__dirname, "input-steps-demo.txt"),
  "utf8"
);

const steps = stepsTxtFile.split("\n").map((step) => {
  const splittedText = step.split(" ");
  const numberOfCrates = splittedText[1];
  const moveFrom = splittedText[3];
  const moveTo = splittedText[5];

  return [+numberOfCrates, +moveFrom, +moveTo];
});

const currentCratesState = [
  ["V", "R", "H", "B", "G", "D", "W"],
  ["F", "R", "C", "G", "N", "J"],
  ["J", "N", "D", "H", "F", "S", "L"],
  ["V", "S", "D", "J"],
  ["V", "N", "W", "Q", "R", "D", "H", "S"],
  ["M", "C", "H", "G", "P"],
  ["C", "H", "Z", "L", "G", "B", "J", "F"],
  ["R", "J", "S"],
  ["M", "V", "N", "B", "R", "S", "G", "L"],
];

const results = steps.reduce((acc, step) => {
  const numberOfCratesToMove = step[0];
  const fromIndex = step[1] - 1;
  const toIndex = step[2] - 1;

  acc[toIndex].unshift(
    ...acc[fromIndex].slice(0, numberOfCratesToMove).reverse() // part 1
    // ...acc[fromIndex].slice(0, numberOfCratesToMove) // part 2
  );
  acc[fromIndex].splice(0, numberOfCratesToMove);

  return acc;
}, currentCratesState);


console.log(results);
console.log("Answer:", results.map((item) => item[0]).join(""));

