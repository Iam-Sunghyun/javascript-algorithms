// 백준 1157번 문자열 https://www.acmicpc.net/problem/1157
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const string = [...input[0].toUpperCase()];

function solution(str) {
  if (str.length === 1) return str[0];
  const obj = {};

  str.forEach((str) => {
    obj[str] = ++obj[str] || 1;
  });

  const answer = Object.entries(obj).sort((a, b) => b[1] - a[1]);

  return answer[0][1] === answer[1][1] ? '?' : answer[0][0];
}

console.log(solution(string));
