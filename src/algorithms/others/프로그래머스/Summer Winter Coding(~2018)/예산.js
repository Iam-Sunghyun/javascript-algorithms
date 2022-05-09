/**
 * Summer/Winter Coding(~2018) (https://programmers.co.kr/learn/courses/30/lessons/12982)
 * @param {number[]} d 
 * @param {number} budget 
 * @returns {number}
 */
function solution(d, budget) {
  var answer = 0;
  let cost = 0;

  d.sort((a, b) => a - b);

  for(let i = 0; i < d.length; i++){
    cost += d[i];
    if(cost > budget){
      break;
    }else if(cost <= budget){
      answer += 1;
    }
  }

  return answer;
}

console.log(solution([1,3,2,5,4], 9)); // 3
console.log(solution([2,2,3,3], 10)); // 4
console.log(solution([1,3,2,5,4], 10)); // 4
