/**
 * @author Noah Sun
 * @email 
 * @create date 2017-07-13 05:27:03
 * @modify date 2017-07-13 05:27:03
 * @desc 原生js实现的迭代器（iterator）遍历传入的函数类型的数组参数
*/

// 输出：
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: 4, done: false }
// { value: undefined, done: true }
// tick 1 after 1000 ms
// tick 2 after 1000 ms
// tick 3 after 1000 ms

import { IteratorFactory } from "./1_iterator";

let count = 1;
const tick = (done: Function) => {
    // 执行异步语句
    setTimeout(() => {
        console.log('tick %s after %s ms', count++, 1000);
        // 异步语句结束后继续执行回调函数
        done();
    }, 1000);
}

const run = (iterator: Generator) => {
    // 得到迭代的返回值
    let ret = iterator.next();
    if (ret.done) return;
    // 当迭代器中元素是方法时，明确类型
    let tick: Function = ret.value;
    // 传入回调函数，继续迭代iterator
    tick(() => run(iterator));
}

run(IteratorFactory([tick, tick, tick]));
