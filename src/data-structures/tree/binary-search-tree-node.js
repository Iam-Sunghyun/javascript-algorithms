import BinaryTreeNode from "./binary-tree.js";

export default class BinarySearchTreeNode extends BinaryTreeNode{
  constructor(value = null){
    super(value);
  }

  insert(value){
   
    if(!this.value){
      this.value = value;
      return true;
    }

    if(value === this.value){
      console.log('중복되는 값이 있습니다.');
      return false;
    }

    if(value < this.value){
      if(this.left){
        return this.left.insert(value);
      }

      const node = new BinaryTreeNode(value);
      this.setLeft(node);
      return node;
    }

    if(value > this.value){
      if(this.right){
        return this.right.insert(value);
      }

      const node = new BinaryTreeNode(value);
      this.setRight(node);
      return node;
    }

  }

  // 재귀 이용 탐색
  search(value){
    if(this.value === value){
      return this;
    }

    if(this.left && this.value > value){
      return this.left.search(value);
    }

    if(this.right && this.value < value){
      return this.right.search(value);
    }
    console.log('값이 없습니다.');
    return null;
  }

  // 반복 이용 탐색
  searchLoop(value){
    let node = this;
    while(node){
      if(node.value === value){
        return node;
      }
      if(node.left && node.left > value){
        node = node.left;
      }
      if(node.right && node.right < value){
        node = node.left;
      }
    }
    console.log('값이 없습니다.');
    return null;
  }


  delete(value){
    let node = this.search(value);
    if(!node){
      throw new Error('해당 값이 없습니다');
    }
    // 단말 노드의 경우
    if(!node.left && !node.right){
      if(!node.parent){
        node = null;
      }else{
        node.parent.removeChild(node);
      }

      // 자식 노드 하나인 경우
    }else if(!node.left || !node.right){
      const childNode = node.left || node.right;
      if(!node.parent){
        childNode.parent = node.parent;
      }
      if(node.parent.left === node){
        node.parent.left = childNode;
      }
      if(node.parent.right === node){
        node.parent.right = childNode;
      }
      node = null;
     
      // 자식 노드 둘인 경우
    }else if(node.left && node.right){
      let nextNode = node.right;
      while(nextNode.left){
        nextNode = nextNode.left;
      }
      node.value = nextNode.value;
      if(nextNode.parent.left === nextNode){
        nextNode.parent.left = nextNode.right;
      
      }else{
        node.right = nextNode.right;
      }
      nextNode = null;
    }
    return true;
  }
  
}
