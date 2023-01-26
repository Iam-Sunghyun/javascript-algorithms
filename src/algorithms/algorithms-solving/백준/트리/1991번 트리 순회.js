// 백준 1991번 트리 순회 https://www.acmicpc.net/problem/1991
// 단순하게 모두 함수로 구현한 방법
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((n) => n.split(' ')).slice(1);

function treeList(input) {
  const nodeList = {};
  for (let i = 0; i < input.length; i++) {
    const [parent, left, right] = input[i];
    nodeList[parent] = [left, right];
  }
  return nodeList;
}

function preorder(node) {
  if (node === '.') return;
  const [left, right] = tree[node];
  traversal += node;
  preorder(left);
  preorder(right);
}

function inorder(node) {
  if (node === '.') return;
  const [left, right] = tree[node];
  inorder(left);
  traversal += node;
  inorder(right);
}

function postorder(node) {
  if (node === '.') return;
  const [left, right] = tree[node];
  postorder(left);
  postorder(right);
  traversal += node;
}

const tree = treeList(input);
let traversal = '';

preorder('A');
console.log(traversal);
traversal = '';

inorder('A');
console.log(traversal);
traversal = '';

postorder('A');
console.log(traversal);
traversal = '';
