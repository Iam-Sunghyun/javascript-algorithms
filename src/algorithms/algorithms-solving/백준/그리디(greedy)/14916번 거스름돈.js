// https://www.acmicpc.net/problem/14916
const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(n) {
  if (n % 5 === 0) return n / 5;

  let min = +Infinity;
  let count = 0;

  for (let i = 0; i <= Math.floor(n / 5); i++) {
    let rest = n;
    count += i;
    rest -= 5 * i;

    if (rest % 2 !== 0) {
      count = 0;
      continue;
    } else {
      count += rest / 2;
      rest = 0;
    }
    if (rest === 0) {
      min = Math.min(min, count);
      count = 0;
    }
  }

  return min === +Infinity ? -1 : min;
}

console.log(solution(+input));
