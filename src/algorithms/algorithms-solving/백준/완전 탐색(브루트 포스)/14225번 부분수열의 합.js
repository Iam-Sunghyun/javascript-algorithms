// 백준 14225번 완전 탐색 https://www.acmicpc.net/problem/14225
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/).slice(1).map(Number);

function solution(n) {
  const answer = [];

  function DFS(lv, sum) {
    if (lv > n.length) return;
    if (sum !== 0) answer.push(sum);

    DFS(lv + 1, sum + n[lv]);
    DFS(lv + 1, sum);
  }

  DFS(0, 0);

  // 합 배열 오름차순 정렬
  answer.sort((a, b) => a - b);

  // 가장 작은 합이 1이 아니라면 return 1
  if (answer[0] !== 1) return 1;

  // 합 배열의 i번 요소와 i+1번 요소의 차를 계산하여 1보다 큰 경우 return i번 값+1
  for (let i = 0; i < answer.length - 1; i++) {
    if (answer[i + 1] - answer[i] > 1) return answer[i] + 1;
  }

  // 합 가짓수가 하나 이상이며 차이가 모두 1이라면(ex) [1,2,3,4,5], [1]) return 맨 마지막 값+1
  return answer[answer.length - 1] + 1;
}

console.log(solution(input));
