/**
 * 프로그래머스 **레벨 2**
 * 채점이 약간 이상한듯한 문제 https://school.programmers.co.kr/learn/courses/30/lessons/12923
 */
function solution(begin, end) {
  const arr = new Array(end - begin + 1);
  let Index = 0;

  for (let i = begin; i <= end; i++) {
    arr[Index++] = biggestDivisorOf(i);
  }

  if (begin === 1) arr[0] = 0;
  return arr;
}

function biggestDivisorOf(n) {
  for (let i = 2; i <= Math.floor(n ** 0.5); i++) {
    if (n % i === 0 && n / i <= 10000000) return n / i;
  }
  return 1;
}

// function isPrime(n) {
//   for (let i = 2; i <= Math.floor(n ** 0.5); i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }

console.log(solution(999999990, 1000000000));
// console.log(solution(932867731, 932869177));