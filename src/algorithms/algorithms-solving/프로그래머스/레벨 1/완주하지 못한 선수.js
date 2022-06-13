/**
 * 프로그래머스 **레벨 1** 
 * 해시 (https://programmers.co.kr/learn/courses/30/lessons/42576)
 * @param {string[]} participant 
 * @param {string[]} completion 
 * @returns {string}
 */
function solution(participant, completion) {

  participant.sort();
  completion.sort();
  let i = 0;
  for(i = 0; i < completion.length; i++){
    if(participant[i] !== completion[i]){
      return participant[i];
    }
  }
  
  return participant[i];
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]));
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));
