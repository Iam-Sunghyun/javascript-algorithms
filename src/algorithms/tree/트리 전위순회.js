/**
 * 인접 리스트로 트리 구현, inorder로 순회
 * @param {string[]} input - 각 요소의 [0] 인덱스 값은 부모 노드, [1], [2]는 좌, 우 자식노드를 뜻함
 * @returns {string[]} - 순회 결과
 */
function solution2(input) {
  const tree = {};
  const answer = [];

  for (const [parent, left, right] of input) {
    tree[parent] = [left, right];
  }

  function inorder(n) {
    if (n === 'undefined') {
      answer.push(n);
      return;
    }
    if (n === '.') return;

    const [left, right] = tree[n];
    inorder(left);
    answer.push(n);
    inorder(right);
  }
  inorder('A');

  return answer;
}

console.log(solution2([
    [ 'A', 'B', 'C' ],
    [ 'B', 'D', '.' ],
    [ 'C', 'E', 'F' ],
    [ 'E', '.', '.' ],
    [ 'F', '.', 'G' ],
    [ 'D', '.', '.' ],
    [ 'G', '.', '.' ]
  ]));
