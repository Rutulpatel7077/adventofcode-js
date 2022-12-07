const fs = require("fs");
const path = require("path");

const steps = fs.readFileSync(path.resolve(__dirname, "./input.txt"), "utf8");

const score = {
  A: 1,
  X: 1,

  B: 2,
  Y: 2,

  C: 3,
  Z: 3,
};

const rules = {
  Z: "B",
  Y: "A",
  X: "C",
};

const keyMapping = {
  X: "A",
  Y: "B",
  Z: "C",
};

const intendedWinningPoint = {
    X: 0,
    Y: 3,
    Z: 6,
  };

const calculateScore = (item) => {
  const opponent = item[0];
  const mine = item[1];

  let winningPoint = 0;
  if (rules[mine] === opponent) {
    winningPoint = 6;
  }

  if (keyMapping[mine] === opponent) {
    winningPoint = 3;
  }

  return {
    winningPoint,
    gamePoint: score[mine],
  };
};

const calculateScorePart2 = (item) => {
  const opponent = item[0];
  const expectedDecision = item[1];
  let mine = Object.keys(rules).find(eachItem => {
    if (calculateScore([opponent, eachItem]).winningPoint === intendedWinningPoint[expectedDecision]) {
      return eachItem;
    }
  })


  let winningPoint = 0;
  if (rules[mine] === opponent) {
    winningPoint = 6;
  }
  if (keyMapping[mine] === opponent) {
    winningPoint = 3;
  }

  return {
    winningPoint,
    gamePoint: score[mine],
  };
};

const data = steps.split("\n").map((item) => item.split(" "));
const scores = data
  .map((game) => calculateScore(game))
  .reduce((acc, item) => {
    acc = acc + item.winningPoint + item.gamePoint;
    return acc;
  }, 0);

  const scores2 = data
  .map((game) => calculateScorePart2(game))
  .reduce((acc, item) => {
    acc = acc + item.winningPoint + item.gamePoint;
    return acc;
  }, 0);

console.log(scores2);
