// 백준 1644번 투 포인터 https://www.acmicpc.net/status?user_id=sunghyun1160&problem_id=1644&from_mine=1
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);

function solution(num){
    const primeBoolean = new Array(num + 1).fill(true);
    const primeNum = [];
    primeBoolean[0] = false;
    primeBoolean[1] = false;   
    
    // 에라토스테네스의체를 이용한 소수 걸러내기
    for(let i = 2; i <= Math.floor(num**0.5); i++){
        for(let j = i * i; j <= num; j += i){
            if(primeBoolean[j] === false) continue;
            primeBoolean[j] = false;
        }
    }
    primeBoolean.forEach((num, i) => {
        if(num === true) primeNum.push(i);
    });
    
    // 투 포인터 준비
    let left = 0;
    let right = 0;
    let sum = primeNum[0];
    let answer = 0;
    // 포인터 둘 중 하나라도 유효 범위를 벗어나면 종료
    while(primeNum[left] && primeNum[right]){
        if(sum === num){
            answer++;
            right++;
            sum += primeNum[right];
        }else if(sum > num){
            sum -= primeNum[left];
            left++;
        }else{
            right++;
            sum+= primeNum[right];
        }
    }
    return answer;
}

console.log(solution(+input[0]));