// https://www.acmicpc.net/problem/2745
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

function solution(string, B) {
  const alphabet = {};
  for (let i = 10; i < 36; i++) {
    alphabet[String.fromCodePoint(i + 55)] = i;
  }

  let answer = 0;
  for (let i = string.length - 1; i >= 0; i--) {
    if (isNaN(string[i])) {
      answer += alphabet[string[i]] * B ** (string.length - 1 - i);
    } else {
      answer += string[i] * B ** (string.length - 1 - i);
    }
  }

  return answer;
}

console.log(solution(input[0], +input[1]));
