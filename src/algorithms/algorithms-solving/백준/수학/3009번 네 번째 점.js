// https://www.acmicpc.net/problem/3009
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

// 직사각형의 성질:
// 한 직사각형의 각 좌표는 X, Y 축 값이 두 번씩 등장해야 한다.
// 네 번째 점은 X와 Y 값 중 한 번만 등장한 값으로 결정된다.
function solution(numbers) {
  const X = [];
  const Y = [];
  for (const [x, y] of numbers) {
    X.push(x);
    Y.push(y);
  }
  // Array.prototype.lastIndexOf(searchValue, fromIndex) -> fromIndex 위치부터(기본 값 +Infinity) 역순으로 탐색하여 일치하는 인덱스 반환 일치하는 요소가 없으면 -1 반환
  const resultX = X.filter((n, _, arr) => arr.indexOf(n) === arr.lastIndexOf(n));
  const resultY = Y.filter((n, _, arr) => arr.indexOf(n) === arr.lastIndexOf(n));
  return [resultX, resultY].flat().join(" ");
}

console.log(solution(input));
