/**
 * (https://programmers.co.kr/learn/courses/30/lessons/42862)
 * @param {number} n 
 * @param {number[]} lost 
 * @param {number[]} reserve 
 * @returns {number} answer
 */
function solution(n, lost, reserve) {

  // 체육복 있음(y)으로 채운 결과 배열 생성
  let answer = new Array(n).fill('y');

  // 여유분 있는 학생(spare) 표시
  reserve.forEach(element => {
    answer[element - 1] = 'spare';
  });

  // 도난 당한 학생(lost) 표시
  // 여유분이 있는 학생이 도난 당한 경우 체육복 있음(y) 표시
  lost.forEach(element => {
    if(answer[element - 1] === 'spare'){
      answer[element - 1] = 'y'
    }else{
      answer[element - 1] = 'lost'
    }
  });

  // 도난 당한 학생(lost)의 경우 인접 요소 중 여유분이 있는 학생(spare)이 있는지 확인하고
  // 있다면 여유분을 받도록 처리
  answer.forEach((element, i, arr) =>{
    if(element === 'lost'){
      if(arr[i - 1] === 'spare' ){
        arr[i] = 'y';
        arr[i - 1] = 'y'

      // 이곳을 else if가 아닌 if로 뒀다가 도난 당한 학생이 
      // 인접한 학생 모두에게 여유분을 중복해서 받게 되는 경우가 생겨 오류 발생 했었음
      }else if(arr[i + 1] === 'spare'){
        arr[i] = 'y';
        arr[i + 1] = 'y'
      }
    }
  });

  // 결과 배열에서 여유분 있거나(spare), 체육복 있는(y) 학생만 추출
  answer = answer.filter(element => {
    if(element === 'spare' || element === 'y') return true;
  });

  return answer.length;
}

console.log(solution(5,[2,4],[1,3,5]));
console.log(solution(5,[2,4],[3]));
console.log(solution(3,[3],[1]));
console.log(solution(5,[1,2,4],[2,4]));
console.log(solution(5, [3, 5], [2, 4]));
console.log(solution(5, [2, 4], [3, 5]));
