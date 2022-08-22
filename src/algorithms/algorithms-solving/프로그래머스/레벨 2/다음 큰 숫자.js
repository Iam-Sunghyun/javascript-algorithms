/**
 * 프로그래머스 **레벨 2**
 * 연습문제 https://school.programmers.co.kr/learn/courses/30/lessons/12911
 */
function solution(n) {
  const binary = n.toString(2);
  let numberOfOne = countNumberOfOne(binary);
  let compare = n + 1;

  while (true) {
    let compareBinary = compare.toString(2);
    if (numberOfOne === countNumberOfOne(compareBinary)) {
      return compare
    }
    compare++;
  }
}
/**
 * '1' 개수 구하기
 * @param {String} n 
 * @returns {number}
 */
function countNumberOfOne(n) {
  let numberOfOne = 0;
  for (const num of n) {
    if (num === '1') numberOfOne += 1;
  }
  return numberOfOne;
}

console.log(solution(78)); // 83
console.log(solution(15)); // 23
