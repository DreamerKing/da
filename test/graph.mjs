import Graph from "../src/graph.mjs";

let g = new Graph(6);
g.addEdge(1, 2);
g.addEdge(2, 5);
g.addEdge(1, 3);
// g.addEdge(2, 4);
g.addEdge(1, 4);
// g.addEdge(0, 4);
g.addEdge(0, 1);
g.vertexList = ["CS1", "CS2","Data Structures","Assembly Language", "Operating Systems", "Algorithms"];
g.showGraph();
g.topSort();
//g.dfs(0);
//console.log()
/* g.bfs(0);
let paths = g.pathTo(4);
console.log(paths);

let p = "";

while (paths.length > 0) {
  if (paths.length > 1) {
    p += paths.pop() + "-";
  } else {
    p += paths.pop();
  }
}

console.log(p); */
