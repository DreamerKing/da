class Node<T> {
  left: Node<T> | null = null;
  right: Node<T> | null = null;
  key: T;
  constructor(key: T) {
    this.key = key;
  }
}

function nodeHeight<T>(node: Node<T> | null): number {
  if (node === null) return -1;
  return Math.max(nodeHeight(node.left), nodeHeight(node.right)) + 1;
}
// 右-右 向左单旋
function rotationRR(node) {
  const tmp = node.right;
  node.right = tmp.left;
  tmp.left = node;
  return tmp;
}

// 左-左 向右单旋
function rotationLL(node) {
  const tmp = node.left;
  node.left = tmp.right;
  tmp.right = node;
  return tmp;
}

// 左-右 向右双旋
function rotationLR(node) {
  node.left = rotationRR(node.left);
  return rotationLL(node);
}

// 右-左 向左双旋
function rotationRL(node) {
  node.right = rotationLL(node.right);
  return rotationRR(node);
}

function insertNode<T>(node: Node<T> | null, newNode: Node<T>) {
  if (node === null) {
    node = newNode;
  } else if (newNode.key < node.key) {
    node.left = insertNode(node.left, newNode);
    if (node.left !== null) {
      if (nodeHeight(node.left) - nodeHeight(node.right) > 1) {
        if (newNode.key < node.left.key) {
          node = rotationLL(node);
        } else {
          node = rotationLR(node);
        }
      }
    }
  } else if (newNode.key > node.key) {
    node.right = insertNode(node.right, newNode);

    if (node.right !== null) {
      if (nodeHeight(node.right) - nodeHeight(node.left) > 1) {
        if (newNode.key > node.right.key) {
          node = rotationRR(node);
        } else {
          node = rotationRL(node);
        }
      }
    }
  }
  return node;
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
  if (node === null) return null;
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

function removeNode<T>(node: Node<T> | null, key) {
  if (node === null) return null;
  if (key < node.key) {
    node.left = removeNode(node.left, key);
    return node;
  } else if (key > node.key) {
    node.right = removeNode(node.right, key);
    return node;
  } else {
    // 无子节点
    if (node.left === null && node.right == null) {
      node = null;
      return node;
    }
    // 有右节点无左节点
    if (node.left === null) {
      node = node.right;
      return node;
    }
    // 有左节点无右节点
    if (node.right === null) {
      node = node.left;
      return node;
    }
    // 有左右子节点
    const rightMinNode = minNode(node.right);
    node.key = rightMinNode!.key;
    node.right = removeNode(node.right, rightMinNode!.key);
    return node;
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
    return removeNode(this.#root, key);
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
