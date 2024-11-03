// https://www.acmicpc.net/problem/1331
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(""));

function solution(list) {
  const strSet = new Set([...list.map((n) => n.join(""))]);

  if (strSet.size < 36) return "Invalid";
  //   console.log(strSet)
  for (let i = 0; i < list.length - 1; i++) {
    const [currentStr, targetStr] = [list[i][0].charCodeAt(), list[i + 1][0].charCodeAt()];

    const codeDiff = Math.abs(currentStr - targetStr);
    const numDiff = Math.abs(+list[i][1] - +list[i + 1][1]);

    if ((codeDiff === 1 && numDiff === 2) || (codeDiff === 2 && numDiff === 1)) {
      //   console.log(codeDiff, numDiff, list[i], list[i + 1])
      continue;
    } else {
      return "Invalid";
    }
  }

  const firstAndLastStrDiff = Math.abs(+list[0][1] - +list.at(-1)[1]);
  const firstAndLastNumDiff = Math.abs(list[0][0].charCodeAt() - list.at(-1)[0].charCodeAt());
  if (
    (firstAndLastStrDiff === 2 && firstAndLastNumDiff === 1) ||
    (firstAndLastStrDiff === 1 && firstAndLastNumDiff === 2)
  ) {
    //   console.log(list[0], list.at(-1),firstAndLastStrDiff, firstAndLastNumDiff)
    return "Valid";
  } else {
    return "Invalid";
  }
}

console.log(solution(input));

// D4 -> C2, C6, F5, F3, E2, E6, B3, B5
