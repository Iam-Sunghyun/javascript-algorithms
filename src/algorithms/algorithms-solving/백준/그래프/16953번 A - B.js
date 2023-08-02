// 백준 그래프 탐색 실버2 https://www.acmicpc.net/problem/16953
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

function solution(input) {

  const targetValue = input[1];
  const startValue = input[0];

  function bfs(start) {
    const results = new Set();
    const queue = [start];
    let count = 1;

    while (queue.length > 0) {
      const tmp = [];
      while (queue.length > 0) {
        const now = queue.pop();
        if (now > targetValue) {
          continue;
        }
        if (now * 2 === targetValue || parseInt(String(now) + '1') === targetValue) {
          return count + 1;
        }
        if (!results.has(now * 2)) {
          results.add(now * 2);
          tmp.push(now * 2);
        }
        if (!results.has(parseInt(String(now) + '1'))) {
          results.add(parseInt(String(now) + '1'));
          tmp.push(parseInt(String(now) + '1'));
        }
      }
      for (const next of tmp) {
        queue.push(next);
      }
      count += 1;
    }
    return -1;
  }

  return bfs(startValue);
}


console.log(solution(input));