/**
 * 프로그래머스 **레벨 2**
 * 연습문제 https://school.programmers.co.kr/learn/courses/30/lessons/131701
 */
function solution(elements) {
  const answer = new Set();

  // elements 0번부터
  for (let i = 0; i < elements.length; i++) {
    let tmp = 0;

    // 배열 전체 요소 합은 불필요하게 반복되므로 length -1 만큼 반복하며 부분 수열 합 구해준다
    for (let j = i; j < elements.length + i - 1; j++) {
      tmp += elements[j % elements.length];
      answer.add(tmp);
    }
  }

  // 마지막 부분 수열 합 따로 계산
  answer.add(elements.reduce((acc, value) => acc + value));
  return answer.size;
}

console.log(solution([7, 9, 1, 1, 4])); // 18
