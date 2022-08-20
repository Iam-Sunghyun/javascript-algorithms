/**
 * 프로그래머스 **레벨 2**
 * 연습문제 https://school.programmers.co.kr/learn/courses/30/lessons/12951
 */
function solution(s) {

    // 공백인 문자열도 살려야된다!
  let chars = s.split(/\s/g).map(c => c.toLowerCase());

  for (let i = 0; i < chars.length; i++) {

    // 문자열이 공백인 경우 continue
    if (chars[i] === '') continue;
    chars[i] = chars[i][0].toUpperCase() + chars[i].slice(1);
  }

  return chars.join(' ');
}

console.log(solution('3people unFollowed me')); // "3people Unfollowed Me"
console.log(solution('for the  last week')); // "For The  Last Week"
console.log(solution('     ')); // "     "

