function getDivisor(num) {

  let divisor = [];
  for(let i = 0; i <= num; i++){
    if(num % i === 0){
      divisor.push(i);
    }
  }
  return divisor;
}

let a = getDivisor(100);
console.log(a);