/**
 * 연습 문제 https://programmers.co.kr/learn/courses/30/lessons/12930
 * @param {string} s 
 * @returns {string}
 */
function solution(s) {
  const words = s.split(' ');
  const answer = [];
  
  for(let i = 0; i < words.length; i++){
    let word = '';
    for(let j = 0; j < words[i].length; j++){
      if(j === 0 || j % 2 === 0) word += words[i][j].toUpperCase();
      else word += words[i][j].toLowerCase();
    }
    answer.push(word);
  }

  return answer.join(' ');
}

console.log(solution('try hello world')); // TrY HeLlO WoRlD;
console.log(solution('  ')); // TrY HeLlO WoRlD;