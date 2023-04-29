// 백준 10974번 순열 https://www.acmicpc.net/problem/10974
const input = require('fs').readFileSync('/dev/stdin').toString().trim();

function solution(number) {
  const check = new Array(number + 1).fill(false);
  const tmp = new Array(number).fill(0);

  function DFS(lv) {
    if (lv === number) {
      console.log(tmp.join(' '));
      return;
    }

    for (let i = 1; i <= number; i++) {
      if (check[i]) continue;
      tmp[lv] = i;
      check[i] = true;
      DFS(lv + 1);
      check[i] = false;
    }
  }

  DFS(0);
}

solution(+input);
