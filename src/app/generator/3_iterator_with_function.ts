/**
 * @author Noah Sun
 * @email 
 * @create date 2017-07-13 05:27:03
 * @modify date 2017-07-13 05:27:03
 * @desc 原生js实现的迭代器（iterator）遍历传入的函数类型的数组参数
*/

import { IteratorFactory } from "./1_iterator";

interface InterfaceTickFunction<T> extends IterableIterator<T> {
    (fn: Function): void;
}

const run = <T>(iterator: IterableIterator<Function>): Iterable<T> => {
    let ret = iterator.next();
    if (ret.done) return;
    let tick: Function = ret.value;
    tick(() => run(iterator));
}

let count = 1;
const tick = (done: Function) => {
    setTimeout(() => {
        console.log('tick %s after %s ms', count++, 1000);
        done();
    }, 1000);
}

run(IteratorFactory([tick, tick]))