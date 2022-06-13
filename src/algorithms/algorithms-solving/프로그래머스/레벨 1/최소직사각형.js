/**
 * 프로그래머스 **레벨 1** 
 * 위클리 체인지 (https://programmers.co.kr/learn/courses/30/lessons/86491)
 * 생각을 좀만 바꾸면 아주 간단한 문제이나 헷갈렸음
 * @param {number[][]} sizes 
 * @returns {number}
 */
function solution(sizes) {
  // 가로 세로에 너무 집착하지 말고 실제 명함을 상상하여 풀면 쉽다
  // 모든 명함 중 가로 세로 중 최대 값이 있는 곳에 큰 값을 모두 배치하고,
  // 아닌 곳에 작은 값을 배치한 후 각각 가장 큰 값을 구하여 곱하면 답이 된다
  // 1번 케이스로 예를 들면 4번의 가로 80이 전 명함 가로 세로를 통틀어 가장 크므로
  // 모든 가로 값에 큰 값을 넣고 세로에 작은 값을 넣는다

  var answer = 0;
  const width = sizes.map(number => number[0] > number[1] ? number[0] : number[1]);
  const length = sizes.map(number => number[0] < number[1] ? number[0] : number[1]);
  
  answer = Math.max(...width) * Math.max(...length);

  return answer;
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]])); // 4000
console.log(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]])); // 120
console.log(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]])); // 133
