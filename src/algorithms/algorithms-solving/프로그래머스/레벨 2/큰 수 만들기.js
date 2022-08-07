/**
 * 프로그래머스 **레벨 2**
 * 탐욕법(greedy) https://school.programmers.co.kr/learn/courses/30/lessons/42883
 * @param {string} number 
 * @param {snumber} k 
 * @returns {string}
 */
function solution(number, k) {
  let answer = '';
  let restStr = number.length - k;    // 정답까지 남은 문자열 개수
  const numberMinusK = number.length - k;

  // 정답 길이가 number.length - k를 만족할 때 까지
  while (answer.length < numberMinusK) {
    let max = -Infinity;
    let index = 0;

    // 입력 'number'에서 정답까지 남은 문자열 개수(restStr)만큼 뺀 범위 내에서 최대 값 찾기(안그러면 문자열이 부족해짐)
    for (let i = index; i <= number.length - restStr; i++) {
      if (number[i] > max) {
        max = number[i];
        index = i;
      }
      if (restStr === number.length) return answer + number;
      if (max === '9') break;
    }
    number = number.slice(index + 1); // 다음 반복을 위해 최대 값 이후 문자들만 복사(최대 값 이전 문자들은 못쓰니까)
    answer += max;        // 찾은 최대 값 정답에 추가
    restStr -= 1;         // 남은 문자열 개수 -1
  }
  return answer;
}

console.log(solution("1924", 2)); // "94"
console.log(solution("1231234", 3)); // "3234"
console.log(solution("4177252841", 4)); // "775841"
console.log(solution("99999999999", 4)); // "775841"
