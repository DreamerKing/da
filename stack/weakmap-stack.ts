export default (function Stack() {
  const items = new WeakMap();

  return class<T> {
    constructor() {
      items.set(this, []);
    }
    get size(): number {
      return items.get(this).length;
    }

    isEmpty(): boolean {
      return this.size === 0;
    }

    pop(): T | undefined {
      return items.get(this).pop();
    }

    push(element: T): void;
    push(elements: T[]): void;
    push(element: T | T[]) {
      const self = items.get(this);
      if (Array.isArray(element)) {
        self.push(...element);
      } else {
        self.push(element);
      }
    }

    peek() {
      if (this.size > 0) {
        return items.get(this)[this.size - 1];
      } else {
        return;
      }
    }

    clear() {
      items.get(this).length = 0;
    }

    toString(seperate = ",") {
      return items.get(this).map((item) => String(item)).join(seperate);
    }
  };
}());
