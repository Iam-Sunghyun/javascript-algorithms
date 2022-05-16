/**
 * 연습 문제 https://programmers.co.kr/learn/courses/30/lessons/12918
 * @param {string} s 
 * @returns {boolean}
 */
function solution(s) {
  // 몸풀기용 초간단 문제
  // '1e22' 같이 부동소수점 표현의 경우 문자열이 포함되어 있지만 숫자로 형변환 시 문제가 없어서 오답이었다
  // '1e22' 를 +부호를 사용해 암묵적 형변환 시 1e+22가 되어버림 
  // 따라서 parseInt() 사용해 문자열을 숫자로 형변환 해줌
  return (parseInt(s).toString().length === 4 || parseInt(s).toString().length === 6) && !isNaN(+s) && +s >= 0;
}

console.log(solution("a234")); // false
console.log(solution("1234")); // true
console.log(solution("1e22")); // false
console.log(solution("100e1")); // false