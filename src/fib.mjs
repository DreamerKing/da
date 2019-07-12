export function recurFib(n){
    if(n == 1 || n == 2){
        return 1;
    } else {
        return recurFib(n - 1) + recurFib(n - 2);
    }
}

export function dynFib(n){
    let f = [];
    for (let i = 0; i < n; i++) {
        f[i] = 0;  
    }
    if( n == 1 || n == 2){
        return 1;
    } else {
        f[1] = 1;
        f[2] = 1;
        for (let j = 3; j <= n; j++) {
            f[j] = f[j - 1] + f[j - 2]
        }
        return f[n];
    }
}

export function iterFib(n) {
    let last = 1;
    let nextLast = 1;
    let result = 1;
    for (let i = 3; i <= n; i++){
        result = last + nextLast;
        nextLast = last;
        last = result;
    }
    return result;
}