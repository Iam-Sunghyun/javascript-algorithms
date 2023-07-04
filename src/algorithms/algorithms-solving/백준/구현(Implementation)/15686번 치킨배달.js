// 백준 구현 골드5 https://www.acmicpc.net/problem/15686
function combinationUtil(arr, data, start, end, index, r, result) {
  if (index === r) {
    result.push([...data]);
    return;
  }

  for (let i = start; i <= end && end - i + 1 >= r - index; i++) {
    data[index] = arr[i];
    combinationUtil(arr, data, i + 1, end, index + 1, r, result);
  }
}

function calculateDistance(p1, p2) {
  return Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);
}

function getMinDistance(chickenCombination, homes) {
  let minDistance = Infinity;

  for (let i = 0; i < homes.length; i++) {
    const [x1, y1] = homes[i];
    let distance = Infinity;

    for (let j = 0; j < chickenCombination.length; j++) {
      const [x2, y2] = chickenCombination[j];
      const tempDistance = calculateDistance([x1, y1], [x2, y2]);
      distance = Math.min(distance, tempDistance);
    }

    minDistance += distance;
  }

  return minDistance;
}

function solution(cityMap, m) {
  const homes = [];
  const chickens = [];

  for (let i = 0; i < cityMap.length; i++) {
    for (let j = 0; j < cityMap[i].length; j++) {
      if (cityMap[i][j] === 1) {
        homes.push([i, j]);
      } else if (cityMap[i][j] === 2) {
        chickens.push([i, j]);
      }
    }
  }

  const chickenCombinations = [];
  const data = new Array(m);
  combinationUtil(chickens, data, 0, chickens.length - 1, 0, m, chickenCombinations);

  let answer = Infinity;

  for (let i = 0; i < chickenCombinations.length; i++) {
    const minDistance = getMinDistance(chickenCombinations[i], homes);
    answer = Math.min(answer, minDistance);
  }

  return answer;
}
