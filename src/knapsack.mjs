function max(a, b){
    return a > b ? a : b;
}

export default function knapsack(capacity, size, value, n){
    if(n == 0 || capacity == 0){
        return 0;
    } else {
        if(size[n - 1] > capacity){
            return knapsack(capacity, size, value, n - 1)
        } else {
            return max((value[n - 1] + knapsack((capacity - size[n - 1]),size, value, (n - 1)),knapsack(capacity, size, value, n - 1)));
        }
    }
}

export function dKnapsack(capacity, size, value, n){
    let K = [];
    for (let i = 0; i < capacity + 1; i++) {
        K[i] = [];     
    }
    
    for (let i = 0; i <= n ; i++) {
        let temp = ''
        for (let w = 0; w <= capacity; w++) {
            if(i == 0 || w == 0){
                K[i][w] = 0;
            } else if(size[i - 1] <= w){
                K[i][w] = max(value[i - 1] + K[i - 1][w - size[i - 1]],K[i - 1][w]);
            } else {
                K[i][w] = K[i - 1][w];
            }

            temp += K[i][w] + " ";
        }
        console.log(temp);
    }
    return K[n][capacity];
}