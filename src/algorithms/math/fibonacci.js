/**
 * 피보나치 수 배열 구하는 함수
 * @param {number} n 
 * @return {number[]} fibSequence
 */
export default function fibonacci(n) {
  const fibSequence = [1];

  let currentValue = 1;
  let previousValue = 0;

  if (n === 1) {
    return fibSequence;
  }

  // 1번째 1은 이미 배열에 넣어줬기 때문에 n - 1
  let iterationsCounter = n - 1;

  while (iterationsCounter) {
  // 다음 currentValue는 현재currentvalue + 현재previousValue
    currentValue += previousValue;
  // 다음 previousValue는 다음currentValue - 현재previousValue 
    previousValue = currentValue - previousValue;

    fibSequence.push(currentValue);

    iterationsCounter -= 1;
  }

  return fibSequence;
}
