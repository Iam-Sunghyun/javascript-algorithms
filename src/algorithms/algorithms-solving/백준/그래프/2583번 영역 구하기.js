// 백준 그래프 탐색 실버1 https://www.acmicpc.net/problem/2583
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number));

function solution(input) {
  const area = Array.from({ length: input[0][0] }, () => new Array(input[0][1]).fill(0));
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  for (let i = 1; i < input.length; i++) {
    for (let j = input[i][1]; j < input[i][3]; j++) {
      for (let k = input[i][0]; k < input[i][2]; k++) {
        area[j][k] = 1;
      }
    }
  }

  function BFS(i, j) {
    const queue = [[i, j]];
    let answer = 1;
    area[i][j] = 1;
    while (queue.length > 0) {
      const [x, y] = queue.pop();
      for (let i = 0; i < 4; i++) {
        if (area[x + dx[i]]?.[y + dy[i]] === 0) {
          area[x + dx[i]][y + dy[i]] = 1;
          queue.push([x + dx[i], y + dy[i]]);
          answer += 1;
        }
      }
    }
    return answer;
  }

  const answer = [];
  for (let i = 0; i < area.length; i++) {
    for (let j = 0; j < area[i].length; j++) {
      if (area[i][j] === 0) {
        answer.push(BFS(i, j));
      }
    }
  }

  return [answer.length, answer.sort((a, b) => a - b).join(' ')].join('\n');
}

console.log(solution(input));