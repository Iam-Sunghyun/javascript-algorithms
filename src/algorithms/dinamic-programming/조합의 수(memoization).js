/**
 * n개중 r개를 조합으로 뽑는 가짓수 구하기
 * 파스칼 삼각형의 nCr = n-1Cr-1 + n-1Cr 점화식을 이용하여 메모이제이션으로 구현
 * @param {number} n
 * @param {number} r
 * @returns {number} 조합 가짓수
 */
function solution(n, r) {
  // 하위문제 결과 저장용 배열
  const memo = Array.from({ length: n + 1 }, () => new Array(r + 1).fill(0));

  function DFS(n, r) {
    // nCr 에서 n === r인 경우, r === 0인 경우 1이므로 1을 반환
    if (n === r || r === 0) return 1;

    // 이전에 계산한 결과가 있다면 재귀 중지
    if (memo[n][r] > 0) return memo[n][r];

    // nCr = n-1Cr-1 + n-1Cr
    return memo[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r);
  }
  DFS(n, r)
  return memo;
}

console.log(solution(4, 3));
