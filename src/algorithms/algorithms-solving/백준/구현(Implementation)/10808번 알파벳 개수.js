// 백준 구현 https://www.acmicpc.net/problem/10808
const input = require('fs').readFileSync('/dev/stdin').toString().trim();

function solution(word) {

  const alphabetArray = new Array(26).fill(0);

  for (const spell of word) {
    alphabetArray[spell.charCodeAt() - 97] += 1;
  }

  return alphabetArray.join(' ');
}

console.log(solution(input));
