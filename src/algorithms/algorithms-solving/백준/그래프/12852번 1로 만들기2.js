// 백준 그래프 탐색 실버1 https://www.acmicpc.net/problem/12852
const input = require('fs').readFileSync('/dev/stdin').toString().trim();

function solution(input) {
  const answer = [];
  let min = +Infinity;

  function dfs(n, route) {
    if (n === 1) {
      const routes = route.slice();
      if (routes.length < min) {
        min = routes.length;
        answer.push(routes);
      }
      return;
    }

    if (n % 3 === 0) {
      route.push(n / 3);
      dfs(n / 3, route);
      route.pop();
    }
    if (n % 2 === 0) {
      route.push(n / 2);
      dfs(n / 2, route);
      route.pop();
    }
    route.push(n - 1);
    dfs(n - 1, route);
    route.pop();
  }

  dfs(input, [input]);
  for (const result of answer) {
    if (result.length === min) {
      return [result.length - 1, result.join(' ')].join('\n');
    }
  }
}


console.log(solution(+input));