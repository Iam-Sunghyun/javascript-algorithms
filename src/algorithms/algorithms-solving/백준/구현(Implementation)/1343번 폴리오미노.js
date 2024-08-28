// https://www.acmicpc.net/problem/1343
const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(string) {
  const Xs = string.match(/X+/g);

  for (let i = 0; i < Xs?.length; i++) {
    if (Xs[i].length % 2 !== 0) return -1;
  }

  let answer = string.replace(/XXXX/g, "AAAA").replace(/XX/g, "BB");

  return answer;
}

console.log(solution(input));
