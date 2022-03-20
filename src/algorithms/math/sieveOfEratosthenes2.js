/**
 * 
 * @param {number} Number
 * @return {number[]}
 */
export default function sieveOfEratosthenes(Number) {
  const isPrime = new Array(Number + 1).fill(true);
  isPrime.splice(0,2,false,false);
  
  const prime = [];
  
  for (let i = 2; i <= Number; i += 1){
    if(isPrime[i] === true){
      prime.push(i);
      
      let nextNumber = i * i;
      
      while(nextNumber <= Number){
        isPrime[nextNumber] = false;
        nextNumber += i;
      }
    }
  }
  
  return prime;
}
