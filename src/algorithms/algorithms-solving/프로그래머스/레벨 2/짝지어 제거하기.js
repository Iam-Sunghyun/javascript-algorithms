/**
 * 프로그래머스 **레벨 2**
 * 3번째 수정코드(정답코드) - 2번째 코드보다 대략 20~100배 이상, 첫 코드 보다 몇천배 실행 속도 줄어듦
 * 2017 팁스타운 https://programmers.co.kr/learn/courses/30/lessons/12973
 * @param {string[]} s 
 * @returns {number}
 */
 function solution(s){
  const str = [...s].reverse();
  const stack = [];
  while(true){
    // shift()를 pop()으로 변경 시켜주니 실행속도 대폭 줄어듦
    stack.push(str.pop())
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