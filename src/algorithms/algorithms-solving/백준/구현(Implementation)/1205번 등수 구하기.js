// https://www.acmicpc.net/problem/1205
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

function solution(newScore, P, scoreList) {
  // 랭킹 비어있다면 1등
  if (scoreList === undefined) return 1;

  // 1등보다 높은 점수인 경우 1등
  if (scoreList[0] < newScore) {
    return 1;
  }
  // 랭킹이 꽉 차있을 때 꼴지보다 낮거나 같은 점수면 return -1
  if (scoreList.at(-1) >= newScore && scoreList.length === P) {
    return -1;
  }
  // 랭킹이 꽉 차있지 않고 꼴지인 경우 scoreList 길이 +1이 등수
  if (scoreList.at(-1) > newScore && scoreList.length < P) {
    return scoreList.length + 1;
  }

  const length = scoreList.length;
  // 그외 경우 등수 계산
  for (let i = 0; i < length - 1; i++) {
    if (scoreList[i] > newScore && scoreList[i + 1] <= newScore) {
      scoreList.splice(i + 1, 0, newScore);
      if (scoreList.length > P) {
        scoreList.pop();
      }
      break;
    }
  }
  return scoreList.indexOf(newScore) + 1;
}

console.log(solution(input[0][1], input[0][2], input[1]));
