// https://www.acmicpc.net/submit/10813/79479541
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(' ').map(Number));

function solution(n, cases) {

  const baskets = Array.from({ length: n }, (_, i) => i + 1);

  for (const [from, to] of cases) {
    [baskets[from - 1], baskets[to - 1]] = [baskets[to - 1], baskets[from - 1]];
  }

  return baskets.join(' ');
}

console.log(solution(input[0][0], input.slice(1)));