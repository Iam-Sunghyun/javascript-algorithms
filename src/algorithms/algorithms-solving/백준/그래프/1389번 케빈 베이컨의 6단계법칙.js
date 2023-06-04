// 백준 그래프 탐색 실버1 https://www.acmicpc.net/problem/1389
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number));

function solution(input) {
  const graph = Array.from({ length: input[0][0] + 1 }, () => []);
  const answer = new Array(input[0][0] + 1).fill(0);

  // 인접 리스트 그래프 생성
  for (let i = 1; i < input.length; i++) {
    graph[input[i][0]].push(input[i][1]);
    graph[input[i][1]].push(input[i][0]);
  }

  // BFS
  function BFS(index) {
    const check = new Array(input[0][0] + 1).fill(false);
    const queue = [index];
    let step = 1;
    check[index] = true;

    // 더 탐색할 노드가 없을때 까지
    while (queue.length > 0) {
      const tmp = [];

      // 특정 레벨의 모든 노드를 확인할 때 까지
      while (queue.length > 0) {
        const next = queue.pop();
        for (let i = 0; i < graph[next].length; i++) {
          if (check[graph[next][i]] === false) {
            check[graph[next][i]] = true;
            tmp.push(graph[next][i]);
            answer[index] += step; // index 노드 케빈 베이컨 합 추가
          }
        }
      }

      // 모든 다음 레벨 노드 queue에 추가
      for (let i = 0; i < tmp.length; i++) {
        queue.push(tmp[i]);
      }
      step += 1;
    }
    // index번 노드의 bfs 탐색이 모두 끝났다면 앞선 노드의 케빈 베이컨 수와 비교하여 최솟값 갱신
    [min, minIndex] = min > answer[index] ? [answer[index], index] : [min, minIndex];
  }

  // 케빈 베이컨 최솟값, 최솟값의 인덱스 저장용
  let min = +Infinity;
  let minIndex = -Infinity;

  // 모든 노드에 대하여 bfs 탐색 + 케빈 베이컨 계산
  for (let i = 1; i < graph.length; i++) {
    BFS(i);
  }
  return minIndex;
}

console.log(solution(input));