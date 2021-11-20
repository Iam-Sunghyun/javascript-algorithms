function randomArrayMaker() {
  let arr = [];
  for(let i = 0; i < 10; i ++)
    arr.push(Math.floor(Math.random() * 11)); 
  return arr;
}

function printArray(arr) {
  for(let i = 0; i < arr.length; i++)
    process.stdout.write(arr[i]+' ');
}

function linearSearch(arr,key) {
  key = 5
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === key){
      return `\nfirst key index is ${i}`;
    }
  }
  return '\nno key value';
}

let arr = randomArrayMaker();
printArray(arr);
console.log(linearSearch(arr,5));
