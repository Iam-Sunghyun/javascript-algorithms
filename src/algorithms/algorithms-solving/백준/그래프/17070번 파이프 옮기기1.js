// 백준 그래프 탐색 골드5 https://www.acmicpc.net/problem/17070
// 객체를 직접 참조하는 것보다 객체 프로퍼티를 변수에 할당하는 것이 좀 더 빠르다
// 반례 모음 https://www.acmicpc.net/board/view/60132
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(' ').map(Number));

// 시간 초과난 BFS 풀이
function solution(house, goal) {

  const queue = [{ back: [0, 0], front: [0, 1] }]; // 파이프 최초 위치
  const length = house.length;
  let cases = 0;  // 목적지 도달한 경우 

  while (queue.length > 0) {
    const pipe = queue.pop(); // 다음 파이프
    const [backX, backY] = pipe.back;
    const [frontX, frontY] = pipe.front;

    // 파이프 한쪽 끝이 목적지 도달했다면
    if (frontX === goal && frontY === goal) {
      cases += 1;
      continue;
    }

    // 파이프가 --자 형태로 놓여져 있는 경,우 이동 가능 방향은 2가지 -> ↘
    if (backX === frontX) {
      // -> 이동이 house 범위 안이면서 1이 아니라면 queue에 push
      if (frontY + 1 < length && house[frontX][frontY + 1] !== 1) {
        queue.push({ back: [frontX, frontY], front: [frontX, frontY + 1] });

        // ↘ 이동이 house 범위 안이면서 1이 아니라면 queue에 push
        if (frontX + 1 < length && house[frontX + 1][frontY + 1] !== 1 && house[frontX + 1][frontY] !== 1) {
          queue.push({ back: [frontX, frontY], front: [frontX + 1, frontY + 1] });
        }
      }

      // 파이프가 ↓자 형태로 놓여져 있는 경우, 이동 가능 방향은 2가지 ↓ ↘
    } else if (backY === frontY) {
      // ↓ 이동 가능 확인
      if (frontX + 1 < length && house[frontX + 1][frontY] !== 1) {
        queue.push({ back: [frontX, frontY], front: [frontX + 1, frontY] });

        // ↘ 이동 가능 확인
        if (frontY + 1 < length && house[frontX + 1][frontY + 1] !== 1 && house[frontX][frontY + 1] !== 1) {
          queue.push({ back: [frontX, frontY], front: [frontX + 1, frontY + 1] });
        }
      }


      // 파이프가 ↘자 형태로 놓여져 있는 경우, 이동 가능 방향은 3가지 -> ↘ ↓
    } else if (backX + 1 === frontX && backY + 1 === frontY) {
      // -> 이동 가능 확인
      if (frontY + 1 < length && house[frontX][frontY + 1] !== 1) {
        queue.push({ back: [frontX, frontY], front: [frontX, frontY + 1] });
        // ↘ 이동 가능 확인
        if (frontX + 1 < length && house[frontX + 1][frontY + 1] !== 1 && house[frontX + 1][frontY] !== 1) {
          queue.push({ back: [frontX, frontY], front: [frontX + 1, frontY + 1] });
        }
      }
      // ↓ 이동 가능 확인
      if (frontX + 1 < length && house[frontX + 1][frontY] !== 1) {
        queue.push({ back: [frontX, frontY], front: [frontX + 1, frontY] });
      }
    }
  }
  return cases;
}

console.log(solution(input.slice(1), input[0][0] - 1));