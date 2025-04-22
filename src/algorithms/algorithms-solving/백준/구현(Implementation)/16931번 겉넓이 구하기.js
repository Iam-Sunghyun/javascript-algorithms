// https://www.acmicpc.net/problem/16931
const input = require("fs")
  .readFileSync(0, "utf-8")
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

function solution(numbers) {
  let sum = numbers.length * numbers[0].length * 2;

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers[i].length; j++) {
      for (let k = numbers[i][j]; k >= 1; k--) {
        for (let l = 0; l < 4; l++) {
          const n = numbers[i + dx[l]]?.[j + dy[l]];
          if (Number.isInteger(n) && n < k) {
            sum += 1;
          } else if (n === undefined) {
            sum += 1;
          }
        }
      }
    }
  }

  return sum;
}

console.log(solution(input.slice(1)));
