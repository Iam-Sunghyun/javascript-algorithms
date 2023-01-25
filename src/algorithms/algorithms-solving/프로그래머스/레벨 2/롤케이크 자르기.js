// https://school.programmers.co.kr/learn/courses/30/lessons/132265
function solution(topping) {
  const count = [0];
  const answer = []
  
  // 각 토핑의 개수 기록
  topping.forEach(n => {
    count[n] = count[n] + 1 || 1;
  });

  // 결과가 명백한 경우 체크 
  // if (count.length - 1 === 1) return count[1] - 1;  // 토핑 종류가 하나인 경우
  // if (topping.length === 1) return 0;               // 토핑 개수가 하나인 경우

  // kinds => 체크한 토핑 종류
  // rest => 남은 토핑 종류
  let kinds = new Set();
  let rest = new Set(topping);

  // 토핑 순회하면서 반반되는 지점 기록
  for (let i = 0; i < topping.length - 1; i++){
    count[topping[i]] -= 1;
    kinds.add(topping[i]);

    if (count[topping[i]] === 0) rest.delete(topping[i]);
    if (rest.size === kinds.size) answer.push(i);
  }

  return answer.length;
}

// console.log(solution([1, 2, 1, 3, 1, 4, 1, 2])); // 2
// console.log(solution([1, 2, 3, 1, 4])); // 0
// console.log(solution([1, 1, 1])); // 2
// console.log(solution([1, 1, 1, 1, 1, 2])); // 0
console.log(solution([1, 1, 1])); // 0
console.log(solution([1,2])); // 0




