// 백준 9012번 스택 https://www.acmicpc.net/problem/9012
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").slice(1);

function solution(a) {
  const answer = [];
  const tmp = [];

  for (let i = 0; i < a.length; i++) {
    let check = 0;
    if (a[i].length % 2 !== 0) {
      answer.push("NO");
      continue;
    }

    for (let j = 0; j < a[i].length; j++) {
      if (a[i][j] === "(") {
        tmp.push(a[i][j]);
        check++;
      } else {
        tmp.pop();
        check--;
      }
    }
    answer.push(check === 0 ? "YES" : "NO");
  }
  return answer;
}

console.log(solution(input));
