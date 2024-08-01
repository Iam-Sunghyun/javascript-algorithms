// https://www.acmicpc.net/problem/2669
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

function solution(numbers) {
  // [좌하단 x, y 우상단 x, y]

  const max = [0, 0];
  for (const [lx, ly, rx, ry] of numbers) {
    max[1] = Math.max(ly, ry, max[1]);
    max[0] = Math.max(lx, rx, max[0]);
  }

  const square = Array.from({ length: max[0] }, () => new Array(max[1]).fill(false));

  for (const [lx, ly, rx, ry] of numbers) {
    for (let i = lx; i < rx; i++) {
      for (let j = ly; j < ry; j++) {
        square[i][j] = true;
      }
    }
  }

  let answer = 0;
  for (let i = 0; i < square.length; i++) {
    for (let j = 0; j < square[i].length; j++) {
      if (square[i][j] === true) {
        answer += 1;
      }
    }
  }

  return answer;
}
console.log(solution(input));
