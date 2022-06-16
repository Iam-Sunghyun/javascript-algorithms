// 백준 2908번 문자열 https://www.acmicpc.net/problem/2908
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);

function solution(str) {
  const reverse = str.map(string => Number(string[2] + string[1] + string[0]));
  return reverse[0] > reverse[1] ? reverse[0] : reverse[1];
}

console.log(solution(input)); // 784 382 => 487