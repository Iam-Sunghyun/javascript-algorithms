// https://www.acmicpc.net/problem/15312
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(""));

function solution(list) {
  const numbers = [3, 2, 1, 2, 3, 3, 2, 3, 3, 2, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 2, 1];
  let tmp = [];
  for (let i = 0; i < list[0].length; i++) {
    tmp.push(list[0][i]);
    tmp.push(list[1][i]);
  }

  let result = [];
  for (let i = 0; i < tmp.length - 1; i++) {
    result.push(
      [...String(numbers[tmp[i].charCodeAt() - 65] + numbers[tmp[i + 1].charCodeAt() - 65])].at(-1)
    );
  }

  while (result.length > 2) {
    let tmp = [];
    for (let i = 0; i < result.length - 1; i++) {
      tmp.push([...String(+result[i] + +result[i + 1])].at(-1));
    }
    result = tmp;
  }

  return result.length === 1 ? "0" + result.join("") : result.join("");
}

console.log(solution(input));
