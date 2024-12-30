// https://school.programmers.co.kr/learn/courses/30/lessons/133502
function solution(ingredient) {
  const stack = [];
  let answer = 0;

  for (let i = 0; i < ingredient.length; i++) {
    // 우선 stack에 push
    stack.push(ingredient[i]);

    // push되는 값이 1이라면 stack 맨 끝부터 맨 끝 -3 까지 값 1->3->2->1 순 인지 확인
    if (ingredient[i] === 1) {
      // 맞다면 4개 요소 pop() 해주고 answer += 1;
      if (stack.at(-1) === 1 && stack.at(-2) === 3 && stack.at(-3) === 2 && stack.at(-4) === 1) {
        for (let i = 0; i < 4; i++) {
          stack.pop();
        }
        answer += 1;
      }
    }
  }
  return answer;
}
