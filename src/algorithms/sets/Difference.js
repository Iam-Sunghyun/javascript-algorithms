/**
 * 인수로 전달한 이터러블과 차집합을 구하는 메서드
 * @param {iterable} set
 * @returns {set} result 차집합
 */
 Set.prototype.difference = function(set){

  const result = new Set(this);

  for(const item of set){
    result.delete(item);
  }
  return result;

};

/* 더 간결한 버전
Set.prototype.difference = function(set){
  return new Set([...this].filter(value => !set.has(value))); 
};
*/

const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([3, 4, 5, 6, 7]);

console.log(set1.difference(set2));
