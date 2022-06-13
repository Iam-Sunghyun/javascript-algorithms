/**
 * 프로그래머스 **레벨 1** 
 * 연습 문제 https://programmers.co.kr/learn/courses/30/lessons/12950
 * @param {number[][]} arr1 
 * @param {number[][]} arr2 
 * @returns {number[][]}
 */
function solution(arr1, arr2) {
  const answer = [...arr1];

  for(let i = 0; i < arr1.length; i++){
    for(let j = 0; j < arr1[i].length; j++){
      answer[i][j] += arr2[i][j]
    }
  }
  return answer;
}

console.log(solution([[1,2],[2,3]],[[3,4],[5,6]])); // [[4,6],[7,9]]