const fs = require("fs");
const path = require("path");

const stepsTxtFile = fs.readFileSync(
  path.resolve(__dirname, "./input.txt"),
  "utf8"
);

const data = stepsTxtFile.split("\n");
const results = data.reduce(
  (acc, item, currentIndex) => {
    if (item === "") {
      acc.results.push(acc.sum);
      acc.sum = 0;
    } else {
      acc.sum = Number(acc.sum) + Number(item);
    }

    if (currentIndex === data.length - 1) {
      acc.results.push(acc.sum);
      acc.sum = 0;
    }

    return acc;
  },
  {
    results: [],
    sum: 0,
  }
);

const highest = Math.max(...results.results)
const topThreeTotal = results.results.sort((a, b) => a - b).reverse().slice(0, 3).reduce((acc, current) => acc + current)

console.log(highest, topThreeTotal);
