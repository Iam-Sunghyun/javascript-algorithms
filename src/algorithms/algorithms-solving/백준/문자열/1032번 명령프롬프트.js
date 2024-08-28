// https://www.acmicpc.net/problem/1032
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(strings) {
  if (strings.length === 1) return strings[0];
  const answer = [];

  for (let i = 0; i < strings[0].length; i++) {
    let check = true;
    let tmp = "";
    for (let j = 0; j < strings.length - 1; j++) {
      tmp = strings[j][i];
      if (strings[j][i] !== strings[j + 1][i]) {
        answer.push("?");
        check = false;
        break;
      }
    }
    if (check === true) {
      answer.push(tmp);
    }
  }
  return answer.join("");
}

console.log(solution(input.slice(1)));
