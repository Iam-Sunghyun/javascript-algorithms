// 백준 2839번 기본 수학1 https://www.acmicpc.net/problem/2839
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\n/);

function solution(kg) {
  let bags = 0;
  while (true) {
    if (kg % 5 === 0) {
      bags = bags + (kg / 5);
      return bags;
    }
    if (kg < 0) {
      return -1;
    }
    kg -= 3;
    bags++;
  }
}

console.log(solution(input[0])); 