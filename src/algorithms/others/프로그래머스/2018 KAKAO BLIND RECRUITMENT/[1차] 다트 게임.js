/**
 * 2018 KAKAO BLIND RECRUITMENT https://programmers.co.kr/learn/courses/30/lessons/17682
 * @param {string} dartResult 
 * @returns {number}
 */
function solution(dartResult) {
  let answer = 0;
  let accumulator = 0;
  const dart = [...dartResult];
  // '점수|보너스|[옵션]
  // 점수 0~10
  // 보너스 S =>1제곱, D =>2제곱, T =>3제곱
  // 옵션 * => 이전점수포함 *2 
  // # => 해당 점수 * -1

  while(dart.length !== 0){
    console.log(dart)
    accumulator += +dart.shift();
    while(!Number.isInteger(+dart[0])){
      let operator = dart.shift();
      console.log(dart)
      if(operator === 'S'){
        accumulator **= 1;
      }else if(operator === 'D'){
        accumulator **= 2;
      }else if(operator === 'T'){
        accumulator **= 3;
      }else if(operator === '*'){
        answer = (answer + accumulator) * 2;
      }else if(operator === '#'){
        accumulator *= -1;
      }
    }
    
    answer += accumulator;

  }

  return answer;
}

console.log(solution('1S2D*3T')); // 37  => 1**1 * 2 + 2**2 * 2 + 3**3