import BinarySearchTree from "./binary-search-tree";

export default class AVLtree extends BinarySearchTree{
  
  insert(value){
    super.insert(value);

    let current = this.root.search(value);
    while(current){
      this.balance(current);
      current = current.parent;
    }
  }
  
  remove(){

  }

  balance(node){
    // If balance factor is not OK then try to balance the node.
    if (node.balanceFactor() > 1) {
      // Left rotation.
      if (node.left.balanceFactor() > 0) {
        // Left-Left rotation
        this.rotateLL(node);
      } else if (node.left.balanceFactor() < 0) {
        // Left-Right rotation.
        this.rotateLR(node);
      }
    } else if (node.balanceFactor() < -1) {
      // Right rotation.
      if (node.right.balanceFactor() < 0) {
        // Right-Right rotation
        this.rotateRR(node);
      } else if (node.right.balanceFactor() > 0) {
        // Right-Left rotation.
        this.rotateRL(node);
      }
    }

  }


  rotateLL(root){
    const rootLeft = root.left;
    root.setLeft(null);

    if(root.parent){
      root.parent.left = rootLeft;
    }else if(root = this.root){
      this.root = rootLeft;
    }
    
    if(rootLeft.right){
      root.setLeft(rootLeft.right);
    }
    rootLeft.setRight(root);
   
  }

  rotateRR(root){
    const rootRight = root.right;
    root.setright(null);

    if(root.parent){
      root.parent.right = rootRight;
    }else if(root = this.root){
      this.root = rootRight;
    }
    
    if(rootRight.left){
      root.setRight(rootRight.left);
    }
    rootRight.setLeft(root);
    return rootRight;
  }
  
  rotateRL(root){
    const rootRight = root.right;
    root.setRight(null);

    const rightLeft = rootRight.left;
    rootRight.setLeft(null);

    if(rightLeft.right){
      rootRight.setLeft(rightLeft.right);
      rightLeft.setRight(null);
    }

    root.setRight(rightLeft);
    rightLeft.setRight(rootRight);

    this.rotateRR(root);
  }

  rotateLR(root){
    const rootLeft = root.left;
    root.setLeft(null);

    const leftRight = rootLeft.right;
    rootLeft.setRight(null);

    if(leftRight.left){
      rootLeft.setRight(leftRight.left);
      leftRight.setLeft(null);
    }

    root.setLeft(leftRight);
    leftRight.setLeft(rootLeft);

    this.rotateLL(root);
  }

}