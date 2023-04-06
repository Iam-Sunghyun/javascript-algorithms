// DP 1010번 실버3 https://www.acmicpc.net/problem/1010
// 조합(combination) 문제
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(/\n/)
  .slice(1)
  .map((n) => n.split(/\s/).map(Number));

function solution(numbers) {
  const memo = Array.from({ length: 30 }, () => new Array(30).fill(0));
  const answer = [];

  function combination(n, m) {
    if (n === m) return 1;
    if (m === 0) return 1;
    if (memo[n][m] !== 0) return memo[n][m];

    memo[n][m] = combination(n - 1, m) + combination(n - 1, m - 1);
    return memo[n][m];
  }

  for (let i = 0; i < numbers.length; i++) {
    answer.push(combination(numbers[i][1], numbers[i][0]));
  }

  return answer.join('\n');
}

console.log(solution(input));
