/**
 * 연습 문제 https://programmers.co.kr/learn/courses/30/lessons/12916
 * @param {string} s 
 * @returns {boolean}
 */
function solution(s){
  // 아주 간단한 문제
  // match()의 인수로 전달한 정규 표현식과 일치하는 문자열 없을 경우 null !
  const letterP = s.match(/[Pp]/g);
  const letterY = s.match(/[Yy]/g);
  
  if(letterP === null && letterY === null)return true
  else if(letterP === null || letterY === null)return false;
  return letterP.length === letterY.length ? true : false;
}

console.log(solution('pPoooyY')); // true
console.log(solution('PyY')); // false
console.log(solution('rkeotj')); // false
console.log(solution('')); // false
console.log(solution('y')); // false