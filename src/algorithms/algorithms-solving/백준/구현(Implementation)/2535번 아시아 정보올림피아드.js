// https://www.acmicpc.net/problem/2535
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

function solution(list) {
  list.sort((a, b) => b[2] - a[2]);
  const medalCount = [null];
  const answer = [];
  for (const [n, rank, score] of list) {
    if (medalCount[n] === undefined) {
      medalCount[n] = 0;
    }
    if (medalCount[n] < 2) {
      medalCount[n] += 1;
      answer.push([n, rank, score]);
    }
    if (answer.length === 3) break;
  }

  return answer.map((n) => `${n[0]} ${n[1]}`).join("\n");
}

console.log(solution(input.slice(1)));
