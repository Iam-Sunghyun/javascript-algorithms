import BinarySearchTreeNode from "./binary-search-tree-node.js";

export default class BinarySearchTree{

  constructor(){
    this.root = new BinarySearchTreeNode(null);
  }

  insert(value){
    return this.root.insert(value);
  }

  search(value){
    return this.root.search(value);
  }

  delete(value){
    return this.root.delete(value);
  }

  preOrder(){
    this.root.preOrder();
  }
  inOrder(){
    this.root.inOrder();
  }
  postOrder(){
    this.root.postOrder();
  }
  levelOrder(){
    this.root.levelOrder();
  }
}


const BST = new BinarySearchTree();

BST.insert(35);
BST.insert(18);
BST.insert(68);
BST.insert(7);
BST.insert(28);

BST.inOrder();
BST.delete(18);
console.log('=========')
console.log(BST.search(28));

