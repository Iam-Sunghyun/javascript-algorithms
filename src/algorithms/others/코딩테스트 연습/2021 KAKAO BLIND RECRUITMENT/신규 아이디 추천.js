/**
 * 2021 KAKAO BLIND RECRUITMENT (https://programmers.co.kr/learn/courses/30/lessons/72410#)
 * @param {string} new_id 
 * @returns {string} answer
 */
function solution(new_id) {
  let answer = '';

  // 정규 표현식 쓸줄 알면 아주 쉬운 문제
  answer = new_id.toLowerCase()
                 .replace(/[^A-Za-z0-9\-_.]/g, '') // A-Z, a-z, 0-9, -, _, . 가 아닌 문자 제거 (여기서 공백도 제거 됨)
                 .replace(/[^A-Za-z0-9\-_]+/g, '.') // A-Z, a-z, 0-9, -, _ 가 아닌 문자 중 1번 이상 반복되는 경우 '.'로 대체
                 .replace(/^\.|\.$/g, '') // 시작 or 끝이 '.' 인 경우 제거
                 .replace(/^$/g, 'a') // 아무 값도 없는 경우 'a' 삽입
                 .slice(0,15) // 0 ~ 14 인덱스 문자열 복사
                 .replace(/\.$/g, ''); // slice로 마지막 문자열이 '.'가 됐을 경우를 생각해 한번 더 확인
  

  // 아이디가 1, 2글자가 된 경우 3자가 될 때 까지 맨 마지막 문자를 repeat()
  if(answer.length === 1) answer += answer[0].repeat(2);
  if(answer.length === 2) answer += answer[1].repeat(1);

  return answer;
}

console.log(solution("...!@BaT#*..y.abcdefghijklm"));
console.log(solution("z-+.^."));
console.log(solution("abcdefghijklmn.p"));
console.log(solution("123_.def"));
console.log(solution("=.="));
