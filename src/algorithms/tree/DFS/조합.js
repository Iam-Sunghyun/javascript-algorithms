function solution(arr, n, r) {

  const answer = [];      
  const tmp = new Array(r).fill(0); // 조합 기록용

  // lv -> 뽑은 요소 수, index 남은 요소 시작 인덱스
  function combination(lv, index) {
    if (lv === r) {
      answer.push([...tmp]);
      return;
    }
    for (let i = index + 1; i < arr.length; i++) {
      tmp[lv + 1] = arr[i];
      combination(lv + 1, i);
    }
  }

  for (let i = 0; i < n - r; i++) {
    tmp[i] = arr[i];
    combination(0, i);
  }

  return answer;
}

console.log(solution([1, 2, 3, 4, 5], 5, 3));