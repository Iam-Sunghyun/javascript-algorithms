// 백준 조합(완전 탐색) 실버1 https://www.acmicpc.net/problem/1342
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');

function solution(string) {

  const answer = new Set();
  const tmp = new Array(string.length).fill('');

  function permutation(lv) {
    if (tmp[lv] === tmp[lv - 1]) {
      return;
    }
    if (lv === string.length - 1) {
      answer.add([...tmp].join(''));
      return;
    }

    for (let i = 0; i < string.length; i++) {
      if (check[i] === false) {
        check[i] = true;
        tmp[lv + 1] = string[i];
        permutation(lv + 1);
        check[i] = false;
      }
    }
  }

  const check = new Array(string.length).fill(false);
  for (let i = 0; i < string.length; i++) {
    check[i] = true;
    tmp[0] = string[i];
    permutation(0);
    check[i] = false;
  }

  return answer.size;
}

console.log(solution(input));
