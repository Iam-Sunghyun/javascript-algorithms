// https://www.acmicpc.net/problem/10820
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

function solution(strings) {
  const answer = Array.from({ length: strings.length }, () => new Array(4).fill(0));

  for (let i = 0; i < strings.length; i++) {
    for (let j = 0; j < strings[i].length; j++) {
      const str = strings[i][j];
      if (str === " ") {
        answer[i][3] += 1;
      }
      if (str.charCodeAt() >= 65 && str.charCodeAt() <= 90) {
        answer[i][1] += 1;
      }
      if (str.charCodeAt() >= 97 && str.charCodeAt() <= 122) {
        answer[i][0] += 1;
      }
      if (str.charCodeAt() >= 48 && str.charCodeAt() <= 57) {
        answer[i][2] += 1;
      }
    }
  }

  // A ~ Z => 65 ~ 90
  // a ~ z => 97 ~ 122
  // 1 ~ 9 => 49 ~ 57
  const result = answer.map((n) => n.join(" "));
  return result.join("\n");
}

console.log(solution(input.slice(0, input.length - 1)));
