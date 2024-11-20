// https://www.acmicpc.net/problem/1817
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

function solution(M, books) {
  let count = 0;
  let tmp = 0;

  for (let i = 0; i < books?.length; i++) {
    tmp += books[i];
    if (tmp / M > 1) {
      count += 1;
      tmp = books[i];
    }
  }

  return tmp > 0 ? count + 1 : count;
}

console.log(solution(input[0][1], input[1]));
