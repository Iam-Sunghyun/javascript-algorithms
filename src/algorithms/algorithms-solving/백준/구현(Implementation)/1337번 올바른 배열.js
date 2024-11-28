// https://www.acmicpc.net/problem/1337
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

function solution(numbers) {
  numbers.sort((a, b) => a - b);
  const result = [...numbers];

  let min = +Infinity;
  for (let i = 0; i < result.length; i++) {
    let count = 0;
    for (let j = result[i]; j < result[i] + 5; j++) {
      if (result.includes(j)) continue;
      else {
        count += 1;
      }
    }

    min = Math.min(min, count);
  }
  return min;
}

console.log(solution(input.slice(1)));
