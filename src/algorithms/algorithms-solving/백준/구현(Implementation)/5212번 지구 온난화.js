// https://www.acmicpc.net/problem/5212
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(""));

function solution(map) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const result = [];
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === "X") {
        let count = 0;
        for (let k = 0; k < 4; k++) {
          if (map[i + dx[k]]?.[j + dy[k]] === "." || map[i + dx[k]]?.[j + dy[k]] === undefined) {
            count += 1;
          }
        }
        if (count >= 3) {
          result.push([i, j]);
        }
      }
    }
  }

  for (const [x, y] of result) {
    map[x][y] = ".";
  }

  while (!map[0].includes("X") || !map.at(-1).includes("X")) {
    if (!map[0].includes("X")) {
      map.shift();
    }
    if (!map.at(-1).includes("X")) {
      map.pop();
    }
  }

  let check = [true, true];
  while (check[0] || check[1]) {
    for (let i = 0; i < map.length; i++) {
      if (map[i][0] === "X") {
        check[0] = false;
      }
      if (map[i][map[i].length - 1] === "X") {
        check[1] = false;
      }
    }

    if (check[0] === true) {
      for (let i = 0; i < map.length; i++) {
        map[i].shift();
      }
    }
    if (check[1] === true) {
      for (let i = 0; i < map.length; i++) {
        map[i].pop();
      }
    }
  }

  return map.map((n) => n.join("")).join("\n");
}

console.log(solution(input.slice(1)));
