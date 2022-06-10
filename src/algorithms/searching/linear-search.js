/**
 * 선형 탐색(linear search) O(n)
 * @param {number[]} arr 
 * @param {number} key 
 * @returns {number}
 */
function linearSearch(arr, key) {

  for(let i = 0; i < arr.length; i++){
    if(arr[i] === key){
      return `\nfirst key index is ${i}`;
    }
  }
  return '\nno key value';
}

// 난수 배열 생성 함수
function randomArrayMaker() {
  let arr = [];
  for(let i = 0; i < 10; i ++)
    arr.push(Math.floor(Math.random() * 11)); 
  return arr;
}

// 배열 출력을 위한 함수
function printArray(arr) {
  for(let i = 0; i < arr.length; i++)
    process.stdout.write(arr[i]+' ');
}


const arr = randomArrayMaker();
printArray(arr);
console.log(linearSearch(arr, 1));