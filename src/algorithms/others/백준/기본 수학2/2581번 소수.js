// 백준 2581번 기본 수학2 https://www.acmicpc.net/problem/2581
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
    
    // 합을 구한다
    let sum = answerArray.reduce((acc, num) => acc + num, 0);
    // answerArray의 길이가 0이면 (소수가 없으면) -1을 출력한다.
    if(!answerArray.length){
        console.log(-1)
    }else{
        console.log(sum);
        console.log(answerArray[0]);
    }
  
}

getPrimeNumberFromMtoN(m, n);