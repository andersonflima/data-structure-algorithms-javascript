class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = (node) => {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else {
            return searchTree(node.right);
          }
        } else {
          return;
        }
      };
      return searchTree(node);
    }
  }

  findMin() {
    let current = this.root;
    if (current === null) return null;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  findMax() {
    let current = this.root;
    if (current === null) return null;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  find(data) {
    let current = this.root;
    while (current !== null) {
      if (data === current.data) {
        return current.data;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }

  remove(data) {
    const removeNode = (node, data) => {
      if (node === null) {
        return null;
      }

      if (data === node.data) {
        if (node.left === null && node.right === null) {
          return null;
        }

        if (node.left === null) {
          return node.right;
        }
        if (node.right === null) {
          return node.left;
        }

        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }

  inOrder(node = this.root, result = []) {
    if (node === null) {
      return result;
    }

    this.inOrder(node.left, result);

    result.push(node.data);

    this.inOrder(node.right, result);

    return result;
  }

  preOrder(node = this.root, result = []) {
    if (node === null) {
      return result;
    }

    result.push(node.data);

    this.preOrder(node.left, result);

    this.preOrder(node.right, result);

    return result;
  }

  postOrder(node = this.root, result = []) {
    if (node === null) {
      return result;
    }
    this.postOrder(node.left, result);

    this.postOrder(node.right, result);

    result.push(node.data);

    return result;
  }

  height(node = this.root) {
    if (node === null) {
      return -1;
    }

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    return 1 + Math.max(leftHeight, rightHeight);
  }

  levelOrder() {
    let result = [];
    let queue = [];

    if (this.root !== null) {
      queue.push(this.root);
      while (queue.length > 0) {
        let node = queue.shift();
        result.push(node.data);
        if (node.left !== null) {
          queue.push(node.left);
        }
        if (node.right !== null) {
          queue.push(node.right);
        }
      }
    }
    return result;
  }

  findMinHeight(node = this.root) {
    if (node === null) {
      return -1;
    }
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if (left < right) {
      return left + 1;
    }
    return right + 1;
  }

  findMaxHeight(node = this.root) {
    if (node === null) {
      return -1;
    }
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if (left > right) {
      return left + 1;
    }
    return right + 1;
  }

  isBalanced() {
    return this.findMinHeight() >= this.findMaxHeight() - 1;
  }

  toString() {
    return JSON.stringify(this.root, null, 4);
  }
}

const bst = new BST();

console.log("=== Basic Insertion and Search ===");
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(18);

console.log("\n=== Find ===");
console.log(bst.find(10));
console.log(bst.find(7));
console.log(bst.find(100));

console.log("\n=== InOrder postOrder preOrder ===");
console.log(bst.inOrder());
console.log(bst.postOrder());
console.log(bst.preOrder());

console.log("\n=== Level Order ===");
console.log(bst.levelOrder());

console.log("\n=== Find Min and Max ===");
console.log(bst.findMin());
console.log(bst.findMax());

console.log("\n=== Edge Case: Empty Tree ===");
const emptyBst = new BST();
console.log(emptyBst.findMin());
console.log(emptyBst.findMax());
console.log(emptyBst.find(10));

console.log("\n=== Edge Case: Single Node Tree ===");
const singleNodeBst = new BST();
singleNodeBst.insert(10);
console.log(singleNodeBst.findMin());
console.log(singleNodeBst.findMax());
console.log(singleNodeBst.find(10));
console.log(singleNodeBst.find(5));

console.log("\n=== Skewed Trees ===");

console.log("\n=== Left Skewed Tree ===");
const leftSkewedBst = new BST();
leftSkewedBst.insert(10);
leftSkewedBst.insert(8);
leftSkewedBst.insert(6);
leftSkewedBst.insert(4);
leftSkewedBst.insert(2);
console.log(leftSkewedBst.inOrder());
console.log(leftSkewedBst.findMin());
console.log(leftSkewedBst.findMax());

console.log("\n=== Right Skewed Tree ===");
const rightSkewedBst = new BST();
rightSkewedBst.insert(10);
rightSkewedBst.insert(12);
rightSkewedBst.insert(14);
rightSkewedBst.insert(16);
rightSkewedBst.insert(18);

console.log(rightSkewedBst.inOrder());
console.log(rightSkewedBst.findMin());
console.log(rightSkewedBst.findMax());

console.log("\n=== Remove Nodes ===");
const removalBst = new BST();
removalBst.insert(10);
removalBst.insert(5);
removalBst.insert(15);
removalBst.insert(3);
removalBst.insert(7);
removalBst.insert(12);
removalBst.insert(18);

removalBst.remove(3);
console.log(removalBst.inOrder());

removalBst.remove(5);
console.log(removalBst.inOrder());

removalBst.remove(10);
console.log(removalBst.inOrder());

console.log("\n=== Traversal: In-Order ===");
const traversalBst = new BST();
traversalBst.insert(10);
traversalBst.insert(5);
traversalBst.insert(15);
traversalBst.insert(3);
traversalBst.insert(7);
traversalBst.insert(12);
traversalBst.insert(18);
console.log(traversalBst.inOrder());

console.log("\n=== Duplicate Values ===");
const duplicateBst = new BST();
duplicateBst.insert(10);
duplicateBst.insert(10);
duplicateBst.insert(5);
duplicateBst.insert(5);
console.log(duplicateBst.inOrder());

console.log("\n=== Tree Height ===");
console.log("\n=== Balanced Tree ===");
const heightBst = new BST();
heightBst.insert(10);
heightBst.insert(5);
heightBst.insert(15);
heightBst.insert(3);
heightBst.insert(7);

console.log(heightBst.height());
console.log(heightBst.findMinHeight());
console.log(heightBst.findMaxHeight());
console.log(heightBst.isBalanced());

console.log("\n=== Unbalanced Tree ===");
const unbalancedBst = new BST();
unbalancedBst.insert(10);
unbalancedBst.insert(20);
unbalancedBst.insert(30);
unbalancedBst.insert(40);
console.log(unbalancedBst.height());
console.log(unbalancedBst.findMinHeight());
console.log(unbalancedBst.findMaxHeight());
console.log(unbalancedBst.isBalanced());
