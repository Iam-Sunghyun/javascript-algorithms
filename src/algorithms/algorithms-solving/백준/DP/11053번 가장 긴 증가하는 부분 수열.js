// 백준 DP 11053번 실버2 https://www.acmicpc.net/problem/11053
// 반례 모음 https://www.acmicpc.net/board/view/114371
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/).map(Number).slice(1);

function solution(numbers) {
  const arr = new Array(numbers.length).fill(1);

  // 최장 증가 수열 길이 계산
  // 0번 최장 증가 수열 길이는 무조건 1이므로 계산 생략 -> i = 1부터 시작
  for (let i = 1; i < numbers.length; i++) {
    let max = 0;
    // numbers[0] ~ numbers[i-1] 요소들 중에 numbers[i] 보다 작으면서 최장 증가 수열의 길이가 가장 큰 값 찾기
    for (let j = i - 1; j >= 0; j--) {
      if (numbers[i] > numbers[j]) max = Math.max(arr[j], max);
    }
    // 이전 요소의 최장 증가 수열 길이에서 자기 자신을(numbers[i]) 포함 시켜준 값을 numbers[i]의 최장 증가 수열 길이로 저장
    arr[i] = max + 1;
  }

  // 최장 증가 수열 길이 중 최대값 계산
  let answer = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    answer = Math.max(answer, arr[i]);
  }

  return answer;
}

console.log(solution(input));
