// https://www.acmicpc.net/problem/1049
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

function solution(N, packages) {
  const p1 = [...packages.sort((a, b) => a[0] - b[0])];
  const p2 = [...packages.sort((a, b) => a[1] - b[1])];
  let rest = N;
  let sum = 0;

  if (p1[0][0] / 6 > p2[0][1]) {
    return N * p2[0][1];
  }

  if (Math.ceil(N / 6) * p1[0][0] < Math.floor(N / 6) * p1[0][0] + p2[0][1] * (N % 6)) {
    return Math.ceil(N / 6) * p1[0][0];
  }

  while (rest !== 0) {
    if (rest >= 6) {
      sum += p1[0][0] * Math.floor(rest / 6);
      rest %= 6;
    } else {
      sum += p2[0][1] * rest;
      rest = 0;
    }
  }

  return sum;
}

console.log(solution(input[0][0], input.slice(1)));
