/**
 * trial Division -> 소수 판별법(primality test)중 하나로 직접 나누기, 시험 분할 정도로 해석되는 듯
 * @param {number} number
 * @return {boolean}
 */
export default function trialDivision(number) {
  // 정수인지 우선 판별
  if (number % 1 !== 0) {
    return false;
  }

  if (number <= 1) {
    // 정수인데 1이하일 경우 false(소수 아니므로)
    return false;
  }

  if (number <= 3) {
    // 정수이면서 0,1이 아니면서 3보다 작은 수(2,3)일 경우 소수
    return true;
  }

  // 짝수일 경우 false
  if (number % 2 === 0) {
    return false;
  }

  // 3부터(2로 나누어 지는 값이면 소수가 아니고 바로 위 조건식에서 걸러짐) 
  // n의 제곱근이하 값 중 n의 약수가 없으면 소수! (반복마다 2씩 증가시키는 이유는 바로 위에서 짝수가 아닌 것을 알았기 때문)
  const dividerLimit = Math.sqrt(number);
  for (let divider = 3; divider <= dividerLimit; divider += 2) {
    if (number % divider === 0) {
      return false;
    }
  }
  return true;
}