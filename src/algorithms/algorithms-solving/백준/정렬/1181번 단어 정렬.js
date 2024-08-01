// https://www.acmicpc.net/problem/1181
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(strs) {
  strs.sort();
  strs.sort((a, b) => {
    if (a.length === b.length) {
      return a - b;
    }
    return a.length - b.length;
  });

  const answer = Array.from(new Set(strs));

  return answer.join("\n");
}

console.log(solution(input.slice(1)));
