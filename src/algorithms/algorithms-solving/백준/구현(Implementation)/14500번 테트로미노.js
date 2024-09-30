// https://www.acmicpc.net/problem/14500
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

function solution(map) {
  let sum = -Infinity;
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      sum = Math.max(sum, I(i, j, map));
      sum = Math.max(sum, sqaure(i, j, map));
      sum = Math.max(sum, L(i, j, map));
      sum = Math.max(sum, S(i, j, map));
      sum = Math.max(sum, T(i, j, map));
    }
  }

  return sum;
}

function I(i, j, map) {
  let max = -Infinity;
  if (map[i][j] && map[i + 1]?.[j] && map[i + 2]?.[j] && map[i + 3]?.[j]) {
    max = Math.max(max, map[i][j] + map[i + 1]?.[j] + map[i + 2]?.[j] + map[i + 3]?.[j]);
  }
  if (map[i][j] && map[i][j + 1] && map[i][j + 2] && map[i][j + 3]) {
    max = Math.max(max, map[i][j] + map[i][j + 1] + map[i][j + 2] + map[i][j + 3]);
  }

  return max;
}

function sqaure(i, j, map) {
  let max = -Infinity;
  if (map[i][j] && map[i + 1]?.[j + 1] && map[i + 1]?.[j] && map[i]?.[j + 1]) {
    max = Math.max(max, map[i][j] + map[i + 1]?.[j + 1] + map[i + 1]?.[j] + map[i]?.[j + 1]);
  }
  return max;
}

function L(i, j, map) {
  let max = -Infinity;
  if (map[i][j] && map[i + 1]?.[j] && map[i + 1]?.[j + 1] && map[i + 1][j + 2]) {
    max = Math.max(max, map[i][j] + map[i + 1]?.[j] + map[i + 1]?.[j + 1] + map[i + 1][j + 2]);
  }
  if (map[i][j] && map[i - 1]?.[j] && map[i - 1]?.[j + 1] && map[i - 1]?.[j + 2]) {
    max = Math.max(max, map[i][j] + map[i - 1]?.[j] + map[i - 1]?.[j + 1] + map[i - 1]?.[j + 2]);
  }
  if (map[i][j] && map[i + 1]?.[j] && map[i + 1]?.[j - 1] && map[i + 1]?.[j - 2]) {
    max = Math.max(max, map[i][j] + map[i + 1]?.[j] + map[i + 1]?.[j - 1] + map[i + 1]?.[j - 2]);
  }
  if (map[i][j] && map[i - 1]?.[j] && map[i - 1]?.[j - 1] && map[i - 1]?.[j - 2]) {
    max = Math.max(max, map[i][j] + map[i - 1]?.[j] + map[i - 1]?.[j - 1] + map[i - 1]?.[j - 2]);
  }

  if (map[i][j] && map[i + 1]?.[j] && map[i + 2]?.[j] && map[i + 2]?.[j + 1]) {
    max = Math.max(max, map[i][j] + map[i + 1]?.[j] + map[i + 2]?.[j] + map[i + 2]?.[j + 1]);
  }
  if (map[i][j] && map[i + 1]?.[j] && map[i + 2]?.[j] && map[i + 2]?.[j - 1]) {
    max = Math.max(max, map[i][j] + map[i + 1]?.[j] + map[i + 2]?.[j] + map[i + 2]?.[j - 1]);
  }
  if (map[i][j] && map[i - 1]?.[j] && map[i - 2]?.[j] && map[i - 2]?.[j - 1]) {
    max = Math.max(max, map[i][j] + map[i - 1]?.[j] + map[i - 2]?.[j] + map[i - 2]?.[j - 1]);
  }
  if (map[i][j] && map[i - 1]?.[j] && map[i - 2]?.[j] && map[i - 2]?.[j + 1]) {
    max = Math.max(max, map[i][j] + map[i - 1]?.[j] + map[i - 2]?.[j] + map[i - 2]?.[j + 1]);
  }

  if (map[i][j] && map[i][j + 1] && map[i][j + 2] && map[i - 1]?.[j + 2]) {
    max = Math.max(max, map[i][j] + map[i][j + 1] + map[i]?.[j + 2] + map[i - 1]?.[j + 2]);
  }
  if (map[i][j] && map[i][j + 1] && map[i][j + 2] && map[i + 1]?.[j + 2]) {
    max = Math.max(max, map[i][j] + map[i][j + 1] + map[i]?.[j + 2] + map[i + 1]?.[j + 2]);
  }
  if (map[i][j] && map[i][j - 1] && map[i][j - 2] && map[i - 1]?.[j - 1]) {
    max = Math.max(max, map[i][j] + map[i][j - 1] + map[i][j - 2] + map[i - 1]?.[j - 1]);
  }
  if (map[i][j] && map[i][j - 1] && map[i][j - 2] && map[i + 1]?.[j - 1]) {
    max = Math.max(max, map[i][j] + map[i][j - 1] + map[i][j - 2] + map[i + 1]?.[j - 1]);
  }

  return max;
}

function S(i, j, map) {
  let max = -Infinity;
  if (map[i][j] && map[i + 1]?.[j] && map[i + 1]?.[j + 1] && map[i + 2]?.[j + 1]) {
    max = Math.max(max, map[i][j] + map[i + 1]?.[j] + map[i + 1]?.[j + 1] + map[i + 2]?.[j + 1]);
  }
  if (map[i][j] && map[i + 1]?.[j] && map[i + 1]?.[j - 1] && map[i + 2]?.[j - 1]) {
    max = Math.max(max, map[i][j] + map[i + 1]?.[j] + map[i + 1]?.[j - 1] + map[i + 2]?.[j - 1]);
  }
  if (map[i][j] && map[i - 1]?.[j] && map[i - 1]?.[j + 1] && map[i - 2]?.[j + 1]) {
    max = Math.max(max, map[i][j] + map[i - 1]?.[j] + map[i - 1]?.[j + 1] + map[i - 2]?.[j + 1]);
  }
  if (map[i][j] && map[i - 1]?.[j] && map[i - 1]?.[j - 1] && map[i - 2]?.[j - 1]) {
    max = Math.max(max, map[i][j] + map[i - 1]?.[j] + map[i - 1]?.[j - 1] + map[i - 2]?.[j - 1]);
  }

  if (map[i][j] && map[i][j + 1] && map[i + 1]?.[j + 1] && map[i + 1]?.[j + 2]) {
    max = Math.max(max, map[i][j + 1] + map[i + 1]?.[j + 1] + map[i + 1]?.[j + 2]);
  }
  if (map[i][j] && map[i][j + 1] && map[i - 1]?.[j + 1] && map[i - 1]?.[j + 2]) {
    max = Math.max(max, map[i][j] + map[i][j + 1] + map[i - 1]?.[j + 1] + map[i - 1]?.[j + 2]);
  }
  if (map[i][j] && map[i][j - 1] && map[i - 1]?.[j - 1] && map[i - 1]?.[j - 2]) {
    max = Math.max(max, map[i][j] + map[i][j - 1] + map[i - 1]?.[j - 1] + map[i - 1]?.[j - 2]);
  }
  if (map[i][j] && map[i][j - 1] && map[i + 1]?.[j - 1] && map[i + 1]?.[j - 2]) {
    max = Math.max(max, map[i][j] + map[i][j - 1] + map[i + 1]?.[j - 1] + map[i + 1]?.[j - 2]);
  }

  return max;
}

function T(i, j, map) {
  let max = -Infinity;
  if (map[i][j] && map[i][j + 1] && map[i][j + 2] && map[i + 1]?.[j + 1]) {
    max = Math.max(max, map[i][j] + map[i][j + 1] + map[i][j + 2] + map[i + 1]?.[j + 1]);
  }
  if (map[i][j] && map[i][j + 1] && map[i][j + 2] && map[i - 1]?.[j + 1]) {
    max = Math.max(max, map[i][j] + map[i][j + 1] + map[i][j + 2] + map[i - 1]?.[j + 1]);
  }
  if (map[i][j] && map[i][j - 1] && map[i][j - 2] && map[i + 1]?.[j - 1]) {
    max = Math.max(max, map[i][j] + map[i][j - 1] + map[i][j - 2] + map[i + 1]?.[j - 1]);
  }
  if (map[i][j] && map[i][j - 1] && map[i][j - 2] && map[i - 1]?.[j - 1]) {
    max = Math.max(max, map[i][j] + map[i][j - 1] + map[i][j - 2] + map[i - 1]?.[j - 1]);
  }

  if (map[i][j] && map[i - 1]?.[j] && map[i - 2]?.[j] && map[i - 1]?.[j + 1]) {
    max = Math.max(max, map[i][j] + map[i - 1]?.[j] + map[i - 2]?.[j] + map[i - 1]?.[j + 1]);
  }
  if (map[i][j] && map[i - 1]?.[j] && map[i - 2]?.[j] && map[i - 1]?.[j - 1]) {
    max = Math.max(max, map[i][j] + map[i - 1]?.[j] + map[i - 2]?.[j] + map[i - 1]?.[j - 1]);
  }
  if (map[i][j] && map[i + 1]?.[j] && map[i + 2]?.[j] && map[i + 1]?.[j + 1]) {
    max = Math.max(max, map[i][j] + map[i + 1]?.[j] + map[i + 2]?.[j] + map[i + 1]?.[j + 1]);
  }
  if (map[i][j] && map[i + 1]?.[j] && map[i + 2]?.[j] && map[i + 1]?.[j - 1]) {
    max = Math.max(max, map[i][j] + map[i + 1]?.[j] + map[i + 2]?.[j] + map[i + 1]?.[j - 1]);
  }

  return max;
}

console.log(solution(input.slice(1)));
