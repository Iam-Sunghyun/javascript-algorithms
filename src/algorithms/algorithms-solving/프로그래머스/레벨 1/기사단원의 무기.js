// https://school.programmers.co.kr/learn/courses/30/lessons/136798
function solution(number, limit, power) {
  const answer = [];
  for (let i = 1; i <= number; i++) {
    let count = 0;
    // 약수는 1부터 i 제곱근 값 이하로만 확인하면서 1 ~ i제곱근 이하 숫자로 나눗셈 했을 때 곱해지는 숫자(몫)를 포함시키면 약수를 구할 수 있다.
    for (let j = 1; j <= Math.floor(i ** 0.5); j++) {
      if (i % j === 0) {
        count += 1;
        if (i / j !== j) {
          count += 1;
        }
      }
    }
    answer.push(count > limit ? power : count);
  }

  return answer.reduce((acc, n) => acc + n, 0);
}
