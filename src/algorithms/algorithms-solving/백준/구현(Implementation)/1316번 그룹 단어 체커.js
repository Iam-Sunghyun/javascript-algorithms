// 백준 구현 실버5 https://www.acmicpc.net/problem/1316
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/).slice(1);

function solution(str) {

  let answer = 0;

  for (let i = 0; i < str.length; i++) {
    const tmp = new Map([[str[i][0], true]]);
    let check = true;
    for (let j = 1; j < str[i].length; j++) {
      if (str[i][j] === str[i][j - 1]) continue;

      if (tmp.get(str[i][j]) === true) {
        check = false;
        break;
      } else {
        tmp.set(str[i][j], true);
      }
    }
    if (check) answer += 1;
  }

  return answer;
}
console.log(solution(input));