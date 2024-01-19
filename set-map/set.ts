export default class Set<T> {
  #items = [] as T[];
  [Symbol.iterator]() {
    const items = this.#items;
    let index = 0;
    const size = this.size;
    return {
      next: () => {
        return {
          value: items[index++],
          done: index > size,
        };
      },
    };
  }

  has(element: T): boolean {
    return this.#items.includes(element);
  }

  add(data: T) {
    let flag = false;
    if (!this.has(data)) {
      this.#items.push(data);
      flag = true;
    }
    return flag;
  }

  remove(data: T) {
    let flag: boolean = false;
    let pos = this.#items.indexOf(data);
    if (pos > -1) {
      this.#items.splice(pos, 1);
      flag = true;
    }
    return flag;
  }

  clear() {
    this.#items = [];
  }

  contains(data: T) {
    return this.has(data);
  }

  get size() {
    return this.#items.length;
  }

  //并集操作
  union(set: Set<T>) {
    const tempSet = new Set();
    for (const item of this) {
      tempSet.add(item);
    }

    for (const item of set) {
      tempSet.add(item);
    }

    return tempSet;
  }

  //交集操作
  interset(set: Set<T>) {
    const tempSet = new Set();
    for (const item of set) {
      if (this.contains(item)) {
        tempSet.add(item);
      }
    }
    return tempSet;
  }

  // 判断是否是某个集合的子集
  subset(set: Set<T>) {
    if (this.size > set.size) {
      return false;
    } else {
      for (const item of this) {
        if (!set.contains(item)) {
          return false;
        }
      }
      return true;
    }
  }

  // 差集
  differ(set: Set<T>) {
    const tempSet = new Set();
    for (const item of this) {
      if (!set.contains(item)) {
        tempSet.add(item);
      }
    }
    return tempSet;
  }

  toString(splitor = ",") {
    const result: string[] = [];
    for (const item of this) {
      result.push(String(item));
    }
    return result.join(splitor);
  }
}
