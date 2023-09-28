// 백준 수학 골드5 https://www.acmicpc.net/problem/1759
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(L, alphabets) {

  const answer = [];
  const tmp = new Array(L).fill('');

  alphabets.sort();

  function permutation(lv, index) {
    if (lv === L - 1) {
      answer.push([...tmp].join(''));
      return;
    }

    for (let i = index + 1; i < alphabets.length; i++) {
      tmp[lv + 1] = alphabets[i];
      permutation(lv + 1, i);
    }
  }

  for (let i = 0; i <= alphabets.length - L; i++) {
    tmp[0] = alphabets[i];
    permutation(0, i);
  }

  return answer.join('\n');
}

console.log(solution(+input[0][0], input[1].split(' ')));