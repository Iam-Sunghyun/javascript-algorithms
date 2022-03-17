/**
 *
 * @param {number} num
 * @return {number[]} isPrime
 */
 export default function sieveOfEratosthenes(num){
  const isPrime = new Array(num + 1).fill(true);

  for(let i = 2; i <= Math.sqrt(num); i++){
    for(let j = i * i; j <= num; j += i){
      if(!isPrime[j]) continue;
      isPrime[j] = false;
    }
  }
  return isPrime;
}

// test
function printArray(array){
  const primeArray = []
  for(let i = 2; i < array.length; i++){
    if(array[i])
    primeArray.push(i);
  }
  return primeArray
}
