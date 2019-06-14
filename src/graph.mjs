export class Vertex {
    constructor(label, wasVisited) {
        this.label = label;
        this.wasVisited = wasVisited;
    }
};

export default class Graph {
    constructor(v) {
        this.vertices = v;
        this.edges = 0;
        this.adj = [];
        this.marked = [];
        for (let i = 0; i < this.vertices; i++) {
           this.adj[i] = [];
          // this.adj[i].push('');
           this.marked[i] = false;
        }
    }

    dfs(v){
        this.marked[v] = true;
        if(this.adj[v] != undefined){
            console.log("visited vertex: ", v);
            for (const w of this.adj[v]) {
               if(!this.marked[w]){
                   this.dfs(w);
               }
            }
        }
    }

    bfs(s){
        let queue = [];
        this.marked[s] = true;
        queue.push(s);
        while (queue.length > 0) {
            let v = queue.shift();
            if(this.adj[v] !== undefined){
                console.log("Visited vertex: ", v);
            }
            for (let w = 0; w < this.adj[v].length; w++) {
                if(!this.marked[this.adj[v][w]]){
                    this.marked[this.adj[v][w]] = true;
                    queue.push(this.adj[v][w]);
                }
            }
        }
    }

    addEdge(v, w){
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
    }

    showGraph(){
        let ptr = "";
        for (let i = 0; i < this.vertices; i++) {
            ptr += (i + "->")
            for (let j = 0; j < this.vertices; j++) {
               if(this.adj[i][j] != undefined){
                   ptr += (this.adj[i][j] + ' ');
               } 
            }
            ptr += "\n";
        }
        console.log(ptr);
    }
};
