// https://www.acmicpc.net/problem/20310
const input = require("fs").readFileSync("/dev/stdin").toString().trim();
// const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');

function solution(num) {
  let [zeros, ones] = [0, 0];
  for (const str of num) {
    if (str === "1") {
      ones += 1;
    } else {
      zeros += 1;
    }
  }
  let [oneLeft, zeroLeft] = [ones / 2, zeros / 2];
  let [left, right] = [0, num.length - 1];

  while (oneLeft > 0 || zeroLeft > 0) {
    if (num[left] === "1" && oneLeft > 0) {
      num.splice(left, 1);
      oneLeft -= 1;
    } else {
      left += 1;
    }
    if (num[right] === "0" && zeroLeft > 0) {
      num.splice(right, 1);
      zeroLeft -= 1;
    } else {
      right -= 1;
    }
  }

  return num.join("");
}

console.log(solution([...input]));
