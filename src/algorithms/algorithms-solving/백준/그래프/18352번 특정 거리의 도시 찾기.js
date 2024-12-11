// https://www.acmicpc.net/problem/18352
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

function solution(N, K, X, list) {
  const graph = Array.from({ length: N + 1 }, () => []);

  for (let i = 0; i < list.length; i++) {
    graph[list[i][0]].push(list[i][1]);
  }

  function BFS(start, step) {
    const queue = [[start, step]];
    const answer = [];
    const check = new Array(N + 1).fill(false);
    check[start] = true;
    while (queue.length > 0) {
      const tmp = [];
      while (queue.length > 0) {
        const [next, step] = queue.shift();

        if (step === K) {
          answer.push(next);
          continue;
        }
        for (let i = 0; i < graph[next].length; i++) {
          if (check[graph[next][i]] === false) {
            check[graph[next][i]] = true;
            tmp.push([graph[next][i], step + 1]);
          }
        }
      }
      step += 1;
      for (let i = 0; i < tmp.length; i++) {
        queue.push(tmp[i]);
      }
    }

    return answer;
  }

  const answer = BFS(X, 0);
  return answer.length === 0 ? -1 : answer.sort((a, b) => a - b).join("\n");
}

console.log(solution(input[0][0], input[0][2], input[0][3], input.slice(1)));
