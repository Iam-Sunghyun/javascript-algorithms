// 무대뽀 or 파스칼삼각형 이용 문제 https://www.acmicpc.net/problem/2775
// 오답 뜬 코드. 예시와 몇몇 입력은 맞는데 반례를 못찾은 상태.
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);
let T = 1;

function pascalTriangle(lineNumber) {
  const currentLine = [1];

  const currentLineSize = lineNumber + 1;

  for (let numIndex = 1; numIndex < currentLineSize; numIndex += 1) {
    // See explanation of this formula in README.
    currentLine[numIndex] = (currentLine[numIndex - 1] * (lineNumber - numIndex + 1)) / numIndex;
  }

  return currentLine;
}
for(let i = 0; i < input[0]; i++){
    console.log(pascalTriangle(+input[T+1] + +input[T])[input[T+1] - 1]);
    T = T +input[0]
}