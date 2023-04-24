// 백준 실버2 https://www.acmicpc.net/problem/1260
// 아직 못품
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(' ').map(Number));

function solution(input) {

  // 노드 개수, 시작 노드 번호
  const [nodes, start] = [input[0][0], input[0][2]];
  const graph = Array.from({ length: nodes + 1 }, () => []);

  // 방문 여부 체크용
  const check = new Array(nodes + 1).fill(false);

  // 인접리스트로 무방향 그래프 생성
  for (let i = 1; i < input.length; i++) {
    graph[input[i][0]].push(input[i][1]);
    graph[input[i][1]].push(input[i][0]);
  }

  // 연결된 노드 오름차순 정렬(번호가 작은 것부터 방문해야 하므로)
  for (let i = 1; i < graph.length; i++) {
    graph[i].sort((a, b) => a - b);
  }

  // 깊이 우선 탐색
  function DFS(v, result) {
    if (result.length === nodes) {
      console.log(result);
      return result;
    }

    for (let i = 0; i < graph[v].length; i++) {
      if (result.length !== nodes && check[graph[v][i]] === false) {
        check[graph[v][i]] = true;
        result.push(graph[v][i]);
        DFS(graph[v][i], result);
        check[graph[v][i]] = false;
      }
    }
  }

  // 너비 우선 탐색
  function BFS(v, queue) {
    let lv = v;
    let i = 0;

    while (queue.length < nodes) {

      for (let i = 0; i < graph[lv].length; i++) {

        if (check[graph[lv][i]] === false) {
          queue.push(graph[v][i]);
          check[graph[lv][i]] = true;
        }
      }
      lv = queue[++i];
    }
    return queue;
  }

  check[start] = true;
  console.log(DFS(start, [start]));

  // BFS(start, [start]);


  return [DFS(start, [start]), BFS(start, [start])];
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