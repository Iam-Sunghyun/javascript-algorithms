// https://www.acmicpc.net/problem/1769
const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(number) {
  let num = number.toString();
  let count = 0;
  while (true) {
    if (num.length === 1) break;
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
      sum += +num[i];
    }
    num = String(sum);
    count += 1;
  }

  return [count, +num % 3 === 0 ? "YES" : "NO"].join("\n");
}

console.log(solution(input));
