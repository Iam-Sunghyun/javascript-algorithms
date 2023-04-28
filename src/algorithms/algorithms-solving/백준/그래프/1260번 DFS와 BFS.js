// 백준 그래프 탐색 실버2 https://www.acmicpc.net/problem/1260
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(' ').map(Number));

function solution(input) {

  const [nodes, edges, start] = [input[0][0], input[0][1], input[0][2]];   // 노드 개수, 시작 노드 번호
  const check = new Array(nodes + 1).fill(false);   // 방문 여부 체크용
  const graph = Array.from({ length: nodes + 1 }, () => []); // 인접리스트용 배열

  // 인접리스트로 무방향 그래프 생성
  for (let i = 1; i < input.length; i++) {
    graph[input[i][0]].push(input[i][1]);
    graph[input[i][1]].push(input[i][0]);
  }

  // 연결된 노드 오름차순 정렬(번호가 작은 것부터 방문해야 하므로)
  for (let i = 1; i < graph.length; i++) {
    if (graph[i].length > 1) graph[i].sort((a, b) => a - b);
  }

  // 깊이 우선 탐색
  function DFS(v) {
    if (check[v] === true) return;

    check[v] = true;
    DFSanswer.push(v);

    for (let i = 0; i < graph[v].length; i++) {
      if (check[graph[v][i]] === false) {
        DFS(graph[v][i]);
      }
    }
  }

  // 너비 우선 탐색
  function BFS(start) {

    check[start] = true;
    BFSanswer.push(start);

    const queue = [start];
    let vertex;
    while (queue.length > 0) {
      vertex = queue.shift();
      for (let i = 0; i < graph[vertex].length; i++) {
        if (check[graph[vertex][i]] === false) {
          queue.push(graph[vertex][i]);
          BFSanswer.push(graph[vertex][i]);
          check[graph[vertex][i]] = true;
        }
      }
    }
  }

  const DFSanswer = [];
  DFS(start);

  check.fill(false);
  const BFSanswer = [];
  BFS(start);

  return `${DFSanswer.join(' ')}\n${BFSanswer.join(' ')}`;
}

console.log(solution(input));



    // if(check[v]) return;
    //     console.log(v, answer, check)
    //     if(answer.length === nodes) {
    //         console.log(answer)
    //         return
    //     }
    //     check[v] = true;
    //     for(let i = 0; i < graph[v].length; i++){
    //         answer.push(graph[v][i])
    //         DFS(graph[v][i]);
    //         check[v] = false;
    //     }