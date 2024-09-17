// https://www.acmicpc.net/problem/2564
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

function solution(column, row, positions, X) {
  // 1 4
  // 3 2
  // 2 8
  // 2 3
  // 1북 2남 3서 4동
  const [Xdir, Xdis] = X;
  let answer = 0;

  for (const [targetDir, targetDis] of positions) {
    let min = 0;
    // 블록 방면 같으면 거리 차가 곧 최단 거리
    if (targetDir === Xdir) {
      answer += Math.abs(targetDis - Xdis);
      continue;
    }
    // 동근이 북쪽(1)일 때
    if (Xdir === 1 && targetDir === 2) {
      min = Math.min(Xdis + row + targetDis, column - Xdis + row + column - targetDis);
    } else if (Xdir === 1 && targetDir === 3) {
      answer += Xdis + targetDis;
    } else if (Xdir === 1 && targetDir === 4) {
      answer += column - Xdis + (row - targetDis);
    }
    // 동근이 남쪽(2)일 때 [3, 2]
    if (Xdir === 2 && targetDir === 1) {
      min = Math.min(Xdis + row + targetDis, column - Xdis + row + column - targetDis);
    } else if (Xdir === 2 && targetDir === 3) {
      answer += Xdis + (row - targetDis);
    } else if (Xdir === 2 && targetDir === 4) {
      answer += column - Xdis + (row - targetDis);
    }
    // 동근이 서쪽(3)일 때
    if (Xdir === 3 && targetDir === 1) {
      answer += Xdis + tartgetDis;
    } else if (Xdir === 3 && targetDir === 2) {
      answer += row - Xdis + targetDis;
    } else if (Xdir === 3 && targetDir === 4) {
      min = Math.min(Xdis + column + targetDis, row - Xdis + column + row - targetDis);
    }
    // 동근이 동쪽(4)일 때
    if (Xdir === 4 && targetDir === 1) {
      answer += Xdis + (column - targetDis);
    } else if (Xdir === 4 && targetDir === 2) {
      answer += row - Xdis + (column - targetDis);
    } else if (Xdir === 4 && targetDir === 3) {
      min = Math.min(Xdis + column + targetDis, row - Xdis + column + row - targetDis);
    }
    answer += min;
  }

  return answer;
}

console.log(solution(input[0][0], input[0][1], input.slice(2, input.length - 1), input.at(-1)));
