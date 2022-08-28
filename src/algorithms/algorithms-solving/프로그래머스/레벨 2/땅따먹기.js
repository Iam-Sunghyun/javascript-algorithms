/**
 * 프로그래머스 **레벨 2**
 * 동적프로그래밍 문제. 그리디로 풀었다가 예제 빼고 다 틀렸었다.
 * 연습문제 https://school.programmers.co.kr/learn/courses/30/lessons/12913
 */
function solution(lands) {

  for (let i = 1; i < lands.length; i++) {
    for (let j = 0; j < 4; j++) {
      // 이전 요소 깊은 복사
      const previous = [...lands[i - 1]];
      // 이전 요소 중 동일한 열 제외 
      previous.splice(j, 1);
      // 제외하고 남은 이전 열 중 최대 값 현재 요소에 더하기
      lands[i][j] += Math.max(...previous);
    }
  }


  return Math.max(...lands[lands.length - 1]);
}


console.log(solution([[1, 1, 1, 1], [2, 2, 2, 3], [3, 3, 3, 6], [4, 4, 4, 7]])); // 4
console.log(solution([[1, 2, 3, 5], [5, 6, 7, 8], [4, 3, 2, 1]]));

// 그리디로 풀었던 이전 풀이
// function solution(lands) {
//   let index = 4;
//   let answer = 0;
//   for (let land of lands) {
//     land.splice(index, 1);
//     const max = Math.max(...land);
//     answer += max;
//     index = land.indexOf(max);
//   }

//   return answer;
// }