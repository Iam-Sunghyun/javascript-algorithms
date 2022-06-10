/**
 * 파스칼 삼각형(pascal triangle) https://en.wikipedia.org/wiki/Pascal%27s_triangle
 * - 이항계수를 삼각형 형태로 나열해 놓은 것
 * 두 항의 대수합의 거듭제곱을 전개해 놓은 것을 '이항정리'라고 한다(다항식을 쉽게 전개하기 위해 사용)
 * 이항계수는 이항정리로 전개한 식에서 각 항의 계수를 말한다 
 *  
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */
 export default function pascalTriangle(lineNumber) {
  const currentLine = [1];

  const currentLineSize = lineNumber + 1;

  for (let numIndex = 1; numIndex < currentLineSize; numIndex += 1) {
    // See explanation of this formula in README.
    currentLine[numIndex] = (currentLine[numIndex - 1] * (lineNumber - numIndex + 1)) / numIndex;
  }

  return currentLine;
}

console.log(pascalTriangle(5))