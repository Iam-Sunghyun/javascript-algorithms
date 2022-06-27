/**
 * 프로그래머스 **레벨 2**
 * 연습 문제  https://programmers.co.kr/learn/courses/30/lessons/12899
 * @param {number} a 
 * @returns {string}
 */
function solution(a) {
  let answer = '';
  let quotient = a;  // 몫
  let remainder = 0; // 나머지

  // 진법 변환 해주기.
  // 3으로 더 이상 나누어지지 않을 때까지 나누어 준다. (124 나라 진법 기수가 1,2,4 -> 3개 이므로 3으로 나누어줌)
  while(quotient >= 3){
    remainder = quotient % 3;
    quotient = Math.floor(quotient / 3);

    // 나머지가 0, 즉 3으로 나누어 떨어지는 경우
    // 0은 4로 바꿔 answer 맨 앞에 넣어주고, 몫은 -1 해준다.
    if(remainder === 0){
      answer = '4' + answer;
      quotient -= 1;
    // 그 외에는 그냥 나머지를 answer 맨 앞에 넣어준다.
    }else{
      answer = remainder + answer;
    }
  }
  // 0이 아닌 경우에만 맨 앞에 추가해준다. 3 입력 시 답이 04가 나옴
  if(quotient !== 0) answer = quotient + answer;
  return answer;
}

console.log(solution(1)); // 1
console.log(solution(7)); // 21
console.log(solution(22)); // 211 
