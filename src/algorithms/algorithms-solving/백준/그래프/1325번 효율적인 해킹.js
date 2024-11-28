// https://www.acmicpc.net/problem/1325
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

function solution(N, list) {
  const graph = Array.from({ length: N + 1 }, () => []);

  for (let i = 0; i < list.length; i++) {
    graph[list[i][1]].push(list[i][0]);
  }

  function BFS(start, check) {
    const queue = [start];
    let lv = 1;

    while (queue.length > 0) {
      const tmp = [];

      while (queue.length > 0) {
        const next = queue.pop();
        lv += 1;
        for (let i = 0; i < graph[next].length; i++) {
          if (check[graph[next][i]] === false) {
            check[graph[next][i]] = true;
            tmp.push(graph[next][i]);
          }
        }
      }
      for (let i = 0; i < tmp.length; i++) {
        queue.push(tmp[i]);
      }
    }
    return lv;
  }

  const lvs = new Array(N + 1).fill(0);
  let max = -Infinity;
  for (let i = 1; i < graph.length; i++) {
    const check = new Array(N + 1).fill(false);
    let result = 0;
    if (check[i] === false) {
      check[i] = true;
      result = BFS(i, check);
      lvs[i] = result;
      max = Math.max(max, result);
    }
  }

  const answer = [];
  lvs.forEach((n, i) => (n === max ? answer.push(i) : null));

  return answer.join(" ");
}

console.log(solution(input[0][0], input.slice(1)));
