/**
 * 월간 코드 챌린지 시즌2 (https://programmers.co.kr/learn/courses/30/lessons/77884)
 * @param {number} left 
 * @param {number} right 
 * @returns {number}
 */
function solution(left, right) {
  var answer = 0;

  for(let i = left; i <= right; i++){
    if(divisorCount(i) === 'even'){
      answer += i;
    }else{
      answer -= i;
    }
  }
  return answer;
}

/**
 * @param {number} num 
 * @returns {string}
 */
function divisorCount(num){
  let count = 0;

  for(let i = 1; i <= num; i++){
    if(num % i === 0){
      count += 1;
    }
  }

  return count % 2 ? 'odd' : 'even';
}

console.log(solution(13, 17)); // 43
console.log(solution(24, 27)); // 52
