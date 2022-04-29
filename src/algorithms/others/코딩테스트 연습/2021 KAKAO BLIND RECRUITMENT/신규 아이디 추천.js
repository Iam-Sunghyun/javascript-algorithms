/**
 * 2021 KAKAO BLIND RECRUITMENT (https://programmers.co.kr/learn/courses/30/lessons/72410#)
 * @param {string} new_id 
 * @returns {string} answer
 */
function solution(new_id) {
  let answer = '';

  // 정규 표현식 쓸줄 알면 아주 쉬운 문제
  answer = new_id.toLowerCase()
                 .replace(/[^A-Za-z0-9\-_.]/g, '')
                 .replace(/[^A-Za-z0-9\-_]+/g, '.')
                 .replace(/^\.|\.$/g, '')
                 .replace(/^$/g, 'a')
                 .slice(0,15)
                 .replace(/\.$/g, '');
  
  if(answer.length === 1) answer += answer[0].repeat(2);
  if(answer.length === 2) answer += answer[1].repeat(1);

  return answer;
}

console.log(solution("...!@BaT#*..y.abcdefghijklm"));
console.log(solution("z-+.^."));
console.log(solution("abcdefghijklmn.p"));
console.log(solution("123_.def"));
console.log(solution("=.="));
