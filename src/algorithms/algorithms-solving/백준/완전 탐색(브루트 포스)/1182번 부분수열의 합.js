// 백준 1182번 완전 탐색 https://www.acmicpc.net/problem/1182
// 부분 집합의 합 문제
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/).slice(1).map(Number);
const n = input[0];

function solution(nodes, target) {

  const subarr = [];  // 부분 집합 저장용
  let answer = 0;

  function DFS(lv) {
    // 재귀 종료 조건
    if (lv > nodes.length - 1) {

      // 공집합을 제외한 부분수열(집합)의 합 구하기
      if (subarr.length > 0) {
        const sum = subarr.reduce((acc, n) => acc + n, 0);
        if (sum === target) answer += 1;
      }
      return;
    }
    subarr.push(nodes[lv]);
    DFS(lv + 1);
    subarr.pop();
    DFS(lv + 1);
  }

  DFS(0);

  return answer;
}

console.log(solution(input.slice(1), n));
