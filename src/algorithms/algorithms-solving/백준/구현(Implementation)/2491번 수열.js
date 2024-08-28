// https://www.acmicpc.net/problem/2491
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

function solution(numbers) {
  if (numbers.length === 1) return 1;
  const bigger = new Array(numbers.length).fill(0);
  const smaller = new Array(numbers.length).fill(0);

  [bigger[0], smaller[0]] = [1, 1];

  const answer = [0, 0];
  // 동적프로그래밍 테이블 완성하기
  for (let i = 0; i < numbers.length - 1; i++) {
    // 커지는 수열 길이 계산
    if (numbers[i] <= numbers[i + 1]) {
      bigger[i + 1] = bigger[i] + 1;
      answer[0] = Math.max(bigger[i + 1], answer[0]);
    } else {
      bigger[i + 1] = 1;
    }

    // 작아지는 수열 길이 계산
    if (numbers[i] >= numbers[i + 1]) {
      smaller[i + 1] = smaller[i] + 1;
      answer[1] = Math.max(smaller[i + 1], answer[1]);
    } else {
      smaller[i + 1] = 1;
    }
  }

  return Math.max(...answer);
}

console.log(solution(input[1]));
