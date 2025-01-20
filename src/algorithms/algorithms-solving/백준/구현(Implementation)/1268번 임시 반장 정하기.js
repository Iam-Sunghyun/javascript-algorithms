// https://www.acmicpc.net/problem/1268
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));
// const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');

function solution(nums) {
  const count = Array.from({ length: nums.length }, () => new Set());
  let max = -Infinity;
  let index = 0;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[j][i] === nums[k][i]) {
          count[j].add(k + 1);
          count[k].add(j + 1);
        }
      }
      if (count[j].size > max) {
        max = count[j].size;
        index = j + 1;
      }
    }
  }
  return index;
}

console.log(solution(input.slice(1)));
