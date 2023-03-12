/**
 * 숫자 1~n까지의 범위 n과, 마지막 값 last가 주어졌을 때 삼각형 형태의 수열의 가장 윗 행을 구하는 함수
 * -> 파스칼 삼각형처럼 각 행의 항은 바로 윗줄의 인접한 두 항을 더한 값이 된다
 * ex)  n = 4, last = 16 :   3  1  2  4
 *                             4  3  6
 *                              7  9
 *                               16      답: 3 1 2 4
 * 그렇다면 n값과 맨 마지막 항(16)이 주어졌을 때 어떻게 첫 행의 수열을 구할 수 있을까?
 * n=4인 경우로 삼각형 형태를 그려보면 다음과 같은 형태를 띈다
 *              1       2        3        4
 *                (1+2)    (2+3)    (3+4)
 *                  (1+2+2+3)  (2+3+3+4)
 *                    1+(2x3)+(3x3)+4
 * 여기서 마지막 행의 항을 보면 첫 번째 행의 각항에 이항계수를 곱하여 더한 것과 같다는 것을 알 수 있다(n이 4이므로 1 3 3 1-> 1x1 + 2x3 + 3x3 + 4x1)
 * 그리고 파스칼 삼각형에서 n번째 행의 각 항의 계수는 n-1C0 ~ n-1Cn-1으로 표현할 수 있다. 그림은 링크 참조
 * 이러한 성질을 이용해 맨 윗 행의 이항계수를 구하고, 각 항과 곱하여 더했을 때 last가 되는 수열를 구하면 된다
 *
 * 파스칼 삼각형(이항계수) 성질
 * https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=lty2242&logNo=221091097459
 * https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=vollollov&logNo=220947452823
 * @param {number} n 숫자 범위 최대 값(1 ~ n까지 값을 의미)
 * @param {number} last 파스칼 삼각형(이항계수) 가장 마지막 값
 * @returns {number}
 */
function solution(n, last) {
  const combinationMemo = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));
  const check = new Array(n + 1).fill(false);
  const tmp = []; // 순열의 한 경우 임시 저장용
  // const permutations = []; // 순열 전체 경우 저장용
  const pascalNums = []; // 이항계수 저장용
  const answer = [];

  // 파스칼 삼각형 이항계수 구하기 위한 조합 경우의 수 계산(nCr = n-1Cr-1 + n-1Cr 이용)
  function combination(n, r) {
    if (r === 0 || n === r) return 1;
    if (combinationMemo[n][r] > 0) return combinationMemo[n][r];
    return (combinationMemo[n][r] = combination(n - 1, r - 1) + combination(n - 1, r));
  }

  // 파스칼 삼각형 성질을 이용한 이항계수 구하기
  for (let i = 0; i < n; i++) {
    pascalNums.push(combination(n - 1, i));
  }

  // 순열의 모든 경우 구하기
  function permutation(lv, sum) {
    if (lv === n) {
      if (sum === last) answer.push([...tmp])
      return;
    }
    for (let i = 1; i <= n; i++) {
      if (check[i]) continue;
      tmp[lv] = i;
      check[i] = true;
      permutation(lv + 1, sum + tmp[lv] * pascalNums[lv]);
      check[i] = false;
    }
  }
  permutation(0, 0);

  // //조합 경우와 이항계수 값을 곱하여 더한 값이 last와 일치하는 경우 구하기
  // for (let i = 0; i < permutations.length; i++) {
  //   let sum = 0;
  //   for (let j = 0; j < permutations[i].length; j++){
  //     sum += permutations[i][j] * pascalNums[j];
  //   }
  //   if (sum === last) {
  //     answer = permutations[i];
  //     break;
  //   }
  // }

  return answer;
}

console.log(solution(4, 16)); 
