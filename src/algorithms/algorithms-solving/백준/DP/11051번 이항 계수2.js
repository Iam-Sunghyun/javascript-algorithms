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

// 풀이 2
function solution(N, K) {

  const check = Array.from({ length: N + 1 }, () => new Array(K + 1).fill(-1));
  function combination(n, k) {
    if (n === k || k === 0) {
      return 1;
    }
    if (check[n][k] !== -1) return check[n][k];
    check[n][k] = combination(n - 1, k - 1) + combination(n - 1, k);

    return check[n][k] % 10007;
  }

  combination(N, K);

  return (check[N][K]) === -1 ? 1 : check[N][K] % 10007;
}

console.log(solution(input[0], input[1]));