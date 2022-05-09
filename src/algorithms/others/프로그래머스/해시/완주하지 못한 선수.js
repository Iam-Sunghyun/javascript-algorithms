/**
 * (https://programmers.co.kr/learn/courses/30/lessons/42576)
 * @param {string[]} participant 
 * @param {string[]} completion 
 * @returns {string} answer
 */
function solution(participant, completion) {

  participant.sort();
  completion.sort();
  console.log(participant, completion)
  for(let i = 0; i < completion.length; i++){
    if(participant[i] !== completion[i]){
      return participant[i];
    }
  }
  
  return participant[i - 1];
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]));
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));
