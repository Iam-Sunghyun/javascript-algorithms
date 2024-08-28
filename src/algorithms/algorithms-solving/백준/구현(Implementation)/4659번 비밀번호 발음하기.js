// https://www.acmicpc.net/problem/4659
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(words) {
  const gathers = ["a", "e", "i", "o", "u"];
  const result = new Array(words.length).fill(false);

  // 1번 체크
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < gathers.length; j++) {
      if (words[i].includes(gathers[j])) {
        result[i] = true;
      }
    }
  }
  // 2번 체크
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length - 2; j++) {
      if (words[i].length > 2) {
        const [one, two, three] = [words[i][j], words[i][j + 1], words[i][j + 2]];
        if (gathers.includes(one) && gathers.includes(two) && gathers.includes(three)) {
          result[i] = false;
          break;
        } else if (!gathers.includes(one) && !gathers.includes(two) && !gathers.includes(three)) {
          result[i] = false;
          break;
        }
      }
    }
  }
  // 3번 체크
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length - 1; j++) {
      if (words[i][j] === words[i][j + 1] && words[i][j] !== "e" && words[i][j] !== "o") {
        result[i] = false;
        break;
      }
    }
  }

  const answer = result.map((n, i) =>
    n === true ? `<${words[i]}> is acceptable.` : `<${words[i]}> is not acceptable.`
  );
  return answer.join("\n");
}

console.log(solution(input.slice(0, input.length - 1)));
