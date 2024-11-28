// https://www.acmicpc.net/problem/1743
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

function solution(r, c, pos) {
  const passage = Array.from({ length: r }, () => new Array(c).fill(0));

  for (const [x, y] of pos) {
    passage[x - 1][y - 1] = 1;
  }

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  function BFS(x, y) {
    const queue = [[x, y]];
    let count = 1;
    passage[x][y] = 0;
    while (queue.length > 0) {
      const [nextX, nextY] = queue.pop();

      for (let i = 0; i < 4; i++) {
        if (passage[nextX + dx[i]]?.[nextY + dy[i]] === 1) {
          count += 1;
          passage[nextX + dx[i]][nextY + dy[i]] = 0;
          queue.push([nextX + dx[i], nextY + dy[i]]);
        }
      }
    }
    return count;
  }

  let answer = -Infinity;
  for (let i = 0; i < passage.length; i++) {
    for (let j = 0; j < passage[i].length; j++) {
      if (passage[i][j] === 1) {
        answer = Math.max(BFS(i, j), answer);
      }
    }
  }

  return answer;
}

console.log(solution(input[0][0], input[0][1], input.slice(1)));
