// 백준 그래프 탐색 실버2 https://www.acmicpc.net/problem/11725
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(' ').map(Number));

function solution(input, N) {

  const graph = Array.from({ length: N + 1 }, () => []);
  const check = new Array(N + 1).fill(false);
  const answer = new Array(N).fill(0);
  
  // 인접 리스트 생성
  for (let i = 0; i < N - 1; i++) {
    graph[input[i][0]].push(input[i][1]);
    graph[input[i][1]].push(input[i][0]);
  }

  // BFS
  function BFS() {
    const queue = [1];
    let parent;

    while (queue.length > 0) {
      const tmp = [];
      while (queue.length > 0) {
        const node = queue.shift();
        parent = node;
        for (let i = 0; i < graph[node].length; i++) {
          if (check[graph[node][i]] === false) {
            answer[graph[node][i]] = parent;
            tmp.push(graph[node][i]);
            check[graph[node][i]] = true;
          }
        }
      }
      for (let i = 0; i < tmp.length; i++) {
        queue.push(tmp[i]);
      }
      parent += 1;
    }
  }

  BFS();

  return answer.slice(2).join('\n');
}

console.log(solution(input.slice(1), +input[0][0]));


// 반례 1
// 7
// 2 4
// 4 7
// 6 3
// 3 5
// 4 1
// 1 6
// 반례 1 답
// 4
// 6
// 1
// 3
// 1
// 4

// 반례 2
// 10
// 1 3
// 5 4
// 3 2
// 2 7
// 5 7
// 9 10
// 5 10
// 6 8
// 1 6
// 반례 2 Answer
// 3
// 1
// 5
// 7
// 1
// 2
// 6
// 10
// 5
