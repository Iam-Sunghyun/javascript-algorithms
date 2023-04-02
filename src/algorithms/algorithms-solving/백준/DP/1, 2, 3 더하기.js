// 백준 9095번 실버3 https://www.acmicpc.net/problem/9095
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

function solution(n, input) {
  const answer = new Array(n).fill(0);

  function DFS(n, sum, index) {
    if (sum === n) {
      answer[index] += 1;
      return;
    }
    if (sum > n) return;

    for (let i = 1; i <= 3; i++) {
      DFS(n, sum + i, index);
    }
  }

  for (let i = 0; i < n; i++) {
    DFS(input[i], 0, i);
  }

  return answer.join('\n');
}

console.log(solution(input[0], input.slice(1)));
