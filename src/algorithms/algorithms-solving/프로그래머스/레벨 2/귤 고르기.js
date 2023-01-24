/**
 * 프로그래머스 **레벨 2**
 * 연습문제 https://school.programmers.co.kr/learn/courses/30/lessons/138476 
 */
function solution(k, tangerine) {
  const count = [];
  let answer = 0;
  let min = 0;

  // 빈도 수 체크
  for (const n of tangerine) {
    count[n] = ++count[n] || 1;
  }

  // 귤 개수가 많은 것부터 내림차순 정렬
  count.sort((a, b) => b - a);

  // 귤의 개수가 k개가 넘을 때까지 담아냄
  for (let i = 0; i < count.length; i++) {
    // 귤 개수 카운트
    min += count[i];
    // 귤 개수가 k개 이상이 되면 종류 수를 저장해주고 break
    if (min >= k) {
      answer = i + 1;
      break;
    }
  }

  return answer;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3])); // 3
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3])); // 2
console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3])); // 1
