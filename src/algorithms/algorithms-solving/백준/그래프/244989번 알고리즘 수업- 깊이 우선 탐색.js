// https://www.acmicpc.net/problem/24479
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

function solution(n, start, nodes) {
  const list = Array.from({ length: n + 1 }, () => []);

  for (let i = 0; i < nodes.length; i++) {
    list[nodes[i][0]].push(nodes[i][1]);
    list[nodes[i][1]].push(nodes[i][0]);
  }

  list.forEach((n) => n.sort((a, b) => a - b));

  const check = new Array(n + 1).fill(false);
  const answer = new Array(n).fill(0);
  let index = 1;
  function DFS(n) {
    for (let i = 0; i < list[n].length; i++) {
      if (check[list[n][i]] === false) {
        index += 1;
        answer[list[n][i] - 1] = index;
        check[list[n][i]] = true;
        DFS(list[n][i], index);
      }
    }
  }
  answer[start - 1] = 1;
  check[start] = true;
  DFS(start);

  return answer.join("\n");
}

console.log(solution(input[0][0], input[0][2], input.slice(1)));
