// 백준 11399번 그리디 https://www.acmicpc.net/problem/11399
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);
const fetchTime = input.slice(1).map(Number);

function solution(time) {
  const answer = [];
  let sum = 0;

  time.sort((a, b) => a - b);

  time.forEach(time => {
    answer.push(sum + time);
    sum += time;
  });

  return answer.reduce((acc, t) => acc + t);
}

console.log(solution(fetchTime));