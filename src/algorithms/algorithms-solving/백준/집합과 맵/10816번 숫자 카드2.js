// 백준 10816번 집합과 맵 https://www.acmicpc.net/problem/10816
// 코드는 백준 기준 vscode로 실행하면 이상하게 나옴
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(/\s/);

const n = +input[0];
const m = +input[n + 1];

const targetCard = input.slice(n+2);
const myCard = input.slice(1, n + 1);
const answer = new Array(m).fill(0);

// map의 중복 키는 허용 되지 않는 특성 때문에 막혔었음
// 내가 갖고 있는 카드 번호를 키로 갖고, 해당 카드 수를 값으로 갖는 map 객체 생성
const cardMap = new Map();
myCard.forEach(v => cardMap.has(v) ? cardMap.set(v, cardMap.get(v) + 1) : cardMap.set(v, 1));

// 반복문을 통해 비교 대상 카드(targetCard) 중 내 카드와 일치하는 게 있는지 cardMap객체로부터 검사
// 있다면 그 카드의 수를 해당되는 answer 배열 인덱스에 저장
targetCard.forEach((v, i) => { if(cardMap.has(v)) answer[i] = cardMap.get(v) });

console.log(answer.join(' '));
