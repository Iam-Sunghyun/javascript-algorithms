// 백준 1003번 동적 프로그래밍 https://www.acmicpc.net/problem/1003
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(nums) {
  const memo = new Array(nums[0]).fill(0);
  const answer = [];
  let max = -Infinity;

  memo[0] = [1, 0];
  memo[1] = [0, 1];

  // 숫자 리스트 중 최대 값 추출
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) max = nums[i];
  }

  // 0, 1 횟수 계산
  for (let i = 2; i <= max; i++) {
    memo[i] = [memo[i - 2][0] + memo[i - 1][0], memo[i - 2][1] + memo[i - 1][1]];
  }

  for (let i = 0; i < nums.length; i++) {
    answer.push(`${memo[nums[i]][0]} ${memo[nums[i]][1]}`);
  }

  return answer.join('\n');
}

console.log(solution(input.slice(1).map(Number)));
