// https://www.acmicpc.net/problem/1235
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(numbers) {
  let k = 1;
  const len = numbers[0].length;
  while (k <= 100) {
    let check = true;
    for (let i = 0; i < numbers.length; i++) {
      const current = [...numbers[i]].slice(len - k).join("");
      for (let j = i + 1; j < numbers.length; j++) {
        const next = [...numbers[j]].slice(len - k).join("");

        if (current === next) {
          check = false;
          break;
        }
      }
    }
    if (check === true) {
      return k;
    }
    k += 1;
  }
}

console.log(solution(input.slice(1)));
