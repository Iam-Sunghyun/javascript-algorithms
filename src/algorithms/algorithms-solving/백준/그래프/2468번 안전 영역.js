// 백준 그래프 탐색 실버1 https://www.acmicpc.net/problem/2468
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(' ').map(Number));

function solution(input) {

  const N = input.shift()[0];
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  // 최대, 최저 높이 구하기
  let [max, min] = [-Infinity, +Infinity];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      max = Math.max(input[i][j], max);
      min = Math.min(input[i][j], min);
    }
  }

  // DFS
  function DFS(x, y, num, check) {
    check[x][y] = true;

    for (let i = 0; i < 4; i++) {
      if (input[x + dx[i]]?.[y + dy[i]] > num && check[x + dx[i]][y + dy[i]] === false) {
        DFS(x + dx[i], y + dy[i], num, check);
      }
    }
  }

  // 최저 높이 부터 최대 높이 미만까지 값을 수위로 설정하여 DFS로 지도 전체를 확인
  const answerList = [];
  for (let i = min; i < max; i++) {
    const check = Array.from({ length: N }, () => new Array(N).fill(false));
    let answer = 0;
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < N; k++) {
        if (input[j][k] > i && check[j][k] === false) {
          DFS(j, k, i, check);
          answer += 1;
        }
      }
    }
    // 수위가 i일 떄 안전지대 개수 answerList에 삽입 
    answerList.push(answer);
  }

  // 수위에 따른 안전지대 개수 리스트 중 최대 값 확인
  let answer = 1;
  for (let i = 0; i < answerList.length; i++) {
    answer = Math.max(answerList[i], answer);
  }
  return answer;
}

console.log(solution(input));