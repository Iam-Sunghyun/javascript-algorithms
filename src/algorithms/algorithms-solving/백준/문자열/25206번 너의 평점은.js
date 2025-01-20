// https://www.acmicpc.net/problem/25206
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(list) {
  const map = new Map([
    ["A+", 4.5],
    ["A0", 4.0],
    ["B+", 3.5],
    ["B0", 3.0],
    ["C+", 2.5],
    ["C0", 2.0],
    ["D+", 1.5],
    ["D0", 1.0],
    ["F", 0],
  ]);
  let totalSum = 0;
  let subjectSum = 0;
  for (const scores of list) {
    const [_, score, str] = scores.split(" ");
    if (str === "P") continue;
    subjectSum += +score;
    totalSum = totalSum + map.get(str) * score;
  }
  return (totalSum / subjectSum).toFixed(6);
}

console.log(solution(input));
