// https://school.programmers.co.kr/learn/courses/30/lessons/12953
function solution(n) {
  let num = +n.slice(-1);
  let answer = num;
  
  // 입력 값 중 가장 큰 값을 기준으로 나머지 요소들이 약수인지 체크
  while (true) {
    for (let i = 0; i < n.length - 1; i++) {
      // 배열의 i번째 값이 가장 큰 값의 약수가 아니면 break
      if(answer % n[i] !== 0) break;
      // 마지막 값 제외하고 모두 약수라면 return answer
      if(i === n.length - 2) return answer;
    }
    // 가장 큰 값 배수
    answer += num;
  }
}

console.log(solution([2, 6, 8, 14]));