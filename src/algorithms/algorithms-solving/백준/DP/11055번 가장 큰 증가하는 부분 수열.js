// 백준 DP 11055번 실버2 https://www.acmicpc.net/problem/11055
// 11503번과 풀이가 동일한 문제
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/).map(Number).slice(1);

function solution(numbers) {
  const arr = new Array(numbers.length).fill(0);
  arr[0] = numbers[0];

  // 최장 증가 수열 합 계산
  for (let i = 1; i < numbers.length; i++) {
    let max = 0;
    // numbers[i] 이전 요소 중 numbers[i]보다 작으면서 최장 증가 수열 합이 가장 큰 경우 찾기
    for (let j = i - 1; j >= 0; j--) {
      if (numbers[i] > numbers[j]) max = Math.max(arr[j], max);
    }
    // 가장 큰 값에서 number[i] 자기 자신을 더해 자신의 최장 증가 수열 합으로 저장
    arr[i] = max + numbers[i];
  }

  // 최장 증가 수열 합 중 최대 값 찾기
  let answer = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    answer = Math.max(answer, arr[i]);
  }

  return answer;
}

console.log(solution(input));
