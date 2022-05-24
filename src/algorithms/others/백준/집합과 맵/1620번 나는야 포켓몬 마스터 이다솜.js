// 집합과 맵 1620번 https://www.acmicpc.net/problem/1620
// 백준 nodejs(linux 기반)와 내 컴퓨터 nodejs(window 기반)의 입력이 다르게 들어와서 고생함
// 이 문제 이후로 백준 문제는 jdoodle 이란 리눅스 기반 nodejs 실행 환경으로 테스트 해볼 것!
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split(/\s/);

const n = +input[0];
const myPockemon = new Map(input.slice(2, n + 2).map((p, i) => [p, i + 1]));
const targetPockemon = input.slice(n + 2);
const answer = [];

for(const pockemon of targetPockemon){
    if(Number.isNaN(+pockemon)) answer.push(myPockemon.get(pockemon));
    else answer.push(input[+pockemon + 1]);
}

console.log(answer.join('\n'))