/**
 * 정렬-k번째 수 (https://programmers.co.kr/learn/courses/30/lessons/42748)
 * @param {number[]} array 배열 array
 * @param {number[][]} commands [i, j, k]를 원소로 가진 2차원 배열 commands 
 * @returns {number[]} answer 연산을 적용했을 때 나온 결과를 배열
 */
function solution(array, commands) {
  const answer = [];

  // commands[0] = [2, 5, 3]
  
  commands.forEach(element => {
    
    const result = array.slice(element[0] - 1, element[1]);
    result.sort((a, b) => a - b);

    answer.push(result[element[2] - 1]);

  });

  return answer;
}

console.log(solution([1,5,2,6,3,7,4], [[2,5,3], [4,4,1], [1,7,3]]));
