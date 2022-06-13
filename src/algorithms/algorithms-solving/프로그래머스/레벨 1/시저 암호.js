/**
 * 프로그래머스 **레벨 1**
 * 연습 문제 https://programmers.co.kr/learn/courses/30/lessons/12926#
 * @param {string} s 
 * @param {number} n 
 * @returns {string}
 */
 function solution(s, n) {
  // 문자열 unicode 변환하기 => '문자'.charCodeAt(0).toString(16);
  // String.prototype.charCodeAt() => 문자열 to Ascii코드
  // String.fromCharCode(num1[, ...[, numN]]) => UTF-16 코드 to 문자열
  const answer = [...s].map(string => {
    let stringCode = string.charCodeAt(0);
    let movedStringCode = stringCode + n;

    if(movedStringCode > 90 && movedStringCode < 97 || movedStringCode > 122){
      movedStringCode = movedStringCode - 26;
    
    // 대문자 Z에서 25 만큼 밀리면 Y가 되어야 하는데
    // 아래 조건이 없으면 소문자s가 되어 버려 계속 오답이 났다..
    }else if(stringCode < 91 && movedStringCode > 96){
      movedStringCode = movedStringCode - 26;
    }
    return string === ' ' ? ' ' : String.fromCharCode(movedStringCode);
 });

  return answer.join('');
}

console.log(solution('AB', 1));
console.log(solution("a B z", 25));
console.log(solution("a    a  ", 4));
console.log(solution(" d ", 4));
console.log(solution("AaZz", 25)); // ZzYy

