export default class Queue<T> {
  #items: T[];
  constructor() {
    this.#items = [];
  }

  enqueue(element: T) {
    this.#items.push(element);
  }

  dequeue() {
    return this.#items.shift();
  }

  front(): T {
    return this.#items[0];
  }

  clear() {
    this.#items.length = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  get size() {
    return this.#items.length;
  }

  toString(seperate = ",") {
    return this.#items.map((item) => String(item)).join(seperate);
  }
}
