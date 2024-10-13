// https://www.acmicpc.net/problem/10610
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("").map(Number);

function solution(number) {
  let sum = 0;
  let hasZero = false;
  for (let i = 0; i < number.length; i++) {
    sum += number[i];
    if (number[i] === 0) {
      hasZero = true;
    }
  }

  if (sum % 3 !== 0 || hasZero === false) {
    return -1;
  }

  number.sort((a, b) => b - a);
  return number.join("");
}

console.log(solution(input));
