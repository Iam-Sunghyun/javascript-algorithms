// https://www.acmicpc.net/problem/17618
const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(number) {
  let answer = 0;

  for (let i = 1; i <= +number; i++) {
    const str = String(i);
    let sum = 0;
    for (let j = 0; j < str.length; j++) {
      sum += +str[j];
    }
    if (i % sum === 0) answer += 1;
  }

  return answer;
}

console.log(solution(input));
