/**
 * 재귀(recursion) 예제
 * - 객체 안에 문자열로 이루어진 모든 프로퍼티 값을 배열에 담아 return하는 함수
 * @param {object} obj
 * @returns {string[]}
 */
function collectStrings(obj) {
  let stringsArr = [];
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      stringsArr.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      stringsArr = stringsArr.concat(collectStrings(obj[key]));
    }
  }

  return stringsArr;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj));
console.log('qweqw');