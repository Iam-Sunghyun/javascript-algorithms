export default class BinaryTreeNode {
  constructor(value = null) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }

  // 값 설정
  setvalue(value) {
    this.value = value;
  }

  // 왼쪽 자식 추가
  setLeft(node) {
    if (this.left !== null) {
      this.left.parent = null;
    }

    this.left = node;
    node.parent = this;

    return this;
  }

  // 오른쪽 자식 추가
  setRight(node) {
    if (this.right !== null) {
      this.right.parent = null;
    }

    this.right = node;
    node.parent = this;

    return this;
  }

  // 자식 노드 교체
  replaceChild(targetNode, newNode) {
    if (!this.isNode(newNode)) {
      console.log("노드가 아닙니다.");
      return;
    }
    if (!targetNode || !newNode) {
      console.log("값이 없습니다.");
      return;
    }

    if (targetNode === this.left) {
      this.left.parent = null;
      this.left = newNode;
      newNode.parent = this;
      return;
    }
    if (targetNode === this.right) {
      this.right.parent = null;
      this.right = newNode;
      newNode.parent = this;
      return;
    }
    console.log("대체 할 노드가 없습니다!");
  }

  // 자식 노드 삭제
  removeChild(node) {
    if (node === this.left) {
      this.left = null;
    } else if (node === this.right) {
      this.right = null;
    } else {
      console.log("잘못된 입력입니다.");
    }
    node.parent = null;
  }

  // 루트 노드 조회
  getRoot() {
    let node = this;
    while (node.parent) {
      node = node.parent;
    }
    console.log(`최상단 루트 노드: `, node);
    return node;
  }

  // 전위 순회 V -> L -> R
  preOrder(node = this) {
    if (node === null) return;
    process.stdout.write(node.value + " ");
    this.preOrder(node.left);
    this.preOrder(node.right);
    return "전위 순회 완료";
  }

  // 중위 순회 L -> V -> R
  inOrder(node = this) {
    if (node === null) return;
    this.inOrder(node.left);
    process.stdout.write(node.value + " ");
    this.inOrder(node.right);
    return "중위 순회 완료";
  }

  // 후위 순회 L -> R -> V
  postOrder(node = this) {
    if (node === null) return;
    this.postOrder(node.left);
    this.postOrder(node.right);
    process.stdout.write(node.value + " ");
    return "후위 순회 완료";
  }

  // 레벨 순회(BFS)
  levelOrder() {
    let queue = [this];
    let node;
    while (queue.length) {
      node = queue.shift();
      if (node) {
        process.stdout.write(node.value + " ");
        queue.push(node.left);
        queue.push(node.right);
      }
    }
  }

  // 노드 개수 세기
  countNode(node = this) {
    if (!node) return 0;
    return 1 + node.countNode(node.left) + node.countNode(node.right);
  }

  // 단말 노드 개수 세기
  countLeaf() {
    if (!this.left && !this.right) return 1;
    return (this.left?.countLeaf() || 0) + (this.right?.countLeaf() || 0);
  }

  // 높이 구하기
  getHeight(node = this) {
    if (!node) return 0;
    return 1 + Math.max(node.getHeight(node.left), node.getHeight(node.right));
  }

  // 이진 탐색 트리 노드인지 확인
  isNode(node) {
    return node.constructor === BinaryTreeNode ? true : false;
  }

  // 노드의 균형 인수 계산
  balanceFactor() {
    return this.getHeight(this.left) - this.getHeight(this.right);
  }
}

const tree = new BinaryTreeNode(1);
const tree1 = new BinaryTreeNode(2);
const tree2 = new BinaryTreeNode(3);
const tree3 = new BinaryTreeNode(4);
const tree4 = new BinaryTreeNode(5);
const root = tree;

tree.setLeft(tree1);
tree.setRight(tree2);
tree1.setLeft(tree3);
tree1.replaceChild(tree3, tree4);

tree.preOrder();
console.log(" ");

tree.inOrder();
console.log(" ");

tree.postOrder();
console.log(" ");

root.levelOrder();
console.log(" ");

console.log(root.countNode());

console.log(root.countLeaf());

console.log(root.getHeight());
