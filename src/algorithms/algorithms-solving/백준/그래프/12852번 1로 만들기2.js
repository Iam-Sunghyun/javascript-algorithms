// 백준 그래프 탐색 실버1 https://www.acmicpc.net/problem/12852
const input = require('fs').readFileSync('/dev/stdin').toString().trim();

// 풀이 1 - 시간 다소 오래걸림
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

// dp를 이용한 풀이 - 메모리 약 2배 소요
function makeToOne2(N) {
  const dp = new Array(N + 1).fill(0); // dp[i]: 숫자 i를 1로 만들기 위한 최소 연산 횟수
  const operation = new Array(N + 1).fill(null); // operation[i]: 숫자 i로 가기 위해 이전 숫자 저장

  for (let i = 2; i <= N; i++) {
    dp[i] = dp[i - 1] + 1;
    operation[i] = i - 1;

    if (i % 2 === 0 && dp[i] > dp[i / 2] + 1) {
      dp[i] = dp[i / 2] + 1;
      operation[i] = i / 2;
    }

    if (i % 3 === 0 && dp[i] > dp[i / 3] + 1) {
      dp[i] = dp[i / 3] + 1;
      operation[i] = i / 3;
    }
  }

  let current = N;
  const path = [current];

  while (current !== 1) {
    current = operation[current];
    path.push(current);
  }

  return [dp[N], path.join(" ")];
}

const [minOperations, steps] = makeToOne2(+input);

console.log(minOperations);
console.log(steps);