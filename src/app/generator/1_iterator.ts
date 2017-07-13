/**
 * @author Noah Sun
 * @email 
 * @create date 2017-07-13 12:10:03
 * @modify date 2017-07-13 12:10:03
 * @desc 使用原生语法实现迭代器（iterator）
*/

// 输出：
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: 4, done: false }
// { value: undefined, done: true }

interface InterfaceIterator {
    index: number;
    max: number;
    next?: Function;
    [others: string]: any;
}

// 为什么要用一个export？因为在下面我定义了一个与1_iterator.ts中一样的ret变量，
// 在ts看来没有使用import和export的文件所有定义的变量都是全局变量。
export function IteratorFactory(items: any) {
    let iterator: InterfaceIterator = {
        index: 0,
        max: items.length
    };

    iterator.next = function () {
        return this.index === this.max
            ? { value: undefined, done: true }
            : { value: items[this.index++], done: false };
    };

    return iterator;
}

let ret,
    iterator = IteratorFactory([1, 2, 3, 4]);

do {
    ret = iterator.next();
    console.log(ret)
} while (!ret.done);