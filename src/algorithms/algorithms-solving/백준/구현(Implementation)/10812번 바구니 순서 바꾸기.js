// https://www.acmicpc.net/problem/10812
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" "));

function solution(N, list) {
  let baskets = Array.from({ length: N }, (_, i) => i + 1);
  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  // [4, 5, 6, 1, 2, 3, 7, 8, 9, 10]
  // [4, 5, 8, 9, 6, 1, 2, 3, 7, 10]
  // [4, 6, 1, 2, 3, 7, 10, 5, 8, 9]
  // [1, 4, 6, 2, 3, 7, 10, 5, 8, 9]
  // [1, 4, 6, 2, 3, 7, 10, 5, 8, 9]
  for (const [begin, end, mid] of list) {
    const tmp1 = baskets.slice(mid - 1, end);
    const tmp2 = baskets.slice(begin - 1, mid - 1);
    baskets.splice(mid - 1, tmp1.length, ...tmp2);
    baskets.splice(begin - 1, tmp2.length, ...tmp1);
  }

  return baskets.join(" ");
}

console.log(solution(+input[0][0], input.slice(1)));
