// https://www.acmicpc.net/problem/11497
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

function solution(woods) {
  woods.sort((a, b) => a - b);

  const arr1 = woods.filter((_, i) => i % 2 === 0);
  const arr2 = woods.filter((_, i) => i % 2 === 1);

  const result = arr1.concat(arr2.reverse());

  let max = Math.abs(result.at(-1) - result[0]);

  for (let i = 0; i < result.length - 1; i++) {
    max = Math.max(Math.abs(result[i + 1] - result[i]), max);
  }

  return max;
}

const answer = [];
for (let i = 2; i < input.length; i += 2) {
  answer.push(solution(input[i]));
}

console.log(answer.join("\n"));
