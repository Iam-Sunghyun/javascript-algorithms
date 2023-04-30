// 프로그래머스 레벨2 https://school.programmers.co.kr/learn/courses/30/lessons/154538
// BFS로 해결.
function solution(x, y, n) {
  if (x === y) return 0;
  const check = new Array(1000001).fill(false);
  const queue = [x];
  let lv = 0;

  // BFS
  while (queue.length > 0) {
    const tmp = [];
    let val;
    lv += 1;
    while (queue.length > 0) {
      val = queue.shift();
      // if (val > y) return -1;
      for (const result of [val + n, val * 2, val * 3]) {
        if (check[result] === true || result > y) continue;
        if (result === y) return lv;
        check[result] = true;
        tmp.push(result);
      }
    }
    // 함수 호출할 떄, 인수를 너무 많이(대략 1000만 개 이상) 전달하면
    // Maximum call stack size exceeded 에러가 발생하는 것 주의할 것.
    // queue.push(...tmp)였던 원래 코드에서 아래와 같이 변경 후 정답처리 되었음
    if (tmp.length > 0) {
      for (let i = 0; i < tmp.length; i++){
        queue.push(tmp[i])
      }
    }
  }

  return -1;
}

console.log(solution(10, 40, 5)); // 2
console.log(solution(10, 40, 30)); // 1
console.log(solution(2, 5, 4)); // 1
console.log(solution(1, 1, 1)); // 1
console.log(solution(5, 6, 1)); // 1
console.log(solution(100000, 1000000, 5)); // 1



