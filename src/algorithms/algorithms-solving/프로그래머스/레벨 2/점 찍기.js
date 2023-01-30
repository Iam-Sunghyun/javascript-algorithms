/**
 * 프로그래머스 **레벨 2**
 * https://school.programmers.co.kr/learn/courses/30/lessons/140107
 */
function solution(k, d) {
  let answer = 0;

  // 직각 삼각형의 빗변 길이의 제곱은 x^2 + y^2 인 점을 이용한다
  // 빗변은 매개변수 d에 주어지므로 아래와 같이 x축의 각 지점(a * k, (a = 0, 1, 2, 3..))마다 y값을 계산해줄 수 있다
  // d^2 = x^2 + y^2 => y^2 = d^2 - x^2
  // 각 지점의 y축 길이를 k로 나눈 몫이 찍을수 있는 점의 갯수이다
  for (let x = 0; x <= d; x += k) {
    let y = Math.floor(Math.sqrt(d ** 2 - x ** 2));
    answer += Math.floor(y / k) + 1;
  }
  return answer;
}

console.log(solution(2, 4)); // 6
console.log(solution(1, 5)); // 26
