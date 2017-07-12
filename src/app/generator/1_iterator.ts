/**
 * @author Noah Sun
 * @email 
 * @create date 2017-07-13 12:10:03
 * @modify date 2017-07-13 12:10:03
 * @desc 使用原生语法实现迭代器（iterator）
*/
interface InterfaceIterator {
    index: number;
    max: number;
    next?: Function;
    [others: string]: any;
}

function IteratorFactory(items: any) {
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