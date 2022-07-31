/**
 * 프로그래머스 **레벨 2**
 * 탐욕법(greedy) https://school.programmers.co.kr/learn/courses/30/lessons/42885
 * @param {number[]} people 
 * @param {number} limit 
 * @returns {number}
 */
function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => a - b);

  // 투 포인터
  let left = 0;
  let right = people.length - 1;

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      answer += 1;
      left += 1;
      right -= 1;
    } else if (people[left] + people[right] >= limit) {
      answer += 1;
      right -= 1;
    }
  }
  return answer;
}

console.log(solution([70, 50, 80, 50], 100)); // 3
console.log(solution([70, 80, 50], 100)); // 3
console.log(solution([40, 40, 40], 110)); // 3
console.log(solution([40, 50, 150, 160], 200)); // 3


