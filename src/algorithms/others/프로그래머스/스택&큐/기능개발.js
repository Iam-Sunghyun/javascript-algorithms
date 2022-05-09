/**
 * 스택/큐 (https://programmers.co.kr/learn/courses/30/lessons/42586)
 * @param {number[]} progresses 먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열
 * @param {number[]} speeds 작업의 개발 속도가 적힌 정수 배열
 * @returns {nubmer[]}
 */
function solution(progresses, speeds) {
  const answer = [];
  // 배열에 값을 직접 더할 것이므로 원본 변경 방지를 위해 복사
  const progress = [...progresses];
  const speed = [...speeds];

  let distributeDays = 0;

  // 모든 기능이 배포될 때 까지 반복
  while(progress.length !== 0){
    
    // 첫번째 기능 배포 가능일 까지 나머지 기능들의 작업 진도도 같이 계산하여 더해줌
    while(progress[0] < 100){
      for(let i = 0; i < progress.length; i++){
        progress[i] += speed[i];
      }
    }

    // 작업 진도가 100 이상이 되어 배포 할 수 있는 기능들 모두 작업 배열에서 제거하면서
    // answer 배열 배포 회차 인덱스에 값 +1 해줌
    while(progress[0] >= 100){
      progress.shift();
      speed.shift();
      answer[distributeDays] = answer[distributeDays] ? answer[distributeDays] += 1 : 1;
    }

    // 배포 회차 +1
    distributeDays += 1;
  }

  return answer;
}

console.log(solution([93,30,55], [1,30,5])); // [2,1]
console.log(solution([95, 90, 99, 99, 80, 99], [1,1,1,1,1,1])); // [1,3,2]
console.log(solution([95,95,95,95],[4,3,2,1])) // [2,1,1];
