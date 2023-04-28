// 백준 그래프 탐색 실버3 https://www.acmicpc.net/problem/2606
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(' ').map(Number));

// DFS
function solution1(input) {
  if (input[1][0] === 0) return 0;
  const graph = new Array(input[0][0] + 1).fill(0).map(n => []);

  for (let i = 2; i < input.length; i++) {
    graph[input[i][0]].push(input[i][1]);
    graph[input[i][1]].push(input[i][0]);
  }

  function DFS(v) {
    if (check[v] === true) return;

    answer.push(v);
    check[v] = true;

    for (let i = 0; i < graph[v].length; i++) {
      if (check[graph[v][i]] === false) {
        DFS(graph[v][i]);
      }
    }
  }

  const check = new Array(input[0][0] + 1).fill(false);
  const answer = [];
  DFS(1);

  return answer.length - 1;
}

console.log(solution1(input));

// BFS
function solution2(input) {
  if (input[1][0] === 0) return 0;
  const graph = new Array(input[0][0] + 1).fill(0).map(n => []);

  for (let i = 2; i < input.length; i++) {
    graph[input[i][0]].push(input[i][1]);
    graph[input[i][1]].push(input[i][0]);
  }

  function BFS(v) {
    const queue = [v];

    answer.push(v);
    check[v] = true;

    let vertex;
    while (queue.length > 0) {
      vertex = queue.shift();
      for (let i = 0; i < graph[vertex].length; i++) {
        if (check[graph[vertex][i]] === false) {
          queue.push(graph[vertex][i]);
          check[graph[vertex][i]] = true;
          answer.push(graph[vertex][i]);
        }
      }
    }
  }

  const check = new Array(input[0][0] + 1).fill(false);
  const answer = [];
  BFS(1);

  return answer.length - 1;
}

console.log(solution(input));
