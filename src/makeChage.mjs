export default function makeChange(origin){
    let result = {};
    let parValue = [100, 50, 20, 10, 5, 1];
    for (let i = 0, len = parValue.length; i < len; i++) {
        if (origin >= parValue[i]) {
            result[parValue[i]] = Number.parseInt(origin / parValue[i]);
            origin %= parValue[i];
        }
    } 
    return result;
}