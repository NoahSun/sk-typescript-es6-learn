/**
 * @author Noah Sun
 * @email 
 * @create date 2017-07-13 12:42:24
 * @modify date 2017-07-13 12:42:24
 * @desc 使用ES6的generator语法
*/

// 输出：
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: 4, done: false }
// { value: undefined, done: true }

export function* GeneratorFn(items: any[]): Generator {
    let index = 0;
    const max = items.length;
    while (index < max) {
        yield items[index++];
    }
}

let ret;
const generator = GeneratorFn([1, 2, 3, 4]);

do {
    ret = generator.next();
    console.log(ret);
} while (!ret.done);
