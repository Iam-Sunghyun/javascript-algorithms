// https://school.programmers.co.kr/learn/courses/30/lessons/178870
function solution(sequence, k) {
  let [left, right] = [0, 0];
  let sum = sequence[left];
  const answer = [];
  while (left < sequence.length) {
    if (sum < k && right + 1 < sequence.length) {
      right++;
      sum += sequence[right];
    }

    if (sum > k && left + 1 < sequence.length) {
      sum -= sequence[left];
      left++;
    }

    if (sum === k) {
      answer.push([left, right]);
      sum -= sequence[left];
      left++;
      if (right + 1 < sequence.length) {
        right++;
        sum += sequence[right];
      }
    }
    if (
      (left === right && left === sequence.length - 1) ||
      (sum < k && right === sequence.length - 1)
    ) {
      break;
    }
  }
  return answer.sort((a, b) => {
    if (Math.abs(a[0] - a[1]) > Math.abs(b[0] - b[1])) {
      return +1;
    } else if (Math.abs(a[0] - a[1]) < Math.abs(b[0] - b[1])) {
      return -1;
    } else {
      return 0;
    }
  })[0];
}
