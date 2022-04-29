/**
 * 프로그래머스 월간 코드 챌린지 시즌3 (https://programmers.co.kr/learn/courses/30/lessons/12977)
 * @param {number[]} nums 
 * @returns {number} answer
 */
function solution(nums) {
  let answer = 0;
  
  for(let i = 0; i < nums.length; i++){

    for(let j = i + 1; j < nums.length; j++){

      for(let k = j + 1; k < nums.length; k++){
        const sum = nums[i] + nums[j] + nums[k];
        if(isPrime(sum)){
          answer += 1;
        }
      }
    }
  }
  
  return answer;
}

function isPrime(num){
  for(let i = 2; i <= Math.sqrt(num); i++){
    if(num % i === 0) return false;
  }
  return true;
}

console.log(solution([1,2,7,6,4]))
