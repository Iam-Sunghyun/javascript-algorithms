function isPrimeNum(num) {

  for(let i = 2; i <= Math.floor(num**0.5); i++){
    if(num % i === 0){
      console.log('소수가 아닙니다.');
      return;
    }else{
      console.log('소수입니다.')
      return;
    }
  }
  
}

isPrimeNum(100);