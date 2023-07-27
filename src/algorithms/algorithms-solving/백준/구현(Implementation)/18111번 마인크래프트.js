// 백준 실버2 구현 https://www.acmicpc.net/problem/18111
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(' ').map(Number));

function solution(maps, spare) {

  // 최저, 최고 높이 계산
  let [lowest, highest] = [+Infinity, -Infinity];
  for (const row of maps) {
    for (const column of row) {
      lowest = Math.min(column, lowest);
      highest = Math.max(column, highest);
    }
  }

  // 최저~최고 높이 사이의 모든 높이에 대하여 필요 블록 이동 수 확인하고
  // 여분의 블록까지 사용하여 만들 수 있는 높이라면 answer에 추가
  // 또한 최소 작업 시간도 함께 계산
  const results = [];
  let minCostHeight = +Infinity;
  for (let height = lowest; height <= highest; height++) {
    const changes = { height, add: 0, remove: 0, result: 0 };

    // 지도의 모든 블록을 순회
    for (const row of maps) {
      for (const column of row) {
        if (height === column) {
          continue;
        }
        // 목표 높이와 특정 땅의 높이 차가 음수라면 제거해야 되는 블록 수 계산(목표 높이 까지)
        if (height - column < 0) {
          changes['remove'] += -(height - column);
          // 목표 높이와 특정 땅의 높이 차가 양수라면 추가해야 되는 블록 수 계산(목표 높이 까지)
        } else if (height - column > 0) {
          changes['add'] += (height - column);
        }
      }
    }
    // 주어진 블록을 사용해서 목표 높이로 평탄화 할 수 있다면 answer에 추가
    if (changes['add'] - (spare + changes['remove']) <= 0) {
      changes['result'] = (changes['remove'] * 2) + changes['add']; // 작업 필요 시간도 계산(제거는 2초 소요이므로 * 2)
      minCostHeight = Math.min(changes['result'], minCostHeight); // 최소 작업 시간인지 기록
      results.push(changes);
    }
  }

  // 작업 시간이 최소인 높이 계산
  const answer = [];
  for (const result of results) {
    if (result.result === minCostHeight) {
      answer.push([result.result, result.height]);
    }
  }

  // 답이 여러 개인 경우 내림차순 정렬로 가장 큰 값을 맨 앞으로 이동
  if (answer.length > 1) {
    answer.sort((a, b) => b[1] - a[1]);
  }

  return answer[0].join(' ');
}

console.log(solution(input.slice(1), input[0][2]));