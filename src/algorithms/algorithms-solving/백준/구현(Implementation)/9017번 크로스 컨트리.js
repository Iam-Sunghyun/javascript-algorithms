// https://www.acmicpc.net/problem/9017
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(teams) {
  let max = -Infinity;
  teams.forEach((n) => (max = Math.max(n, max)));

  const playersCount = new Array(max).fill(0);

  // 들어온 선수가 몇명인지 체크
  for (let i = 0; i < teams.length; i++) {
    playersCount[teams[i] - 1] += 1;
  }

  // 들어온 선수가 6명이 안되는 팀 확인 후 제거
  const check = new Set();
  for (let i = 0; i < playersCount.length; i++) {
    if (playersCount[i] < 6) {
      check.add(i + 1);
    }
  }
  for (let i = 0; i < teams.length; i++) {
    if (check.has(teams[i])) {
      teams.splice(i, 1, null);
    }
  }

  // 점수 및 5번째 선수 등수 계산
  const score = Array.from({ length: max }, () => [0, 0, 0, 0]);
  let j = 0;
  for (let i = 0; i < teams.length; i++) {
    if (teams[i] === null) {
      continue;
    }
    if (score[teams[i] - 1][1] < 4) {
      score[teams[i] - 1][0] += j + 1;
    }
    score[teams[i] - 1][1] += 1;
    score[teams[i] - 1][3] = teams[i];
    if (score[teams[i] - 1][1] === 5) {
      score[teams[i] - 1][2] = i + 1;
    }
    j++;
  }

  // 점수 같은 팀 확인
  let minScore = +Infinity;
  for (let i = 0; i < score.length; i++) {
    minScore = Math.min(minScore, score[i][0] === 0 ? +Infinity : score[i][0]);
  }
  const sameTeam = score.filter((n) => n[0] === minScore);

  // 5번째 선수 등수 기준으로 오름차순 정렬렬
  sameTeam.sort((a, b) => a[2] - b[2]);

  return sameTeam[0][3];
}

for (let i = 2; i < input.length; i += 2) {
  console.log(solution(input[i].split(" ").map(Number)));
}
