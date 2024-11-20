// https://www.acmicpc.net/problem/1946
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

function solution(members) {
  members.sort((a, b) => a[0] - b[0]);

  let count = members.length;
  let tmp = members[0][1];
  for (let i = 1; i < members.length; i++) {
    if (tmp < members[i][1]) {
      count -= 1;
    }
    tmp = Math.min(tmp, members[i][1]);
  }

  return count;
}

const answer = [];

for (let i = 1; i < input.length; i++) {
  if (input[i].length === 1) {
    answer.push(solution(input.slice(i + 1, i + input[i][0] + 1)));
    i += input[i][0];
  }
}

console.log(answer.join("\n"));
