// https://www.acmicpc.net/problem/1439
const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(string) {
  const numObj = { 0: 0, 1: 0 };
  numObj[string[0]] += 1;

  for (let i = 0; i < string.length - 1; i++) {
    if (string[i] !== string[i + 1]) {
      numObj[string[i + 1]] += 1;
    }
  }

  return Math.min(numObj[0], numObj[1]);
}

console.log(solution(input));
