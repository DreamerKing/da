export default function(values, weights, capacity){
    let i = 0;
    let load = 0;
    let w = 0;
    let len = Math.min(values.length, weights.length);
    while (load < capacity & i < len) {
       if(weights[i] <= (capacity - load)){
           w += values[i]
           load += weights[i];
       } else {
           let r = (capacity - load)/weights[i];
           w += r * values[i];
           load += weights[i]
       }
       ++i;
    }
    return w;
}