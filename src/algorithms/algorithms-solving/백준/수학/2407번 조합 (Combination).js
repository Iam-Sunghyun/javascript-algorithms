// 백준 수학 실버3 https://www.acmicpc.net/problem/2407
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

function solution(N, R) {

  function factorial(n) {
    let result = 1n;
    for (let i = 1; i <= n; i++) {
      result = (result * BigInt(i));
    }
    return result;
  }
  const answer = factorial(N) / (factorial(N - R) * factorial(R));

  return answer.toString();
}


console.log(solution(input[0], input[1]));