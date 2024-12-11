// https://school.programmers.co.kr/learn/courses/30/lessons/155652#
function solution(s, skip, index) {
  let answer = "";
  for (const str of s) {
    let i = 0;
    let strCode = str.charCodeAt();
    while (i !== index) {
      strCode += 1;
      if (strCode > 122) strCode -= 26;
      if (skip.includes(String.fromCodePoint(strCode))) {
        continue;
      }
      i += 1;
    }

    answer += String.fromCodePoint(strCode);
  }

  return answer;
}
