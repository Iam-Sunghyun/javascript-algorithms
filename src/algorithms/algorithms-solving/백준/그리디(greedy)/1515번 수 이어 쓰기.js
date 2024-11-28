// https://www.acmicpc.net/problem/1515
const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(number) {
  let index = 0;
  let num = 0;

  while (index < number.length) {
    num += 1;
    for (let i = 0; i < String(num).length; i++) {
      if (number[index] === String(num)[i]) {
        index += 1;
      }
    }
  }

  return num;
}

console.log(solution(input));
