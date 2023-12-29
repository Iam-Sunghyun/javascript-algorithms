function combination(arr, r) {
  const answer = [];
  const tmp = new Array(r).fill(0);

  // lv = DFS 깊이(뽑은 개수), start = 배열 시작 index
  function DFS(lv, start) {
    if (lv === r) {
      answer.push([...tmp]);
      return;
    }

    for (let i = start; i < arr.length; i++){
      tmp[lv] = arr[i];
      DFS(lv + 1, i + 1);
    }
  }

  DFS(0, 0);

  return answer;
}

// console.log(combination([1, 2, 3, 4, 5], 3));
console.log(combination([1, 2, 3], 2));