// https://www.acmicpc.net/problem/3085
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(list) {
  const check = Array.from({ length: +list[0] }, () => new Array(+list[0]).fill(false));
  const candies = list.slice(1).map((n) => n.split(""));
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  let answer = -Infinity;
  // 사탕 리스트 체크 
  for (let i = 0; i < list[0]; i++) {
    for (let j = 0; j < list[0]; j++) {
      check[i][j] = true;

      for (let k = 0; k < 4; k++) {
        if (candies[i + dx[k]]?.[j + dy[k]] && check[i + dx[k]][j + dy[k]] === false) {
          [candies[i + dx[k]][j + dy[k]], candies[i][j]] = [candies[i][j], candies[i + dx[k]][j + dy[k]]];
          answer = Math.max(answer, countMaxLine(candies));
          [candies[i + dx[k]][j + dy[k]], candies[i][j]] = [candies[i][j], candies[i + dx[k]][j + dy[k]]];
        }
      }
    }
  }
  return answer;
}

// 가로, 세로 같은 사탕 최대 길이 확인
function countMaxLine(arr) {
  let max = -Infinity;

  // 가로 축 확인
  for (let i = 0; i < arr.length; i++) {
    let count = 1;
    for (let j = 0; j < arr[i].length - 1; j++) {
      if (arr[i][j] === arr[i][j + 1]) {
        count += 1;
        max = Math.max(max, count);
      } else {
        count = 1;
      }
    }
  }

  // 세로 축 확인
  for (let i = 0; i < arr.length; i++) {
    let count = 1;
    for (let j = 0; j < arr[i].length - 1; j++) {
      if (arr[j][i] === arr[j + 1][i]) {
        count += 1;
        max = Math.max(max, count);
      } else {
        count = 1;
      }
    }
  }
  return max;
}

console.log(solution(input));
