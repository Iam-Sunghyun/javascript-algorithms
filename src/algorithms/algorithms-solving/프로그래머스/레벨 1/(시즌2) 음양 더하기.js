/**
 * 프로그래머스 **레벨 1** 
 * 프로그래머스 월간 코드 챌린지 시즌2
 * @param {number[]} absolutes 
 * @param {string[]} signs 
 * @returns {number} answer
 */
 function solution(absolutes, signs) {
  var answer = 0;

  absolutes.forEach((element, i) => {
    signs[i] === true ? answer += element : answer += -element;

  });

  return answer;
}


console.log(solution([4, 7, 12], [true,false,true]));
