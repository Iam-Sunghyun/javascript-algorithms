// 백준 4949번 스택 https://www.acmicpc.net/problem/4949
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/Administrator/Desktop/javascript-algorithms/javascript-algorithms/input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");
const arr = input.slice(0, input.length - 1);

function solution(str) {
  const answer = [];

  for (let i of str) {
    const stack = [];
    i = i.match(/[\[\(\[\{\}\]\)\]]/g);

    // 괄호가 없는 경우 yes
    if (!i) {
      answer.push("yes");
      continue;
    }

    // 괄호가 홀수 개인 경우 no
    if (i.length % 2 === 1) {
      answer.push("no");
      continue;
    }

    for (let j of i) {
      if (j === '(' || j === '[') {
        stack.push(j);
        continue;
      }
      if (stack.length !== 0) {
        let tmp = stack.pop();
        if (j === ')' && tmp === '(') continue;
        if (j === ']' && tmp === '[') continue;
      }
      stack.push(j);
      break;
    }
    answer.push(stack.length !== 0 ? "no" : "yes");
  }
  return answer.join("\n");
}

console.log(solution(arr));
