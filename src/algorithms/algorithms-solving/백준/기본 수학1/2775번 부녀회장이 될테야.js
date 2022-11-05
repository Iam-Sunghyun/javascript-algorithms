// 무대뽀 or 파스칼삼각형 이용 문제 https://www.acmicpc.net/problem/2775
// 정답 참고 https://seokjun.gatsbyjs.io/posts/coding/javascript/baekjoon/basicmath1/2775/
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);
const line = input.slice(1).map(Number);

function pascalTriangle(lineNumber) {
  const currentLine = [1];

  const currentLineSize = lineNumber + 1;

  for (let numIndex = 1; numIndex < currentLineSize; numIndex += 1) {
    // See explanation of this formula in README.
    currentLine[numIndex] = (currentLine[numIndex - 1] * (lineNumber - numIndex + 1)) / numIndex;
  }

  return currentLine;
}

// for(let i = 0; i < input[0]; i++){
//     console.log(pascalTriangle(+input[T+1] + +input[T])[input[T+1] - 1]);
//     T = T +input[0]
// }

console.log(pascalTriangle(1))