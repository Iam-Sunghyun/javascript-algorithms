/**
 * (https://programmers.co.kr/learn/courses/30/lessons/42840)
 * @param {*} answers 
 * @returns 
 */
function solution(answers) {
  const answer = [0,0,0]
  const result = [];

  const first = [1,2,3,4,5];
  const second = [2,1,2,3,2,4,2,5];
  const third = [3,3,1,1,2,2,4,4,5,5];
 
  answers.forEach((element, i) => {

    if(element === first[Math.abs((first.length + i) % first.length)]){
      answer[0] += 1;
    }
    if(element === second[Math.abs((second.length + i) % second.length)]){
      answer[1] += 1;
    }
    if(element === third[Math.abs((third.length + i) % third.length)]){
      answer[2] += 1;
    }
  });
  
  let maxAnswerd = Math.max(...answer);
  answer.filter((element, i) => {
    if(element === maxAnswerd){
      result.push(i + 1);
    }
  });

  return result;
}

console.log(solution([1,2,3,4,5]));
console.log(solution([1,3,2,4,2]));
