// 백준 그래프 탐색 실버2 https://www.acmicpc.net/problem/2644
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number));

function solution(input) {

  const [start, target] = [input[1][0], input[1][1]];
  const graph = Array.from({ length: input[0][0] + 1 }, () => []);
  const check = new Array(input[0][0] + 1).fill(false);

  for (let i = 3; i < input.length; i++) {
    graph[input[i][0]].push(input[i][1]);
    graph[input[i][1]].push(input[i][0]);
  }

  // BFS
  function BFS(node) {
    const queue = [node];
    let step = 0;
    check[node] = true;
    while (queue.length > 0) {
      const tmp = [];
      while (queue.length > 0) {
        const next = queue.pop();
        for (let i = 0; i < graph[next].length; i++) {
          if (graph[next][i] === target) return step + 1;
          if (check[graph[next][i]] === false) {
            check[graph[next][i]] = true;
            tmp.push(graph[next][i]);
          }
        }
      }
      step += 1;
      for (let i = 0; i < tmp.length; i++) {
        queue.push(tmp[i]);
      }
    }
    return -1;
  }

  const answer = BFS(start);
  return answer;
}

console.log(solution(input));