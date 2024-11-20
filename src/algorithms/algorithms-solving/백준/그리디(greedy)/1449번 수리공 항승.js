// https://www.acmicpc.net/problem/1449
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

function solution(L, punc) {
  punc.sort((a, b) => a - b);

  let start = punc[0] - 0.5;
  let end = start + L;
  let count = 1;

  for (let i = 0; i < punc.length; i++) {
    if (punc[i] + 0.5 > end) {
      start = punc[i] - 0.5;
      end = start + L;
      count++;
    }
  }
  return count;
}

console.log(solution(input[0][1], input[1]));
