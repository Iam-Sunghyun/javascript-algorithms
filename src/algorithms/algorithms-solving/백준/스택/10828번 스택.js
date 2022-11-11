// 백준 10828번 스택 https://www.acmicpc.net/problem/10828
// console.log()는 시간이 많이 걸리므로 사용 최소화 할 것
const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").slice(1);
const stack = [];
const answer = [];
for (let i = 0; i < arr.length; i++) {
  const command = arr[i].split(" ");
  switch (command[0]) {
    case "push":
      stack.push(command[1]);
      break;
    case "top":
      if (stack.length > 0) answer.push(stack[stack.length - 1]);
      else answer.push(-1);
      break;
    case "empty":
      if (stack.length === 0) answer.push(1);
      else answer.push(0);
      break;
    case "size":
      answer.push(stack.length);
      break;
    case "pop":
      if (stack.length > 0) answer.push(stack.pop());
      else answer.push(-1);
      break;
  }
}

console.log(answer.join("\n"));
