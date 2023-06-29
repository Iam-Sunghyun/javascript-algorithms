// 백준 구현 실버3 https://www.acmicpc.net/problem/1966
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(' ').map(Number));

function printerQueue(inputs, target) {

  const printList = inputs.map((priority, index) => ({
    priority,
    isTarget: index === target
  }));

  let count = 0;

  while (true) {
    const current = printList.shift();
    const hasHighPriority = printList.some(item => item.priority > current.priority);

    if (hasHighPriority) {
      printList.push(current);
    } else {
      count += 1;

      if (current.isTarget) {
        return count;
      }
    }
  }
}

const answer = [];

for (let i = 1; i <= input.length - 1; i += 2) {
  answer.push(printerQueue(input[i + 1], input[i][1]));
}
console.log(answer.join('\n'));
