// 백준 2156번 실버1 https://www.acmicpc.net/problem/2156
// 점화식 제대로 파악하는게 관건
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/).map(Number).slice(1);

function solution(numbers) {

  const arr = new Array(numbers.length).fill(0);
  // 반복문에 필요한 최소 항 계산
  arr[0] = numbers[0];
  arr[1] = numbers[0] + numbers[1];
  arr[2] = Math.max(numbers[2] + Math.max(numbers[0], numbers[1]), arr[1]);

  if (numbers.length === 3) return Math.max(...arr);
  if (numbers.length === 2) return arr[1];
  if (numbers.length === 1) return arr[0];

  for (let i = 3; i < numbers.length; i++) {
    // 점화식 -> i-3번까지 최대 마신 양 + i-1번쨰 + i번 연속으로 마신 경우  
    // 3번째 인수 -> i번째 잔을 먹지 않은 경우도 고려한 것 주의(i-1번째 잔까지 먹었던 최대 값을 그대로 사용)
    arr[i] = Math.max(arr[i - 3] + numbers[i - 1] + numbers[i], arr[i - 2] + numbers[i], arr[i - 1]);
  }

  let answer = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    answer = Math.max(answer, arr[i]);
  }

  return answer;
}

console.log(solution(input));
