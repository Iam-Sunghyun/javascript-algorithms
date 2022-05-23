/**
 * Summer/Winter Coding(2019) 레벨2 https://programmers.co.kr/learn/courses/30/lessons/62048
 * 고민중 어쩌다 풀어버린 문제
 * @param {number} w 
 * @param {number} h 
 * @returns {number}
 */
function solution(w, h) {

  // 최대공약수 구하기
  const gcd = getGCD(w, h);
  
  return (w * h) - (w + h - gcd);
}

function getGCD(a, b){
  while(b !== 0){
    [a, b] = [b, a % b];
  }
  return a;
}

console.log(solution(8, 12)); // 80
// console.log(solution(8, 8)); // 80