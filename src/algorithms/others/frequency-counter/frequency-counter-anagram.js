/**
 * - 두 문자열이 서로 아나그램인지 확인하는 함수
 * @param {string} str1 
 * @param {string} str2
 * @returns {boolean} 
 */
function isValidAnagram(str1, str2){

  if(str1.length !== str2.length) return false;

  // 요소 빈도수 세기
  const a = [...str1.toLowerCase()].reduce((acc, val) => {
    acc[val] ? acc[val] += 1 : acc[val] = 1;
    // acc[val] = ++acc[val] || 1;
    return acc;   
  } , {});
  
  const b = [...str2.toLowerCase()].reduce((acc, val) => { 
    acc[val] ? acc[val] += 1 : acc[val] = 1;
    return acc;   
  } , {});

  // 빈도수를 저장한 객체를 비교
  for(const key in a){
    if(a[key] === b[key]) continue;
    else return false;
  }
  return true;
}

console.log(isValidAnagram('anagram', 'nagaram')); // true
console.log(isValidAnagram('Anagram', 'nagaraM')); // true
console.log(isValidAnagram('anagram', 'ewgweqm')); // false
console.log(isValidAnagram('iceman', 'cinema')); // true
console.log(isValidAnagram(' ', ' ')); // false