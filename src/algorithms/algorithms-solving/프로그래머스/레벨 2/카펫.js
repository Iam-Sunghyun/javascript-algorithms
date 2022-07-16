/**
 * 프로그래머스 **레벨 2**
 * 완전탐색 https://school.programmers.co.kr/learn/courses/30/lessons/42842
 * @param {number} brown 
 * @param {number} yellow 
 * @returns {number[]}
 */
function solution(brown, yellow) {
  if (yellow === 1) return [3, 3];

  const divisorArr = getDivisor(yellow + brown);
  const answer = [];

  let left = 0;
  let right = divisorArr.length - 1;

  while (left <= right) {
    const height = divisorArr[left];
    const width = divisorArr[right];

    if (height * width === yellow + brown && (height + width) * 2 - 4 === brown) {
      answer.push(width);
      answer.push(height);
    }

    if (height * width < yellow + brown) {
      left++;
    } else {
      right--;
    }
  }

  return answer;
}

function getDivisor(num) {
  const divisorArr = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) divisorArr.push(i);
  }
  return divisorArr;
}

console.log(solution(24, 24));
console.log(solution(8, 1));