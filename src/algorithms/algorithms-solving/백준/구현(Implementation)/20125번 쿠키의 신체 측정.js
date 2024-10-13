// https://www.acmicpc.net/problem/20125
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(cookie) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  // 심장 위치 체크
  const heart = [0, 0];
  for (let i = 0; i < cookie.length; i++) {
    for (let j = 0; j < cookie[i].length; j++) {
      if (cookie[i][j] === "*") {
        let check = true;
        for (let k = 0; k < 4; k++) {
          if (cookie[i + dx[k]]?.[j + dy[k]] !== "*") {
            check = false;
          }
        }
        if (check === true) {
          heart[0] = i + 1;
          heart[1] = j + 1;
        }
      }
    }
  }
  // 왼쪽 팔, 오른쪽 팔, 허리, 왼쪽 다리, 오른쪽 다리
  const answer = [0, 0, 0, 0, 0];
  for (let i = heart[1] - 2; i >= 0; i--) {
    if (cookie[heart[0] - 1][i] === "*") {
      answer[0] += 1;
    } else {
      break;
    }
  }

  for (let i = heart[1]; i < cookie[0].length; i++) {
    if (cookie[heart[0] - 1][i] === "*") {
      answer[1] += 1;
    } else {
      break;
    }
  }

  for (let i = heart[0]; i < cookie.length; i++) {
    if (cookie[i][heart[1] - 1] === "*") {
      answer[2] += 1;
    } else {
      break;
    }
  }

  for (let i = heart[0] + answer[2]; i < cookie.length; i++) {
    if (cookie[i][heart[1] - 2] === "*") {
      answer[3] += 1;
    } else {
      break;
    }
  }

  for (let i = heart[0] + answer[2]; i < cookie.length; i++) {
    if (cookie[i][heart[1]] === "*") {
      answer[4] += 1;
    } else {
      break;
    }
  }

  return [heart.join(" "), answer.join(" ")].join("\n");
}

console.log(solution(input.slice(1)));
