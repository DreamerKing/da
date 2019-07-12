export default function lcs(w1, w2){
    let max = 0;
    let index = 0;
    let l1 = w1.length + 1; 
    let l2 = w2.length + 1;
    let lc = new Array(l1);
    for (let i = 0; i <= l1; i++) {
        lc[i] = new Array(l2);
        for (let j = 0; j <= l2; j++) {
            lc[i][j] = 0;
        }
    }

    for (let i = 0; i < l1; i++) {
        for (let j = 0; j < l2; j++) {
            // lc[i][j] 存放到当前位置的公共长度
           if(i == 0 || j == 0){
               lc[i][j] = 0;
           } else {
               if(w1[i] == w2[j]){
                   lc[i][j] = lc[i - 1][j - 1] + 1;
               } else {
                   lc[i][j] = 0;
               }
           }
           if(max < lc[i][j]){
               max = lc[i][j];
               index = i;
           }
        }  
    }
    let maxStr = '';
    if(max = 0){
        return '';
    } else {
        for (let i = index - max; i <= max ; i++){
            maxStr += w2[i];        
        }
    return maxStr;
    }
}