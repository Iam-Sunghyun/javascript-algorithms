// 백준 1193번 기본 수학1 https://www.acmicpc.net/problem/1193
// 문제와 같이 봐야 읽히는 코드
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(/\s/);

let target = +input[0]; 
let fractionIndex = 1;
let gap = 1;
let difference = 0;

// target이 속한 범위 찾기
// gap은 배열의 줄이 바뀌면서 시작되는 값의 인덱스(fractionIndex)를 표시하기 위함도 있지만
// 해당 fractionIndex열에 속한 분수의 분모/분자 시작 값이 되기도 한다
while(target >= fractionIndex + gap){
    fractionIndex += gap;    
    gap += 1;
}

// fractionIndex로 부터 몇번째 값인지 계산하기 위한 변수
// ex) 입력(target)이 13이면 11번째 인덱스로 시작하는 줄에서 +2번 값이라는 뜻
difference = target - fractionIndex;

if(gap % 2 === 1){
    console.log(`${gap - difference}/${1 + difference}`);
}else{
    console.log(`${1 + difference}/${gap - difference}`);
}