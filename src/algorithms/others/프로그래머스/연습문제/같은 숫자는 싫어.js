/**
 * 연습 문제 https://programmers.co.kr/learn/courses/30/lessons/12906
 * @param {number[]} arr 
 * @returns 
 */
function solution(arr){
  const answer = [arr[0]];
  let value = arr[0];

  for(let i = 1; i < arr.length; i++){
    if(value !== arr[i]){
      answer.push(arr[i]);
      value = arr[i];
    }else continue;
  }

  return answer;
}

console.log(solution([1,1,3,3,0,1,1])); // [1,3,0,1];
console.log(solution([4,4,4,3,3])); // [4,3];
