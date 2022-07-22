// https://www.acmicpc.net/problem/7568
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\n/);
const list = input.slice(1);

function solution(n) {
  // 등수 기록용 배열
  const answer = new Array(n.length).fill(1); 
  // 입력 값 쓰기 쉽게 가공하기
  const list = n.map(spec => spec.split(' ').map(Number)); // 

  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length; j++) {
        if(i === j) continue;
      if (list[i][0] < list[j][0] && list[i][1] < list[j][1]) { // 키, 체중 모두 큰 사람이 있으면 등수 +1
        answer[i] += 1;
      }
    }
  }

  return answer.join(' ');
}

console.log(solution(list));