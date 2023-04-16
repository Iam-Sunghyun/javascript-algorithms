// 백준 구현 실버4 https://www.acmicpc.net/problem/1158
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/).map(Number);

function solution(nums) {
  // 순열 생성
  const list = Array.from({ length: nums[0] }, (_, i) => i + 1);
  const answer = [];
  let i = nums[1] - 1;
  
  // 요세푸스 규칙에 따라 순회
  while (answer.length !== nums[0]) {
    // 입력이 작으므로 splice가 훨씬 간결
    answer.push(list[i]);
    list.splice(i, 1);
    i = (i + nums[1] - 1) % list.length;
  }

  return `<${answer.join(', ')}>`;
}
console.log(solution(input));