// 백준 11659번 문자열 https://www.acmicpc.net/problem/11659
// - 함수로 다시 짜본 코드
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = input[1].split(' ').map(Number);
const M = input.slice(2);

// 2중 for문으로 풀 경우 시간 복잡도는 O(N*M) (N은 수의 개수, M은 합을 구해야 하는 횟수)
// i부터 j까지 구간 합은 j까지의 구간 합 - i까지의 구간 합인 점을 이용, 아래와 같은 방법으로 풀이하면
// 시간 복잡도를 O(N+M)으로 줄여 시간 초과를 피할 수 있다.
function solution(arr, rangeArr) {
  const sumList = [0];
  const answer = [];
  let sum = 0;

  // 누적 합 계산하여 배열에 저장
  arr.forEach(n => {
    sum += n;
    sumList.push(sum);
  });

  rangeArr.forEach(r => {
    /**
     * const [i, j] = r.split(' ').map(v => +v); 이 부분을 
     * const i = +r[2];
     * const j = +r[0]; 
     * 위와 같이 작성 했었고 오답이 계속 나왔는데 이유를 몰랐다. 등잔 밑이 어둡다고 1자리 범위만 주어진 
     * 예제에만 집중하다 보니 i와 j의 값이 2자리 이상이 될 수 있다는 사실을 간과 하였다...
     */
    const [i, j] = r.split(' ').map(v => +v);
    answer.push(sumList[j] - sumList[i - 1]);
  });
  return answer.join('\n');
}

console.log(solution(N, M));
