import Graph from '../src/graph.mjs';

let g = new Graph(5);
g.addEdge(0, 1);
// g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.addEdge(2, 3);
g.addEdge(0, 4);
g.addEdge(4, 3);
g.showGraph();
g.dfs(0);
console.log()
// g.bfs(0);
