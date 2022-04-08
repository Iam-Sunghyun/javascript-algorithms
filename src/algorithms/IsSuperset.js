/**
 * 인수로 전달한 이터러블과 상위 집합, 부분 집합 관계를 확인하는 메서드
 * @param {iterable} set
 * @returns {boolean}
 */
 Set.prototype.isSuperset = function(set){

  for(const item of set){
    if(!this.has(item)) return false;
  }
  return true;
};

/* 더 간결한 버전
Set.prototype.isSuperset = function(set){
  return [...set].every(value => this.has(value));
};
*/

const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([2, 3, 4]);

console.log(set1.isSuperset(set2));
console.log(set2.isSuperset(set1));
