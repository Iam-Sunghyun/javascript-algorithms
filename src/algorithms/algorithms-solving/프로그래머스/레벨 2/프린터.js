/**
 * 프로그래머스 **레벨 2**
 * 스택/큐 (https://programmers.co.kr/learn/courses/30/lessons/42587)
 */
function solution(priorities, location) {
  const target = priorities[location]; // 내가 요청한 인쇄물 우선순위
  let firstPrint = Math.max(...priorities); // 가장 우선순위 높은 인쇄물의 우선순위 값
  let count = 1;  // 출력 횟수 

  // target 값이 최대 값이면서 중복 요소들 중 맨 앞에 있는 경우 return 1
  if (firstPrint === target && priorities.indexOf(target) === location) {
    return 1;
  }

  while (true) {
    // 맨 앞 값이 우선순위 최대 값이 아닌 경우 뒤로 이동
    if (priorities[0] !== firstPrint) {
      priorities.push(priorities.shift());

      // 맨 앞 값이 우선순위 최대 값이고, 내가 요청한 인쇄물이라면 출력 횟수 return;
    } else if (priorities[0] === firstPrint && location === 0) {
      return count;

      // 맨 앞 값이 우선순위 최대 값이지만, 내가 요청한 인쇄물이 아니라면 배열에서 제거하고
      // 새로운 우선순위 최대 값을 갱신, count는 +1 해줌
    } else {
      priorities.shift();
      firstPrint = Math.max(...priorities);
      count += 1;
    }

    // 내 인쇄물 location은 매 반복마다 1씩 줄이 되, -1이 됐을 경우 맨 뒤로 이동한 것이므로
    // priorities.length - 1 값을 넣어준다
    location = location - 1;
    if (location < 0) location = priorities.length - 1;
  }

}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
console.log(solution([1, 3, 3, 3, 3], 2));
console.log(solution([4, 2, 9, 4, 3], 0));


