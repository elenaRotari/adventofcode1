const data = require("fs");

const string = data.readFileSync("elfen.txt").toString();
console.log(string);
const toArray = string
  .split("\n")
  .map((el) => (!el ? " " : el))
  .join(" ")
  .split("  ")
  .map((el, index) =>
    el.split(" ").reduce((acc, num) => {
      if (num) {
        console.log(+num);
        acc += parseInt(num);
        return acc;
      }
      return acc;
    }, 0)
  )
  .sort((a, b) => b - a);
console.log(toArray);
