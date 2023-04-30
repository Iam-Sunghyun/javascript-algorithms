// 백준 그래프 탐색 실버2 https://www.acmicpc.net/problem/11724
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(' ').map(Number));

function solution(input) {

  const graph = Array.from({ length: input[0][0] + 1 }, () => []);
  const check = new Array(input[0][0] + 1).fill(false);

  // 인접 리스트 생성
  for (let i = 1; i < input.length; i++) {
    graph[input[i][0]].push(input[i][1]);
    graph[input[i][1]].push(input[i][0]);
  }

  // BFS
  function BFS(v) {
    const queue = [v];
    let tmp;
    while (queue.length > 0) {
      tmp = queue.shift();
      for (let i = 0; i < graph[tmp].length; i++) {
        if (check[graph[tmp][i]] === false) {
          check[graph[tmp][i]] = true;
          queue.push(graph[tmp][i]);
        }
      }
    }
  }

  let count = 0;
  for (let i = 1; i <= graph.length; i++) {
    if (check[i] === false) {
      BFS(i);
      count += 1;
    }
  }

  return count;
}

console.log(solution(input));