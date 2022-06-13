/**
 * 프로그래머스 **레벨 1** 
 * 2018 KAKAO BLIND RECRUITMENT (https://programmers.co.kr/learn/courses/30/lessons/17681)
 * @param {number} n 
 * @param {number[]} arr1 
 * @param {number[]} arr2 
 * @returns {string[]}
 */
function solution(n, arr1, arr2) {

  const answer = [];

  // &(AND) ^(XOR) |(OR) 
  // 비트 연산자 사용하면 아주아주 간단한 문제였다
  for(let i = 0; i < n; i++){
    answer.push((arr1[i] | arr2[i]).toString(2));
    answer[i] = '0'.repeat(n - answer[i].length) + answer[i];
    answer[i] = answer[i].replace(/[10]/g, a => +a ? '#' : ' ');
  }
  
  return answer;
}

console.log(solution(5, [1, 1, 1, 1, 1], [2, 1, 1, 2, 1]));
console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
// ["#####","# # #", "### #", "# ##", "#####"]
console.log(solution(6, [46, 33, 33 ,22, 31, 50], [27 ,56, 19, 14, 14, 10]));
// ["######", "### #", "## ##", " #### ", " #####", "### # "]