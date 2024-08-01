// https://www.acmicpc.net/problem/5635
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" "));

function solution(students) {
  students.sort((a, b) => {
    if (+a[3] === +b[3] && +a[2] === +b[2]) {
      return +b[1] - +a[1];
    } else if (+a[3] === +b[3]) {
      return +b[2] - +a[2];
    } else {
      return +b[3] - +a[3];
    }
  });

  return [students[0][0], students.at(-1)[0]].join("\n");
}
console.log(solution(input.slice(1)));
