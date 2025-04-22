// https://www.acmicpc.net/problem/10819
const input = require("fs")
  .readFileSync(0, "utf-8")
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

function solution(numbers) {
  const check = new Array(numbers.length).fill(false);
  let max = -Infinity;

  function DFS(list) {
    if (list.length === numbers.length) {
      let sum = 0;
      for (let i = 0; i < list.length - 1; i++) {
        sum += Math.abs(list[i] - list[i + 1]);
      }
      max = Math.max(sum, max);
    }
    for (let i = 0; i < numbers.length; i++) {
      if (check[i] === false) {
        check[i] = true;
        list.push(numbers[i]);
        DFS(list);
        check[i] = false;
        list.pop();
      }
    }
  }

  DFS([]);

  return max;
}

console.log(solution(input[1]));
