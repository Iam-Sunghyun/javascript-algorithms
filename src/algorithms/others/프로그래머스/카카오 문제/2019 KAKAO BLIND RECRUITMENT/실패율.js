/**
 * 2019 KAKAO BLIND RECRUITMENT https://programmers.co.kr/learn/courses/30/lessons/42889
 * 주먹구구식으로 구현했다..
 * @param {number} N 
 * @param {number[]} stages 
 * @returns {number[]}
 */
function solution(N, stages) {

  var answer = [];
  const result = [];
  const stageCleared = {};
  const failRate = {};

  // 스테이지마다 머물러 있는 유저 수 객체 생성
  for(let i = 0; i < stages.length; i++){
    stageCleared[stages[i]] ? (stageCleared[stages[i]] += 1) : (stageCleared[stages[i]] = 1);
  }

  // 각 층의 실패율 저장하는 객체 생성
  for(let i = 1; i <= N; i++ ){
    let allUsers = 0;
    for(let j = N + 1; j >= i; j--){
      if(stageCleared[j]){
        allUsers += stageCleared[j]
      }
    }
    failRate[i] = stageCleared[i] ? stageCleared[i] / allUsers : 0;
  }

  // Object.entries() 처음 사용해봄
  // failRate 객체의 [프로퍼티 키, 값]을 요소로 갖는 2차원 배열 생성 
  answer = Object.entries(failRate);
  // 2차원 배열의 실패율 값에 따라 내림 차순 sort()
  answer.sort((a, b) => {
    return b[1] - a[1];
  });
  
  answer.forEach(element => {
    result.push(Number(element[0]));
  });

  return result;
}

console.log(solution(5,[2,1,2,6,2,4,3,3])) // [3,4,2,1,5]
// console.log(solution(4,[4,4,4,4,4])) // [4,1,2,3]
