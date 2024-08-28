// https://www.acmicpc.net/problem/5800
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number).slice(1));

function solution(classes) {
  let [max, min, gap] = [[], [], []];
  for (let i = 0; i < classes.length; i++) {
    // 최대 최소 계산
    classes[i].sort((a, b) => b - a);
    max.push(classes[i][0]);
    min.push(classes[i][classes[i].length - 1]);

    // 인접 최대 갭 계산
    let maxGap = -Infinity;
    for (let j = 0; j < classes[i].length - 1; j++) {
      maxGap = Math.max(maxGap, classes[i][j] - classes[i][j + 1]);
    }
    gap.push(maxGap);
  }

  const answer = [];
  for (let i = 0; i < max.length; i++) {
    answer.push(`Class ${i + 1}`);
    answer.push(`Max ${max[i]}, Min ${min[i]}, Largest gap ${gap[i]}`);
  }

  return answer.join("\n");
}

console.log(solution(input.slice(1)));
