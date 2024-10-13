// https://www.acmicpc.net/problem/18405
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

function solution(S, X, Y, input) {
  const check = Array.from({ length: input.length }, () => new Array(input[0].length).fill(false));
  const start = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] > 0) {
        start.push([i, j, input[i][j]]);
        check[i][j] = true;
      }
    }
  }

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  start.sort((a, b) => a[2] - b[2]);
  function BFS(start, length) {
    const queue = [];
    for (let i = 0; i < start.length; i++) {
      queue.push([...start[i]]);
    }
    // console.log(queue)
    let next;
    while (length < S) {
      const tmp = [];
      while (queue.length > 0) {
        next = queue.shift();
        // if(input[next[0]][next[1]] === 0 || input[next[0]][next[1]] > next[2]){
        //     input[next[0]][next[1]] = next[2];
        // }
        for (let i = 0; i < 4; i++) {
          if (
            input[next[0] + dx[i]]?.[next[1] + dy[i]] !== undefined &&
            check[next[0] + dx[i]][next[1] + dy[i]] === false
          ) {
            tmp.push([next[0] + dx[i], next[1] + dy[i], input[next[0]][next[1]]]);
            check[next[0] + dx[i]][next[1] + dy[i]] = true;
            input[next[0] + dx[i]][next[1] + dy[i]] = next[2];
          }
        }
      }
      tmp.sort((a, b) => a[2] - b[2]);
      for (let i = 0; i < tmp.length; i++) {
        queue.push(tmp[i]);
      }
      length += 1;
    }
  }
  BFS(start, 0);

  return input[X - 1][Y - 1];
}

console.log(solution(...input[input[0][0] + 1], input.slice(1, input.length - 1)));
