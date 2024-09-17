// https://www.acmicpc.net/problem/10431
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

function solution(students) {
  let count = [];

  function selectSort(arr) {
    let tmp = 0;

    for (let i = 1; i < arr.length; i++) {
      const inum = arr[i];
      let indexI = i;
      let check = false;
      for (let j = indexI - 1; j >= 0; j--) {
        let indexJ = j;
        if (arr[indexJ] > inum) {
          arr.splice(indexI, 1);
          arr.splice(indexJ, 0, inum);
          indexI = indexJ;
          check = true;
        }
      }
      if (check) {
        tmp += i - indexI;
      }
    }
    count.push(tmp);
  }

  for (let i = 0; i < students.length; i++) {
    selectSort(students[i].slice(1));
  }

  return count.map((n, i) => `${i + 1} ${n}`).join("\n");
}

console.log(solution(input.splice(1)));
