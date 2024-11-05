// https://www.acmicpc.net/problem/1531
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

function solution(M, input) {
  const painting = Array.from({ length: 100 }, () => new Array(100).fill(0));

  for (const [x1, y1, x2, y2] of input) {
    for (let i = x1 - 1; i <= x2 - 1; i++) {
      for (let j = y1 - 1; j <= y2 - 1; j++) {
        painting[i][j] += 1;
      }
    }
  }
  let count = 0;
  for (let i = 0; i < painting.length; i++) {
    for (let j = 0; j < painting[i].length; j++) {
      if (painting[i][j] > M) count += 1;
    }
  }

  return count;
}

console.log(solution(input[0][1], input.slice(1)));
