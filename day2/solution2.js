const data = require("fs");

const game = data.readFileSync("game1.txt").toString();
console.log(game);
const options = {
  "A X": 1 + 3,
  "A Y": 2 + 6,
  "A Z": 3 + 0,
  "B X": 1 + 0,
  "B Y": 2 + 3,
  "B Z": 3 + 6,
  "C X": 1 + 6,
  "C Y": 2 + 0,
  "C Z": 3 + 3,
};
console.log(game.split("\n"));

const result = game.split("\n").reduce((acc, el) => {
  return (acc += options[el]);
}, 0);

console.log(result);
const optionSecond = {
  "A X": 3 + 0,
  "A Y": 1 + 3,
  "A Z": 2 + 6,
  "B X": 1 + 0,
  "B Y": 2 + 3,
  "B Z": 3 + 6,
  "C X": 2 + 0,
  "C Y": 3 + 3,
  "C Z": 1 + 6,
};

const result1 = game.split("\n").reduce((acc, el) => {
  return (acc += optionSecond[el]);
}, 0);

console.log(result1);
