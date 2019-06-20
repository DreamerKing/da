export class Vertex {
  constructor(label, wasVisited) {
    this.label = label;
    this.wasVisited = wasVisited;
  }
}

export default class Graph {
  constructor(v) {
    this.vertices = v;
    this.vertexList = [];
    this.edges = 0;
    this.adj = [];
    this.marked = [];
    this.edgeTo = [];
    for (let i = 0; i < this.vertices; i++) {
      this.adj[i] = [];
      // this.adj[i].push('');
      this.marked[i] = false;
    }
  }

  pathTo(v) {
    let source = 0;
    if (!this.hasPathTo(v)) {
      return undefined;
    }
    let path = [];
    for (let i = v; i != source; i = this.edgeTo[i]) {
      path.push(i);
    }
    path.push(source);
    return path;
  }

  hasPathTo(v) {
    return this.marked[v];
  }

  dfs(v) {
    this.marked[v] = true;
    if (this.adj[v] != undefined) {
      console.log("visited vertex: ", v);
      for (const w of this.adj[v]) {
        if (!this.marked[w]) {
          this.dfs(w);
        }
      }
    }
  }

  bfs(s) {
    let queue = [];
    this.marked[s] = true;
    queue.push(s);
    while (queue.length > 0) {
      let v = queue.shift();
      if (this.adj[v] !== undefined) {
        console.log("Visited vertex: ", v);
      }
      for (let w = 0; w < this.adj[v].length; w++) {
        if (!this.marked[this.adj[v][w]]) {
          this.edgeTo[this.adj[v][w]] = v;
          this.marked[this.adj[v][w]] = true;
          queue.push(this.adj[v][w]);
        }
      }
    }
  }

  addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
  }

  /* showGraph() {
    let ptr = "";
    for (let i = 0; i < this.vertices; i++) {
      ptr += i + "->";
      for (let j = 0; j < this.vertices; j++) {
        if (this.adj[i][j] != undefined) {
          ptr += this.adj[i][j] + " ";
        }
      }
      ptr += "\n";
    }
    console.log(ptr);
  } */

  showGraph() {
    let visited = [];
    let ptr = "";
    for (let i = 0; i < this.vertices; i++) {
      ptr += this.vertexList[i] + "->";
      visited.push(this.vertexList[i]);
      for (let j = 0; j < this.vertices; j++) {
        if (this.adj[i][j] != undefined) {
          if (visited.indexOf(this.vertexList[j]) < 0) {
            ptr += this.adj[i][j] + " ";
          }
        }
      }
      ptr += "\n";
      visited.pop();
    }
    console.log(ptr);
  }

  topSort() {
    let stack = [];
    let visited = [];
    for (let i = 0; i < this.vertices; i++) {
      visited[i] = false;
    }

    for (let i = 0; i < stack.length; i++) {
      if (visited[i] == false) {
        this.topSortHelper(i, visited, stack);
      }
    }

    for (let i = 0; i < stack.length; i++) {
      if (stack[i] != undefined && stack[i] != false) {
        console.log(this.vertexList[stack[i]]);
      }
    }
  }

  topSortHelper(v, visited, stack) {
    visited[v] = true;
    for (let i = 0; i < this.adj[v]; i++) {
      if (!visited[w]) {
        this.topSortHelper(visited[w], visited, stack);
      }
    }
    stack.push(v);
  }
}
