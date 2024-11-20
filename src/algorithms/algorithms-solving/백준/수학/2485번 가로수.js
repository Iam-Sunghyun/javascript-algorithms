// https://www.acmicpc.net/problem/2485
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

function solution(numbers) {
  let gcd = numbers[1] - numbers[0];
  for (let i = 1; i < numbers.length - 1; i++) {
    gcd = Math.min(gcd, getGCD(gcd, numbers[i + 1] - numbers[i]));
  }

  let count = 0;
  for (let i = 0; i < numbers.length - 1; i++) {
    count += (numbers[i + 1] - numbers[i]) / gcd - 1;
  }

  return count;
}

function getGCD(num1, num2) {
  let [a, b] = [num2, num1];
  while (b !== 0) {
    [a, b] = [b, a % b];
  }

  return a;
}

console.log(solution(input.slice(1)));
