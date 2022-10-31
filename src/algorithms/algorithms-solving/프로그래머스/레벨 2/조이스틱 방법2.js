// 좌우 이동 계산에서 막힌 문제
// https://school.programmers.co.kr/learn/courses/30/lessons/42860
function solution(name) {
  let move = name.length - 1;
  let index = 0;
  // let frontToChar = 0;        // 특정 문자에서 A가 아닌 다음 문자까지 앞으로(▶) 이동하는 횟수
  // let backToChar = name.length;  // 특정 문자에서 A가 아닌 다음 문자까지 뒤(◀) 이동하는 횟수
  let answer = 0;

  for (let i = 0; i < name.length; i++) {
    // 알파벳을 고르는 데 필요한 이동 횟수 (▲ , ▼)
    const fromAtoTarget = Math.abs('A'.charCodeAt() - name[i].charCodeAt());
    const fromZtoTarget = Math.abs('Z'.charCodeAt() - name[i].charCodeAt()) + 1; // A부터 돌아가는 것이므로 이동 횟수 + 1
    const distance = Math.min(fromAtoTarget, fromZtoTarget);

    answer += distance;
    index = i + 1;
    while(index < name.length && name.charAt(index) === 'A'){
      index++;
    }
    move = Math.min(move, i * 2 + name.length - index);
    // console.log(solution("BBAAAAAC")); // 7
    // console.log(distance, a, answer);
    move = Math.min(move, (name.length - index) * 2 + 1);

  }

  return answer + move;
}

console.log(solution("JEROEN")); // 56
console.log(solution("JAZ")); // 11
console.log(solution("JAN")); // 23
console.log(solution("ZZZAZZZ")); // 12
console.log(solution("AAAAAA")); // 0

console.log(solution("AJAAAZA")); // 14
console.log(solution("AAAAZAA")); // 4
console.log(solution("BBAAAAAC")); // 7
console.log(solution("AZAAAAZ")); // 5

