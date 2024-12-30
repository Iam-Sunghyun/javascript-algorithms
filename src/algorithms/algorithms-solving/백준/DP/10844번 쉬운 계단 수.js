// https://www.acmicpc.net/problem/10844
// 헷갈림
const input = require("fs").readFileSync(0, "utf-8").toString().trim();

function solution(number) {
  const dp = Array.from({ length: number }, () => new Array(10).fill(0));
  dp[0].fill(1);
  dp[0][0] = 0;

  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < dp[i].length; j++) {
      //
      if (j === 0) {
        dp[i][j] = dp[i - 1][1];
        continue;
      }
      if (j === 9) {
        dp[i][j] = dp[i - 1][8];
        continue;
      }
      dp[i][j] = ((dp[i - 1][j - 1] ?? 0) + (dp[i - 1][j + 1] ?? 0)) % 1000000000;
    }
  }

  return dp.at(-1).reduce((acc, n) => (acc + n) % 1000000000, 0);
}

console.log(solution(+input));
