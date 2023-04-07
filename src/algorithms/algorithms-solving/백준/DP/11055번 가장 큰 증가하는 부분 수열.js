// 백준 DP 11055번 실버2 https://www.acmicpc.net/problem/11055
// https://www.inflearn.com/course/lecture?courseSlug=%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4&unitId=64176&tab=curriculum
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
  answer[0] = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > numbers[i - 1]) {
      if (numbers[i] > numbers[n]) {
        answer[i] = numbers[i] + answer[n];
        n = i;
      } else {
        answer[i] = answer[i - 1] + numbers[i];
      }
    } else {
      answer[i] = numbers[i] + answer[n - 1];
    }
  }

  let max = -Infinity;
  for (let i = 0; i < answer.length; i++){
    if (max < answer[i]) max = answer[i];
  }
  return max;
}

console.log(solution(input));
