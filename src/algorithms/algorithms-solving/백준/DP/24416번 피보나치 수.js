// 백준 24416번 동적 프로그래밍 https://www.acmicpc.net/problem/24416
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);

function fibRecursion(num) {
  const answer = [0, 0];

  // 일반 재귀(브루트 포스)
  function f(n, ans) {
    if (n <= 1) {
      if (n === 1) ans[0] += 1;
      return 1;
    }
    return f(n - 1, ans) + f(n - 2, ans);
  }

  // 동적 프로그래밍(상향식)
  function fibDP(n, ans) {
    let x = 1, y = 1;
    for (let i = 2; i < n; i++) {
      [x, y] = [y, x + y];
      ans[1] += 1;
    }
    return ans[1];
  }
  f(num, answer);
  fibDP(num, answer);

  return answer.join(' ');
}

console.log(fibRecursion(input[0]));