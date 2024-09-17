// https://www.acmicpc.net/problem/2002
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input, output) {
  let count = 0;

  for (let i = 0; i < output.length; i++) {
    const outIndex = input.indexOf(output[i]);
    // console.log(outIndex, i)
    if (outIndex !== i) {
      const tmp = input.splice(outIndex, 1);
      input.splice(i, 0, tmp.pop());
      count += 1;
    }
  }

  return count;
}

console.log(solution(input.slice(1, +input[0] + 1), input.slice(+input[0] + 1)));
