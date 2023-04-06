// 백준 실버3 https://www.acmicpc.net/problem/2193
// 피보나치 문제. 숫자 값 커짐에 따라 발생하는 오차 주의(bigint 사용)
const input = require('fs').readFileSync('/dev/stdin').toString().trim();

function solution(n) {
  const memo = new Array(+n).fill(1);
  for (let i = 2; i < n; i++) {
    memo[i] = BigInt(memo[i - 1]) + BigInt(memo[i - 2]);
  }

  return memo[n - 1].toString();
}

console.log(solution(input));
