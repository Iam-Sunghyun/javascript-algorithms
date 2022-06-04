/**
 * - 빈도 카운터 (frequency counters)
 * 공식 명칭은 아니지만 객체의 값과 빈도를 수집하는데 널리 사용하는 패턴으로 알아 둘 필요가 있다
 * 입력 값이 서로 비슷한 값으로 구성되어 있는지, 두 단어가 서로 아나그램인지, 
 * 특정 값이 다른 값에 같은 빈도로 포함되어 있는지, 각종 객체에 특정 값의 빈도를 체크하는 등
 * 주로 배열, 문자열 비교에 필요한 2중 for문과 같은 O(n^2) 연산을 대체하기 위해 사용 되는 패턴으로 O(n) 복잡도를 갖는다
 * 요소를 하나하나 비교하는 것이 아닌, 객체를 생성해 문자열이나 배열의 요소의 빈도수를 저장하고, 그 객체들을 이용해 비교한다
 *
 * - 배열 arr1의 요소의 제곱이 다른 배열 arr2의 요소로 있는 지 체크하는 함수 
 * 1. 강의에서 말하는 순진한(naive) 방법 O(n^2)
 * @param {number[]} arr1 
 * @param {number[]} arr2 
 * @returns {boolean}
 */
function same(arr1, arr2){
  if(arr1.length !== arr2.length) return false;

  for(const element of arr1){
    const correctIndex = arr2.indexOf(element ** 2)
    if(correctIndex === -1) return false;

    arr2.splice(correctIndex, 1);
  }
  return true;
}

/**  
 * 2. frequency counter를 이용한 개선된 방법 O(n)
 * 반복문이 3개가 있지만 중첩은 없기 때문에 더 빠르다!
 */
function improvedSame(arr1, arr2){
  if(arr1.length !== arr2.length) return false;

  // 배열의 요소를 키로, 요소 개수를 값으로 갖는 객체 생성
  const arrObj1 = arr1.reduce((acc, val) => {
    acc[val] = ++acc[val] || 1;
    return acc;
  } , {});
  
  const arrObj2 = arr2.reduce((acc, val) => {
    acc[val] = ++acc[val] || 1;
    return acc;
  } , {});

  for(const item in arrObj1){
    // arrObj2에 arrObj1의 프로퍼티**2 한 프로퍼티가 없거나, 개수가 다른 경우 false 
    if(arrObj2[item**2] !== arrObj1[item]){
      return false;
    }
  }
  return true;
}

// 시간 체크용 함수
function checkPerformance(f, n){
  const a = [];
  const b = [];
  for(let i = 0; i < n; i++){
    a.push(i);
    b.push(i**2);
  }
  const t1 = performance.now();
  f(a, b);
  const t2 = performance.now();
  console.log((t2 - t1) / 1000);
}

// checkPerformance(same, 100000);
// checkPerformance(improvedSame, 100000); // 10만개 기준 약 9배 빠름

console.log(improvedSame([1,2,3,11,5], [2,1,4,9,1])); // false
console.log(improvedSame([1,2,3,5], [25,1,4,9,])); // true