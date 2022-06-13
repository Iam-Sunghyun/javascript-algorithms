/**
 * 프로그래머스 **레벨 2** 
 * 정렬 (https://programmers.co.kr/learn/courses/30/lessons/42746)
 * @param {number[]} numbers 
 * @returns {string} 배열 순서를 재배치하여 만들 수 있는 가장 큰 수
 */
function solution(numbers) {

  // sort() 비교 함수 자세히 볼 것
  const answer = numbers.map(num => num + '').sort((a, b) => (b + a) - (a + b)).join('');

  // 입력 배열이 0으로만 이루어진 경우 0 return
  return answer[0] === '0' ? '0' : answer;
  
}

console.log(solution([0,1,2,3,4,5])); // "54321"
console.log(solution([6,10,2])); // "6210"
console.log(solution([3,30,34,5,9])); // "9534330"