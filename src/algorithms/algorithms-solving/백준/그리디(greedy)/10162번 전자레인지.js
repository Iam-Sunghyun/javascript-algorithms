// https://www.acmicpc.net/problem/10162
const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(T) {
  let num = T;
  const answer = [0, 0, 0];
  while (num > 10) {
    if (num >= 300) {
      answer[0] += Math.floor(num / 300);
      num %= 300;
    } else if (num >= 60) {
      answer[1] += Math.floor(num / 60);
      num %= 60;
    } else if (num >= 10) {
      answer[2] += Math.floor(num / 10);
      num %= 10;
    }
  }
  return num === 0 ? answer.join(" ") : -1;
}

console.log(solution(+input));
