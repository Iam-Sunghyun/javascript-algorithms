// 백준 10250번 기본 수학1 https://www.acmicpc.net/problem/10250
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);

for(let i = 1; i < input[0] * 3 + 1; i += 3){
  let floor = 0;
  let unit = 0;
  
  // 층 수 계산
  if(input[i+2] % input[i] === 0){
      floor = input[i];
  }else{
      floor = input[i+2] % input[i];
  }
  
  // 몇호인지 계산
  unit = String(Math.ceil(input[i+2] / input[i]));
  // 묶을 방 호수 자릿수 한 자리 일 경우 중간에 0을 채워 넣어 줌
  if(unit.length === 1){
      unit = '0' + unit
  }
  // 묶을 방 출력
  console.log(floor + unit);
 
}