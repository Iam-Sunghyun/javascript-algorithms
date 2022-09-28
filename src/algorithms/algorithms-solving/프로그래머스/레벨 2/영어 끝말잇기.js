/**
 * 프로그래머스 레벨 2
 * Summer/Winter Coding(~2018) https://school.programmers.co.kr/learn/courses/30/lessons/12981
 */
function solution(n, words) {
  const count = {};
  let raps = 1;

  for (let i = 0; i < words.length; i++) {
    count[words[i]] = count[words[i]] + 1 || 1;

    if (count[words[i]] === 2) return [(i % n) + 1, raps];

    
    if (i > 0 && words[i][0] !== words[i - 1][words[i - 1].length - 1]) return [(i % n) + 1, raps];

    if ((i + 1) % n === 0) raps += 1;
  }

  return [0, 0];
  // 중간에 RETURN 안됐던 코드 이유 -> 예외를 던지지 않고는 forEach()를 중간에 멈출 수 없습니다. - MDN
  // words.forEach((word, i) => {
  //   count[word] = count[word] + 1 || 1;
  //   if (count[word] === 2) return [raps, (i % n) + 1];
  //   if (i % n === 0) raps += 1;
  // });
} 

console.log(solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"])); // [3, 3]
console.log(solution(5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"])); // [0, 0]
console.log(solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])); // [0, 0]
