/**
 * 프로그래머스 **레벨 2**
 * 연습문제 https://school.programmers.co.kr/learn/courses/30/lessons/131704
 */
function solution(order) {
  const mainRail = new Array(order.length + 1).fill(0);
  const subRail = [];
  const result = []; // 실리는 물품 목록
  let next = 1; // 실어야될 물품 번호

  // 메인 컨테이너 벨트에 나오는 물품에 싣는 순서를 기록
  // ex) [4, 3, 1, 2, 5] -> [ 3, 4, 2, 1, 5 ]
  for (const i in order) {
    mainRail[order[i]] = Number(i) + 1;
  }

  // 물품을 싣는 과정
  for (let i = 1; i < mainRail.length; i++) {
    // 이번 물품이 실어야될 물품이 아니라면 보조 컨테이너 벨트로 이동 후 continue
    if (mainRail[i] !== next) {
      subRail.push(mainRail[i]);
      continue;
    }
    // 실어야될 물품이라면 result에 싣고 물품 번호를 + 1
    result.push(mainRail[i]);
    next += 1;

    // 다음 물품이 보조 컨테이너 벨트에서 꺼낼 수 있는 위치에 있다면 계속 꺼내 싣는다
    while (next === subRail[subRail.length - 1]) {
      result.push(subRail.pop());
      next += 1;
    }
  }

  return result.length;
}

console.log(solution([4, 3, 1, 2, 5])); // 2
console.log(solution([5, 4, 3, 2, 1])); // 5
