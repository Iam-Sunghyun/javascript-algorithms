// https://www.acmicpc.net/problem/17202
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(num1, num2) {
  let start = "";
  for (let i = 0; i < num1.length; i++) {
    start += num1[i] + num2[i];
  }

  while (start.length > 2) {
    let tmp = "";
    for (let i = 0; i < start.length - 1; i++) {
      tmp += String(+start[i] + +start[i + 1]).at(-1);
    }
    start = tmp;
  }

  return start;
}

console.log(solution(input[0], input[1]));
