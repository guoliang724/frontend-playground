const PENDING = "pending";
const FULFILLED = "fullfilled";
const REJECT = "reject";

class MyPromise {
    status: string; 
    value: any;
    reason: any;
    constructor(excutor) { 
        this.status = PENDING;
        this.value = null;
        this.reason = null;
        try {
            excutor(this.resolve, this.reject)
        }
        catch (e) { 
            this.reject(e);
        }
        
    }
    resolve(value) { 
        this.status = FULFILLED;
        this.value = value;
    };

    reject(reason) { 
        this.status = REJECT;
        this.reason = reason;
    };

    then(onSuccess, onFail) { 
        if (this.status === FULFILLED) { 
            onSuccess(this.value);
        }
        if (this.status === REJECT) { 
            onFail(this.reason);
        }
    }
}


const pro1 = new MyPromise((resolve, reject) => {
    resolve(1);
});



const fs = require("fs");

// 将方法promise, 并且链式调用
// 1.将方法递归；
// 2.如果是返回值，相当于传递到下一次的then的成功
// 3.如果返回的是失败的promise，或者报错了，会走到下一层then的失败中

// 如何实现链式调用
// return new Promise();
function readFile(...args) { 
    return new Promise((resolve, reject) => { 
          
    })
}