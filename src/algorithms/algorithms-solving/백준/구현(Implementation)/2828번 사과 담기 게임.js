// https://www.acmicpc.net/problem/2828
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(N, M, list) {
  let start = 1;
  let end = start + M - 1;
  let count = 0;
  let answer = 0;
  for (let i = 0; i < list.length; i++) {
    while (true) {
      if (list[i] >= start && list[i] <= end) {
        answer += count;
        count = 0;
        break;
      } else if (list[i] > end) {
        start += 1;
        end += 1;
        count += 1;
        continue;
      } else if (list[i] < start) {
        start -= 1;
        end -= 1;
        count += 1;
        continue;
      }
    }
  }

  return answer;
}

console.log(solution(+input[0].split(" ")[0], +input[0].split(" ")[1], input.slice(2).map(Number)));
