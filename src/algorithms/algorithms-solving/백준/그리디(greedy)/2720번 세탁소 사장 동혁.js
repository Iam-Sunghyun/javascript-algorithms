// https://www.acmicpc.net/problem/2720
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

function solution(numbers) {
  const answer = Array.from({ length: numbers.length }, () => new Array(4).fill(0));

  for (let i = 0; i < numbers.length; i++) {
    let change = numbers[i];
    while (change !== 0) {
      if (change >= 25) {
        answer[i][0] = Math.floor(change / 25);
        change %= 25;
      } else if (change >= 10) {
        answer[i][1] = Math.floor(change / 10);
        change %= 10;
      } else if (change >= 5) {
        answer[i][2] = Math.floor(change / 5);
        change %= 5;
      } else if (change >= 1) {
        answer[i][3] = Math.floor(change / 1);
        change %= 1;
      }
    }
  }
  const realAnswer = [];
  for (let i = 0; i < answer.length; i++) {
    realAnswer.push(answer[i].join(" "));
  }
  return realAnswer.join("\n");
}

console.log(solution(input.slice(1)));
