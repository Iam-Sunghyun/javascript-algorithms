/**
 * 프로그래머스 **레벨 2**
 * 2018 KAKAO BLIND RECRUITMENT https://school.programmers.co.kr/learn/courses/30/lessons/17680
 */
function solution(cacheSize, cities) {
  // cache 사이즈 0인 경우 모두 cache hit
  if (cacheSize === 0) return cities.length * 5;
  const cache = [];
  let answer = 0;

  for (let city of cities) {
    city = city.toLowerCase()

    // cache hit
    if (cache.includes(city)) {
      // cache에 저장 되어있던 오래된 값 제거 후 최신 값 추가
      cache.splice(cache.indexOf(city), 1);
      cache.push(city);
      answer += 1;
    }
    // cache miss
    else {
      cache.push(city);
      if (cache.length > cacheSize) cache.shift();
      answer += 5;
    }
  }

  return answer;
}

console.log(solution(3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"])); // 50

console.log(solution(3, ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"])); // 21

console.log(solution(2, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"])); // 60

console.log(solution(5, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"])); // 52

console.log(solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"])); // 16

console.log(solution(0, [])); // 16
