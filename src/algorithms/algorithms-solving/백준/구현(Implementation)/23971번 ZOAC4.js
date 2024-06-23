// https://www.acmicpc.net/problem/23971
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

function solution(H, W, N, M) {

  const [n, m] = [N + 1, M + 1];

  return Math.ceil(H / n) * Math.ceil(W / m);
}

console.log(solution(...input));