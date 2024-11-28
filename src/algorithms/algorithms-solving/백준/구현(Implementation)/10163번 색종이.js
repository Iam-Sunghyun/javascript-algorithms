// https://www.acmicpc.net/problem/10163
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

function solution(list) {
  const papers = Array.from({ length: 1001 }, () => new Array(1001).fill(0));

  let index = 1;
  for (const [x, y, column, row] of list) {
    for (let k = y; k < y + row; k++) {
      for (let j = x; j < x + column; j++) {
        papers[k][j] = index;
      }
    }
    index += 1;
  }

  const answer = new Array(list.length).fill(0);
  for (let i = 0; i < papers.length; i++) {
    for (let j = 0; j < papers[i].length; j++) {
      if (papers[i][j] > 0) {
        answer[papers[i][j] - 1] += 1;
      }
    }
  }

  return answer.join("\n");
}

console.log(solution(input.slice(1)));
