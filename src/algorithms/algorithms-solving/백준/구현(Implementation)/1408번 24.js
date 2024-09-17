// https://www.acmicpc.net/problem/1408
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(start, limit) {
  const starts = start.split(":");
  const limits = limit.split(":");

  const startsSec = +(starts[0] * 60 * 60) + +(starts[1] * 60) + +starts[2];
  const limitsSec = +(limits[0] * 60 * 60) + +(limits[1] * 60) + +limits[2];

  let result = limitsSec - startsSec;
  if (startsSec > limitsSec) {
    result = 86400 + result;
  }
  const answer = [];
  answer.push(String(Math.floor(result / 3600)));
  result %= 3600;
  answer.push(String(Math.floor(result / 60)));
  result %= 60;
  answer.push(String(Math.floor(result % 60)));

  for (let i = 0; i < answer.length; i++) {
    if (answer[i].length === 1) {
      answer[i] = "0" + answer[i];
    }
  }

  return answer.join(":");
}

console.log(solution(input[0], input[1]));
