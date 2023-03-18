/**
 * 프로그래머스 레벨 2
 * https://school.programmers.co.kr/learn/courses/30/lessons/154539
 */
function solution(numbers) {
  const answer = new Array(numbers.length).fill(-1); // 뒷 큰 수가 없는 경우 대비 -1로 초기화
  const stack = []; // 뒷 큰 수가 결정되지 않은 요소 인덱스 저장용

  for (let i = 0; i < numbers.length; i++) {
    // 어떤 수의 뒷 큰 수(numbers[i])가 발견됐다면 해당 뒷 큰 수보다 앞선 요소 중에서 뒷 큰 수보다 크기가 작은 값들의 뒷 큰 수를 numbers[i]로 설정한다
    // 이전 요소를 체크할 때는 뒷 큰 수가 결정되지 않은 요소들의 인덱스를 저장한 stack의 맨 끝 값을 확인한다
    while (stack.length > 0 && numbers[stack.at(-1)] < numbers[i]) {
      answer[stack.pop()] = numbers[i];
    }
    stack.push(i);
  }
  return answer;
}

console.log(solution([2, 3, 3, 5])); // [3, 5, 5, -1]
console.log(solution([9, 1, 5, 3, 6, 2])); // [3, 5, 5, -1]
