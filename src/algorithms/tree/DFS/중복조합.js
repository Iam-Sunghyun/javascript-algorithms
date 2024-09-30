// https://www.acmicpc.net/problem/16922
const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(N) {
  const nums = [1, 5, 10, 50];
  const result = new Set();

  function cases(lv, sum, start) {
    if (lv === +N) {
      result.add(sum);
      return;
    }
    for (let i = start; i < 4; i++) {
      cases(lv + 1, sum + nums[i], i);
    }
  }

  cases(0, 0, 0);

  return result.size;
}

console.log(solution(input));
