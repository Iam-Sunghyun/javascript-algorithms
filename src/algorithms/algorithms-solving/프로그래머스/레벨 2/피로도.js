// https://school.programmers.co.kr/learn/courses/30/lessons/87946
function solution(k, dungeons) {
  let answer = 0;
  let answer2= 0
  let a = k;
  let b = k;
  // 최소 필요 피로도와 소모 피로도의 차가 큰 값부터 내림차순 정렬
  dungeons.sort((a, b) => {
    const val = Math.abs(b[0] - b[1]) - Math.abs(a[0] - a[1]);
    return val === 0 ? a[0] - b[0] : val;
  });
  // 던전 최소 필요 피로도가 k값 보다 클 경우 던전을 돌고 횟수 +1 해줌
  dungeons.forEach(d => {
    if (a >= d[0]) {
      a -= d[1];
      answer += 1;
    }
  });

  // 던전 최소 필요 피로도가 k값 보다 클 경우 던전을 돌고 횟수 +1 해줌
  for(let i = dungeons.length - 1; i >= 0; i--){
    if (b >= dungeons[i][0]) {
      b -= dungeons[i][1];
      answer2 += 1;
    }
  }
  return max[answer, answer2];
}

// console.log(solution(80, [[80, 20], [50, 40], [30, 10]])); // 3
// console.log(solution(90, [[80, 20], [90, 30], [40, 30], [20, 10]])); // 2
console.log(solution(40, [[40, 20], [10, 10], [10, 10], [10, 10], [10, 10]])); // 2
