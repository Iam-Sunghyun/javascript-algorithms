// https://www.acmicpc.net/problem/1380
const input = require("fs").readFileSync(0, "utf-8").toString().trim().split("\n");

function solution(n, list) {
  const name = list.slice(0, n);
  const scenario = list.slice(n).map((n) => n.split(" "));

  const result = new Set();
  for (let i = 0; i < scenario.length; i++) {
    if (result.has(scenario[i][0])) {
      result.delete(scenario[i][0]);
    } else {
      result.add(scenario[i][0]);
    }
  }

  return name[[...result][0] - 1];
}

const answer = [];
let index = 1;
for (let i = 0; i < input.length; i++) {
  if (Number.isInteger(+input[i]) && input[i] !== "0") {
    answer.push(
      `${index++} ${solution(+input[i], input.slice(i + 1, i + +input[i] + +input[i] * 2))}`
    );
  }
}

console.log(answer.join("\n"));
