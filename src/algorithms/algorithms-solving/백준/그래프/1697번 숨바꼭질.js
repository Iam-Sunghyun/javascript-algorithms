// 백준 그래프 탐색 실버1 https://www.acmicpc.net/problem/1697
// 체크 배열 범위 설정이 다소 모호했던 문제
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

function solution(n, k) {

  if (n === k) return 0;

  const check = new Array(200000).fill(false);
  const queue = [n];
  let lv = 0;
  let tmp;

  check[n] = true;
  // BFS
  while (queue.length > 0) {
    const arr = [];
    lv += 1;
    while (queue.length > 0) {
      tmp = queue.shift();
      for (const value of [tmp + 1, tmp - 1, tmp * 2]) {
        if (value === k) return lv;
        if (check[value] === false) {
          check[value] = true;
          arr.push(value);
        }
      }
    }
    queue.push(...arr);
  }

}

console.log(solution(input[0], input[1]));