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
        for (let i = 0; i < this.vertices; i++) {
           this.adj[i] = [];
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
