// 백준 2748번 동적프로그래밍 https://www.acmicpc.net/problem/2748
// 출력 숫자가 매우 커서 부동소수점 오차 발생하여 틀렸던 문제
// -> Bigint로 계산 후 toString()으로 n빼고 출력
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(num) {
  const memo = new Array(num + 1).fill(0);
  memo[1] = 1;

  for (let i = 2; i <= num; i++) {

    memo[i] = BigInt(memo[i - 2]) + BigInt(memo[i - 1]);
  }
  return memo[num].toString();
}

console.log(solution(input));
