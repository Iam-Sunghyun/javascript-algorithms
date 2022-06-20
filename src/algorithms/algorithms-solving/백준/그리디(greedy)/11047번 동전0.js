// 백준 11047번 그리디 https://www.acmicpc.net/problem/11047
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);
const target = +input[1];
const money = input.slice(2).map(Number);

function solution(target, money) {
  let answer = 0;
  let i = money.length - 1;
  while (target > 0) {
    if (money[i] <= target) {
      answer = answer + Math.floor(target / money[i]);
      target = target % money[i];
    }
    i--;
  }
  return answer;
}

console.log(solution(target, money));