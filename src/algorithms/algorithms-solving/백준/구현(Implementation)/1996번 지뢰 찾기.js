// https://www.acmicpc.net/problem/1996
const input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(""));

function solution(map) {
  const result = Array.from({ length: map.length }, () => new Array(map[0].length).fill(0));
  const [row, col] = [map.length, map[0].length];

  const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (map[i][j] !== ".") {
        result[i][j] = "*";
        for (let k = 0; k < 9; k++) {
          if (result[i + dx[k]]?.[j + dy[k]] === "M") continue;

          if (
            result[i + dx[k]]?.[j + dy[k]] !== undefined &&
            result[i + dx[k]]?.[j + dy[k]] !== "*"
          ) {
            result[i + dx[k]][j + dy[k]] += +map[i][j];
          }
          if (result[i + dx[k]]?.[j + dy[k]] > 9) {
            result[i + dx[k]][j + dy[k]] = "M";
          }
        }
      }
    }
  }
  const answer = result.map((n) => n.join(""));
  return answer.join("\n");
}

console.log(solution(input.slice(1)));
