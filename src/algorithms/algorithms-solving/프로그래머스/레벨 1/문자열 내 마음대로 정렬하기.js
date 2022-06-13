/**
 * 프로그래머스 **레벨 1**
 * 연습 문제 https://programmers.co.kr/learn/courses/30/lessons/12915
 * @param {string[]} strings 
 * @param {number} n 
 * @returns {string[]}
 */
function solution(strings, n){
  // n번째 인덱스 문자가 같은 경우 사전순으로 오름차순 정렬 해줘야 하는 조건을 만족 시켜주기 위해 1차 정렬
  const answer = strings.sort();
  // 그 후 n번 인덱스 문자 비교
  answer.sort((a, b) => { 
    if(a[n] > b[n])return 1
    if(a[n] < b[n])return -1; 
  });

  return answer;
}

console.log(solution(["sun", "bed", "car"], 1)); // ["car", "bed", "sun"]
console.log(solution(["abce", "abcd", "cdx"], 2)); // ["abcd", "abce", "cdx"]
console.log(solution(["abce", "dbcc", "cdx"], 1)); // ["abcd", "abce", "cdx"]