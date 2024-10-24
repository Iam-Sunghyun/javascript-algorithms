// https://www.acmicpc.net/problem/1874
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

function solution(numbers) {
  const array = Array.from({ length: numbers.length }, (_, i) => numbers.length - i);
  const stack = [array.pop()];
  const answer = ["+"];
  const result = [];
  let index = 0;

  while (result.length !== numbers.length) {
    // console.log(stack, result, array)
    if (stack.at(-1) === numbers[index]) {
      result.push(stack.pop());
      answer.push("-");
      index += 1;
    } else if (stack.at(-1) === undefined && stack.length !== 0) {
      return "NO";
    } else {
      stack.push(array.pop());
      answer.push("+");
    }
  }

  return answer.join("\n");
}

console.log(solution(input.slice(1)));
