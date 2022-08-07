// 백준 2798번 완전 탐색 https://www.acmicpc.net/problem/2798
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\n/);
const list = input.slice(1)[0].split(' ').map(Number);
const target = +input[0].split(' ')[1];

function solution(n, target) {
  const answer = [];
  for (let i = 0; i < n.length; i++) {
    for (let j = i + 1; j < n.length; j++) {
      for (let k = j + 1; k < n.length; k++) {
        if (n[i] + n[j] + n[k] <= target) {
          answer.push([n[i] + n[j] + n[k], n[i], n[j], n[k]]);
        }
      }
    }
  }
  answer.sort((a, b) => b[0] - a[0]);
  return +answer[0][0];
}


console.log(solution(list, target));