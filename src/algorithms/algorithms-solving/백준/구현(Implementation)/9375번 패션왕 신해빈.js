// https://www.acmicpc.net/problem/9375
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => (Number.isInteger(+n) ? +n : n.split(" ")));

function solution(input) {
  const answer = [];
  for (let i = 0; i < input.length; i++) {
    if (Number.isInteger(+input[i])) {
      const clothes = new Map();
      for (let j = i + 1; j <= i + +input[i]; j++) {
        clothes.set(input[j][1], clothes.get(input[j][1]) ? clothes.get(input[j][1]) + 1 : 1);
      }

      let sum = 1;
      for (const [_, value] of clothes) {
        sum *= value + 1;
      }
      answer.push(sum - 1);
    }
  }

  return answer.join("\n");
}

console.log(solution(input.slice(1)));
