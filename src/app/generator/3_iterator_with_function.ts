/**
 * @author Noah Sun
 * @email 
 * @create date 2017-07-13 05:27:03
 * @modify date 2017-07-13 05:27:03
 * @desc 原生js实现的迭代器（iterator）遍历传入的函数类型的数组参数
*/

// 输出：
// tick 1 after 1000 ms
// tick 2 after 1000 ms
// tick 3 after 1000 ms

// import { IteratorFactory } from "./1_iterator"; //效果不同，引入此文件的方法的同时会执行此文件中的语句，也就是会出现之前的打印信息
// 为了避免干扰结果，重新定义了一次IteratorFactory
const IteratorFactory = (items: any[]) => {
    let index = 0,
        max = items.length;

    return {
        next: () => index === max
            ? { value: undefined, done: true }
            : { value: items[index++], done: false }
    };
}

let count = 1;
const tick = (done: Function) => {
    // 执行异步语句
    setTimeout(() => {
        console.log('tick %s after %s ms', count++, 1000);
        // 异步语句结束后继续执行回调函数
        done();
    }, 1000);
}

export const run = (iterator: Generator) => {
    // 得到迭代的返回值
    let ret = iterator.next();
    if (ret.done) return;
    // 当迭代器中元素是方法时，明确类型
    let tick: Function = ret.value;
    // 传入回调函数，继续迭代iterator
    tick(() => run(iterator));
}

run(IteratorFactory([tick, tick, tick]));
