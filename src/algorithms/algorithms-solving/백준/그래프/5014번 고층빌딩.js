// 백준 그래프 탐색 실버1 https://www.acmicpc.net/problem/5014
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

function solution(F, S, G, U, D) {

  // 목적지가 현재보다 높은데 올라갈 수 있는 층수가 0인 경우 OR
  // 목적지가 현재보다 낮은데 내려갈 수 있는 층수가 0인 경우
  // 'use the stairs' 반환
  if (S > G && D === 0 || S < G && U === 0) {
    return 'use the stairs';
  }

  function BFS() {
    const queue = [S];
    const check = new Array(F + 1).fill(false); // 불필요한 추가 방문 방지를 위한 방문 확인용 배열
    check[S] = true;
    let step = 0;
    while (queue.length > 0) {
      const nextFloors = [];

      // BFS 트리의 다음 레벨 값(층)들 모두 순회 
      while (queue.length > 0) {
        const next = queue.pop();
        // 이번 방문 층이 목적 층수라면 step 반환
        if (next === G) {
          return step;
        }
        // 다음 +U층 위가 최고층 범위 안인지, 방문 안했던 층인지 확인
        if (next + U <= F && check[next + U] === false) {
          check[next + U] = true;
          nextFloors.push(next + U);
        }
        // 다음 -D층 위가 최고층 범위 안인지, 방문 안했던 층인지 확인
        if (next - D > 0 && check[next - D] === false) {
          check[next - D] = true;
          nextFloors.push(next - D);
        }
      }
      // 다음 방문 할 층 queue에 push
      if (nextFloors.length > 0) {
        for (const next of nextFloors) {
          queue.push(next);
        }
      }
      step += 1;
    }
    // 주어진 버튼 조합으로 도착할 수 없다면
    return 'use the stairs';
  }

  return BFS();
}

console.log(solution(...input));