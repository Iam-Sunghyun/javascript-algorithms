// https://www.acmicpc.net/problem/1244
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(' ').map(Number));

function solution(switches, students) {

  for (const [s, n] of students) {
    if (s === 1) {
      for (let i = n - 1; i < switches.length; i += n) {
        switches[i] = Math.abs(switches[i] - 1);
      }
    }
    if (s === 2) {
      let [left, right] = [n - 2, n];
      while (switches[left] !== undefined || switches[right] !== undefined) {
        if (switches[left] === switches[right]) {
          left -= 1;
          right += 1;
          continue;
        } else {
          break;
        }
      }
      for (let i = left + 1; i <= right - 1; i++) {
        switches[i] = Math.abs(switches[i] - 1);
      }
    }
  }

  const answer = [];
  for (let i = 0; i < switches.length; i += 20) {
    answer.push(switches.slice(i, i + 20).join(' '));
  }

  return answer.join('\n');
}

console.log(solution(input[1], input.slice(3)));




