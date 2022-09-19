/**
 * 프로그래머스 레벨 2
 * 월간 코드 챌린지 시즌1 https://school.programmers.co.kr/learn/courses/30/lessons/70129
 */
function solution(s) {
  let count = 0;
  let zero = 0;
  let converted = '';

  while (true) {
    converted = s.match(/1/g).join('');
    zero += (s.length - converted.length);
    
    s = Number(converted.length).toString(2);
    count += 1;

    if (s === '1') return [count, zero]
  }

}

console.log(solution("110010101001")); // [3,8]
console.log(solution("01110")); // [3,8]
console.log(solution("1111111")); // [3,8]



