// https://school.programmers.co.kr/learn/courses/30/lessons/389478
function solution(n, w, num) {
  const box = [];
  let index = 1;

  while (index <= n) {
    const tmp = [];
    while (index % w !== 0) {
      if (index > n) {
        tmp.push(undefined);
      } else {
        tmp.push(index);
      }
      index += 1;
    }
    if (index > n) {
      tmp.push(undefined);
    } else {
      tmp.push(index);
    }

    if (Math.floor(index / w) % 2 === 0) {
      tmp.reverse();
    }
    box.push(tmp);
    index += 1;
  }

  let targetIndex = Math.floor((num - 1) / w);
  let i = box[targetIndex].indexOf(num);
  let answer = 1;
  while (box[targetIndex + 1]?.[i] !== undefined) {
    targetIndex += 1;
    answer += 1;
  }

  return answer;
}
