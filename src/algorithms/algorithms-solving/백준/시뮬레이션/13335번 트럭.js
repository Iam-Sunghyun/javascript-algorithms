// 백준 시뮬레이션 실버1 https://www.acmicpc.net/problem/13335
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(' ').map(Number));

function minimumTimeToCrossBridge(bridgeLength, maxWeight, truckWeights) {
  const queue = []; // 다리를 건너는 트럭을 나타내는 큐
  let currentTime = 0; // 현재 시간
  let currentWeight = 0; // 현재 다리 위의 무게 합

  for (const truckWeight of truckWeights) {
    // 트럭이 다리에 올라갈 때까지 시간을 증가
    while (queue.length > 0 && currentTime - queue[0].time >= bridgeLength) {
      currentWeight -= queue.shift().weight;
    }

    // 트럭이 다리에 올라갈 수 있는 경우
    if (currentWeight + truckWeight <= maxWeight) {
      currentWeight += truckWeight;
      queue.push({ weight: truckWeight, time: currentTime });
      currentTime++;
    } else {
      // 트럭이 다리에 올라갈 수 없는 경우
      queue.push({ weight: 0, time: currentTime });
      currentTime++;
    }
  }

  // 마지막 트럭이 다리를 모두 지나가는 시간 추가
  currentTime += bridgeLength;

  return currentTime;
}

const result = minimumTimeToCrossBridge(input[0][1], input[0][2], input[1]);
console.log(result);