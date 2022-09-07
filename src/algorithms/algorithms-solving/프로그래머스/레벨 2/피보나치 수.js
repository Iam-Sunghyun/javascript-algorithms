/** 
 * 프로그래머스 레벨 2
 * 연습문제 https://school.programmers.co.kr/learn/courses/30/lessons/12945
*/
function solution(n) {
  const pibonacci = new Array(n).fill(0);
  pibonacci[0] = 0;
  pibonacci[1] = 1;

  for (let i = 2; i <= n; i++) {
    pibonacci[i] = (pibonacci[i - 1] + pibonacci[i - 2]) % 1234567;
  }
  return +pibonacci[n];
}



console.log(solution(3)); //2
console.log(solution(5)); //5
console.log(solution(10)); //5

