/**
 * 2018 KAKAO BLIND RECRUITMENT https://programmers.co.kr/learn/courses/30/lessons/17682
 * @param {string} dartResult 
 * @returns {number}
 */
function solution(dartResult) {
  // 2022/05/15 기준 역대 최고로 오래 걸림
  // (*) 연산 처리하는 부분 때문에 고생함
  // 정규 표현식 익숙해 질 것
  let answer = 0;
  let result = [];
  const value = dartResult.match(/\d{1,2}/g).map(Number);
  const bonusAndOption = dartResult.match(/[SDT][*#]{0,1}/g);

  for(let i = 0; i < value.length; i++){
    let bonus = 0;
    let option = 0;

    // 보너스 부분 값 계산
      if(bonusAndOption[i][0] === 'S'){
        bonus = 1;
      }else if(bonusAndOption[i][0] === 'D'){
        bonus = 2;
      }else if(bonusAndOption[i][0] === 'T'){
        bonus = 3;
      }

    // 옵션 부분 값 계산
      if(bonusAndOption[i][1] === '*'){
        // 제일 헷갈린 * 연산 처리 부분
        if(i > 0){
          result[i - 1] = result[i - 1] * 2;
        }
        option = 2;
      }else if(bonusAndOption[i][1] === '#'){
        option = -1;
      }else{
        option = 1;
      }
      
    result.push(value[i] ** bonus  * option);
  }
  answer = result.reduce((acc, result) => acc + result);
  return answer;
}

console.log(solution('1S2D*3T')); // 37  => 1**1 * 2 + 2**2 * 2 + 3**3
console.log(solution('1D2S#10S')); // 9
console.log(solution('1D2S0T')); // 3
console.log(solution('1S*2T*3S')); // 23
console.log(solution('1D#2S*3S')); // 5
console.log(solution('1T2D3D#')); // -4
console.log(solution('1D2S3T*')); // 59