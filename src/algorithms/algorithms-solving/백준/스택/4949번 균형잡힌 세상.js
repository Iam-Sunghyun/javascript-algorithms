const filePath = process.platform === 'linux' ? '/dev/stdin' : 'C:/Users/Administrator/Desktop/javascript-algorithms/javascript-algorithms/input.txt';
const input = require("fs").readFileSync(filePath).toString().split('\n');
const arr = input.slice(0, input.length - 1);

function solution(str) {
  const answer = [];
  for(let i of str){
      const count = [0, 0, 0];
      i = i.match(/[\[\(\[\{\}\]\)\]]/g);
      if(!i) {
          answer.push('yes');
          continue;
      }
      if(i.length % 2 === 1) {
          answer.push('no');
          continue;
      }
      for(let j of i){
          
          switch (j){
              case '(':
                  count[0] += 1;
                  break;
              case '{':
                  count[1] += 1;
                  break;
              case '[':
                  count[2] += 1;
                  break;
                  
              case ')':
                  count[0] -= 1;
                  break;
              case '}':
                  count[1] -= 1;
                  break;
              case ']':
                  count[2] -= 1;
                  break;
          }
         if(count[0] < 0 || count[1] < 0 || count[2] < 0) break;
      }
      answer.push((count[0] !== 0 || count[1] !== 0 || count[2] !== 0) ? 'no' : 'yes');
  }
    return answer.join('\n');
}

console.log(solution(arr));