// https://www.acmicpc.net/problem/2608
const input = require("fs").readFileSync(0, "utf-8").toString().trim().split("\n");

function solution(list) {
  const singleMap = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);
  const doubleMap = new Map([
    ["IV", 4],
    ["IX", 9],
    ["XL", 40],
    ["XC", 90],
    ["CD", 400],
    ["CM", 900],
  ]);

  let answer = [0, ""]; // 숫자 합, 로마 기호 값

  // 두 수의 숫자 합 계산
  for (const number of list) {
    let val = 0;
    let str = "";
    for (let i = 0; i < number.length; i++) {
      if (singleMap.has(number[i])) {
        val = singleMap.get(number[i]);
        str = number[i];
      }
      if (doubleMap.has(number[i] + (number[i + 1] ?? ""))) {
        val = doubleMap.get(number[i] + number[i + 1]);
        i++;
        str = number[i] + number[i + 1];
      }
      answer[0] += val;
    }
  }

  // 두 수의 합 로마 숫자로 변환
  const numsArr = [...singleMap].concat([...doubleMap]).sort((a, b) => a[1] - b[1]); // 로마 기호 값 합친 후 오름차순 정렬
  let romeStr = "";
  let tmp = answer[0];
  // 가장 큰 값부터 나눗셈
  for (let i = numsArr.length - 1; i >= 0; i--) {
    romeStr = numsArr[i][0].repeat(Math.floor(tmp / numsArr[i][1]));
    tmp %= numsArr[i][1];
    answer[1] += romeStr;
  }

  return answer.join("\n");
}

console.log(solution(input));
