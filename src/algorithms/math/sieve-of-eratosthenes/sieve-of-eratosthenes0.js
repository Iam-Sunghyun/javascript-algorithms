// #1
function primeNumCount(num) {
  let arr = new Array(num);
  arr.splice(0,2,true,true);
  for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
    for(let j = i*i; j <= num; j += i){
      arr[j] = true;
    }
  }
  return arr;
}
// test #1
let arr1 = primeNumCount(100);

for(let i = 0; i < arr1.length; i++){
  if(!arr1[i]){
    process.stdout.write(`${i} `);
  }
}
console.log('===================')


// #2
function primeNumCount2(num) {
  const arr = [];
  for(let i = 0; i <= num; i++){
    arr.push(true);
  }
  for(let i = 2; i <= Math.floor(num**0.5); i++){
    if(arr[i]){
      for(let j = i*i; j < arr.length; j += i){
        arr[j] = false;
      }
    }
  }
  arr.splice(0,2,false,false);
  return arr;
}

// test #2
let arr = primeNumCount2(100);
for(let i = 0; i < arr.length; i++){
  if(!arr1[i]){
    process.stdout.write(`${i} `);
  }
}
