// 백준 DP 실버5 https://www.acmicpc.net/problem/10826
const input = require('fs').readFileSync('/dev/stdin').toString().trim();

function solution(n) {
  if (n === 0) return 0;
  let [a, b] = [0, 1];

  for (let i = 1; i < n; i++) {
    [a, b] = [BigInt(b), BigInt(a) + BigInt(b)];
  }
  return b.toString();
}

console.log(solution(+input));