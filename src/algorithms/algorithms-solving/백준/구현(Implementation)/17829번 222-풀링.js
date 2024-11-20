// https://www.acmicpc.net/problem/17829
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

function solution(nums) {
  let arr = [...nums];

  while (true) {
    const tmp1 = [];
    for (let i = 0; i < arr.length; i += 2) {
      const tmp2 = [];
      for (let j = 0; j < arr[i].length; j += 2) {
        tmp2.push(
          [arr[i][j], arr[i][j + 1], arr[i + 1][j], arr[i + 1][j + 1]].sort((a, b) => b - a)[1]
        );
      }
      tmp1.push(tmp2);
    }
    arr = tmp1;
    if (arr.length === 1) break;
  }

  return arr[0][0];
}

console.log(solution(input.slice(1)));
