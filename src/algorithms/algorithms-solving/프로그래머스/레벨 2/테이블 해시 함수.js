/**
 * 프로그래머스 **레벨 2**
 * https://school.programmers.co.kr/learn/courses/30/lessons/147354
 */
function solution(data, col, row_begin, row_end) {
  let sum = []; // S_i 합 저장용
  let result = 0; // 비트 연산 결과 저장용

  // col번째 컬럼 값을 기준으로 오름차순 정렬
  data.sort((a, b) => {
    if (a[col - 1] === b[col - 1]) return b[0] - a[0]; // col번째 컬럼 값이 같다면 첫 번째 컬럼 값 기준으로 내림차순 정렬
    return a[col - 1] - b[col - 1];
  });

  // S_i 계산하여 sum에 저장
  for (let i = row_begin - 1; i <= row_end - 1; i++) {
    let S_i = 0;
    for (let j = 0; j < data[i].length; j++) {
      S_i += data[i][j] % (i + 1);
    }
    sum.push(S_i);
  }

  result = sum[0];

  // bitwise XOR 계산
  for (let i = 1; i < sum.length; i++) {
    result ^= sum[i];
  }

  return result;
}

console.log(solution([[2,2,6],[1,5,10],[4,2,9],[3,8,3]], 2, 2, 3)); // 4