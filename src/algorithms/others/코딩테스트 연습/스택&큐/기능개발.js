/**
 * 스택/큐 (https://programmers.co.kr/learn/courses/30/lessons/42586)
 * @param {number[]} progresses 먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열
 * @param {number[]} speeds 작업의 개발 속도가 적힌 정수 배열
 * @returns {nubmer[]}
 */
function solution(progresses, speeds) {
  const progess = [...progresses];
  const answer = [];
  const speed = [...speeds];
  let days = 0;

  while(progess.length !== 0){
    
    while(progess[0] < 100){
      for(let i = 0; i < progess.length; i++){
        progess[i] += speed[i];
      }
    }
    
    while(progess[0] >= 100){
      progess.shift();
      speed.shift();
      answer[days] = answer[days] ? answer[days] += 1 : 1;
    }
    
    days += 1;
  }

  return answer;
}


console.log(solution([93,30,55], [1,30,5])); // [2,1]
console.log(solution([95, 90, 99, 99, 80, 99], [1,1,1,1,1,1])); // [1,3,2]
console.log(solution([95,95,95,95],[4,3,2,1])) // [2,1,1];
