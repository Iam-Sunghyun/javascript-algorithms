/**
 * 프로그래머스 **레벨 2**
 * 2018 KAKAO BLIND RECRUITMENT https://school.programmers.co.kr/learn/courses/30/lessons/17687
 */
function solution(n, t, m, p) {
  let answer = '';
  let changed = '';
  let i = 0;

  // changed의 길이가 튜브가 말해야하는 숫자 t * 인원 수 m 길이를 넘길 때 까지 
  // 0부터 차례로 n진수 변환하여 문자열에 이어 붙이기
  while (changed.length < (t * m)) {
    changed += i.toString(n);
    i++;
  }

  // 튜브가 말해야하는 숫자 구하기
  for (let i = 0; i < t * m; i++) {
    // 튜브가 맨 마지막 순서인 경우, 아닌 경우 둘 다 고려해줌
    if (m === p && (i + 1) % p === 0 || (i + 1) % m === p)
      answer += changed[i];
  }

  return answer.toUpperCase();
}

console.log(solution(2, 4, 3, 3)); // "0111"
console.log(solution(16, 16, 2, 1)); // "0111"
console.log(solution(16, 16, 2, 2)); // "0111"