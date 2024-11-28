// https://www.acmicpc.net/problem/14940
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" "));

function solution(map) {
  const distances = Array.from({ length: map.length }, () => new Array(map[0].length).fill(-1));
  const check = Array.from({ length: map.length }, () => new Array(map[0].length).fill(false));
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  function BFS(x, y) {
    const queue = [[x, y]];
    let step = 1;

    while (queue.length > 0) {
      const tmp = [];

      // 한 스텝 다 돌때까지
      while (queue.length > 0) {
        const [nextX, nextY] = queue.pop();
        for (let i = 0; i < 4; i++) {
          if (
            check[nextX + dx[i]]?.[nextY + dy[i]] === false &&
            map[nextX + dx[i]][nextY + dy[i]] === "1"
          ) {
            tmp.push([nextX + dx[i], nextY + dy[i]]);
            check[nextX + dx[i]][nextY + dy[i]] = true;
            distances[nextX + dx[i]][nextY + dy[i]] = step;
          }
        }
      }
      // 다음 스텝(레벨)들 queue에 push
      for (let i = 0; i < tmp.length; i++) {
        queue.push(tmp[i]);
      }
      step += 1;
    }
  }

  for (let i = 0; i < map.length; i++) {
    let bool = false;
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === "2") {
        BFS(i, j);
        check[i][j] = true;
        map[i][j] = "0";
        distances[i][j] = "0";
        bool = true;
        break;
      }
    }
    if (bool === true) break;
  }

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === "0") {
        distances[i][j] = "0";
      }
    }
  }

  const answer = distances.map((n) => n.join(" "));
  return answer.join("\n");
}

console.log(solution(input.slice(1)));
