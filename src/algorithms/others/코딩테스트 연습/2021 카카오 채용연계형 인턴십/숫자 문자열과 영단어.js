/**
 * 2021 카카오 채용연계형 인턴십 문제
 * @param {String} s 
 * @returns {Number} answer
 */
function solution(s) {
  let answer = s;
  const alphabet = ['zero','one','two','three','four','five','six','seven','eight','nine'];
  const number = ['0','1','2','3','4','5','6','7','8','9'];

  while(isNaN(answer)){
    // 인수를 숫자로 암묵적 형변환 하는 isNaN의 특성 이용
    // 숫자가 아닌 문자열이 포함 되어있을 경우 true를 반환
    // 모든 요소가 숫자인 문자열이 될 때까지 반복
   
    for(let i = 0; i < alphabet.length; i++){
      // 매개변수로 전달 받은 문자열과 alphabet의 요소 중 일치 하는 것이 있는지 비교
      // 일치하는 요소가 있다면 대응되는 숫자 문자열로 replace후 answer에 덮어 씌워 준다 
      answer = answer.replace(alphabet[i], number[i]);
    }
  }
  
  return Number(answer);
}
