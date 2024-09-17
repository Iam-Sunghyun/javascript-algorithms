// https://www.acmicpc.net/problem/1759
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" "));

function solution(L, C) {
  // 최소 한 개 모음(a,e,i,o,u) 두 개의 자음
  C.sort();
  const tmp = [];
  const answer = [];

  function combination(lv, start) {
    if (lv === +L) {
      const result = [...tmp];
      const vowels = countVowels(result);
      if (vowels > 0 && result.length - vowels > 1) {
        answer.push(result.join(""));
      }
      return;
    }
    for (let i = start; i < C.length; i++) {
      tmp.push(C[i]);
      combination(lv + 1, i + 1);
      tmp.pop();
    }
  }

  for (let i = 0; i <= C.length - L; i++) {
    tmp.push(C[i]);
    combination(1, i + 1);
    tmp.pop();
  }

  return answer.join("\n");
}

function countVowels(target) {
  const vowel = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < target.length; i++) {
    if (vowel.includes(target[i])) {
      count += 1;
    }
  }
  return count;
}

console.log(solution(input[0][0], input[1]));
