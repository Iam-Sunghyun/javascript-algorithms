/**
 * 프로그래머스 레벨 2
 * 2022 KAKAO TECH INTERNSHIP https://school.programmers.co.kr/learn/courses/30/lessons/118667
 */
function solution(queue1, queue2) {
  const queue = [...queue1, ...queue2];
  let sum1 = [...queue1].reduce((acc, n) => acc + n);
  let sum2 = [...queue2].reduce((acc, n) => acc + n);
  const target = (sum1 + sum2) / 2;
  let count = 0;
  let i = 0;
  let j = queue1.length;

  // 대상 값과 비교해서 합이 큰 배열의 맨 앞 요소를 pop하여 나머지 배열에 push 반복
  while (count <= queue.length * 2) {
    if (sum1 === target) return count;

    if (sum1 > target) {
      sum1 -= queue[i];
      i++;
    } else if (sum1 < target) {
      sum1 += queue[j];
      j++;
    }
    count += 1;
  }
  return -1;
}

console.log(solution([3, 2, 7, 2], [4, 6, 5, 1])); // 2
console.log(solution([1, 2, 1, 2], [1, 10, 1, 2])); // 7
console.log(solution([1, 1], [1, 5])); // -1
