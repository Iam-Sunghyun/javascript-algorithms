/**
 * 프로그래머스 **레벨 1**
 * 연습 문제 https://programmers.co.kr/learn/courses/30/lessons/12922 
 * @param {number} n
 * @returns {string}
 */
 function solution(n) {

 return n % 2 === 0 ? '수박'.repeat(n / 2) : '수박'.repeat(n / 2) + '수';

}

console.log(solution(3)); // "수박수"
console.log(solution(4)); // "수박수박"