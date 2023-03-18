/**
 * 프로그래머스 레벨 1
 * https://school.programmers.co.kr/learn/courses/30/lessons/159994
 */
function solution(cards1, cards2, goal) {
  let [card1Index, cards2Index] = [0, 0];
  let answer = 'Yes';

  for (let i = 0; i < goal.length; i++){
    if (goal[i] === cards1[card1Index]){
      card1Index++;
      continue;
    }
    if (goal[i] === cards2[cards2Index]) {
      cards2Index++;
      continue;
    }
    answer = 'No';
  }

  return answer;
}

console.log(solution(["i", "drink", "water"], ["want", "to"], ["i", "want", "to", "drink", "water"]));
console.log(solution(["i", "water", "drink"], ["want", "to"], ["i", "want", "to", "drink", "water"]));