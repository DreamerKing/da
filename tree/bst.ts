class Node<T> {
  left: Node<T> | null = null;
  right: Node<T> | null = null;
  key: T;
  constructor(key: T) {
    this.key = key;
  }
}

function insertNode<T>(node: Node<T>, newNode: Node<T>) {
  if (newNode.key < node.key) {
    if (node.left === null) {
      node.left = newNode;
    } else {
      insertNode(node.left, newNode);
    }
  } else {
    if (node.right === null) {
      node.right = newNode;
    } else {
      insertNode(node.right, newNode);
    }
  }
}

type Callback = <T>(arg: Node<T> | T) => void;

function traverse<T>(
  direction: "inOrder" | "preOrder" | "postOrder",
  node: Node<T> | null,
  fn: Callback,
) {
  if (!node) return;
  switch (direction) {
    case "inOrder":
      traverse(direction, node.left, fn);
      fn(node.key);
      traverse(direction, node.right, fn);
      break;
    case "preOrder":
      fn(node.key);
      traverse(direction, node.left, fn);
      traverse(direction, node.right, fn);
      break;
    case "postOrder":
      traverse(direction, node.left, fn);
      traverse(direction, node.right, fn);
      fn(node.key);
      break;
  }
}

const inOrderTraverse = traverse.bind(null, "inOrder");
const preOderTraverse = traverse.bind(null, "preOrder");
const postOderTraverse = traverse.bind(null, "postOrder");

function minNode<T>(node: Node<T> | null) {
  if (node === null) return undefined;
  let current = node;
  while (current.left) {
    current = current.left;
  }
  return current;
}

function maxNode<T>(node: Node<T> | null) {
  if (node === null) return undefined;
  let current = node;
  while (current.right) {
    current = current.right;
  }
  return current;
}

function searchNode<T>(node: Node<T> | null, key: T): boolean {
  if (node == null) return false;
  if (node.key < key) {
    return searchNode(node.left, key);
  } else if (node.key > key) {
    return searchNode(node.right, key);
  } else {
    return true;
  }
}

export default class BST<T> {
  #root: Node<T> | null = null;
  insert(key: T) {
    const node: Node<T> = new Node(key);
    if (this.#root === null) {
      this.#root = node;
    } else {
      insertNode(this.#root, node);
    }
  }

  remove(key: T) {
  }

  search(key: T): boolean {
    return searchNode(this.#root, key);
  }

  inOrder(fn: Callback) {
    inOrderTraverse(this.#root, fn);
  }

  preOder(fn: Callback) {
    preOderTraverse(this.#root, fn);
  }

  postOrder(fn: Callback) {
    postOderTraverse(this.#root, fn);
  }

  min() {
    return minNode(this.#root);
  }
  max() {
    return maxNode(this.#root);
  }
}
