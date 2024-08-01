// 백준 구현 실버5 https://www.acmicpc.net/problem/2941
const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(input) {
  const croatiaAlphabet = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
  let restOfInput = input.length; // 크로아티아 알파벳을 뺀 나머지 문자열 수 계산용
  let answer = 0;

  for (const alphabet of croatiaAlphabet) {
    // 동적으로 플래그를 사용한 정규표현식을 생성하기 위해 RegExp 생성자 함수 사용
    const regExp = new RegExp(alphabet, "g");
    const result = input.match(regExp);

    // 일치하는 크로아티아 알파벳이 하나 이상 있다면
    if (result !== null) {
      // 다음 반복에 중복 체크되지 않게(ex) dz=, z=) 다른 문자열로 대체
      input = input.replaceAll(result[0], "_".repeat(result[0].length));
      answer += result.length; // 일치하는 크로아티 알파벳 수 더해준다
      restOfInput -= result[0].length * result.length; // 전체 문자열에서 일치하는 크로아티 알파벳 수만큼 빼준다
    }
  }
  return answer + restOfInput;
}

console.log(solution(input));

// #2
function solution(str) {
  const croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
  let string = str;
  let answer = 0;
  for (let i = 0; i < croatia.length; i++) {
    const reg = new RegExp(`${croatia[i]}`, "g");
    const result = string.match(reg);

    if (result !== null) {
      answer += result.length;
      string = string.replaceAll(result[0], "_");
    }
  }
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== "_") {
      answer += 1;
    }
  }
  return answer;
}

console.log(solution(input));
