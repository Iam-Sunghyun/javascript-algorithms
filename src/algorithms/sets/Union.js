/**
 * 인수로 전달한 이터러블과 합집합을 구하는 메서드
 * @param {terable} set 이터러블 
 * @returns {set} result 합집합
 */
 Set.prototype.Union = function(set){

  const result = new Set(this);

  for(const item of set){
    result.add(item);
  }
   
  return result;
};

/* 간결한 버전
Set.prototype.Union = function(set){
  return new Set([...this, ...set]); 
};
*/

const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([3, 4, 5, 6, 7]);

console.log(set1.Union(set2));
