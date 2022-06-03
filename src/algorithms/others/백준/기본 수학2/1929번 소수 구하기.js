// 백준 1929번 기본 수학2 https://www.acmicpc.net/problem/1929
// 1978번 함수를 그대로 재사용함. 
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);

const m = +input[0];
const n = +input[1];

function getPrimeNumberFromMtoN(M, N){
    // 에라토스테네스의체 연산을 위한 배열 준비
    const primeArray = new Array(N + 1).fill(true);
    primeArray[0] = false;
    primeArray[1] = false;
    
    const answerArray = [];

    // n이하의 소수를 에라토스테네의체를 이용해 구하고, 배열에 저장한다
    for(let i = 2; i <= Math.floor(N**0.5); i++){
        for(let j = i*i; j <= N; j += i){
            if(primeArray[j] === false) continue;
            primeArray[j] = false;
        }
    }
    // primeArray 배열에서 소수이면서 m이상인 값들만 answer 배열에 저장한다
    primeArray.forEach((num, i) => { if(num === true && i >= M) answerArray.push(i) });
    
    console.log(answerArray.join('\n'));
}

getPrimeNumberFromMtoN(m, n);