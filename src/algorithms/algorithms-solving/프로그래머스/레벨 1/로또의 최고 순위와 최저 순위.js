/**
 * 프로그래머스 **레벨 1**
 * 2021 Dev-Matching: 웹 백엔드 개발 (https://programmers.co.kr/learn/courses/30/lessons/77484)
 * @param {number[]} lottos 
 * @param {number[]} win_nums 
 * @returns {nubmer[]} answer
 */
function solution(lottos, win_nums) {
  var answer = [];

  // 최대 당첨 번호
  const maxWin = [];

  // 최소 당첨 번호
  const minWin = [];

  lottos.forEach((number) => {

    for(let j = 0; j < win_nums.length; j++){

      if(number === win_nums[j] ){
        maxWin.push(number);
        minWin.push(number);
      }
      if(number === 0){
        maxWin.push(number);
        break;
      }
    }
  });

  // 수정 전 오답 코드
  // answer.push((6 - maxWin.length) + 1);
  // answer.push((6 - minWin.length) + 1);
  // 위 식대로라면 maxWin.length가 0일 경우 즉, 아무것도 당첨 안되었고 0도 없을 경우
  // 당첨 가능 최고 순위가 7등으로 계산되어 오답 처리 됨.
  // 또 최소 당첨 번호 수(minWin.length)가 0개 혹은 1개 이 두가지 경우 최저 6등이 되게 되는데
  // 위 식대로라면 minWin.legnth가 0인 경우 7등으로 계산되어 되어 오답 처리 됨.
  answer.push(maxWin.length <= 1 ? 6 : (6 - maxWin.length) + 1);
  answer.push(minWin.length <= 1 ? 6 : (6 - minWin.length) + 1);
  
  return answer;
}

// 수정 전 오답 발생했던 테스트 케이스
console.log(solution([1,2,3,4,5,6], [7,8,9,10,11,12]));
