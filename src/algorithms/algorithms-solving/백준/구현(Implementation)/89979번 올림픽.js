// https://www.acmicpc.net/problem/8979
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

function solution(target, numbers) {
  const result = new Array(numbers.length).fill(0);

  // 메달 별로 비교하여 정렬
  numbers.sort((a, b) => {
    if (a[1] === b[1] && a[2] === b[2] && a[3] === b[3]) {
      return 0;
    }
    if (a[1] === b[1] && a[2] === b[2]) {
      return b[3] - a[3];
    }
    if (a[1] === b[1]) {
      return b[2] - a[2];
    }
    return b[1] - a[1];
  });

  // 동률인 경우 순위 계산
  const answer = [1];
  let ranking = 1;
  let same = 1;
  for (let i = 1; i < numbers.length; i++) {
    if (
      numbers[i][1] === numbers[i - 1][1] &&
      numbers[i][2] === numbers[i - 1][2] &&
      numbers[i][3] === numbers[i - 1][3]
    ) {
      answer.push(ranking);
      same += 1;
      continue;
    }
    ranking += same;
    answer.push(ranking);
    same = 1;
  }

  let index = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i][0] === target) {
      index = i;
    }
  }

  return answer[index];
}
console.log(solution(input[0][1], input.slice(1)));
