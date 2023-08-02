// 백준 그래프 탐색 실버2 https://www.acmicpc.net/problem/1926
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).map(n => n.split(' ').map(Number));

function solution(input) {

  const xAxis = [-1, 0, 1, 0];
  const yAxis = [0, 1, 0, -1];
  const answer = [];

  function dfs(x, y, index) {
    input[x][y] = 0;
    answer[index] = answer[index] + 1 || 1;

    for (let i = 0; i < 4; i++) {
      if (input[x + xAxis[i]]?.[y + yAxis[i]] === 1) {
        dfs(x + xAxis[i], y + yAxis[i], index);
      }
    }
  }

  let index = 0;
  let max = 0;
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[0].length; j++) {
      if (input[i][j] === 1) {
        dfs(i, j, index);
        max = Math.max(answer[index], max);
        index += 1;
      }
    }
  }

  return [answer.length, max].join('\n');
}


console.log(solution(input));