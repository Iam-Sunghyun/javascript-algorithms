// https://www.acmicpc.net/problem/1748
const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(number) {
  let countDigits = 0;

  if (number < 10) return number;

  for (let i = 1; i < number.length; i++) {
    countDigits += 9 * 10 ** (i - 1) * i;
  }

  countDigits += number.length * (number - "9".repeat(number.length - 1));
  // 10 미만 -> 1    1 ~ 9 -> 9
  // 100 미만 -> 2   10 ~ 99 -> 90 * 2
  // 1000 미만 -> 3   100 ~ 999 -> 900 * 3

  // 120 -> (9 * 1) + (90 * 2) + 3 * (120 -99)
  return countDigits;
}

console.log(solution(input));
