export default class Set {
    constructor() {
        this.dataStore = [];
    }

    add(data){
        if(!this.dataStore.includes(data)){
            this.dataStore.push(data);
            return true;
        } else {
            return false;
        }
    }

    remove(data){
        let pos = this.dataStore.indexOf(data);
        if(pos > -1){
            this.dataStore.splice(pos, 1);
            return true;
        } else {
            return false;
        }
    }

    contains(data){
        return this.dataStore.includes(data);
    }

    get size(){
        return this.dataStore.length;
    }

    //并集操作
    union(set){
        let tempSet = new Set();
        for (let i = 0, len = this.dataStore.length ; i < len; i++) {
            tempSet.add(this.dataStore[i]);
        }
        for (let j = 0, len = set.dataStore.length; j < len; j++) {
            if(!this.contains(set.dataStore[j])){
                tempSet.add(set.dataStore[j]);
            }
        }
        return tempSet;
    }

    //交集操作
    interset(set){
        let tempSet = new Set();
        for (let i = 0, len = this.dataStore.length; i < len; i++) {
            if(set.contains(this.dataStore[i])){
                tempSet.add(this.dataStore[i]);
            }
        }
        return tempSet;
    }

    // 判断是否是某个集合的子集
    subset(set){
        if(this.size > set.size){
            return false;
        } else {
            for(let i = 0, len = this.size; i < len; i++){
                if(!set.contains(this.dataStore[i])){
                    return false;
                }
            }
            return true;
        }
    }

    // 差集
    differrence(set){
        let tempSet = new Set();
        for(let i = 0, len = this.size; i < len; i++){
            if(!set.contains(this.dataStore[i])){
                tempSet.add(this.dataStore[i]);
            }
        }
        return tempSet;
    }

    show(){
        return this.dataStore;
    }
    
}