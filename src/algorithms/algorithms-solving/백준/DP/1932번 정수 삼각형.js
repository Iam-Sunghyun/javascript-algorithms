// 백준 1932번 https://www.acmicpc.net/problem/1932
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\n/);
const nums = input.slice(1).map((e) => e.split(" ").map(Number));

function solution(numbers) {
  for (let i = 1; i < numbers.length; i++) {
    for (let j = 0; j < numbers[i].length; j++) {
      // 처음, 마지막 값만 선택지가 하나이므로 조건문 사용
      if (j === 0) {
        numbers[i][j] += numbers[i - 1][j];
      } else if (j === numbers[i].length - 1) {
        numbers[i][j] += numbers[i - 1][j - 1];
      } else {
        numbers[i][j] += Math.max(numbers[i - 1][j - 1], numbers[i - 1][j]);
      }
    }
  }
  return numbers;
}

console.log(solution(nums));
