// 백준 브루트 포스(백트래킹, 조합) 실버1 https://www.acmicpc.net/problem/14889
const input = require("fs")
  .readFileSync(0, "utf-8")
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

function solution(numbers) {
  const check = new Array(numbers.length + 1).fill(false);
  const sets = new Set();
  let min = +Infinity;

  // 능력치 합 계산
  const sum = Array.from({ length: numbers.length }, () => Array(numbers.length).fill(0));
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      sum[i][j] = numbers[i][j] + numbers[j][i];
    }
  }

  // 두 팀간의 능력치 차이 구하는 함수
  function difference(arr1, arr2) {
    let [tmp1, tmp2] = [0, 0];
    for (let i = 0; i < arr1.length; i++) {
      for (let j = i + 1; j < arr1.length; j++) {
        tmp1 += sum[arr1[i] - 1][arr1[j] - 1];
        tmp2 += sum[arr2[i] - 1][arr2[j] - 1];
      }
    }

    return Math.abs(tmp1 - tmp2);
  }

  // 두 팀을 구성하는 DFS 함수
  function DFS(list, start) {
    // 팀원 수가 충족됐고, 이미 나왔던 팀 조합이 아니라면
    if (list.length === numbers.length / 2) {
      const tmp = [];
      for (let i = 1; i <= check.length - 1; i++) {
        if (check[i] === false) {
          tmp.push(i);
        }
      }
      min = Math.min(min, difference(list, tmp));
      return;
    }

    for (let i = start; i <= numbers.length; i++) {
      if (check[i] === false) {
        list.push(i);
        check[i] = true;
        DFS(list, i + 1);
        check[i] = false;
        list.pop();
      }
    }
  }

  for (let i = 1; i <= numbers.length / 2; i++) {
    check[i] = true;
    DFS([i], i);
    check[i] = false;
  }

  return min;
}

console.log(solution(input.slice(1)));

// function solution(n, ability) {
//   const visited = new Array(n).fill(false); // 팀원 선택 여부를 나타내는 배열
//   let minDifference = Number.MAX_VALUE; // 최소 능력치 차이를 저장할 변수

//   // 팀원을 선택하고 능력치 차이를 계산하는 함수
//   function dfs(idx, count) {
//     if (count === n / 2) { // n명 중 n/2명을 선택했을 때
//       const startTeam = []; // 스타트 팀
//       const linkTeam = []; // 링크 팀

//       // 선택된 팀원과 선택되지 않은 팀원을 나누어 저장
//       for (let i = 0; i < n; i++) {
//         if (visited[i]) {
//           startTeam.push(i);
//         } else {
//           linkTeam.push(i);
//         }
//       }

//       // 각 팀의 능력치를 계산
//       const startTeamAbility = calculateAbility(startTeam);
//       const linkTeamAbility = calculateAbility(linkTeam);

//       // 능력치 차이를 계산하고 최솟값 갱신
//       const difference = Math.abs(startTeamAbility - linkTeamAbility);
//       minDifference = Math.min(minDifference, difference);
//       return;
//     }

//     // 조합을 만들기 위한 재귀 호출
//     for (let i = idx; i < n; i++) {
//       if (!visited[i]) {
//         visited[i] = true;
//         dfs(i + 1, count + 1);
//         visited[i] = false;
//       }
//     }
//   }

//   // 두 팀의 능력치를 계산하는 함수
//   function calculateAbility(team) {
//     let abilitySum = 0;
//     for (const i of team) {
//       for (const j of team) {
//         abilitySum += ability[i][j];
//       }
//     }
//     return abilitySum;
//   }

//   // 첫 번째 팀원을 선택하여 시작
//   dfs(0, 0);

//   return minDifference;
// }

// // 입력 예시
// const n = 6;
// const ability = [
//   [0, 1, 2, 3, 4, 5],
//   [1, 0, 2, 3, 4, 5],
//   [1, 2, 0, 3, 4, 5],
//   [1, 2, 3, 0, 4, 5],
//   [1, 2, 3, 4, 0, 5],
//   [1, 2, 3, 4, 5, 0],
// ];

// console.log(solution(n, ability)); // 최소 능력치 차이 출력
