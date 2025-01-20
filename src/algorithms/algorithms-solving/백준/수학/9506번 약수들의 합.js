// https://www.acmicpc.net/problem/9506
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

function solution(numbers) {
  const answer = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    let oper = `${numbers[i]} = 1 `;
    let sum = 1;
    for (let j = 2; j < numbers[i]; j++) {
      if (numbers[i] % j === 0) {
        sum += j;
        oper += `+ ${j} `;
      }
    }
    if (sum === numbers[i]) {
      answer.push(oper);
    } else {
      answer.push(`${numbers[i]} is NOT perfect.`);
    }
  }

  return answer.join("\n");
}

console.log(solution(input));
