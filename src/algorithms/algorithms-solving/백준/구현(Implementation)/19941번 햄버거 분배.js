// https://www.acmicpc.net/problem/19941
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(K, burgers) {
  let answer = 0;
  for (let i = 0; i < burgers.length; i++) {
    if (burgers[i] === "P") {
      for (let j = i - K < 0 ? 0 : i - K; j <= i + K; j++) {
        if (burgers[j] === "H") {
          answer += 1;
          burgers[j] = null;

          break;
        } else {
          continue;
        }
      }
    }
  }

  return answer;
}

console.log(solution(+input[0].split(" ")[1], input[1].split("")));
