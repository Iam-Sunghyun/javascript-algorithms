// https://www.acmicpc.net/problem/1673
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

function solution(n, k) {
  let coupons = n;
  let chickens = coupons;

  while (coupons >= k) {
    let tmp = Math.floor(coupons / k);
    chickens += tmp;
    coupons = tmp + (coupons % k);
  }

  return chickens;
}

const answer = [];

for (let i = 0; i < input.length; i++) {
  answer.push(solution(...input[i]));
}

console.log(answer.join("\n"));
