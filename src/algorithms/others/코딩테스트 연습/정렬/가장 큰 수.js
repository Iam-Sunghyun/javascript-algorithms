function solution(numbers) {

  //  sort() 비교 함수 자세히 볼 것
  const answer = numbers.map(num => num + '').sort((a, b) => (b + a) - (a + b)).join('');

  return answer;
  
}

console.log(solution([3,30,34,5,9]));
