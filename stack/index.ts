export default class Stack<T> {
  items: T[];
  constructor() {
    this.items = [] as T[];
  }

  get size(): number {
    return this.items.length;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  push(element: T): void;
  push(elements: T[]): void;
  push(element: T | T[]) {
    if (Array.isArray(element)) {
      this.items.push(...element);
    } else {
      this.items.push(element);
    }
  }

  peek() {
    if (this.size > 0) {
      return this.items[this.size - 1];
    } else {
      return;
    }
  }

  clear() {
    this.items.length = 0;
  }

  toString(seperate = ",") {
    return this.items.map((item) => String(item)).join(seperate);
  }
}
