// 백준 동적 프로그래밍 실버2 https://www.acmicpc.net/problem/11051
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function binomialCoefficient(n, k) {
  const MOD = 10007; // 결과를 나눌 모듈러 값
  const dp = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));

  // 초기값 설정
  for (let i = 0; i <= n; i++) {
    dp[i][0] = 1;
    dp[i][i] = 1;
  }

  // 이항 계수 계산
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j]) % MOD;
    }
  }

  return dp[n][k];
}

const [n, k] = input.split(" ").map(Number);
const result = binomialCoefficient(n, k);
console.log(result);