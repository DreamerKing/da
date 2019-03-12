export default class Dictionary {
    constructor() {
        this.data = [];
    }

    add(key, value) {
        this.data[key] = value;
    }

    remove(key) {
        delete this.data[key];
    }

    count(){
        // 当key为字符串是length无效
        let n = 0;
        for (let key in Object.keys(this.data)) {
           ++n;
        }
        return n;
    }

    clear() {
      /*   Object.keys(this.data).forEach( key => {
            delete this.data[key]
        }); */
        
        for(let k of Object.keys(this.data)) {
           delete this.data[k];
        }
        
    }

    showAll(){
        Object.keys(this.data).sort().forEach(key => {
            console.log(key, ' -> ', this.data[key]);
        })
    }
};
