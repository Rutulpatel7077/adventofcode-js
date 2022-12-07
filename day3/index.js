const fs = require("fs");
const path = require("path");

const rucksacks = fs.readFileSync(
  path.resolve(__dirname, "./input.txt"),
  "utf8"
);

const part1 = () => {
  const data = rucksacks
    .split("\n")
    .map((item) => [
      item.slice(0, item.length / 2),
      item.slice(item.length / 2, item.length),
    ]);

  const parsedData = data.map((item) => {
    const compartment1 = item[0].split("");
    const compartment2 = item[1].split("");
    const findMatchingChar = compartment1.find((char) =>
      compartment2.includes(char)
    );
    return findMatchingChar;
  });

  const validChars = Array.from({ length: 26 }, (value, index) =>
    String.fromCharCode(index + "a".charCodeAt(0))
  );

  const sum = parsedData
    .map((item) => {
      const value = validChars.indexOf(item);
      if (value === -1) {
        return validChars.indexOf(item.toLowerCase()) + 27;
      }
      return value + 1;
    })
    .reduce((acc, item) => acc + item, 0);

  console.log(sum, "sum");
};

part1();