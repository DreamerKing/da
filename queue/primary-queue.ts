class PrimorityQueueElement<T> {
  value: T;
  primority: number;
  constructor(element: T, primority: number) {
    this.value = element;
    this.primority = primority;
  }
}

export default class PrimorityQueue<T> {
  items: PrimorityQueueElement<T>[];
  constructor() {
    this.items = [];
  }

  enqueue(element: T, primority: number) {
    let qel = new PrimorityQueueElement(element, primority);
    if (this.size == 0) {
      this.items.push(qel);
    } else {
      let index = 0;
      while (this.items[index].primority <= primority) {
        index++;
      }
      this.items.splice(index, 0, qel);
    }
  }

  dequeue() {
    return this.items.shift()?.value;
  }

  get size() {
    return this.items.length;
  }

  toString(seperate = " > ") {
    return this.items.map(({ value }) => String(value)).join(seperate);
  }
}
