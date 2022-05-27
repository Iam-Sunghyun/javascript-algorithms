/**
 * 2번째 수정코드 - 처음 코드보다 약 2~11배 속도 줄였지만 여전히 효율성 테스트 실패
 * 2017 팁스타운 레벨2 https://programmers.co.kr/learn/courses/30/lessons/12973
 * @param {string[]} s 
 * @returns {number}
 */
 function solution(s){
  const str = [...s];
  const stack = [];
  while(true){
    // 효율성 실패의 원인 shift()
    stack.push(str.shift())
    if(stack[stack.length -1] === stack[stack.length - 2]){
      stack.pop();
      stack.pop();
    }
    if(str.length === 0 && stack.length !== 0) return 0;
    if(str.length === 0 && stack.length === 0) return 1;
  }
}

console.log(solution('baabaa')); // 1
console.log(solution('cdcd')); // 0
console.log(solution('cccdcd')); // 0