// https://chanhuiseok.github.io/posts/baek-31/
const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(number) {
  let answer = 0;
  let value = 0;
  let num = 1;
  while (true) {
    value += num;
    if (value > number) {
      answer = num - 1;
      return answer;
    }
    num++;
  }
}

console.log(solution(+input));
