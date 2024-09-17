// https://www.acmicpc.net/problem/2628
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

function solution(row, column, cut) {
  const rowArr = new Array(row).fill(1);
  const columnArr = new Array(column).fill(1);

  cut.sort((a, b) => a[1] - b[1]);

  let [countR, countC] = [0, 0];
  for (const [d, pos] of cut) {
    if (d === 0) {
      columnArr.splice(pos + countC, 0, 0);
      countC += 1;
    }

    if (d === 1) {
      rowArr.splice(pos + countR, 0, 0);
      countR += 1;
    }
  }

  let maxRow = -Infinity;
  let size = 0;
  for (let i = 0; i < rowArr.length; i++) {
    if (rowArr[i] === 0) {
      size = 0;
    } else {
      size++;
      maxRow = Math.max(size, maxRow);
    }
  }

  let maxColumn = -Infinity;
  size = 0;
  for (let i = 0; i < columnArr.length; i++) {
    if (columnArr[i] === 0) {
      size = 0;
    } else {
      size++;
      maxColumn = Math.max(size, maxColumn);
    }
  }

  return maxRow * maxColumn;
}

console.log(solution(input[0][0], input[0][1], input.slice(2)));
