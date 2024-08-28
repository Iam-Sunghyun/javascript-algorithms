// https://www.acmicpc.net/problem/2979
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

function solution(A, B, C, list) {
  list.sort((a, b) => b[1] - a[1]);

  const parking = new Array(list[0][1] + 1).fill(0);

  for (let i = 0; i < list.length; i++) {
    for (let j = list[i][0]; j < list[i][1]; j++) {
      parking[j] += 1;
    }
  }

  let answer = 0;
  for (let i = 1; i < parking.length; i++) {
    if (parking[i] === 1) {
      answer += A * 1;
    } else if (parking[i] === 2) {
      answer += B * 2;
    } else if (parking[i] === 3) {
      answer += C * 3;
    }
  }

  return answer;
}

console.log(solution(input[0][0], input[0][1], input[0][2], input.slice(1)));
