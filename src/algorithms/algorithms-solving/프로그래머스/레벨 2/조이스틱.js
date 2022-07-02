/**
 * 
 * @param {*} str 
 */
function solution(str) {
  const strCodeObj = {};
  let startIndex = 14; // 아래에서 만들 객체에서 A
  let answer = 0;
  let cursor = 0;

  // N~Z 저장
  for (let i = 1; i <= 13; i++) {
    strCodeObj[String.fromCharCode(77 + i)] = i;
  }
  // A~M 저장
  for (let i = 1; i <= 13; i++) {
    strCodeObj[String.fromCharCode(64 + i)] = 13 + i;
  }

  
  [...str].forEach(char => {
    if(char !== 'A'){
      answer = answer + Math.abs(strCodeObj[char] - startIndex);
    }
  });
  return answer + cursor;
}

//console.log(solution("JEROEN")); // 56
console.log(solution("JAZ")); // 23
