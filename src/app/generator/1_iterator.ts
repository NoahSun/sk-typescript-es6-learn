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

// 为什么要用一个export？因为在下面我定义了一个与1_iterator.ts中一样的ret变量，
// 在ts看来没有使用import和export的文件所有定义的变量都是全局变量。

interface MyIteratorResult<T> {
    value: any;
    done: boolean;
}
interface MyIterator<T> {
    next(value?: any): MyIteratorResult<T>;
    return?(value?: any): MyIteratorResult<T>;
    throw?(e?: any): MyIteratorResult<T>;
}
interface MyGenerator extends MyIterator<any> { }

export function IteratorFactory(items: any[]): MyGenerator {
    let index = 0;
    const max = items.length;

    return {
        next: () => index === max
            ? { value: undefined, done: true }
            : { value: items[index++], done: false }
    };
}

let ret;
const iterator = IteratorFactory([1, 2, 3, 4]);

do {
    ret = iterator.next();
    console.log(ret);
} while (!ret.done);
