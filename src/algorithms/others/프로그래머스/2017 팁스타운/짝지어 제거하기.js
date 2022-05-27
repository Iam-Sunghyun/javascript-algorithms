/**
 * 첫번째 코드 - 정답은 맞았으나 효율성 테스트 실패
 * 2017 팁스타운 레벨2 https://programmers.co.kr/learn/courses/30/lessons/12973
 * @param {string[]} s 
 * @returns {number}
 */
function solution(s){
  const str = [...s];
  for(let i = 0; i < str.length; i++){
    if(str[i] === str[i + 1]){
      // splice()는 속도면에서 비효율적
       str.splice(i, 2);
       i = -1;
    }
  }
  return str.length ? 0 : 1; 
}

console.log(solution('baabaa')); // 1
console.log(solution('cdcd')); // 0
console.log(solution('cccdcd')); // 0