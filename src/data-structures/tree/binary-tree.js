class BinaryTreeNode{
  constructor(value = null){
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }

  setvalue(value){
    this.value = value;
  }

  setLeft(node){
    if(this.isNode(node)){
      console.log('노드가 아닙니다.');
      return;
    }
    if(!this.left){
      node.parent = this;
      this.left = node; 
      return;
    }else{
      console.log('이미 값이 저장 되어있습니다.');
    }
  }

  setRight(node){
    if(this.isNode(node)){
      console.log('노드가 아닙니다.');
      return;
    }
    if(!this.right){
      node.parent = this;
      this.right = node; 
    }else{
      console.log('이미 값이 저장 되어있습니다.');
    }
  }

  replaceChild(targetNode,newNode){
    if(this.isNode(newNode)){
      console.log('노드가 아닙니다.');
      return;
    }
    if(!targetNode || !newNode){
      console.log('값이 없습니다.');
      return;
    }

    if(targetNode === this.left && this.left){
      this.left.parent = null;
      this.left = newNode;
      newNode.parent = this;
      return;
    }
    if(targetNode === this.right && this.right){
      this.right.parent = null;
      this.right = newNode;
      newNode.parent = this;
      return;
    }
    console.log('대체 할 노드가 없습니다!');
  }

  removeChild(node){
    if(node === this.left){
      this.left = null;
      return;
    }
    if(node === this.right){
      this.right = null;
      return;
    }
    console.log('잘못된 입력입니다.');
  }

  getRoot(){
    let parent = this.parent;
    while(parent.parent){
      parent = parent.parent;
    }
    console.log(`최상단 루트 노드: `,parent);
  }

  // V -> L -> R
  preOrder(node = this){
    if(node === null)return;
    process.stdout.write(node.value + ' ');
    this.preOrder(node.left);
    this.preOrder(node.right);
  }

  // L -> V -> R
  inOrder(node = this){
    if(node === null)return;
    this.inOrder(node.left);
    process.stdout.write(node.value + ' ');
    this.inOrder(node.right);
    
  }

  // L -> R -> V
  postOrder(node = this){
    if(node === null)return;
    this.postOrder(node.left);
    this.postOrder(node.right);
    process.stdout.write(node.value + ' ');
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
  
  isNode(node){
    return node.constructor !== BinaryTreeNode ? true : false;
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
tree1.replaceChild(tree3,tree4);

tree.preOrder();
console.log(' ');

tree.inOrder();
console.log(' ');

tree.postOrder();
console.log(' ');

root.levelOrder();
