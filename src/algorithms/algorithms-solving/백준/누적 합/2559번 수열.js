// 백준 2559번 누적 합 https://www.acmicpc.net/problem/2559
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);
const range = +input[1];
const sequence = input.slice(2).map(Number);

function solution(range, seq) {
  // range = 합해야 될 일 수
  // seq = 측정한 온도 리스트
  let max = 0;
  let current = 0;
  let left = 0;
  let right = range - 1;

  for (let i = left; i <= right; i++) {
    max += seq[i];
    current += seq[i];
  }

  while (right < seq.length - 1) {
    current = current - seq[left++] + seq[++right];
    if (max < current) max = current;
  }

  return max;
}

console.log(solution(range, sequence)); 