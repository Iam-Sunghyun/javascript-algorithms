import BinaryTreeNode from "./binary-tree";

export default class BinarySearchTreeNode extends BinaryTreeNode{
  constructor(value = null){
    super(value);
  }

  insert(value){
   
    if(!this.value){
      this.value = value;
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
    while(n){
      if(node.value === value){
        return node;
      }
      if(node.left && node.left > value){
        n = node.left;
      }
      if(node.right && node.right < value){
        n = node.left;
      }
    }
    console.log('값이 없습니다.');
    return null;
  }


  delete(){

  }
  
  /* 이하 binaryTreeNode와 동일
  getRoot(){
    let parent = this.parent;
    while(parent.parent){
      parent = parent.parent;
    }
    console.log(`최상단 루트 노드: `,parent);
  }

  preOrder(){
    if(this === null)return;

    process.stdout.write(this.value + ' ');
    if(this.left){
      this.left.preOrder();
    }
    if(this.right){
    this.right.preOrder();
    }
    return;
  }

  inOrder(){
    if(this === null)return;

    if(this.left){
    this.left.inOrder();
    }
    process.stdout.write(this.value + ' ');
    if(this.right){
    this.right.inOrder();
    }
    return;
  }

  postOrder(){
    if(this === null)return;

    if(this.left){
    this.left.postOrder();
    }
    if(this.right){
    this.right.postOrder();
    }
    process.stdout.write(this.value + ' ');
    return;
  }

  levelOrder(){
    let queue = [this];
    let node;
    while(queue.length){
      node = queue.shift();
      if(node){
        process.stdout.write(node.value + ' ');
        queue.push(node.left);
        queue.push(node.right);
      }
    }
  }

  countNode(node = this){
    if(!node) return 0;
    return 1 + this.countNode(node.left) + this.countNode(node.right);
  }

  countLeaf(node = this){
    if(!node) return 0;
    if(!node.left && !node.right) return 1;
    return this.countLeaf(node.left) + this.countNode(node.right);
  }

  getHeight(node = this){
    if(!node) return 0;
    return 1 + Math.max(this.getHeight(node.left),this.getHeight(node.right));
  }

  isNode(node){
    return node.constructor !== BinaryTreeNode ? true : false;
  }
  */
}