// 백준 구현 https://www.acmicpc.net/problem/1924
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

function solution(x, y) {

  const daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  let days = 0;
  for (let i = 0; i < x - 1; i++) {
    days += daysOfMonth[i];
  }
  days += y;

  return daysOfWeek[(days % 7)];
}

console.log(solution(input[0], input[1]));