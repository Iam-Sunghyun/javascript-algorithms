/**
 * 인수로 전달한 이터러블과 교집합을 구하는 메서드
 * @param {*[]} set
 * @returns {*{}} result
 */
 Set.prototype.intersection = function(set){

  const result = new Set();

  for(const item of set){
    if(this.has(item)) result.add(item);
  }
  return result;

};

/* 더 간결한 버전
Set.prototype.intersection = function(set){
  return new Set([...this].filter(value => set.has(value))); 
};
*/

const set1 = new Set('Hello Everyone');
const set2 = new Set('Hello World');

console.log(set1.intersection(set2))
