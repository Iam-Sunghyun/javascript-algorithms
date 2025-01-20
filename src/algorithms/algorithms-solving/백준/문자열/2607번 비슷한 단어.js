// https://www.acmicpc.net/problem/2607
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');

function solution(target, words) {
  let answer = 0;

  for (let i = 0; i < words.length; i++) {
    const tmp = [...target];
    let score = 0;

    for (let j = 0; j < words[i].length; j++) {
      // words[i] 문자열의 j번째 문자가 target 문자열에 포함되어 있다면 tmp에서 제거
      if (tmp.includes(words[i][j])) {
        tmp.splice(tmp.indexOf(words[i][j]), 1);
      } else {
        // 포함 돼있지 않다면 -1
        score -= 1;
      }
    }

    // target 문자와 words[i] 문자를 비교했을 때 철자가 다르거나, 없는 부분이 2개 미만인 경우 answer += 1;
    // tmp.length를 한번 더 확인해주는 이유는 target 문자보다 words[i] 문자가 짧을 경우 tmp에 문자들이 남겨져 있는 채로 반복문이 끝나버린다. 따라서 tmp에 남겨져 있는 문자열 개수도 2개 미만인지 확인해줘야 한다(2개 미만이면 바꾸거나 제거해서 비슷한 단어로 만들 수 있다).
    if (score > -2 && tmp.length < 2) {
      answer += 1;
    }
  }
  return answer;
}

console.log(solution(input[1], input.slice(2)));
