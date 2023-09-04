// 백준 누적합 골드5 https://www.acmicpc.net/problem/3020
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, h] = input[0].split(' ');

function solution(N, H, obstacles) {

  // 천장, 바닥에서 뻗어나온 장애물 크기 기록용
  const bottomCount = new Array(H).fill(0);
  const upperCount = new Array(H).fill(0);

  // 천장, 바닥의 장애물들 크기 별 개수 카운트(따로 기록)
  for (let i = 1; i < N + 1; i += 2) {
    bottomCount[obstacles[i] - 1] += 1;
  }
  for (let i = 2; i < N + 1; i += 2) {
    upperCount[H - (+obstacles[i])] += 1;
  }

  // 장애물 크기에 따라 막힌 구간 수 계산
  // -> 장애물 크기가 N이면 N이하 구간은 막힌 것이므로 누적 합산하여 계산해준다
  for (let i = H - 1; i > 0; i--) {
    bottomCount[i - 1] += bottomCount[i];
  }
  for (let i = 0; i < H - 1; i++) {
    upperCount[i + 1] += upperCount[i];
  }

  // 천장, 바닥 막힌 구간 수 합산
  const result = new Array(H - 1).fill(0);
  for (let i = 0; i < H; i++) {
    result[i] = bottomCount[i] + upperCount[i];
  }

  // 장애물 최소 값 계산 
  let min = +Infinity;
  for (let i = 0; i < result.length; i++) {
    min = Math.min(result[i], min);
  }
  let count = 0;
  for (let i = 0; i < result.length; i++) {
    if (result[i] === min) count += 1;
  }

  return [min, count].join(' ');
}

console.log(solution(+n, +h, input));