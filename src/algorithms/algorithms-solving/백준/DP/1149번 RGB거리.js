// 백준 1149번 동적 프로그래밍 https://www.acmicpc.net/problem/1149
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\n/);
const nums = input.slice(1).map((n) => n.split(" ").map(Number));
function solution(num) {
  
  for (let i = 1; i < num.length; i++) {
    for (let j = 0; j < 3; j++) {
      const previous = [...num[i - 1]];

      previous.splice(j, 1);
      num[i][j] += Math.min(...previous);
    }
  }

  return Math.min(...num[num.length - 1]);
}

console.log(solution(nums));
