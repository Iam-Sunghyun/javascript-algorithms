// 백준 구현 골드3 https://www.acmicpc.net/problem/14890
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(' ').map(Number));

function solution(map, N, L) {

  const slopeCheckColumn = Array.from({ length: N }, () => new Array(N).fill(false));
  let count = 0;

  // 세로 길 확인
  for (let i = 0; i < N; i++) {    // 열
    let isPath = true;

    for (let j = 1; j < N; j++) {  // 행
      const slope = map[j - 1][i] - map[j][i];

      // 높이 차가 1보다 큰 경우 길이될 수 없으므로 break
      if (Math.abs(slope) > 1) {
        isPath = false;
        break;
      }
      // 높이 차가 1인 내리막인 경우 경사로 놓을 수 있는 지 확인
      if (slope === 1) {
        const low = map[j][i];
        for (let k = j; k < j + L; k++) {
          if (map[k]?.[i] !== low) {
            isPath = false;
            break;
          }
          slopeCheckColumn[k][i] = true;
        }
        // 높이 차가 1인 오르막인 경우 확인
      } else if (slope === -1) {
        const low = map[j - 1][i];
        for (let k = j - 1; k > j - L - 1; k--) {
          if (map[k]?.[i] !== low || slopeCheckColumn[k][i] === true) {
            isPath = false;
            break;
          }
          slopeCheckColumn[k][i] = true;
        }
      }
      if (!isPath) {
        break;
      }
    }
    if (isPath) {
      count += 1;
    }
  }

  const slopeCheckRow = Array.from({ length: N }, () => new Array(N).fill(false));
  // 가로 확인
  for (let i = 0; i < N; i++) {    // 행
    let isPath = true;

    for (let j = 1; j < N; j++) {  // 열
      const slope = map[i][j - 1] - map[i][j];

      // 높이 차가 1보다 큰 경우 길이될 수 없으므로 break
      if (Math.abs(slope) > 1) {
        isPath = false;
        break;
      }
      // 높이 차가 1인 내리막인 경우 경사로 놓을 수 있는 지 확인
      if (slope === 1) {
        const low = map[i][j];
        for (let k = j; k < j + L; k++) {
          if (map[i][k] !== low) {
            isPath = false;
            break;
          }
          slopeCheckRow[i][k] = true;
        }
        // 높이 차가 1인 오르막인 경우 확인
      } else if (slope === -1) {
        const low = map[i][j - 1];
        for (let k = j - 1; k > j - L - 1; k--) {
          if (map[i][k] !== low || slopeCheckRow[i][k] === true) {
            isPath = false;
            break;
          }
          slopeCheckRow[i][k] = true;
        }
      }
      if (!isPath) {
        break;
      }
    }
    if (isPath) {
      count += 1;
    }
  }

  return count;
}

console.log(solution(input.slice(1), input[0][0], input[0][1])); 