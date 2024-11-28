// https://www.acmicpc.net/problem/8911
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(movement) {
  const moving = [[0, 0]];

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  const current = [0, 0];
  let dir = 0;

  for (const move of movement) {
    if (move === "F") {
      current[1] += dx[dir];
      current[0] += dy[dir];
      moving.push([current[0], current[1]]);
    }
    if (move === "B") {
      current[1] += dx[(dir + 2) % 4];
      current[0] += dy[(dir + 2) % 4];
      moving.push([current[0], current[1]]);
    }
    if (move === "R") {
      dir = (dir + 1) % 4;
    } else if (move === "L") {
      dir = dir - 1 >= 0 ? dir - 1 : 3;
    }
  }

  const maxX = [...moving].sort((a, b) => a[0] - b[0]);
  const maxY = [...moving].sort((a, b) => b[1] - a[1]);

  const X = Math.abs(maxX[0][0] - maxX.at(-1)[0]);
  const Y = Math.abs(maxY[0][1] - maxY.at(-1)[1]);

  return X * Y;
}

const answer = [];
for (let i = 1; i < input.length; i++) {
  answer.push(solution(input[i]));
}

console.log(answer.join("\n"));
