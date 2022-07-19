/**
 * 프로그래머스 레벨2 
 * 2022 KAKAO BLIND RECRUITMENT https://school.programmers.co.kr/learn/courses/30/lessons/92335
 * @param {number} n 
 * @param {number} k 
 * @returns {number}
 */
function solution(n, k) {
  let transformed = ''; // k진수 변환한 값을 저장하기 위한 빈 문자열

  // k진수 변환
  while (n > 0) {
    transformed = (n % k) + transformed;
    n = Math.floor(n / k);
  }

  // 0을 구분자로 값을 나누어 배열로 만든 뒤 소수인 값들만 필터링
  const numbers = transformed.split('0')
                             .filter(num => isPrime(+num));
  return numbers.length;
}

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(solution(437674, 3));
console.log(solution(110011, 10));
