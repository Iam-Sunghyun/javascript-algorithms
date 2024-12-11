// https://www.acmicpc.net/problem/13549
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

function solution(N, K) {
  const check = new Array(100001).fill(false);
  function BFS(x) {
    const queue = [[x, 0]];

    while (queue.length > 0) {
      const [x, step] = queue.shift();

      if (x === K) {
        return step;
      }
      if (check[x * 2] === false) {
        check[x * 2] = true;
        queue.push([x * 2, step]);
      }
      if (check[x - 1] === false) {
        check[x - 1] = true;
        queue.push([x - 1, step + 1]);
      }
      if (check[x + 1] === false) {
        check[x + 1] = true;
        queue.push([x + 1, step + 1]);
      }
    }
  }
  check[N] = true;
  const answer = BFS(N);

  return answer;
}

console.log(solution(...input));
