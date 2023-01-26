/**
 * 프로그래머스 **레벨 2**
 * 연습문제 https://school.programmers.co.kr/learn/courses/30/lessons/132265
 */
function solution(topping) {
  const count = [0];
  const answer = []
  
  // 각 토핑의 개수 기록
  topping.forEach(n => {
    count[n] = count[n] + 1 || 1;
  });

  // kinds => 체크한 토핑 종류
  // rest => 남은 토핑 종류
  let kinds = new Set();
  let rest = new Set(topping);

  // 토핑 순회하면서 반반되는 지점 기록
  for (let i = 0; i < topping.length - 1; i++){
    count[topping[i]] -= 1;  // 확인한 토핑 뺴준다
    kinds.add(topping[i]);   // 체크한 토핑의 종류를 기록

    if (count[topping[i]] === 0) rest.delete(topping[i]);  // 특정 토핑이 전체 수가 0개가 되면 남은 토핑 집합에서 제거
    if (rest.size === kinds.size) answer.push(i);          // 확인했던 토핑 종류와, 남은 토핑 종류가 같은 경우 공평한 배분 지점이므로 기록 
  }

  return answer.length;
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2])); // 2
console.log(solution([1, 2, 3, 1, 4])); // 0
console.log(solution([1, 1, 1])); // 2
console.log(solution([1, 1, 1, 1, 1, 2])); // 1
console.log(solution([1, 1, 1])); // 2
console.log(solution([1,2])); // 1

