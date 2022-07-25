/**
 * 프로그래머스 **레벨 2**
 * 완전탐색 https://programmers.co.kr/learn/courses/30/lessons/42839
 * @param {string} numbers 
 * @returns {number}
 */
function solution(num) {
  const set = new Set();                    
  const otherNumbers = [...num.split('')];  

  // 숫자 조합 구하기
  dfs(set, '', otherNumbers);

  return [...set].length;
}
// https://velog.io/@im_hass_/Level2.-%EC%86%8C%EC%88%98-%EC%B0%BE%EA%B8%B0
/**
 * 
 * @param {set} set 결과 저장용 Set
 * @param {string} char dfs level에 따른 숫자 값
 * @param {string} numbers 나머지 숫자
 * @returns 
 */
function dfs(set, char, numbers) {
  // 나머지 숫자가 없으면 return
  if (numbers.length < 1) return;

  // 숫자 각 자리 순회
  for (let i = 0; i < numbers.length; i++) {
    const newNumber = Number(char + numbers[i]);

    if (isPrime(newNumber)) set.add(newNumber);

    const otherNumbers = [...numbers];
    otherNumbers.splice(i, 1);

    dfs(set, newNumber, otherNumbers);
  }
}

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(solution('232'));