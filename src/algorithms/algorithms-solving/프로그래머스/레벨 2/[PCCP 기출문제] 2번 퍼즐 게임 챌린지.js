// https://school.programmers.co.kr/learn/courses/30/lessons/340212
// *이진탐색*을 이용한 풀이
function solution(diffs, times, limit) {
  let max = -Infinity;
  for (let i = 0; i < diffs.length; i++) {
    max = Math.max(diffs[i], max);
  }

  let left = 1;
  let right = max;
  let answer = +Infinity;
  while (left <= right) {
    let level = Math.floor((left + right) / 2);
    let sum = 0;
    for (let i = 0; i < diffs.length; i++) {
      if (diffs[i] <= level) {
        sum += times[i];
      } else if (diffs[i] > level) {
        sum += ((times[i - 1] ?? 0) + times[i]) * (diffs[i] - level) + times[i];
      }

      if (sum > limit) {
        left = level + 1;
        break;
      }
    }
    if (limit >= sum) {
      answer = Math.min(answer, level);
      right = level - 1;
    }
  }
  return answer;
}
