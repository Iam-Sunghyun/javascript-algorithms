// 백준 구현 브론즈2 https://www.acmicpc.net/problem/10870
const input = require('fs').readFileSync('/dev/stdin').toString().trim();

function solution(input) {

  const dp = [0, 1];

  for (let i = 2; i <= +input; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[input];
}

console.log(solution(input));