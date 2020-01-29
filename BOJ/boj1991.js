const readline = require("readline");

const run = () => {
  let count = [];
  const treeTraversal = new TreeTraversal();

  const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  r.on("line", line => {
    const splitLine = line.split(" ");
    count.push(splitLine);
    const [data, left, right] = splitLine;
    if (splitLine.length === 3) {
      treeTraversal.insert(data, left, right);
    }

    if (count.length === Number(count[0]) + 1) {
      treeTraversal.preorder();
      console.log(treeTraversal.result);
      treeTraversal.result = "";

      treeTraversal.inorder();
      console.log(treeTraversal.result);
      treeTraversal.result = "";

      treeTraversal.postorder();
      console.log(treeTraversal.result);
      treeTraversal.result = "";

      r.close();
    }
  });

  r.on("close", () => {
    process.exit();
  });
};

class Node {
  constructor(value) {
    this.value = value;
    this.leftNode = null;
    this.rightNode = null;
  }
}

class TreeTraversal {
  constructor() {
    this.root = null;
    this.result = "";
  }

  insert(data, left, right) {
    if (this.root === null) {
      if (data !== ".") this.root = new Node(data);
      if (left !== ".") this.root.leftNode = new Node(left);
      if (right !== ".") this.root.rightNode = new Node(right);
    } else {
      this.search(this.root, data, left, right);
    }
  }

  search(root, data, left, right) {
    if (root === null) {
      return;
    } else if (root.value === data) {
      if (left !== ".") root.leftNode = new Node(left);
      if (right !== ".") root.rightNode = new Node(right);
    } else {
      this.search(root.leftNode, data, left, right);
      this.search(root.rightNode, data, left, right);
    }
  }

  preorder(root = this.root) {
    this.result += root.value;
    if (root.leftNode !== null) this.preorder(root.leftNode);
    if (root.rightNode !== null) this.preorder(root.rightNode);
  }

  inorder(root = this.root) {
    if (root.leftNode !== null) this.inorder(root.leftNode);
    this.result += root.value;
    if (root.rightNode !== null) this.inorder(root.rightNode);
  }

  postorder(root = this.root) {
    if (root.leftNode !== null) this.postorder(root.leftNode);
    if (root.rightNode !== null) this.postorder(root.rightNode);
    this.result += root.value;
  }
}

run();
