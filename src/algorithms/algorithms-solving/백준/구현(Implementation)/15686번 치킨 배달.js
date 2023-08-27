// 백준 구현 골드5 https://www.acmicpc.net/problem/15686
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number));

function solution(N, M, cityMap) {

  const chickens = [];
  const houses = [];
  // 치킨집, 일반집 좌표 구하기
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (cityMap[i][j] === 1) {
        houses.push([i, j]);
      } else if (cityMap[i][j] === 2) {
        chickens.push([i, j]);
      }
    }
  }

  // 조합 함수
  // x, y : 치킨집 좌표
  // index : 몇 번째 치킨집 인지 표시용
  // cases : 치킨집 조합 저장용
  function combination(index, cases) {
    // 치킨집 조합의 가짓수가 M개가 됐다면
    if (cases.length === M) {
      let sum = 0;
      // 모든 일반집을 순회하면서 조합 배열(cases)에 포함된 치킨집에 대한 치킨 거리 계산
      for (const [houseX, houseY] of houses) {
        let minValue = +Infinity;
        for (const [chickenX, chickenY] of cases) {
          const chickenDistance = Math.abs(houseX - chickenX) + Math.abs(houseY - chickenY);
          minValue = Math.min(chickenDistance, minValue);
        }
        // 각 집의 치킨거리 합산
        sum += minValue;
      }
      // 최소 값인 경우 정답으로 갱신
      answer.push(sum);
      return;
    }

    // 만약 현재 치킨집 조합에 남은 치킨집을 다 조합해도 M개에 미치지 못한다면 조합 취소
    if (M - cases.length > (chickens.length - 1) - index) {
      return;
    }

    // 앞서 뽑은 치킨집들 제외하고 남은 치킨집에 대하여 이어서 조합
    for (let i = index + 1; i < chickens.length; i++) {
      cases.push([chickens[i][0], chickens[i][1]]);
      combination(index + 1, cases);
      cases.pop();
    }
  }

  // 0 ~ chickens.length - M까지 combination 호출
  let answer = [];
  for (let i = 0; i <= chickens.length - M; i++) {
    combination(i, [[chickens[i][0], chickens[i][1]]]);
  }

  let result = +Infinity;
  for (let i = 0; i < answer.length; i++) {
    result = Math.min(answer[i], result);
  }
  return result;
}

console.log(solution(...input.shift(), input));