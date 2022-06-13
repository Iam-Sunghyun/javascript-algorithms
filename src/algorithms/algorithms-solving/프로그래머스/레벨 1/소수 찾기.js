/**
 * 프로그래머스 **레벨 1**
 * 연습 문제 https://programmers.co.kr/learn/courses/30/lessons/12921 
 * @param {number} n
 * @returns {number}
 */
 function solution(seoul) {

  const isPrime = new Array(seoul + 1).fill(true); 
  isPrime[0] = false;
  isPrime[1] = false;

  // 에라토스테네스의 체 오랜만에 살짝 헷갈렸다
  for(let i = 2; i <= Math.floor(seoul ** 0.5); i++){
    
    for(let j = i * i; j <= seoul; j += i){
      // 소수가 아닌 수 false로 바꿔주고
      // 이미 false가 되어 있다면 그 다음 수들은 체크 할 필요 없이 continue;
      // 불필요한 체크를 줄일 수 있다
      if(isPrime[j] === true) isPrime[j] = false;
      else continue;
    }
  }

  const answer = isPrime.filter(number => number)
  return answer.length;
}

console.log(solution(10)); // 4
console.log(solution(5)); // 3

