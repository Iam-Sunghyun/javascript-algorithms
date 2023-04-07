// 백준 DP 11053번 실버2 https://www.acmicpc.net/problem/11053
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(/\s/)
  .slice(1)
  .map(Number);

function solution(numbers) {
  const answer = new Array(numbers.length).fill(0);
  let n = 0; // 값이 증가하는 수열의 마지막 인덱스
  answer[0] = 1;

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > numbers[i - 1]) {
      answer[i] = answer[n] + 1;
      n = i;
    } else {
      for (let j = i - 1; j >= 0; j--) {
        if (numbers[i] > numbers[j]) {
          answer[i] = answer[j] + 1;
          break;
        }
      }
    }
  }

  let max = -Infinity;
  for (let i = 0; i < answer.length; i++) {
    if (max < answer[i]) max = answer[i];
  }
  return max;
}

console.log(solution(input));
