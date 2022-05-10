const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = [+input[0], +input[2]];
const [hasCards, givenCards] = [input[1].split(' ').map(Number), input[3].split(' ').map(Number)];

let answer = ''
  
hasCards.sort((a, b) => a - b);
// hascards = -10 2 3 6 10
// givenCards = 10, 9, -5, 2, 3, 4, 5, -10


for(let i = 0; i < M; i++){
  if(binarySearch(hasCards, givenCards[i])){
    answer += '1 ';
  }else{
    answer += '0 ';
  }
}


function binarySearch(arr, value){
  let start = 0;
  let end = arr.length - 1;

  while(start <= end){
    let mid = Math.floor((start + end) / 2);
    if(value === arr[mid]){
      return true;

    }else if(value < arr[mid]){
      end = mid - 1;
      
    }else if(value > arr[mid]){
      start = mid + 1;
    }
    console.log(start, mid, end)
  }

}

console.log(answer);