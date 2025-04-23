import BinaryTreeNode from "./binary-tree-node.js";

export default class BinarySearchTreeNode extends BinaryTreeNode {
  constructor(value = null) {
    super(value);
  }

  insert(value) {
    if (!this.value) {
      this.value = value;
      return true;
    }

    if (value === this.value) {
      console.log("중복되는 값이 있습니다.");
      return false;
    }

    if (value < this.value) {
      if (this.left !== null) {
        return this.left.insert(value);
      }

      const node = new BinarySearchTreeNode(value);
      this.setLeft(node);
      return node;
    }

    if (value > this.value) {
      if (this.right !== null) {
        return this.right.insert(value);
      }

      const node = new BinarySearchTreeNode(value);
      this.setRight(node);
      return node;
    }
  }

  // 재귀 이용 탐색
  search(value) {
    if (this.value === value) {
      return this;
    }

    if (this.left && this.value > value) {
      return this.left.search(value);
    }

    if (this.right && this.value < value) {
      return this.right.search(value);
    }
    return false;
  }

  // 반복 이용 탐색
  searchLoop(value) {
    let node = this;
    while (node) {
      if (node.value === value) {
        return node;
      }
      if (node.left && node.left > value) {
        node = node.left;
      }
      if (node.right && node.right < value) {
        node = node.left;
      }
    }
    console.log("값이 없습니다.");
    return null;
  }

  delete(value) {
    let node = this.search(value);
    if (!node) {
      console.log("해당 값이 없습니다");
      return;
    }
    // 단말 노드의 경우
    if (!node.left && !node.right) {
      if (!node.parent) {
        node = null;
      } else {
        node.parent.removeChild(node);
      }

      // 자식 노드 하나인 경우
    } else if (!node.left || !node.right) {
      const childNode = node.left || node.right;
      if (!node.parent) {
        childNode.parent = node.parent;
      }
      if (node.parent.left === node) {
        node.parent.left = childNode;
      }
      if (node.parent.right === node) {
        node.parent.right = childNode;
      }
      node = null;

      // 자식 노드 둘인 경우 (오른쪽 서브 트리에서 후계자 탐색)
    } else if (node.left && node.right) {
      let nextNode = node.right;
      while (nextNode.left) {
        nextNode = nextNode.left;
      }
      node.value = nextNode.value;
      if (node.right !== nextNode) {
        // 오른쪽 서브 트리의 노드가 하나의 노드가 아닌 경우
        nextNode.parent.left = nextNode.right;
      } else {
        // 삭제 하려는 노드 오른쪽 서브 트리가 노드 하나인 경우
        node.right = nextNode.right;
      }
      nextNode = null;
    }
    return true;
  }
}

const root = new BinarySearchTreeNode(35);
const nodes = [18, 68, 99, 7, 26, 3, 12];

for (let i = 0; i < nodes.length; i++) {
  root.insert(nodes[i]);
}

console.log(root.postOrder());
root.delete(18);
root.delete(3);

console.log(root.postOrder());
