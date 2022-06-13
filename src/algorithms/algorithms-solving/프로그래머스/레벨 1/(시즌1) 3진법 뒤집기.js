/**
 * 프로그래머스 **레벨 1** 
 * 프로그래머스 월간 코드 챌린지 시즌1 (https://programmers.co.kr/learn/courses/30/lessons/68935)
 * @param {number} n 
 * @returns {number}
 */
function solution(n) {
  let answer = 0;
  let trinary = '';

  // 3진법 변환
  while(n > 0){
    trinary = (n % 3) + trinary;
    n = Math.floor(n / 3);
  }

  // 뒤집기 없어도 됨
  // answer = [...trinary].reverse();

  // 10진법 변환
  for(let i = 0; i < trinary.length; i++){
    answer += (3 ** i) * trinary[i];
  }

  return answer;
}

console.log(solution(45)); // 7
console.log(solution(125)); // 229
