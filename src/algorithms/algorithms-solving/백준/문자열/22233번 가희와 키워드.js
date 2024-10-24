// https://www.acmicpc.net/problem/22233
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(keyWords, list) {
  const wordSet = new Set(keyWords);
  const answer = [];
  for (let i = 0; i < list.length; i++) {
    const tmp = list[i].split(",");
    for (let j = 0; j < tmp.length; j++) {
      wordSet.has(tmp[j]) ? wordSet.delete(tmp[j]) : "";
    }
    answer.push(wordSet.size);
  }

  return answer.join("\n");
}

const N = +input[0].split(" ")[0];

console.log(solution(input.slice(1, N + 1), input.slice(N + 1)));
