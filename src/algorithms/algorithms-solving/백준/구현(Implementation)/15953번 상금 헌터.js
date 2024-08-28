// https://www.acmicpc.net/problem/15953
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

function solution(numbers) {
  const A = [];
  const B = [];
  const rewardA = [500, 300, 200, 50, 30, 10];
  const rewardB = [512, 256, 128, 64, 32];

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j <= i; j++) {
      A.push(rewardA[i]);
    }
  }

  let index = 0;
  for (let i = 1; i <= 16; i *= 2) {
    for (let j = 0; j < i; j++) {
      B.push(rewardB[index]);
    }
    index += 1;
  }

  let answer = [];
  for (const [a, b] of numbers) {
    let [resultA, resultB] = [A[a - 1], B[b - 1]];
    if (a === 0 || resultA === undefined) {
      resultA = 0;
    }
    if (b === 0 || resultB === undefined) {
      resultB = 0;
    }
    answer.push((resultA + resultB) * 10000);
  }

  return answer.join("\n");
}

console.log(solution(input.slice(1)));
