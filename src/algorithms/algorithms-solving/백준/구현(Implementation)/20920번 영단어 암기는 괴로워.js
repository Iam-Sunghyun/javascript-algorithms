// https://www.acmicpc.net/problem/20920
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(M, words) {
  const result = words.filter((n) => n.length >= M);
  result.sort();
  result.sort((a, b) => b.length - a.length);

  const count = new Map();
  for (const word of result) {
    count.set(word, count.get(word) ? count.get(word) + 1 : 1);
  }

  const arr = Array.from(count);
  arr.sort((a, b) => b[1] - a[1]);
  const answer = [];

  for (const [word, _] of arr) {
    answer.push(word);
  }

  return answer.join("\n");
}

console.log(solution(+input[0].split(" ")[1], input.slice(1)));
