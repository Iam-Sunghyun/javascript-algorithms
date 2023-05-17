// 백준 그래프 탐색 실버1 https://www.acmicpc.net/problem/11403
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number));

function solution(input) {

  const graph = Array.from({ length: +input[0] + 1 }, () => []);

  // 인접 리스트 방향그래프 생성
  for (let i = 1; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] === 1) {
        graph[i].push(j + 1);
      }
    }
  }

  const answer = Array.from({ length: +input[0] }, () => new Array(+input[0]).fill(0));
  /**
   * @param {number} i 시작 노드 
   * @param {number} j 경로 상에 있는 다음 노드
   */
  function DFS(i, j) {
    const check = new Array(+input[0] + 1).fill(false);
    const stack = [j];
    while (stack.length > 0) {
      const next = stack.pop();
      for (let k = 0; k < graph[next].length; k++) {
        if (check[graph[next][k]] === false) {
          answer[i - 1][graph[next][k] - 1] = 1;
          stack.push(graph[next][k]);
          check[graph[next][k]] = true;
        }
      }
    }
  }
  // 모든 노드를 시작 노드로 하여 DFS
  for (let i = 1; i < graph.length; i++) {
    DFS(i, i);
  }

  // 결과 출력용
  const result = new Array(answer.length);
  for (let i = 0; i < answer.length; i++) {
    result[i] = answer[i].join(' ');
  }
  return result.join('\n');
}

console.log(solution(input));