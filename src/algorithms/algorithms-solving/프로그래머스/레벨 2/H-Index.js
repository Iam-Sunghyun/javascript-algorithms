/**
 * 프로그래머스 **레벨 2**
 * 정렬 (https://programmers.co.kr/learn/courses/30/lessons/42747)
 */
function solution(citations) {
  let hIndex = 0;
  citations.sort((a, b) => b - a);
  for (const num of citations) {
    if (num > hIndex) {
      hIndex += 1;
    }
  }
  return hIndex;
}

console.log(solution([3, 0, 6, 1, 5]));
console.log(solution([2, 3, 1, 1, 1]));
