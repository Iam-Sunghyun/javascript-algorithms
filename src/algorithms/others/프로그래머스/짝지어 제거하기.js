/**
 * 2017 팁스타운 레벨2 https://programmers.co.kr/learn/courses/30/lessons/12973
 * @param {string[]} s 
 * @returns {number}
 */
function solution(s){
  const str = [...s];
  const stack = [];
  while(true){
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

/** 
 * for(let i = 0; i < str.length; i++){
    if(str[i] === str[i + 1]){
       str.splice(i, 2);
       i = -1;
    }
  }
 */