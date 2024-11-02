// https://www.acmicpc.net/problem/16173
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

function solution(map) {
  const dx = [0, 1];
  const dy = [1, 0];

  let answer = "Hing";
  const check = Array.from({ length: map.length }, () => new Array(map[0].length).fill(false));

  function DFS(x, y) {
    if (map[x][y] === -1) {
      answer = "HaruHaru";
      return;
    }

    for (let i = 0; i < 2; i++) {
      if (
        map[x + dx[i] * map[x][y]]?.[y + dy[i] * map[x][y]] !== undefined &&
        check[x + dx[i] * map[x][y]][y + dy[i] * map[x][y]] === false
      ) {
        check[x + dx[i] * map[x][y]][y + dy[i] * map[x][y]] = true;
        DFS(x + dx[i] * map[x][y], y + dy[i] * map[x][y]);
      }
    }
  }

  check[0][0] = true;
  DFS(0, 0);

  return answer;
}

console.log(solution(input.slice(1)));
