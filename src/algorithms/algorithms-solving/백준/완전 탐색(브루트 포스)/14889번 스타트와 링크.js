// 백준 브루트 포스(백트래킹, 조합) 실버1 https://www.acmicpc.net/problem/14889
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(' ').map(Number));

function solution(n, ability) {
  const visited = new Array(n).fill(false); // 팀원 선택 여부를 나타내는 배열
  let minDifference = Number.MAX_VALUE; // 최소 능력치 차이를 저장할 변수

  // 팀원을 선택하고 능력치 차이를 계산하는 함수
  function dfs(idx, count) {
    if (count === n / 2) { // n명 중 n/2명을 선택했을 때
      const startTeam = []; // 스타트 팀
      const linkTeam = []; // 링크 팀

      // 선택된 팀원과 선택되지 않은 팀원을 나누어 저장
      for (let i = 0; i < n; i++) {
        if (visited[i]) {
          startTeam.push(i);
        } else {
          linkTeam.push(i);
        }
      }

      // 각 팀의 능력치를 계산
      const startTeamAbility = calculateAbility(startTeam);
      const linkTeamAbility = calculateAbility(linkTeam);

      // 능력치 차이를 계산하고 최솟값 갱신
      const difference = Math.abs(startTeamAbility - linkTeamAbility);
      minDifference = Math.min(minDifference, difference);
      return;
    }

    // 조합을 만들기 위한 재귀 호출
    for (let i = idx; i < n; i++) {
      if (!visited[i]) {
        visited[i] = true;
        dfs(i + 1, count + 1);
        visited[i] = false;
      }
    }
  }

  // 두 팀의 능력치를 계산하는 함수
  function calculateAbility(team) {
    let abilitySum = 0;
    for (const i of team) {
      for (const j of team) {
        abilitySum += ability[i][j];
      }
    }
    return abilitySum;
  }

  // 첫 번째 팀원을 선택하여 시작
  dfs(0, 0);

  return minDifference;
}

// 입력 예시
const n = 6;
const ability = [
  [0, 1, 2, 3, 4, 5],
  [1, 0, 2, 3, 4, 5],
  [1, 2, 0, 3, 4, 5],
  [1, 2, 3, 0, 4, 5],
  [1, 2, 3, 4, 0, 5],
  [1, 2, 3, 4, 5, 0],
];

console.log(solution(n, ability)); // 최소 능력치 차이 출력