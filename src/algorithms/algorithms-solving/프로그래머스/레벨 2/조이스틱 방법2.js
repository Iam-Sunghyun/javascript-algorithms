function solution(name) {
  const A = 'A'.charCodeAt();
  const Z = 'Z'.charCodeAt();
  let frontToChar = 0;
  let backToChar = name.length;
  let answer = 0;

  for (let i = 0; i < name.length; i++) {
    const fromAtoChar = Math.abs(A - name[i].charCodeAt());
    const fromZtoChar = Math.abs(Z - name[i].charCodeAt()) + 1; // A부터 돌아가는 것이므로 이동 횟수 + 1
    let distance = fromAtoChar < fromZtoChar ? fromAtoChar : fromZtoChar;

    answer += distance;
    console.log(distance, frontToChar, backToChar)
    if (name[i] === 'A') {
      frontToChar += 1;
      backToChar -= 1;
    } else if(frontToChar > 1) {
      answer = answer + Math.min(frontToChar, backToChar);
      frontToChar = 0;
      backToChar = name.length;
    } else {
      answer += 1;
    }
  }
  
  return answer === 0 ? 0 : answer;
}

 console.log(solution("JEROEN")); // 56
 console.log(solution("JAZ")); // 11
//  console.log(solution("JAN")); // 23
//  console.log(solution("ZZZAZZZ")); // 23
//  console.log(solution("AJAAAZA")); // 23
// console.log(solution("AAAAAA")); // 23
// console.log(solution("AAAAZAA")); // 23

