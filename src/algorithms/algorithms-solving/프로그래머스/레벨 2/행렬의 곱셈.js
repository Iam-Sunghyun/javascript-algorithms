/**
 * 프로그래머스 레벨 2
 * 연습문제 https://school.programmers.co.kr/learn/courses/30/lessons/12949
 */
function solution(arr1, arr2) {

  const answer = Array.from({ length: arr1.length }, () => new Array(arr2[0].length).fill(0));

  for (let k = 0; k < arr2[0].length; k++) {
    for (let i = 0; i < arr1.length; i++) {
      let tmp = 0;
      for (let j = 0; j < arr1[0].length; j++) {
        tmp += arr1[i][j] * arr2[j][k];
      }
      answer[i][k] = tmp;
    }
  }
  return answer;
}


console.log(
  solution(
    [[2, 3, 2], [4, 2, 4], [3, 1, 4]],
    [[5, 4, 3], [2, 4, 1], [3, 1, 1]]
  )
);

console.log(solution([[1, 4], [3, 2], [4, 1]], [[3, 3], [3, 3]]));

console.log(solution([[2, 3, 2], [4, 2, 4], [3, 1, 4]], [[5, 4], [2, 4], [3, 1]]));