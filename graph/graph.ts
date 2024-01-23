import Queue from "../queue/index.ts";
import Stack from "../stack/index.ts";

export default class Graph {
  #vertices = new Set<string>();
  #adjList = new Map();

  addVertex(v: string) {
    this.#vertices.add(v);
    this.#adjList.set(v, new Set());
  }
  addEdge(v, w) {
    this.#adjList.get(v).add(w);
    this.#adjList.get(w).add(v);
  }

  get root() {
    return [...this.#vertices.values()][0];
  }

  bfs(v, cb) {
    const colors = this.initColor();
    const queue = new Queue();
    queue.enqueue(v);
    while (!queue.isEmpty()) {
      const u = queue.dequeue();
      const neighors = this.#adjList.get(u);
      colors.set(u, "gray");
      for (const w of neighors) {
        if (colors.get(w) === "white") {
          colors.set(w, "gray");
          queue.enqueue(w);
        }
      }
      colors.set(u, "black");
      cb && cb(u);
    }
  }

  bfs2(v) {
    const colors = this.initColor();
    const q = new Queue();
    const d = new Map();
    const pred = new Map();
    q.enqueue(v);
    for (const v of this.#vertices) {
      d.set(v, 0);
      pred.set(v, null);
    }

    while (!q.isEmpty()) {
      const u = q.dequeue();
      const neighors = this.#adjList.get(u);
      colors.set(u, "gray");
      for (const w of neighors) {
        if (colors.get(w) === "white") {
          colors.set(w, "gray");
          d.set(w, d.get(u) + 1);
          pred.set(w, u);
          q.enqueue(w);
        }
      }
      colors.set(u, "black");
    }
    return {
      distances: d,
      predecessors: pred,
    };
  }

  generatePath(v) {
    let fromVertex = v;
    const shortestPath = this.bfs2(this.root);

    for (const u of this.#adjList.get(v)) {
      const path = new Stack<string>();

      for (let v = u; v !== fromVertex; v = shortestPath.predecessors.get(v)) {
        path.push(v);
      }

      path.push(fromVertex);

      let str = path.pop()!;
      while (!path.isEmpty()) {
        str += " - " + path.pop();
      }
      console.log(str);
    }
    // return str;
  }

  initColor() {
    const colors = new Map();
    for (const v of this.#vertices) {
      colors.set(v, "white");
    }
    return colors;
  }

  toString() {
    let str = "";
    for (const v of this.#vertices) {
      str += v + " :> ";
      for (const neiberhor of this.#adjList.get(v)) {
        str += neiberhor + " ";
      }
      str += "\n";
    }
    return str;
  }
}

const graph = new Graph();
const vertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
for (const v of vertices) {
  graph.addVertex(v);
}

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");
graph.addEdge("D", "G");
graph.addEdge("D", "H");

console.log(graph.toString());
graph.bfs(graph.root, (n) => {
  console.log(n);
});

console.log(graph.bfs2(graph.root));
console.log(graph.generatePath(graph.root));
