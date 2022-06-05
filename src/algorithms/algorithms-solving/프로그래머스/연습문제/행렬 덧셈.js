/**
 * 
 * @param {*} arr1 
 * @param {*} arr2 
 * @returns 
 */
function solution(arr1, arr2) {
  const answer = [...arr1];

  for(let i = 0; i < arr1.length; i++){
    for(let j = 0; j < arr1[i].length; j++){
      answer[i][j] += arr2[i][j]
    }
  }
  return answer;
}

console.log(solution([[1,2],[2,3]],[[3,4],[5,6]])); // [[4,6],[7,9]]