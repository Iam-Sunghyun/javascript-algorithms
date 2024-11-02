// https://www.acmicpc.net/problem/5430
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(opers, numbers) {
  let [start, end] = [0, numbers.length - 1];
  let target = false;

  for (const oper of opers) {
    if (oper === "R") {
      target = !target;
    }
    if (oper === "D") {
      if (target === true) {
        end -= 1;
      } else if (target === false) {
        start += 1;
      }
      if (end + 1 - start < 0) return "error";
    }
  }
  let answer = [];
  if (target === true) {
    answer = numbers.slice(start, end + 1);
    answer.reverse();
  } else {
    answer = numbers.slice(start, end + 1);
  }

  return `[${answer.join(",")}]`;
}

const answer = [];
for (let i = 1; i < input.length - 2; i += 3) {
  answer.push(
    solution(
      input[i],
      input[i + 2].length > 2 ? input[i + 2].slice(1, input[i + 2].length - 1).split(/\,/) : []
    )
  );
}
console.log(answer.join("\n"));
