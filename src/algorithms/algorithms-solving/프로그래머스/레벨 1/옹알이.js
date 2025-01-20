// https://school.programmers.co.kr/learn/courses/30/lessons/133499
function solution(babbling) {
  const words = ["aya", "ye", "woo", "ma"];
  let answer = 0;
  for (const babble of babbling) {
    const check = new Array(4).fill(false); // 바로 이전에 사용된 문자 체크용 배열
    let str = ""; // 순회한 문자 기록용
    for (let i = 0; i < babble.length; i++) {
      str += babble[i]; // 다음 순회 문자 더해준다
      // str이 words에 포함되어 있고, 바로 이전에 나온 단어가 아니라면
      if (words.includes(str) && check[words.indexOf(str)] === false) {
        check.fill(false); // 체크 배열 초기화
        check[words.indexOf(str)] = true; // 해당 단어 체크 -> 바로 다음에 사용 불가
        str = ""; // 문자열 초기화
      }
    }
    // 문자들이 모두 발음 가능한 문자로 이루어져 있다면 answer += 1;
    if (str === "") {
      answer += 1;
    }
  }
  return answer;
}
