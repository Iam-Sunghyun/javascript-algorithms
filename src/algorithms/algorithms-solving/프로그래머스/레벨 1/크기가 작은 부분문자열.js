// https://school.programmers.co.kr/learn/courses/30/lessons/147355
function solution(t, p) {
  const len = p.length;
  const number = [...t.slice(0, len)];
  let answer = 0;

  for (let i = 0; i <= t.length - len; i++) {
    if (parseInt(number.join("")) <= parseInt(p)) {
      answer += 1;
    }
    number.shift();
    number.push(t[i + len]);
  }
  return answer;
}
