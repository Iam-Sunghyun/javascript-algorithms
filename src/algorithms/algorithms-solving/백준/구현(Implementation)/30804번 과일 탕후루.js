// https://www.acmicpc.net/problem/30804
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

function solution(candies) {
  const candy = new Map([[candies[0], 1]]);

  let [left, right] = [0, 0];
  let max = 0;

  while (right < candies.length) {
    if (candy.size <= 2) {
      max = Math.max(max, right - left + 1);
      right += 1;
      candy.set(candies[right], (candy.get(candies[right]) ?? 0) + 1);
    } else if (candy.size > 2) {
      candy.set(candies[left], candy.get(candies[left]) - 1);
      if (candy.get(candies[left]) === 0) {
        candy.delete(candies[left]);
      }
      left += 1;
    }
  }

  return max;
}

console.log(solution(input[1]));
