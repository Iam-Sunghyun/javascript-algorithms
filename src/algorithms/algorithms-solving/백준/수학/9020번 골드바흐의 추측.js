// 백준 9020번 기본 수학2 https://www.acmicpc.net/problem/9020
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);

// 소수 판별 함수
function isPrime(num){
    if(num <= 1) return false;
    if(num <= 3) return true;
    if(num % 2 === 0) return false;
    for(let i = 2; i <= Math.floor(num**0.5); i++){
        if(num % i === 0) return false;
    }
    return true;
}
// 정답 함수
function solution(num){
    const answer = [];
    // 골드바흐 파티션 구하기
    for(let i = 2; i < num; i++){
      let partition = 0;
      if(isPrime(i)){
            partition = num - i;
      }
      if(isPrime(partition)){
          answer.push([i, partition]);
      }
    }
    
    let minValue = Math.abs(answer[0][0] - answer[0][1]);
    let minDifferenceIndex = 0;
    // 골드바흐 파티션 배열에서 차가 가장 작은 요소의 인덱스 구하기
    for(let i = 1; i < answer.length; i++){
        if(minValue > Math.abs(answer[i][0] - answer[i][1])){
            minValue = Math.abs(answer[i][0] - answer[i][1]);
            minDifferenceIndex = i;
        }
    }
    return answer[minDifferenceIndex].join(' ');
}

// input 0번째 값은 필요 없으므로 1부터 
for(let i = 1; i < input.length; i++){
    console.log(solution(input[i]))
}